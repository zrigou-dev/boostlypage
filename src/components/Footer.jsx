// components/Footer.js
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a192f] border-t border-gray-800 overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute text-yellow-400"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          >
            {["</>", "{ }", "=>", "()", "[]", "++", "</>", "♠"][i]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center">
          {/* Logo/brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 group"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3 transform group-hover:rotate-12 transition">
              <span className="text-[#0a192f] font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-100">
              M.ZRIGOU
            </span>
          </motion.div>

          {/* Minimal social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            <motion.a
              href="https://wa.me/+212770502436"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaWhatsapp className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mohamed-zrigou"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
          </motion.div>

          {/* Copyright with subtle animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-gray-400 text-sm mb-2">
              Crafted with passion and
            </div>
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
              className="inline-block text-yellow-400 font-medium"
            >
              Next.js + Tailwind CSS
            </motion.div>
            <div className="text-gray-500 text-xs mt-4">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-[#112240] border border-gray-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-[#0a192f] transition duration-300"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
