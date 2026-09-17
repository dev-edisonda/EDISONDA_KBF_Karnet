import { DEFAULT_LOCALE } from "@/lib/types";

// No middleware in a static export, so the bare "/" needs its own redirect to
// the default locale (proxy.ts only runs in the Node runtime). A plain meta
// refresh works even without JS, unlike next/navigation's redirect() which
// only fires after client-side hydration in a static export.
export default function RootPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const target = `${basePath}/${DEFAULT_LOCALE}/`;

  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <title>KARNET</title>
      </head>
      <body>
        <p>
          <a href={target}>Przejdź do KARNET / Go to KARNET</a>
        </p>
      </body>
    </html>
  );
}
