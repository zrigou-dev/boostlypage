
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
    <div className="bg-[#0a192f] text-gray-100 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 relative">
          {/* Background Element */}
           <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl opacity-50"
            ></motion.div>
          </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Back Button */}
          <Link href="/#portfolio" className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors mb-8 group">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
             >
                <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                 <div className="flex gap-4 mt-6">
                    {project.url && project.url !== '#' && (
                        <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-[#0a192f] py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105"
                        >
                        Visit Live Site <FaExternalLinkAlt />
                        </a>
                    )}
                 </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
             >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">{project.title}</h1>
                <p className="text-yellow-400 font-mono mb-6">{project.role} | {project.date}</p>
                
                <div className="bg-[#112240] p-6 rounded-lg mb-8 border border-gray-800">
                    <h3 className="text-xl font-bold text-gray-100 mb-4">Project Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>

             </motion.div>
          </div>

          {/* Challenge & Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
              <div className="bg-[#112240] p-8 rounded-xl border-l-4 border-red-400 hover:bg-[#152a4d] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">
                      {project.challenge}
                  </p>
              </div>
              <div className="bg-[#112240] p-8 rounded-xl border-l-4 border-green-400 hover:bg-[#152a4d] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">The Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                      {project.solution}
                  </p>
              </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
