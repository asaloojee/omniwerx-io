import type { APIRoute } from 'astro';

// Check if survey is enabled at build time
const SURVEY_ENABLED = import.meta.env.SURVEY_ENABLED === true;

/**
 * Constant-time string comparison to prevent timing attacks.
 * Compares two strings in a way that takes the same amount of time
 * regardless of how many characters match.
 */
function constantTimeCompare(a: string, b: string): boolean {
  // If lengths differ, still iterate to prevent timing leak
  const aLen = a.length;
  const bLen = b.length;
  let mismatch = aLen !== bLen ? 1 : 0;

  // Always compare up to the length of the longer string
  const maxLen = Math.max(aLen, bLen);
  for (let i = 0; i < maxLen; i++) {
    const aChar = i < aLen ? a.charCodeAt(i) : 0;
    const bChar = i < bLen ? b.charCodeAt(i) : 0;
    mismatch |= aChar ^ bChar;
  }

  return mismatch === 0;
}

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
    console.error('[Survey Auth] Runtime configuration error');
    return new Response(JSON.stringify({ success: false, error: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const SURVEY_PASSWORD = runtime.env.SURVEY_PASSWORD;

  if (!SURVEY_PASSWORD) {
    console.error('[Survey Auth] SURVEY_PASSWORD not configured');
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

    if (!password || typeof password !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'Password required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate password using constant-time comparison to prevent timing attacks
    if (!constantTimeCompare(password, SURVEY_PASSWORD)) {
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
