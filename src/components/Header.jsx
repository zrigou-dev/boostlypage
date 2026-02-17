import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadCV = () => {
    const cvUrl = "/cv.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Zrigou_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-[#0a192f] text-gray-300 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition duration-300">
              <span className="text-[#0a192f] font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-yellow-400 hidden sm:inline-block">
              M.ZRIGOU
            </span>
          </Link>

          <button
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <div className="w-8 flex flex-col space-y-1.5">
              <span
                className="h-0.5 w-full bg-yellow-400 rounded-full transition-transform duration-300"
                style={{
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(5px,5px)"
                    : "none",
                }}
              ></span>
              <span
                className="h-0.5 w-full bg-yellow-400 rounded-full transition-opacity duration-300"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              ></span>
              <span
                className="h-0.5 w-3/4 bg-yellow-400 rounded-full ml-auto transition-transform duration-300"
                style={{
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : "none",
                }}
              ></span>
            </div>
          </button>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/#about"
              className="hover:text-yellow-400 transition duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="hover:text-yellow-400 transition duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="hover:text-yellow-400 transition duration-300 font-medium"
            >
              portfolio
            </Link>
            <Link
              href="/#skills"
              className="hover:text-yellow-400 transition duration-300 font-medium"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="hover:text-yellow-400 transition duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={downloadCV}
            className="hidden md:block px-6 py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-md hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#0a192f] py-4 px-4 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="/#about"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#portfolio"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            portfolio
          </Link>
          <Link
            href="/#testimonials"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/#skills"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={downloadCV}
            className="w-full py-2 bg-yellow-400 text-[#0a192f] font-bold rounded-md hover:bg-yellow-300 transition duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
