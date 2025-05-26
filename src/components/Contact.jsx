export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
        Get In Touch
      </h2>
      <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-10">
        Have questions or ready to start? Contact me directly on WhatsApp or
        email.
      </p>

      <div className="flex justify-center gap-8">
        <a
          target="_blank"
          href="https://wa.me/+212767496526"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1ebe57] transition flex items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10a7 7 0 0114 0c0 1.38-.56 2.63-1.5 3.5L21 21l-5.5-4.5a7 7 0 01-12-6.5z"
            />
          </svg>
          WhatsApp Me
        </a>

        <a
          href="mailto:contact@hexacodify.com"
          target="_blank"
          className="bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1d4ed8] transition flex items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12H8m0 0l4-4m-4 4l4 4"
            />
          </svg>
          Email Me
        </a>
      </div>
    </section>
  );
}
