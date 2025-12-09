import type { APIRoute } from 'astro';
import { surveyQuestions } from '../../data/survey-questions';

const SURVEY_ENABLED = import.meta.env.SURVEY_ENABLED === true;

export const GET: APIRoute = async ({ cookies }) => {
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

  // Return questions
  return new Response(
    JSON.stringify({ success: true, questions: surveyQuestions }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
