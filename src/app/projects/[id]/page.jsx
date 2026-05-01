
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    // In a real app we might want to return notFound(), but for this static export style
    // just showing a message or redirecting is fine.
    return (
      <div className="min-h-screen bg-[#0a192f] text-gray-100 flex items-center justify-center">
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
        {/* Section 1: Immersive Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Link href="/#portfolio" className="inline-flex items-center text-yellow-400 font-bold tracking-widest text-xs uppercase mb-8 group">
                  <FaArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" />
                  Back to Portfolio
                </Link>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-10">
                  A deep dive into the architecture and execution of {project.title}. 
                  Discover how we transformed a vision into a high-performance digital reality.
                </p>
                {project.url && project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-yellow-400 text-[#0a192f] py-4 px-10 rounded-2xl font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20 group"
                  >
                    LAUNCH PROJECT <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Project Overview & Stats */}
        <section className="py-24 bg-[#112240]/30 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-400 uppercase mb-8">The Overview</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
                  Designing a seamless user experience for one of the industry's most demanding platforms.
                </h3>
                <div className="prose prose-invert lg:prose-xl">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    The project required a careful balance of aesthetic elegance and extreme performance. 
                    We focused on creating a design system that could scale across multiple sub-platforms 
                    while maintaining a unified brand voice.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-400 uppercase mb-6">Key Attributes</h2>
                  <div className="space-y-6">
                    {[
                      { label: "Category", value: "Web Application" },
                      { label: "Performance", value: "98/100 Lighthouse" },
                      { label: "Status", value: "Production Live" },
                    ].map((stat) => (
                      <div key={stat.label} className="border-b border-white/5 pb-4">
                        <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 bg-yellow-400/5 border border-yellow-400/10 rounded-2xl">
                  <h4 className="text-white font-bold mb-4">Want to build something similar?</h4>
                  <Link href="/#contact" className="text-yellow-400 font-bold hover:underline inline-flex items-center gap-2">
                    Start a conversation <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 4: The Process */}
        <section className="py-24 relative overflow-hidden bg-[#0a192f]">
           <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-400 uppercase mb-12 text-center">The Journey</h2>
                <div className="space-y-16">
                  {[
                    { step: "01", title: "Discovery", desc: "Understanding the core business objectives and user pain points to establish a solid strategic foundation." },
                    { step: "02", title: "Strategy", desc: "Defining the technical architecture and user experience flows that align with the project goals." },
                    { step: "03", title: "Execution", desc: "Rapid prototyping and iterative development using modern tech stacks for high performance." },
                    { step: "04", title: "Refinement", desc: "Polishing every micro-interaction and optimizing for accessibility and SEO excellence." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.step}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex gap-8 items-start"
                    >
                      <div className="text-5xl md:text-7xl font-black text-white/10">{item.step}</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
           </div>
        </section>

        {/* Section 5: Bottom Navigation */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <Link href="/#portfolio" className="text-gray-500 hover:text-white transition-colors flex items-center gap-4 text-xl font-bold group">
                <span className="w-12 h-[1px] bg-gray-800 group-hover:w-20 group-hover:bg-yellow-400 transition-all" />
                EXPLORE MORE
              </Link>
              <Link href="/#contact" className="bg-white text-[#0a192f] px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all">
                LET'S TALK ABOUT YOUR PROJECT
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
