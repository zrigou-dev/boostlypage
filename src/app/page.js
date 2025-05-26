import Benefits from "@/components/Benefits";
import HeroSection from "../components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <Features/>
      <Portfolio />
      <Stats />
      <Pricing/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </>
  );
}
