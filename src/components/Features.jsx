// components/Features.jsx
export default function Features() {
  const features = [
    {
      title: "Custom Tailored Designs",
      description:
        "Landing pages designed specifically to match your brand identity and goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#2563eb]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20l9-5-9-5-9 5 9 5z" />
          <path d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      title: "Mobile & SEO Optimized",
      description:
        "Responsive designs optimized for search engines to increase your traffic.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#2563eb]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10h18M9 21V3m6 18V3" />
        </svg>
      ),
    },
    {
      title: "Lightning Fast Loading",
      description:
        "Optimized code to ensure your landing page loads instantly on all devices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#2563eb]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="bg-white py-20 px-6 md:px-20 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-[#000000] mb-14 text-center">
        Why Choose Our Service?
      </h2>

      <div className="flex flex-col md:flex-row gap-14 justify-center">
        {features.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-sm mx-auto md:max-w-xs"
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-2xl font-semibold text-[#2563eb] mb-3">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
