import { NextRequest, NextResponse } from "next/server";
import { generateNonce, generateCSPHeader } from "../utils/helpers";

export function handleSecurity(request: NextRequest, response: NextResponse): void {
  const nonce = generateNonce();
  const cspHeader = generateCSPHeader(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  // Update the request headers
  Object.defineProperty(request, "headers", {
    value: requestHeaders,
    writable: true,
  });

  // Set response headers
  response.headers.set("Content-Security-Policy", cspHeader);
}
