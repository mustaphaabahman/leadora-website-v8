"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { name: t("nav", "services"), href: "/#services" },
    { name: t("nav", "why_us"), href: "/#why-choose-us" },
    { name: t("nav", "how_it_works"), href: "/#how-it-works" },
    { name: t("nav", "social_proof"), href: "/#social-proof" },
    { name: t("nav", "faq"), href: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Leadora<span className="text-[#00f0ff]">.</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: links.length * 0.1 }}
            className="flex items-center gap-1 border-l border-white/10 pl-4"
          >
            <button
              onClick={() => setLang("FR")}
              className={`relative text-xs font-bold px-3 py-1.5 rounded-md transition-all duration-300 ${
                lang === "FR"
                  ? "text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/40 shadow-[0_0_12px_rgba(0,255,136,0.3)]"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              FR
              {lang === "FR" && (
                <motion.div
                  layoutId="langIndicator"
                  className="absolute inset-0 rounded-md border border-[#00ff88]/60"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`relative text-xs font-bold px-3 py-1.5 rounded-md transition-all duration-300 ${
                lang === "EN"
                  ? "text-[#ff00ff] bg-[#ff00ff]/10 border border-[#ff00ff]/40 shadow-[0_0_12px_rgba(255,0,255,0.3)]"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              EN
              {lang === "EN" && (
                <motion.div
                  layoutId="langIndicator"
                  className="absolute inset-0 rounded-md border border-[#ff00ff]/60"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (links.length + 1) * 0.1 }}
          >
            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all font-medium text-sm backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {t("nav", "get_plan")}
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-3 py-3 border-y border-white/10">
                <button
                  onClick={() => setLang("FR")}
                  className={`text-sm font-bold px-5 py-2 rounded-md transition-all duration-300 ${
                    lang === "FR"
                      ? "text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/40 shadow-[0_0_12px_rgba(0,255,136,0.3)]"
                      : "text-white/40"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("EN")}
                  className={`text-sm font-bold px-5 py-2 rounded-md transition-all duration-300 ${
                    lang === "EN"
                      ? "text-[#ff00ff] bg-[#ff00ff]/10 border border-[#ff00ff]/40 shadow-[0_0_12px_rgba(255,0,255,0.3)]"
                      : "text-white/40"
                  }`}
                >
                  EN
                </button>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-center font-medium mt-2"
              >
                {t("nav", "get_plan")}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
