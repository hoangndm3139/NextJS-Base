import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { handleAuth } from "./handlers/authHandler";
import { handleLocale } from "./handlers/localeHandler";
import { handleSecurity } from "./handlers/securityHandler";
import { MATCHER_CONFIG } from "./utils/constants";

export async function middleware(request: NextRequest) {
  // Handle locale redirection
  const localeResponse = await handleLocale(request);
  if (localeResponse) return localeResponse;

  // Create the base response
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Handle security headers
  handleSecurity(request, response);

  // Handle authentication
  return await handleAuth(request, response);
}

// Export the matcher configuration
export const config = MATCHER_CONFIG;
