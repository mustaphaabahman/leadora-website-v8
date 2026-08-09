"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudiesPage() {
  const { lang } = useLanguage();

  const content = {
    EN: {
      title: "Case",
      highlight: "Studies",
      subtitle: "Discover how we've helped ambitious brands scale their revenue through data-driven marketing and premium digital experiences.",
      cases: [
        {
          title: "Scaling E-commerce Revenue by 300%",
          client: "Premium Fashion Brand",
          results: ["300% ROI", "50k+ Leads", "-40% CPA"],
          desc: "We completely redesigned their Shopify store with a premium aesthetic and launched targeted Meta Ad campaigns, resulting in record-breaking Q4 sales."
        },
        {
          title: "Dominating the B2B SaaS Market",
          client: "Enterprise Tech Solution",
          results: ["120+ Demos/mo", "Conversion +45%"],
          desc: "By creating high-converting landing pages and leveraging LinkedIn ads, we built a predictable lead generation engine for their enterprise sales team."
        },
        {
          title: "Viral TikTok Growth Strategy",
          client: "DTC Beauty Brand",
          results: ["2M+ Views", "Sold out in 48h"],
          desc: "We produced high-quality UGC and highly engaging TikTok creatives that resonated deeply with Gen Z, causing massive viral growth and immediate sell-outs."
        }
      ]
    },
    FR: {
      title: "Études de",
      highlight: "Cas",
      subtitle: "Découvrez comment nous avons aidé des marques ambitieuses à faire exploser leurs revenus grâce au marketing basé sur les données et à des expériences numériques premium.",
      cases: [
        {
          title: "Augmentation des Revenus E-commerce de 300%",
          client: "Marque de Mode Premium",
          results: ["300% ROI", "50k+ Leads", "-40% CPA"],
          desc: "Nous avons entièrement repensé leur boutique Shopify avec une esthétique premium et lancé des campagnes Meta Ads ciblées, ce qui a entraîné des ventes record au quatrième trimestre."
        },
        {
          title: "Dominer le Marché SaaS B2B",
          client: "Solution Tech Entreprise",
          results: ["120+ Démos/mois", "Conversion +45%"],
          desc: "En créant des landing pages à fort taux de conversion et en exploitant les publicités LinkedIn, nous avons construit un moteur de génération de leads prévisible pour leur équipe de vente."
        },
        {
          title: "Stratégie de Croissance Virale TikTok",
          client: "Marque de Beauté D2C",
          results: ["2M+ Vues", "Rupture de stock 48h"],
          desc: "Nous avons produit du contenu généré par les utilisateurs (UGC) de haute qualité et des créations TikTok très engageantes qui ont résonné avec la génération Z, provoquant une croissance virale massive."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">{t.highlight}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {t.cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 to-[#b026ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-1 relative z-10">
                <div className="text-[#00f0ff] text-sm font-semibold tracking-wider uppercase mb-2">{c.client}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  {c.desc}
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-[#b026ff] transition-colors">
                  {lang === "FR" ? "Obtenir les mêmes résultats" : "Get similar results"} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 relative z-10 justify-center">
                {c.results.map((res, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md text-center flex-1">
                    <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">{res}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
