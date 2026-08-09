import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import CaseStudies from "@/components/sections/CaseStudies";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <SocialProof />
      <CaseStudies />
      <FAQ />
      <Contact />
    </>
  );
}
