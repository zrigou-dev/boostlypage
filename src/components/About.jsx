// components/About.js
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-[#0a192f] py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#112240] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Main image container */}
              <div className="absolute inset-0 border-4 border-yellow-400 rounded-xl rotate-3"></div>
              {/* Profile image with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-md aspect-square bg-[#112240] rounded-xl flex items-center justify-center"
              >
                <div className="text-8xl font-bold text-yellow-400 animate-pulse">
                  {`</>`}
                </div>

                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-yellow-400"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-yellow-400"></div>
              </motion.div>
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-yellow-400"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-yellow-400"></div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-gray-300 relative z-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
              Full-Stack Developer & Cloud Architect Specializing in Modern Apps & Scalable Infrastructure
            </h3>

            <div className="space-y-4 mb-8">
              <p>
                I'm a passionate developer with{" "}
                <span className="text-yellow-400">4+ years</span> of experience
                creating high-performance applications. My expertise spans
                across the entire development stack, from crafting beautiful UIs
                to building robust backend systems.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-yellow-400">
                  React, Next.js, Node.js, AWS, and Docker
                </span>
                . I combine technical excellence with cloud-native engineering to
                build and deploy scalable, robust applications and automated CI/CD pipelines.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, learning new technologies, or mentoring aspiring
                developers.
              </p>
            </div>

            {/* Skills progress bars */}
            <div className="space-y-6">
              {[
                { name: "Web & Mobile Auth", level: 95 },
                { name: "Cloud Architecture", level: 90 },
                { name: "DevOps & CI/CD", level: 85 },
                { name: "Mobile Development", level: 80 },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-yellow-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#112240] rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-yellow-400"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 relative z-40"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/20"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
