"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SocialProof() {
  const { t } = useLanguage();
  const stats = t("social_proof", "stats") as { value: string, label: string }[];
  const testimonials = t("social_proof", "testimonials") as { company: string, text: string, author: string }[];
  
  // Assuming avatars are the same
  const avatars = [
    "https://i.pravatar.cc/150?u=casablanca",
    "https://i.pravatar.cc/150?u=marrakech",
    "https://i.pravatar.cc/150?u=agadir",
    "https://i.pravatar.cc/150?u=tanger",
    "https://i.pravatar.cc/150?u=rabat"
  ];

  const fullTestimonials = testimonials.map((t, i) => ({ ...t, avatar: avatars[i % avatars.length] }));

  return (
    <section id="social-proof" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t("social_proof", "title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 glass rounded-2xl border border-white/5"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mb-2">{stat.value}</div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Slider */}
        <div className="relative w-full flex overflow-x-hidden">
          <motion.div 
            className="flex gap-6 py-4 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...fullTestimonials, ...fullTestimonials].map((t, i) => (
              <div key={i} className="w-[350px] sm:w-[400px] flex-shrink-0 glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <img src={t.avatar} alt={t.company} className="w-12 h-12 rounded-full border-2 border-white/20" />
                  <div>
                    <div className="font-bold text-white">{t.company}</div>
                    <div className="text-[#00f0ff] text-sm">{t.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
