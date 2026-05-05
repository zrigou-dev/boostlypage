import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-5xl text-green-500" />,
      title: "WhatsApp",
      details: "Instant messaging",
      link: "https://wa.me/+212770502436",
      color: "hover:shadow-green-400/30",
      pulse: "bg-green-400/20",
    },
    {
      icon: <FaPhoneAlt className="text-5xl text-blue-400" />,
      title: "Phone",
      details: "Direct voice call",
      link: "tel:+212770502436",
      color: "hover:shadow-blue-400/30",
      pulse: "bg-blue-400/20",
    },
    {
      icon: <FaLinkedin className="text-5xl text-[#0077B5]" />,
      title: "LinkedIn",
      details: "Professional network",
      link: "https://linkedin.com/in/mohamed-zrigou",
      color: "hover:shadow-[#0077B5]/30",
      pulse: "bg-[#0077B5]/20",
    },
    {
      icon: <FaEnvelope className="text-5xl text-yellow-400" />,
      title: "Email",
      details: "For formal inquiries",
      link: "mailto:zrigoudev@gmail.com",
      color: "hover:shadow-yellow-400/30",
      pulse: "bg-yellow-400/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#0a192f] py-24 overflow-hidden"
    >
      {/* Animated floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {mounted && ["</>", "{}", "()", "[]", "=>", "++"].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute text-2xl text-yellow-400/50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        {/* Section header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Contact <span className="text-yellow-400">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-yellow-400 mx-auto"
          />
        </motion.div>

        {/* Contact cards - now 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 25px -5px ${method.pulse}`,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                hover: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              className={`bg-[#112240] rounded-xl p-6 text-center border-2 border-gray-800 hover:border-yellow-400 transition-all duration-500 ${method.color} group relative overflow-hidden`}
            >
              {/* Animated background effect on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.1, scale: 1.2 }}
                className={`absolute inset-0 ${method.pulse} rounded-full`}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block mb-4"
              >
                {method.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{method.details}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-1.5 text-sm border-2 border-yellow-400 text-yellow-400 rounded-lg group-hover:bg-yellow-400 group-hover:text-[#0a192f] transition duration-300"
              >
                {method.title === "Email" ? "Send Email" : "Connect"}
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Animated CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md"
            />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 relative z-10">
                Ready to start your project? Let's talk!
              </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
