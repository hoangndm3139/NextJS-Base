import type { NextRequest } from "next/server";
import { handleAuth } from "@/middleware/handlers/authHandler";
import { handleLocale } from "@/middleware/handlers/localeHandler";
import { handleSecurity } from "@/middleware/handlers/securityHandler";
import { MATCHER_CONFIG } from "@/middleware/utils/constants";

export async function middleware(request: NextRequest) {
  // Handle locale redirection
  console.log("========================================middleware: hdhdh");
  const localeResponse = await handleLocale(request);
  if (localeResponse) return localeResponse;
  console.log("middleware: locale handled");

  // Handle security headers
  const response = handleSecurity(request);
  console.log("middleware: security handled");

  // Handle authentication
  return await handleAuth(request, response);
}

// Export the matcher configuration
export const config = MATCHER_CONFIG;
