// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-20 py-6">
        <div className="text-2xl font-black text-sky-700">LaunchCraft</div>
        <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
          <a href="#features" className="hover:text-sky-700 transition">
            Features
          </a>
          <a href="#portfolio" className="hover:text-sky-700 transition">
            Portfolio
          </a>
          <a href="#pricing" className="hover:text-sky-700 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-sky-700 transition">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:block bg-sky-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-sky-700 transition"
        >
          Get a Quote
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Beautiful Landing Pages
            <br /> That Drive Results
          </h1>
          <p className="text-lg text-slate-700 mb-8 max-w-xl">
            Get a premium, high-converting landing page designed to reflect your
            brand and capture more leads.
          </p>
          <a
            target="_blank"
            href="https://wa.me/+212767496526"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-sky-700 transition"
          >
            Let’s Build Yours →
          </a>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Landing Page Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
