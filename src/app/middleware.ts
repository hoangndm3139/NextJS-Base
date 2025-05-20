import { verifyJwtToken } from "@/helpers/verifyToken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Decode the JWT token and verify it
  const payload = (await verifyJwtToken(token)) as {
    id?: string;
    role?: string;
    email?: string;
  } | null;

  const { pathname } = request.nextUrl;
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (!payload && !isPublicPath) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  if (payload && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Generate a nonce for the CSP header
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  /// Set the Content-Security-Policy header
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  // Remove extra spaces from the CSP header value
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(request.headers);

  // Set the nonce in the request headers to allow inline scripts and styles
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

  // Set custom headers to pass user information to the components
  response.headers.set("x-user-id", payload?.id ?? "");
  response.headers.set("x-user-role", payload?.role ?? "");
  response.headers.set("x-user-email", payload?.email ?? "");

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
