import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwtToken } from "@/helpers/verifyToken";
import { handleAuth } from "./handlers/authHandler";
import { setUserHeaders } from "./handlers/authHandler";
import { handleLocale } from "./handlers/localeHandler";
import { handleSecurity } from "./handlers/securityHandler";
import { MATCHER_CONFIG } from "./utils/constants";
import type { UserPayload } from "./utils/helpers";

export async function middleware(request: NextRequest) {
  // Handle locale redirection
  const localeResponse = await handleLocale(request);
  if (localeResponse) return localeResponse;

  // Handle authentication
  const authResponse = await handleAuth(request);
  if (authResponse) return authResponse;

  // Create the base response
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Handle security headers
  handleSecurity(request, response);

  // Set user headers if authenticated
  const token = request.cookies.get("token")?.value;
  const payload = (await verifyJwtToken(token)) as UserPayload;
  if (payload) {
    setUserHeaders(response, payload);
  }

  return response;
}

// Export the matcher configuration
export const config = MATCHER_CONFIG;
