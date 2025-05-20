import * as jose from "jose";

const secret = process.env.JWT_SECRET || "secret";

export async function verifyJwtToken(token: string = "") {
  try {
    const verified = await jose.jwtVerify(token, new TextEncoder().encode(secret));
    return verified.payload;
  } catch {
    return null;
  }
}
