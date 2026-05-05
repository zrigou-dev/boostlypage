"use client";
// components/Skills.js
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <FaReact className="text-4xl text-blue-400" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt className="text-4xl text-purple-400" />,
      skills: ["React Native", "Expo", "Mobile UI/UX"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Back-End Systems",
      icon: <FaServer className="text-4xl text-green-400" />,
      skills: ["Node.js", "Express.js", "REST & GraphQL", "Authentication"],
      color: "from-green-500 to-green-700",
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-4xl text-yellow-400" />,
      skills: ["MongoDB", "Firebase", "Supabase", "PostgreSQL"],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Cloud & Infrastructure",
      icon: <SiDocker className="text-4xl text-red-400" />,
      skills: ["AWS / GCP", "Docker", "CI/CD Pipelines", "Serverless"],
      color: "from-red-500 to-red-700",
    },
    {
      title: "Code Quality",
      icon: <FaCode className="text-4xl text-indigo-400" />,
      skills: ["ESLint", "Prettier"],
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#0a192f] py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
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
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
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
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`bg-gradient-to-br ${category.color} rounded-xl p-6 h-full transform hover:-translate-y-2 transition-all duration-300 shadow-lg`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ x: 5 }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span className="text-gray-100">{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skill level indicator (optional) */}
                <div className="mt-6">
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${90 - index * 5}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-white rounded-full`}
                    ></motion.div>
                  </div>
                  <div className="text-right mt-1 text-xs text-white/70">
                    Expert Level
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional expertise section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#112240] rounded-xl p-8 border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Additional Expertise
              </h3>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-wrap gap-3">
                {[
                  "Redux",
                  "Jest",
                  "Vite",
                  "Plasmo",
                  "Framer Motion",
                  "Linux",
                  "Serverless",
                  "Git / GitHub",
                  "WebSockets",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#0a192f] text-gray-300 rounded-full border border-gray-700 hover:border-yellow-400 transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
