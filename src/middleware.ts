import { NextResponse, type NextRequest } from "next/server";
import { handleAuth } from "@/middleware/handlers/authHandler";
import { handleLocale } from "@/middleware/handlers/localeHandler";
import { handleSecurity } from "@/middleware/handlers/securityHandler";

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  // Handle locale redirection
  const localeResponse = await handleLocale(request);
  if (localeResponse) return localeResponse;
  let response = NextResponse.next();
  // Handle security headers
  if (process.env.NODE_ENV !== "development") {
    response = handleSecurity(request);
  }
  // Handle authentication
  return await handleAuth(request, response);
}

// Export the matcher configuration
export const config = {
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
