"use client";

import { motion } from "framer-motion";
import { WhatsAppLogo } from "@/components/ui/Logos";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/0656965432" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <WhatsAppLogo className="w-8 h-8 text-white" />
      </motion.div>
    </Link>
  );
}
