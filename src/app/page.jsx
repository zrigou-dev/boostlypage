"use client";
import Hero from "../components/HeroSection";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative">
      <Header/>
      <Hero />
      <About/>
      <Services />
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  );
}
