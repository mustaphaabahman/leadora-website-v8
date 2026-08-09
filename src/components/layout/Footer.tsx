"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Leadora<span className="text-[#00f0ff]">.</span></h2>
            <p className="text-white/60 max-w-md mb-8">
              {t("hero", "subtitle")}
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              {t("nav", "get_plan")} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("nav", "services")}</h3>
            <ul className="space-y-3">
              {["Génération de Leads", "Développement Web", "Shopify & YouCan", "Production Créative"].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="text-white/60 hover:text-[#00f0ff] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{lang === "FR" ? "Entreprise" : "Company"}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">{lang === "FR" ? "À Propos de Nous" : "About Us"}</Link></li>
              <li><Link href="/case-studies" className="text-white/60 hover:text-white transition-colors">{lang === "FR" ? "Études de Cas" : "Case Studies"}</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">{lang === "FR" ? "Contact" : "Contact"}</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">{lang === "FR" ? "Politique de Confidentialité" : "Privacy Policy"}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Leadora. {t("footer", "rights")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
