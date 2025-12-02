import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const SURVEY_ENABLED = import.meta.env.SURVEY_ENABLED === true;

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  // Return 404 if survey is disabled
  if (!SURVEY_ENABLED) {
    return new Response(JSON.stringify({ success: false, error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check authentication
  const authCookie = cookies.get('survey_auth');

  if (!authCookie || authCookie.value !== 'authenticated') {
    return new Response(
      JSON.stringify({ success: false, error: 'Unauthorized' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const runtime = locals.runtime;

  if (!runtime || !runtime.env) {
    return new Response(
      JSON.stringify({ success: false, error: 'Server configuration error' }),
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
      JSON.stringify({ success: false, error: 'Email service not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const data = await request.json();
    const { name, email, responses } = data;

    // Validate required fields
    if (!name || !email || !responses) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Format responses for email
    const responsesList = Object.entries(responses)
      .map(([questionId, answer]) => {
        const question = questionId.replace('q', 'Question ');
        return `<li><strong>${question}:</strong><br/>${answer}</li>`;
      })
      .join('');

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send submission email
    const result = await resend.emails.send({
      from: fromEmail,
      to: 'info@omniwerx.io',
      replyTo: email,
      subject: `Survey Response from ${name}`,
      html: `
        <h2>New Survey Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Responses:</h3>
        <ul>${responsesList}</ul>
      `,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send submission' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send thank you email to respondent
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for your survey response',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your survey responses and appreciate you taking the time to share your feedback.</p>
        <p>We'll be in touch soon.</p>
        <p>Best regards,<br/>OMNIWERX Team</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Survey submitted successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Survey submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Submission failed' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
