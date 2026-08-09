"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  const content = {
    EN: {
      title: "Privacy",
      highlight: "Policy",
      updated: "Last updated:",
      sections: [
        {
          title: "1. Introduction",
          text: "Welcome to Leadora. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
        },
        {
          title: "2. The Data We Collect About You",
          text: "Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:",
          list: [
            "Identity Data includes first name, last name, username or similar identifier.",
            "Contact Data includes billing address, email address and telephone numbers.",
            "Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.",
            "Usage Data includes information about how you use our website, products and services."
          ]
        },
        {
          title: "3. How We Use Your Personal Data",
          text: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
          list: [
            "Where we need to perform the contract we are about to enter into or have entered into with you.",
            "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
            "Where we need to comply with a legal obligation."
          ]
        },
        {
          title: "4. Cookies",
          text: "You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly."
        },
        {
          title: "5. Contact Us",
          text: "If you have any questions about this privacy policy or our privacy practices, please contact us at:\n\nEmail: contact@leadora.com\nPhone: +212 656 965 432"
        }
      ]
    },
    FR: {
      title: "Politique de",
      highlight: "Confidentialité",
      updated: "Dernière mise à jour :",
      sections: [
        {
          title: "1. Introduction",
          text: "Bienvenue chez Leadora. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la façon dont nous traitons vos données personnelles lorsque vous visitez notre site Web et vous renseignera sur vos droits en matière de confidentialité."
        },
        {
          title: "2. Les données que nous collectons",
          text: "Les données personnelles désignent toute information concernant une personne à partir de laquelle cette personne peut être identifiée. Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous avons regroupés comme suit :",
          list: [
            "Les données d'identité comprennent le prénom, le nom de famille, le nom d'utilisateur ou un identifiant similaire.",
            "Les données de contact comprennent l'adresse de facturation, l'adresse e-mail et les numéros de téléphone.",
            "Les données techniques comprennent l'adresse IP, le type et la version du navigateur, le réglage du fuseau horaire, le système d'exploitation et d'autres technologies sur les appareils que vous utilisez pour accéder à ce site Web.",
            "Les données d'utilisation comprennent des informations sur la façon dont vous utilisez notre site Web, nos produits et nos services."
          ]
        },
        {
          title: "3. Comment nous utilisons vos données",
          text: "Nous n'utiliserons vos données personnelles que lorsque la loi nous y autorise. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes :",
          list: [
            "Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous avons conclu avec vous.",
            "Lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d'un tiers) et que vos intérêts et vos droits fondamentaux ne prévalent pas sur ces intérêts.",
            "Lorsque nous devons nous conformer à une obligation légale."
          ]
        },
        {
          title: "4. Cookies",
          text: "Vous pouvez configurer votre navigateur pour qu'il refuse tout ou partie des cookies du navigateur, ou pour qu'il vous alerte lorsque des sites Web définissent ou accèdent à des cookies. Si vous désactivez ou refusez les cookies, veuillez noter que certaines parties de ce site Web peuvent devenir inaccessibles ou ne pas fonctionner correctement."
        },
        {
          title: "5. Nous Contacter",
          text: "Si vous avez des questions sur cette politique de confidentialité ou sur nos pratiques en matière de confidentialité, veuillez nous contacter à :\n\nE-mail : contact@leadora.com\nTéléphone : +212 656 965 432"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">{t.highlight}</span>
          </h1>
          <p className="text-white/40 text-sm font-mono tracking-wider">
            {t.updated} {new Date().toLocaleDateString()}
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {t.sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/[0.02] to-[#b026ff]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h2 className="text-2xl font-semibold text-white mb-6 relative z-10 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b026ff] opacity-50 flex-shrink-0" />
                {section.title}
              </h2>
              <div className="text-white/70 leading-relaxed relative z-10 space-y-4">
                {section.text.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                
                {section.list && (
                  <ul className="list-none space-y-3 mt-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
