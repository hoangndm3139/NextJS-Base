import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/helpers/verifyToken";
import { UserPayload } from "../utils/helpers";

export async function handleAuth(request: NextRequest, response: NextResponse): Promise<NextResponse | undefined> {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    // If no token is found, return the response without user headers
    return response;
  }
  console.log("middleware: auth token found");
  // Verify the JWT token and extract user payload
  const payload = (await verifyJwtToken(token)) as UserPayload;

  if (payload) {
    // If the token is valid, set user headers in the response to use throughout the application
    setUserHeaders(response, payload);
  }

  return response;
}

function setUserHeaders(response: NextResponse, payload: UserPayload): void {
  response.headers.set("x-user-id", payload?.id ?? "");
  response.headers.set("x-user-role", payload?.role ?? "");
  response.headers.set("x-user-email", payload?.email ?? "");
}
