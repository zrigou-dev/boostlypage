// components/Portfolio.jsx
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full flex flex-col"
            >
              {/* Project card */}
              <Link href={`/projects/${project.id}`} className="block h-full bg-[#112240] rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:-translate-y-2 flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                        {project.description}
                    </p>
                    <span
                      className="inline-block text-yellow-400 font-semibold group-hover:underline"
                    >
                      View Details →
                    </span>
                </div>
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

