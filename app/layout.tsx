import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const displayGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoAccent = Space_Mono({
  variable: "--font-mono-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Anup Shrestha · Design Engineer",
  description:
    "Portfolio of Anup Shrestha, a design engineer building products that feel obvious: design systems, AI platforms, and production frontends.",
  openGraph: {
    title: "Anup Shrestha · Design Engineer",
    description:
      "Design systems, AI platforms, and production frontends. I design the product, then I build it.",
    images: [
      {
        url: "/anup.jpg",
        width: 768,
        height: 768,
        alt: "Portrait of Anup Shrestha",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Anup Shrestha · Design Engineer",
    description:
      "Design systems, AI platforms, and production frontends. I design the product, then I build it.",
    images: ["/anup.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyGrotesk.variable} ${displayGrotesque.variable} ${monoAccent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
