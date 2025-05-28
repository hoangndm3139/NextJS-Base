import { i18n } from "@/config/i18n-config";
import { PUBLIC_PATHS } from "./constants";

export function getLocaleFromPathname(pathname: string): string {
  return pathname.split("/")[1];
}

export function checkPathnameHasLocale(pathname: string): boolean {
  return i18n.locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
}

export function getPathnameWithoutLocale(pathname: string, locale: string): string {
  return pathname.replace(`/${locale}`, "");
}

export function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some(path => pathname.startsWith(path));
}

export function generateNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString("base64");
}

export function generateCSPHeader(nonce: string): string {
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  return cspHeader.replace(/\s{2,}/g, " ").trim();
}

export type UserPayload = {
  id?: string;
  role?: string;
  email?: string;
} | null;
