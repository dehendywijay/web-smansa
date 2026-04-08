import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function withCors(request: NextRequest, response?: NextResponse | Response) {
  const origin = request.headers.get('origin') || '*';

  
  const res = response ?? NextResponse.next();

  res.headers.set('Access-Control-Allow-Origin', origin);
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  res.headers.set('Access-Control-Max-Age', '86400');

  return res;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  if (request.method === 'OPTIONS') {
    const preflightResponse = new Response(null, { status: 200 });
    return withCors(request, preflightResponse);
  }


  if (pathname.startsWith('/api/news')) {
    return withCors(request);
  }
  
}
