
// components/Services.jsx
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCloud } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications using modern technologies like Next.js, React, and Tailwind CSS.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-400" />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile apps with React Native and Expo that provide seamless native experiences on both iOS and Android.",
    },
    {
      icon: <FaPalette className="text-4xl text-yellow-400" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces that prioritize user experience and drive engagement.",
    },
    {
      icon: <FaCloud className="text-4xl text-yellow-400" />,
      title: "Cloud & DevOps Solutions",
      description:
        "Designing scalable cloud architectures, automating CI/CD pipelines, and ensuring reliable infrastructure deployment for robust applications.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
      title: "Chrome Extension Development",
      description:
        "Building powerful browser extensions using Plasmo, enabling enhanced functionality and seamless integration with the Chrome browser.",
    },
  ];

  return (
    <section id="services" className="bg-[#112240] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I provide a comprehensive range of digital services to help businesses
            grow and succeed in the modern web landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#0a192f] p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all duration-300 shadow-lg group"
            >
              <div className="mb-6 p-4 bg-[#1e2f4a] rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
