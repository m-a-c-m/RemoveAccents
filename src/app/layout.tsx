import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/remove-accents";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eliminar Acentos y Tildes de Texto Gratis Online",
    template: "%s | Remove Accents",
  },
  description:
    "Quita acentos, tildes y diacríticos de cualquier texto al instante mediante normalización Unicode. Opción para conservar la ñ como letra propia del español. Copia el resultado con un clic.",
  keywords: [
    "eliminar acentos texto",
    "quitar tildes online",
    "remove accents online",
    "normalizar texto español",
    "quitar diacriticos texto",
    "texto sin acentos gratis",
  ],
  authors: [{ name: "Miguel Ángel Colorado Marin", url: "https://miguelacm.es" }],
  creator: "Miguel Ángel Colorado Marin",
  openGraph: {
    title: "Eliminar Acentos y Tildes de Texto Gratis Online",
    description:
      "Elimina acentos y tildes de cualquier texto al instante, con opción de conservar la ñ. Sin registro. Por MACM.",
    url: SITE_URL,
    siteName: "Remove Accents — MACM",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliminar Acentos y Tildes de Texto Gratis Online",
    description: "Quita acentos y tildes de tu texto en tiempo real. Sin subida a servidor. Por MACM · miguelacm.es",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="author" href="https://miguelacm.es" />
        <meta name="author" content="Miguel Ángel Colorado Marin" />
        <meta name="copyright" content="Miguel Ángel Colorado Marin — miguelacm.es" />
      </head>
      <body className="antialiased">
        {children}
        <footer className="pb-8 text-center text-xs text-text-muted/40">
          ⚡ por{" "}
          <a
            href="https://miguelacm.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            MACM · miguelacm.es
          </a>
          {" · "}
          <a
            href="https://github.com/m-a-c-m/RemoveAccents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            Código abierto
          </a>
        </footer>
      </body>
    </html>
  );
}
