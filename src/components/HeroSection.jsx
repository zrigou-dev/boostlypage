"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0a192f] min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
        ></motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto z-10 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-400">Mohamed Zrigou</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-4">
               Full-Stack Developer | DevOps & Cloud Engineer
            </h2>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
              Crafting{" "}
              <span className="text-yellow-400">
                exceptional digital experiences
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0">
              I specialize in building high-performance web and mobile
              applications, scalable cloud architectures, and robust CI/CD pipelines
              with stunning user interfaces and flawless functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="px-6 py-3 sm:px-8 sm:py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/20 text-sm sm:text-base"
              >
                View My Work
              </Link>

              <Link
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-[#0a192f] transition duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Contact Me
              </Link>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
              {["React", "Next.js", "Node.js", "AWS", "Kubernetes", "Docker", "Terraform"].map(
                (tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ y: -3 }}
                    className="px-3 py-1.5 bg-[#112240] text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700 hover:border-yellow-400 transition"
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Animated Code Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full max-w-xl"
          >
            <div className="relative bg-[#112240] rounded-xl p-1 shadow-2xl border border-gray-800 overflow-hidden">
              {/* Code Window Header */}
              <div className="flex items-center px-4 py-2 bg-[#0a192f] border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm mx-auto">
                  portfolio.jsx
                </div>
              </div>

              {/* Animated Code */}
              <div className="p-4 font-mono text-sm sm:text-base">
                <div className="text-gray-400 mb-4">// My Latest Project</div>
                <div className="text-yellow-400 mb-2">
                  function <span className="text-gray-300">AwesomeProject</span>
                  () {"{"}
                </div>
                <div className="text-gray-300 ml-4 mb-2">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="text-gray-300 ml-8 mb-2">
                  &lt;<span className="text-green-400">div</span>{" "}
                  <span className="text-yellow-400">className</span>=
                  <span className="text-blue-400">"container"</span>&gt;
                </div>
                <div className="text-gray-300 ml-12 mb-2">
                  &lt;<span className="text-green-400">h1</span>&gt;Innovative
                  Solution&lt;/<span className="text-green-400">h1</span>&gt;
                </div>
                <div className="text-gray-300 ml-12 mb-2">
                  &lt;<span className="text-green-400">p</span>&gt;Built with
                  Next.js & Tailwind&lt;/
                  <span className="text-green-400">p</span>&gt;
                </div>
                <div className="text-gray-300 ml-8 mb-2">
                  &lt;/<span className="text-green-400">div</span>&gt;
                </div>
                <div className="text-gray-300 ml-4 mb-2">);</div>
                <div className="text-yellow-400">{"}"}</div>

                {/* Animated Cursor */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="inline-block w-2 h-6 bg-yellow-400 ml-1"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-400 text-sm mb-2"
          >
            Scroll Down
          </motion.div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-yellow-400"
          >
            <motion.path
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M12 5v14M19 12l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
