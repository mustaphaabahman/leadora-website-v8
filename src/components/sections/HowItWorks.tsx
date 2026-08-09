"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const stepsData = t("how_it_works", "steps") as { title: string, desc: string }[];
  
  const steps = stepsData.map((step, index) => ({
    number: `0${index + 1}`,
    title: step.title,
    desc: step.desc
  }));

  return (
    <section id="how-it-works" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("how_it_works", "title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            {t("how_it_works", "subtitle")}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
            >
              {i !== steps.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] to-transparent opacity-30" />
              )}
              
              <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full bg-black border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <span className="text-[#00f0ff] font-bold text-sm">{step.number}</span>
              </div>
              
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00f0ff] transition-colors">{step.title}</h3>
                <p className="text-white/60 text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
