import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "durium — Space-Native AI Inference Chip",
  description:
    "A chip designed from first principles for orbital compute. Trade 40% peak FLOPS for 10× better annual chip mortality.",
  openGraph: {
    title: "durium",
    description: "Design for death. Build to outlive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
