import type { Metadata } from "next";
import { Inter, Press_Start_2P, Roboto, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/ui/Background";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-press-start" });
const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-vt323" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.basedokmaya.xyz'),
  title: "OKMAYA REALMS | Epic Space Battles in the Crypto Galaxy",
  description: "Pilot advanced spacecraft, battle alien fleets, and earn $OKY tokens in the ultimate space shooter experience built on the Base blockchain.",
  keywords: "OKMAYA REALMS, $OKY, Space Shooter, NFT, Play-to-Earn, Base blockchain, crypto game, Xenon 2",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/logo_real.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.basedokmaya.xyz/",
    title: "OKMAYA REALMS | Epic Space Battles in the Crypto Galaxy",
    description: "🚀 CONQUER THE GALAXY & EARN $OKY!",
    images: [{ url: "https://www.basedokmaya.xyz/logo_real.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "OKMAYA REALMS | Epic Space Battles in the Crypto Galaxy",
    description: "🚀 CONQUER THE GALAXY & EARN $OKY!",
    images: ["https://www.basedokmaya.xyz/logo_real.png"],
  },
};

import { Web3Provider } from "@/components/providers/Web3Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${pressStart.variable} ${vt323.variable} antialiased font-sans bg-slate-900 text-slate-100`}>
        <Web3Provider>
          <Background />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
