// components/FAQ.jsx

"use client"
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a landing page?",
    answer:
      "Typically, a landing page takes between 3 to 7 days depending on the complexity and features required.",
  },
  {
    question: "Do you offer custom designs?",
    answer:
      "Yes, all landing pages are tailored to your brand and specific needs.",
  },
  {
    question: "Can I update the landing page myself later?",
    answer:
      "Absolutely! We provide you with easy-to-use tools or guidelines to update content yourself.",
  },
  {
    question: "What if I need support after the page is live?",
    answer:
      "We offer ongoing support packages to keep your landing page updated and running smoothly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white py-20 px-6 md:px-20 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="text-lg font-semibold text-[#2563eb] flex justify-between items-center">
              {question}
              <span className="ml-4 text-2xl select-none">
                {activeIndex === index ? "-" : "+"}
              </span>
            </h3>
            {true  && (
              <p className="mt-3 text-slate-700">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
