import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import ContactDialog from "@/components/ContactDialog";
import { Analytics } from "@vercel/analytics/next";

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
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Line-art portrait of Anup Shrestha, Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Shrestha · Design Engineer",
    description:
      "Design systems, AI platforms, and production frontends. I design the product, then I build it.",
    images: ["/og.png"],
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
      <body className="min-h-full flex flex-col">
        {/* Page-wide dotted glow, pinned behind everything */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <DottedGlowBackground
            gap={14}
            radius={1.4}
            color="rgba(9,9,11,0.55)"
            glowColor="rgba(253,207,0,0.9)"
            opacity={0.25}
            speedMin={0.2}
            speedMax={0.7}
          />
        </div>
        {children}
        <ContactDialog />
        <Analytics />
      </body>
    </html>
  );
}
