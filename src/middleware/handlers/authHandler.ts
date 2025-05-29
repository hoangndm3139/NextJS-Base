import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/helpers/verifyToken";
import { UserPayload } from "../utils/helpers";

export async function handleAuth(request: NextRequest, response: NextResponse): Promise<NextResponse | undefined> {
  const token = request.cookies.get("token")?.value;
  const payload = (await verifyJwtToken(token)) as UserPayload;

  if (payload) {
    setUserHeaders(response, payload);
  }

  return response;
}

function setUserHeaders(response: NextResponse, payload: UserPayload): void {
  response.headers.set("x-user-id", payload?.id ?? "");
  response.headers.set("x-user-role", payload?.role ?? "");
  response.headers.set("x-user-email", payload?.email ?? "");
}
