"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FiMousePointer } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { SiMeta, SiInstagram, SiTiktok } from "react-icons/si";
import Image from "next/image";

const SocialLockup = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
    <SiInstagram className="absolute top-[12%] left-[12%] w-[18px] h-[18px] text-[#E1306C]" />
    <SiTiktok className="absolute bottom-[12%] right-[12%] w-[16px] h-[16px] text-white" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-[2px] shadow-lg z-10 flex items-center justify-center">
      <SiMeta className="w-[18px] h-[18px] text-[#0668E1]" />
    </div>
  </div>
);

const CustomImageIcon = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
  <div className={`w-full h-full flex items-center justify-center ${className}`}>
    <Image src={src} alt={alt} width={64} height={64} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] mix-blend-screen" />
  </div>
);

const serviceStyles = [
  {
    // 1. Lead Generation
    iconColor: "text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.3)",
    glowHover: "rgba(59, 130, 246, 0.7)",
    borderHover: "group-hover:border-blue-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/lead-gen.png" alt="Lead Generation" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 2. Creative Production
    iconColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.2)",
    glowHover: "rgba(168, 85, 247, 0.6)",
    borderHover: "group-hover:border-purple-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/creative.png" alt="Creative Production" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 3. Website Development
    iconColor: "text-teal-400",
    glowColor: "rgba(45, 212, 191, 0.3)",
    glowHover: "rgba(45, 212, 191, 0.7)",
    borderHover: "group-hover:border-teal-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/web-dev.png" alt="Web Development" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 4. Landing Pages
    iconColor: "text-orange-500",
    glowColor: "rgba(249, 115, 22, 0.2)",
    glowHover: "rgba(249, 115, 22, 0.6)",
    borderHover: "group-hover:border-orange-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/landing.png" alt="Landing Pages" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 5. Shopify Stores
    iconColor: "text-[#95BF47]",
    glowColor: "rgba(149, 191, 71, 0.3)",
    glowHover: "rgba(149, 191, 71, 0.7)",
    borderHover: "group-hover:border-[#95BF47]/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/shopify.png" alt="Shopify" {...props} className="rounded-xl overflow-hidden mix-blend-screen" />
  },
  {
    // 6. YouCan Stores
    iconColor: "text-yellow-400",
    glowColor: "rgba(250, 204, 21, 0.3)",
    glowHover: "rgba(250, 204, 21, 0.7)",
    borderHover: "group-hover:border-yellow-400/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/youcan.png" alt="YouCan" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 7. Social Media
    iconColor: "text-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.2)",
    glowHover: "rgba(99, 102, 241, 0.6)",
    borderHover: "group-hover:border-indigo-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/social.png" alt="Social Media" {...props} className="rounded-xl overflow-hidden" />
  },
  {
    // 8. Marketing Consulting
    iconColor: "text-pink-500",
    glowColor: "rgba(236, 72, 153, 0.3)",
    glowHover: "rgba(236, 72, 153, 0.7)",
    borderHover: "group-hover:border-pink-500/50",
    Icon: (props: any) => <CustomImageIcon src="/images/services/marketing.png" alt="Marketing Consulting" {...props} className="rounded-xl overflow-hidden" />
  }
];

export default function Services() {
  const { t } = useLanguage();
  const title = t("services", "title");
  const subtitle = t("services", "subtitle");
  const items = (t("services", "items") as { title: string; desc: string }[]) || [];

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const style = serviceStyles[index % serviceStyles.length];
            const Icon = style.Icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-[#0f172a] backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col transition-all duration-300 ease-in-out ${style.borderHover}`}
              >
                {/* Neon Glow Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 40px ${style.glowHover}, inset 0 0 20px rgba(255,255,255,0.02)` }}
                />

                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 3 + (index * 0.2), // slightly desync animations
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110`}
                  style={{
                    background: `radial-gradient(120% 120% at 50% 50%, ${style.glowColor} 0%, rgba(255,255,255,0.02) 100%)`,
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <Icon className={`w-12 h-12 ${style.iconColor} relative z-10 transition-colors duration-300 drop-shadow-[0_0_10px_currentColor]`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 relative z-10">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm flex-1 relative z-10">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
