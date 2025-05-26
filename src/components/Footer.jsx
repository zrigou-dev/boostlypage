import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-gray-300 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-white">BoostlyPage</h3>
          <p className="mt-2 text-sm">
            &copy; {new Date().getFullYear()} BoostlyPage. All rights reserved.
          </p>
        </div>

        <nav className="flex space-x-8 text-sm font-medium">
          <a
            href="#hero"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="hover:text-white transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <div className="flex space-x-6 text-2xl text-gray-400">
          <a
            href="mailto:contact@hexacodify.com"
            target="_blank"
            aria-label="Email"
            className="hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            target="_blank"
            href="https://wa.me/+212767496526"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
