import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import he from 'he';
import { surveyQuestions } from '../../data/survey-questions';

const SURVEY_ENABLED = import.meta.env.SURVEY_ENABLED === true;

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  // Return 404 if survey is disabled
  if (!SURVEY_ENABLED) {
    return new Response(JSON.stringify({ success: false, error: 'Not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check authentication
  const authCookie = cookies.get('survey_auth');

  if (!authCookie || authCookie.value !== 'authenticated') {
    return new Response(
      JSON.stringify({ success: false, error: 'Unauthorized.' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const runtime = locals.runtime;

  if (!runtime || !runtime.env) {
    return new Response(
      JSON.stringify({ success: false, error: 'Server configuration error.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const apiKey = runtime.env.RESEND_API_KEY;
  const fromEmail = runtime.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return new Response(
      JSON.stringify({ success: false, error: 'Email service not configured.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const data = await request.json();
    const { name, email, responses }: {
      name: string;
      email: string;
      responses: Record<string, string>;
    } = data;

    // Validate required fields
    if (!name || !email || !responses) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields required.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate max lengths to prevent large payloads
    if (name.length > 200 || email.length > 200) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name or email too long.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate response lengths
    for (const answer of Object.values(responses)) {
      if (typeof answer !== 'string' || answer.length > 5000) {
        return new Response(
          JSON.stringify({ success: false, error: 'Response too long.' }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // Create question map for looking up actual question text
    const questionMap = Object.fromEntries(
      surveyQuestions.map(q => [q.id, q.question])
    );

    // Format responses for email (with HTML escaping)
    const responsesList = Object.entries(responses)
      .map(([questionId, answer]) => {
        const questionText = questionMap[questionId] || questionId;
        return `<li><strong>${he.escape(questionText)}</strong><br/>${he.escape(answer)}</li>`;
      })
      .join('');

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send submission email
    const result = await resend.emails.send({
      from: fromEmail,
      to: 'info@omniwerx.io',
      replyTo: email,
      subject: `Survey Response from ${he.escape(name)}`,
      html: `
        <h2>New Survey Submission</h2>
        <p><strong>Name:</strong> ${he.escape(name)}</p>
        <p><strong>Email:</strong> ${he.escape(email)}</p>
        <h3>Responses:</h3>
        <ul>${responsesList}</ul>
      `,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send submission.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send thank you email to respondent
    const thankYouResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for your survey response',
      html: `
        <h2>Thank you, ${he.escape(name)}!</h2>
        <p>We've received your survey responses and appreciate you taking the time to share your feedback.</p>
        <p>We'll be in touch soon.</p>
        <p>Best regards,<br/>OMNIWERX Team</p>
      `,
    });

    // Log if thank you email fails (but don't fail the request since main email succeeded)
    if (thankYouResult.error) {
      console.error('Failed to send thank you email:', thankYouResult.error);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Survey submitted successfully.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Survey submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Submission failed.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
