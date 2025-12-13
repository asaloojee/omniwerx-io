import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // If the response is a 404, serve the custom 404 page with proper status
  if (response.status === 404) {
    // Rewrite to the 404 page but preserve the 404 status
    const notFoundResponse = await context.rewrite('/404');

    // Ensure the status is 404 (rewrite might return 200)
    return new Response(notFoundResponse.body, {
      status: 404,
      statusText: 'Not Found',
      headers: notFoundResponse.headers,
    });
  }

  return response;
});
