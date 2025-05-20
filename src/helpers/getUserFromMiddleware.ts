import { headers } from "next/headers";

export async function getUserFromMiddleware() {
  const _headers = await headers();

  const id = _headers.get("x-user-id");
  const role = _headers.get("x-user-role");
  const email = _headers.get("x-user-email");

  return {
    id,
    role,
    email,
  };
}
