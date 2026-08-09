"use client";

import React from "react";
import ContactSection from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-20 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00f0ff]/5 rounded-full blur-[200px] pointer-events-none" />
      
      {/* Reusing the highly-styled Contact component from the homepage */}
      <div className="relative z-10">
        <ContactSection />
      </div>
    </main>
  );
}
