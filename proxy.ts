import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/types";

// Path-based locale routing (PRD §11 Open Question 5 / §9 hreflang): any request
// that doesn't already start with /pl or /en gets redirected there based on the
// browser's Accept-Language header, falling back to the default locale.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred = LOCALES.find((l) => acceptLanguage.includes(l)) ?? DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
