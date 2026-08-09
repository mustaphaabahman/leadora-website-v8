import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Background3D from "@/components/three/Background3D";
import GridOverlay from "@/components/layout/GridOverlay";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leadora | Multiply Your Business Growth",
  description: "Leadora helps ambitious businesses generate more qualified customers through high-converting advertising, creative content, websites, landing pages, and marketing strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-white`}>
        <LanguageProvider>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Background3D />
          </div>
          <GridOverlay />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
