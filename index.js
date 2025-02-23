addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'GET') {
    return Response.redirect('https://www.mikekeen.com', 301);
  }

  return new Response('Method Not Allowed', { status: 405 });
}
