export const PUBLIC_PATHS = ["/login", "/register"];

export const MATCHER_CONFIG = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, public (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
