export const config = {
  matcher: [
    '/',
    '/blog',
    '/blog/:path*',
  ],
};

export default function middleware(request) {
  const accept = (request.headers.get('accept') || '').toLowerCase();
  if (accept.includes('text/markdown') && !accept.includes('text/html')) {
    const dest = new URL('/home-agent.md', request.url);
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': dest.toString(),
        Vary: 'Accept',
      },
    });
  }

  return new Response(null, {
    headers: {
      'x-middleware-next': '1',
    },
  });
}
