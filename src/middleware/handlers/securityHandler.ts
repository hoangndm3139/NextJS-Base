import { NextRequest, NextResponse } from "next/server";
import { generateNonce, generateCSPHeader } from "../utils/helpers";

export function handleSecurity(request: NextRequest): NextResponse {
  const nonce = generateNonce();
  const cspHeader = generateCSPHeader(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set response headers
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}
