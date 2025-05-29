import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/helpers/verifyToken";
import { getLocaleFromPathname, getPathnameWithoutLocale, isPublicPath, UserPayload } from "../utils/helpers";

export async function handleAuth(request: NextRequest): Promise<NextResponse | undefined> {
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromPathname(pathname);
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname, locale);
  const isPublic = isPublicPath(pathnameWithoutLocale);

  const token = request.cookies.get("token")?.value;
  const payload = (await verifyJwtToken(token)) as UserPayload;

  if (!payload && !isPublic) {
    const url = new URL(`/${locale}/login`, request.url);
    url.searchParams.set("callbackUrl", encodeURI(pathnameWithoutLocale));
    return NextResponse.redirect(url);
  }

  if (payload && isPublic) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  return undefined;
}

export function setUserHeaders(response: NextResponse, payload: UserPayload): void {
  response.headers.set("x-user-id", payload?.id ?? "");
  response.headers.set("x-user-role", payload?.role ?? "");
  response.headers.set("x-user-email", payload?.email ?? "");
}
