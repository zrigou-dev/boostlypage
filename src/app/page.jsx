"use client";
import Benefits from "@/components/Benefits";
import HeroSection from "../components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Benefits />
      <Features />
      <Portfolio />
      <Stats />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
      <a
        target="_blank"
        href="https://wa.me/+212767496526"
        className="fixed bottom-5 right-5 w-[50px] h-[50px] bg-green-600 z-30 flex justify-center items-center rounded-full"
      >
        <FaWhatsapp className="text-2xl text-white" />
      </a>
    </div>
  );
}
