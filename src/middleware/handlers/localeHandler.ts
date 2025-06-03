import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/config/i18n-config";
import { checkPathnameHasLocale } from "../utils/helpers";

export async function handleLocale(request: NextRequest): Promise<NextResponse | undefined> {
  const { pathname } = request.nextUrl;
  console.log("Locale Handler:==================================", pathname);

  if (!checkPathnameHasLocale(pathname)) {
    const locale = i18n.defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}
