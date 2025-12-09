import type { APIRoute } from 'astro';

// Check if survey is enabled at build time
const SURVEY_ENABLED = import.meta.env.SURVEY_ENABLED === true;

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  // Return 404 if survey is disabled
  if (!SURVEY_ENABLED) {
    return new Response(JSON.stringify({ success: false, error: 'Not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const runtime = locals.runtime;

  if (!runtime || !runtime.env) {
    return new Response(JSON.stringify({ success: false, error: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const SURVEY_PASSWORD = runtime.env.SURVEY_PASSWORD;

  if (!SURVEY_PASSWORD) {
    return new Response(
      JSON.stringify({ success: false, error: 'Survey password not configured.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  try {
    const data = await request.json();
    const { password } = data;

    if (!password) {
      return new Response(JSON.stringify({ success: false, error: 'Password required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate password
    if (password !== SURVEY_PASSWORD) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid password.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Set HTTP-only cookie (valid for 4 hours)
    cookies.set('survey_auth', 'authenticated', {
      httpOnly: true,
      secure: import.meta.env.PROD, // true in production (HTTPS), false in dev (HTTP)
      sameSite: 'strict',
      maxAge: 60 * 60 * 4, // 4 hours
      path: '/',
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Survey auth error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Authentication failed.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
