import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://links.arcab.com.br"),
  title: "ARCAB TECH | Links",
  description:
    "Hub oficial de links da ARCAB para acesso rapido ao site, portfolio, redes e contato.",
  openGraph: {
    title: "ARCAB Links",
    description:
      "Acesse os principais links da ARCAB em uma pagina minimalista e mobile-first.",
    url: "https://links.arcab.com.br",
    siteName: "ARCAB",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ARCAB Links",
    description:
      "Hub oficial de links da ARCAB com foco em performance e experiencia mobile.",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
