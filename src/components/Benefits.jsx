// components/Benefits.jsx
export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Why Choose LaunchCraft?
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          We deliver exceptional landing pages designed to boost your
          conversions, tailored to your brand and goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-slate-800">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition">
          <svg
            className="w-12 h-12 mb-4 text-sky-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">High Conversion Focus</h3>
          <p className="text-slate-600">
            Landing pages built with proven strategies to maximize your leads
            and sales.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition">
          <svg
            className="w-12 h-12 mb-4 text-sky-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-slate-600">
            Get your landing page ready quickly without compromising on quality.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition">
          <svg
            className="w-12 h-12 mb-4 text-sky-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l9 21H3L12 2z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Custom Tailored Design</h3>
          <p className="text-slate-600">
            Every landing page is uniquely crafted to match your brand identity
            perfectly.
          </p>
        </div>
      </div>
    </section>
  );
}
