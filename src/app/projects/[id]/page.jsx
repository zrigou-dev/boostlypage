
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a192f] text-gray-100 flex items-center justify-center p-6">
        <div className="text-center">
             <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
             <Link href="/" className="text-yellow-400 hover:text-yellow-300">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a192f] text-gray-100 min-h-screen flex flex-col selection:bg-yellow-400 selection:text-[#0a192f]">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Section 1: Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/5 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <Link href="/#portfolio" className="inline-flex items-center text-yellow-400 font-bold tracking-widest text-xs uppercase mb-8 group">
                  <FaArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" />
                  Back to Portfolio
                </Link>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                  {project.description}
                </p>
                {project.url && project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-yellow-400 text-[#0a192f] py-4 px-10 rounded-xl font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20 group"
                  >
                    EXPLORE LIVE <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Project Narrative */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Main Content */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-8">The Mission</h2>
                <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
                  <p>
                    Every line of code in {project.title} was written with a singular purpose: to create a world-class digital experience that prioritizes the user above all else. We moved beyond standard development to engineer a solution that is as robust as it is beautiful.
                  </p>
                  <p>
                    The focus was on creating a fluid architecture that scales effortlessly, ensuring that as the user base grows, the performance remains uncompromisingly high. We believe that professional software should be invisible—so fast and intuitive that the user forgets the technology and focuses on the results.
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-12 mb-6">Our Approach</h3>
                  <p>
                    We utilized a design-first philosophy, where aesthetics and functionality are treated as one. This resulted in {project.title} being not just a tool, but a centerpiece of digital innovation in its category.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-1/3">
                <div className="bg-[#112240]/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sticky top-32">
                  <div className="pt-2">
                    <h4 className="text-white font-bold mb-4">Start Your Project</h4>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      Inspired by {project.title}? Let's apply this same philosophy to your next big idea and build something exceptional together.
                    </p>
                    <Link 
                      href="/#contact" 
                      className="block w-full text-center py-4 bg-yellow-400 text-[#0a192f] rounded-xl font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/20"
                    >
                      LET'S GET STARTED
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Cinematic Break */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center px-6"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Impact Driven Results</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Bottom Navigation */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <Link 
              href="/#portfolio" 
              className="text-4xl md:text-6xl font-black text-white hover:text-yellow-400 transition-colors flex items-center justify-center gap-6 group"
            >
              CONTINUE EXPLORING <FaArrowLeft className="rotate-180 group-hover:translate-x-4 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
