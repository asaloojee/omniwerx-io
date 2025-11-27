import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request, locals }) => {
  // Access Cloudflare runtime environment variables
  const runtime = locals.runtime as { env: { RESEND_API_KEY: string; RESEND_FROM_EMAIL: string } };
  const apiKey = runtime.env.RESEND_API_KEY;
  const fromEmail = runtime.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Required environment variables are not configured');
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server configuration error. Please contact the administrator.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Parse form data
    const data = await request.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'All fields are required.'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please provide a valid email address.'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email via Resend
    const result = await resend.emails.send({
      from: fromEmail,
      to: 'info@omniwerx.io',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Check for errors in Resend response
    if (result.error) {
      console.error('Resend API error:', result.error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send message. Please try again or email us directly.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected error occurred. Please try again or email us directly at info@omniwerx.io.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
