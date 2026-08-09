"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (section: keyof typeof translations["fr"], key?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  const t = (section: keyof typeof translations["fr"], key?: string) => {
    const dictionary = translations[lang.toLowerCase() as keyof typeof translations];
    const sectionData = dictionary[section];
    if (key && sectionData) {
      return (sectionData as any)[key];
    }
    return sectionData;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
