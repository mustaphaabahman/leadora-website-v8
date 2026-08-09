"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    client: "Marque E-Commerce",
    results: [
      { label: "Revenu", before: "200k MAD/mo", after: "850k MAD/mo", color: "text-[#00f0ff]" },
      { label: "Coût Par Lead", before: "145 MAD", after: "12 MAD", color: "text-[#b026ff]" },
      { label: "Taux de Conversion", before: "1.2%", after: "4.8%", color: "text-emerald-400" }
    ]
  },
  {
    client: "Entreprise B2B SaaS",
    results: [
      { label: "Leads Qualifiés", before: "10/mo", after: "150/mo", color: "text-[#00f0ff]" },
      { label: "Coût d'Acquisition Client", before: "8000 MAD", after: "150 MAD", color: "text-[#b026ff]" },
      { label: "Taux de Conversion", before: "2.1%", after: "6.5%", color: "text-emerald-400" }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 relative z-10 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Résultats Réels.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-white relative z-10">{study.client}</h3>
              
              <div className="space-y-6 relative z-10">
                {study.results.map((res, j) => (
                  <div key={j} className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="text-white/60 mb-2 sm:mb-0 w-32">{res.label}</div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="text-white/40 line-through text-sm">{res.before}</div>
                      <div className="text-white/20">→</div>
                      <div className={`font-bold text-xl ${res.color}`}>{res.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
