"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-[#00f0ff]/30 text-[#00f0ff] font-medium text-sm tracking-wide"
        >
          {t("hero", "badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          {t("hero", "title1")} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#b026ff] to-[#00ffff] pb-2">
            {t("hero", "title2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero", "subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              {t("hero", "cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link
            href="#services"
            className="group px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-full w-full sm:w-auto transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-[#00f0ff]" />
            {t("hero", "secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
