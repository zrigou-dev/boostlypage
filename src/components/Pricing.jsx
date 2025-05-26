// components/Pricing.jsx
export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "1 Landing Page",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Revisions",
      ],
    },
    {
      name: "Standard",
      price: "$399",
      features: [
        "Up to 3 Landing Pages",
        "Responsive Design",
        "Advanced SEO Optimization",
        "5 Revisions",
        "Email Support",
      ],
    },
    {
      name: "Premium",
      price: "$699",
      features: [
        "Up to 7 Landing Pages",
        "Responsive Design",
        "Full SEO Optimization",
        "Unlimited Revisions",
        "Priority Support",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-[#f8fafc] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Pricing Plans
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map(({ name, price, features }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {name}
            </h3>
            <p className="text-4xl font-extrabold text-[#2563eb] mb-6">
              {price}
            </p>
            <ul className="mb-8 space-y-3 flex-grow text-slate-700">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#2563eb] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              target="_blank"
              href="https://wa.me/+212767496526"
              className="bg-[#2563eb] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition block text-center"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
