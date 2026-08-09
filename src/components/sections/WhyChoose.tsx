"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function Counter({ value, suffix = "", title }: { value: number; suffix?: string; title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      // Safety check to avoid division by zero or NaN issues
      const val = typeof value === 'string' ? parseInt(value, 10) : value;
      const increment = val / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= val) {
          setCount(val);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6 glass rounded-2xl border border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
        {count}{suffix}
      </div>
      <div className="text-[#00f0ff] font-medium text-xs md:text-sm lg:text-base">{title}</div>
    </div>
  );
}

/* Floating particles component */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? '#00f0ff' : '#ff00ff',
            left: `${10 + (i * 7) % 80}%`,
            bottom: '0%',
            boxShadow: i % 2 === 0 ? '0 0 6px #00f0ff' : '0 0 6px #ff00ff',
          }}
          animate={{
            y: [0, -300 - (i * 20)],
            x: [0, (i % 3 - 1) * 30],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* Holographic bar chart */
function HoloBarChart() {
  const barHeights = [35, 55, 45, 70, 60, 85, 75, 95];
  return (
    <div className="flex items-end gap-1 md:gap-1.5 h-16 md:h-24 px-1 md:px-2">
      {barHeights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
          className="flex-1 rounded-t-sm relative overflow-hidden"
          style={{
            background: `linear-gradient(to top, rgba(0,240,255,0.2), rgba(176,38,255,0.4))`,
            boxShadow: '0 0 8px rgba(0,240,255,0.3)',
          }}
        >
          <motion.div
            animate={{ y: ['100%', '-100%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="absolute inset-x-0 h-4 bg-gradient-to-t from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function WhyChoose() {
  const { t } = useLanguage();
  const whyChooseData = t("why_choose");

  return (
    <section id="why-choose-us" className="py-24 md:py-32 relative z-10 bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {whyChooseData?.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-base md:text-lg mb-8 leading-relaxed"
            >
              {whyChooseData?.desc}
            </motion.p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {whyChooseData?.metrics?.map((metric: any, idx: number) => (
                <Counter key={idx} value={parseInt(metric.val)} suffix={metric.suf} title={metric.label} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full rounded-3xl overflow-hidden border border-white/10 min-h-[420px] md:min-h-[500px] lg:min-h-0 lg:aspect-square flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#111]"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#00f0ff]/20 blur-3xl absolute top-0 left-0 animate-pulse" />
              <div className="w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#b026ff]/20 blur-3xl absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Particle Trails */}
              <Particles />

              {/* Network Grid Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0" y1={`${(i + 1) * 14}%`} x2="100%" y2={`${(i + 1) * 14}%`}
                    stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="4 8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={`v-${i}`}
                    x1={`${(i + 1) * 14}%`} y1="0" x2={`${(i + 1) * 14}%`} y2="100%"
                    stroke="#b026ff" strokeWidth="0.5" strokeDasharray="4 8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.2 + 0.5 }}
                  />
                ))}
              </svg>

              {/* Premium Holographic Dashboard UI */}
              <div className="relative z-10 w-full max-w-[92%] md:max-w-md p-2 md:p-6 scale-95 md:scale-100 mx-auto">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-visible md:overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b026ff] to-[#00f0ff]" />
                  
                  {/* Floating Holographic Labels */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-1 md:-top-4 md:-right-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold tracking-wider border z-20 whitespace-nowrap"
                    style={{
                      color: '#ff00ff',
                      borderColor: 'rgba(255,0,255,0.4)',
                      background: 'rgba(255,0,255,0.1)',
                      boxShadow: '0 0 15px rgba(255,0,255,0.3)',
                      textShadow: '0 0 8px rgba(255,0,255,0.8)',
                    }}
                  >
                    REVENUE GROWTH: +420%
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-2 -left-1 md:-bottom-3 md:left-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold tracking-wider border z-20 whitespace-nowrap"
                    style={{
                      color: '#00ff88',
                      borderColor: 'rgba(0,255,136,0.4)',
                      background: 'rgba(0,255,136,0.1)',
                      boxShadow: '0 0 15px rgba(0,255,136,0.3)',
                      textShadow: '0 0 8px rgba(0,255,136,0.8)',
                    }}
                  >
                    TOTAL MAD: 24M
                  </motion.div>
                  
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <div className="max-w-[70%]">
                      <div className="text-white/50 text-[10px] md:text-sm font-medium mb-1 truncate">{whyChooseData?.hologram?.growth}</div>
                      <div className="text-lg md:text-3xl font-bold text-[#fff] flex items-center gap-1 md:gap-2 flex-wrap">
                        24M MAD
                        <span className="text-[9px] md:text-xs bg-[#00f0ff]/20 text-[#00f0ff] px-1.5 py-0.5 md:px-2 md:py-1 rounded-full flex items-center whitespace-nowrap">
                          +420%
                          <svg className="w-2 h-2 md:w-3 md:h-3 ml-0.5 md:ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0"
                    >
                      <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </motion.div>
                  </div>

                  {/* Holographic Bar Chart */}
                  <HoloBarChart />

                  {/* Animated Line Chart SVG */}
                  <div className="h-16 md:h-28 w-full mt-3 md:mt-4 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradientHolo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                          <stop offset="50%" stopColor="#b026ff" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#00f0ff" />
                          <stop offset="50%" stopColor="#ff00ff" />
                          <stop offset="100%" stopColor="#00ff88" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0 50 L0 40 C10 35, 20 45, 30 35 C40 25, 50 30, 60 15 C70 0, 80 10, 100 5 L100 50 Z" 
                        fill="url(#chartGradientHolo)" 
                        className="opacity-40"
                      />
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        d="M0 40 C10 35, 20 45, 30 35 C40 25, 50 30, 60 15 C70 0, 80 10, 100 5" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                      />
                    </svg>
                    {/* Glowing dots */}
                    <div className="absolute top-[10%] right-[0%] w-2 h-2 md:w-3 md:h-3 bg-[#00ff88] rounded-full shadow-[0_0_15px_#00ff88] border md:border-2 border-white animate-pulse" />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-[60%] left-[30%] w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff00ff] rounded-full shadow-[0_0_10px_#ff00ff]"
                    />
                  </div>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5">
                    <div>
                      <div className="text-white/40 text-[9px] md:text-xs mb-0.5 md:mb-1 truncate">{whyChooseData?.hologram?.conversion}</div>
                      <div className="text-white text-sm md:text-base font-semibold">6.8% <span className="text-[#00ff88] text-[10px] md:text-xs ml-0.5 md:ml-1">↑</span></div>
                    </div>
                    <div>
                      <div className="text-white/40 text-[9px] md:text-xs mb-0.5 md:mb-1 truncate">{whyChooseData?.hologram?.cpl}</div>
                      <div className="text-white text-sm md:text-base font-semibold">12 MAD <span className="text-[#00f0ff] text-[10px] md:text-xs ml-0.5 md:ml-1">↓</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
