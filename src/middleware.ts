import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const link = request.nextUrl.searchParams.get('link');

  if (link) {
    return NextResponse.redirect(new URL(`/done?link=${link}`, request.url));
  }
}

export const config = {
  matcher: '/open/:path*',
};
