"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();

  const content = {
    EN: {
      title: "About",
      highlight: "Leadora",
      mission: "Our Mission",
      missionText: "Our mission is to bridge the gap between incredible products and the customers who need them. We leverage cutting-edge technology, advanced psychological marketing, and stunning aesthetics to create digital experiences that demand attention and drive massive revenue.",
      why: "What Sets Us Apart",
      why1Title: "Premium Aesthetics",
      why1Text: "We believe that design builds trust. Our websites and creatives look like they belong to top-tier tech giants, instantly elevating your brand's perceived value.",
      why2Title: "Data-Driven Decisions",
      why2Text: "We don't guess. Every campaign, every button color, and every headline is rigorously tested and optimized for maximum ROI.",
      why3Title: "Full-Stack Solutions",
      why3Text: "From building high-converting Shopify and YouCan stores to running profitable Meta Ads and managing your social presence, we handle the entire customer journey.",
      ready: "Ready to scale?",
      readyText: "Stop leaving money on the table. Partner with Leadora and let's build the growth engine your business deserves.",
      cta: "Work With Us"
    },
    FR: {
      title: "À Propos de",
      highlight: "Leadora",
      mission: "Notre Mission",
      missionText: "Notre mission est de combler le fossé entre des produits incroyables et les clients qui en ont besoin. Nous exploitons des technologies de pointe, une psychologie marketing avancée et une esthétique époustouflante pour créer des expériences numériques qui captent l'attention et génèrent des revenus massifs.",
      why: "Ce Qui Nous Différencie",
      why1Title: "Esthétique Premium",
      why1Text: "Nous croyons que le design crée la confiance. Nos sites web et nos créations donnent l'impression d'appartenir aux géants de la technologie, élevant instantanément la valeur perçue de votre marque.",
      why2Title: "Décisions Basées sur les Données",
      why2Text: "Nous ne devinons pas. Chaque campagne, chaque couleur de bouton et chaque titre est rigoureusement testé et optimisé pour un retour sur investissement maximal.",
      why3Title: "Solutions Complètes",
      why3Text: "De la création de boutiques Shopify et YouCan à fort taux de conversion à la gestion de publicités Meta rentables et de votre présence sociale, nous gérons l'intégralité du parcours client.",
      ready: "Prêt à évoluer ?",
      readyText: "Arrêtez de laisser de l'argent sur la table. Associez-vous à Leadora et construisons le moteur de croissance que votre entreprise mérite.",
      cta: "Travaillez Avec Nous"
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b026ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">{t.highlight}</span>
        </motion.h1>
        
        <div className="space-y-12">
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] rounded-full" />
              {t.mission}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              {t.missionText}
            </p>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">{t.why}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: t.why1Title, text: t.why1Text, color: "from-[#00f0ff] to-blue-500" },
                { title: t.why2Title, text: t.why2Text, color: "from-[#b026ff] to-pink-500" },
                { title: t.why3Title, text: t.why3Text, color: "from-green-400 to-[#00f0ff]" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <div className="w-11 h-11 bg-[#050505] rounded-[10px]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-[#00f0ff]/10 to-[#b026ff]/10 border border-white/10 backdrop-blur-xl text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{t.ready}</h3>
            <p className="mb-8 text-white/70 max-w-xl mx-auto relative z-10">
              {t.readyText}
            </p>
            <a href="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-10">
              {t.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
