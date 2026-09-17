import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { locale as rootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import "../globals.css";
import { LOCALES, type Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n";
import { FavouritesProvider } from "@/lib/favourites-context";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";
import { BottomTabNav } from "@/components/nav/BottomTabNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: { default: "KARNET — kultura w Krakowie", template: "%s · KARNET" },
  description: "KARNET is a guide to cultural events, places, and people in Kraków.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const localeParam = await rootLocale();
  if (!LOCALES.includes(localeParam as Locale)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink">
        {/* TEMPORARY — Figma html-to-design capture script, remove after capture */}
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
        <FavouritesProvider>
          <a href="#main-content" className="skip-link">
            {locale === "pl" ? "Przejdź do treści" : "Skip to content"}
          </a>
          <Header locale={locale} dict={dict} />
          <main id="main-content" className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
          <BottomTabNav locale={locale} dict={dict} />
        </FavouritesProvider>
      </body>
    </html>
  );
}
