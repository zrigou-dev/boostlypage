"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-[#0a192f] py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My <span className="text-yellow-400">Work</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/projects/${project.id}`} className="block h-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 shadow-xl hover:shadow-yellow-400/5 flex flex-col group relative">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-60 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-yellow-400 group-hover:gap-2 transition-all">
                    <span>EXPLORE PROJECT</span>
                    <motion.span 
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="ml-2"
                    >→</motion.span>
                  </div>
                </div>

                {/* Premium Hover Effect - Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-30"
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/20"
          >
            Want Similar Results?
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

