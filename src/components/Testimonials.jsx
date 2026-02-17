
// components/Testimonials.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "CEO, TechSolutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Mohamed delivered an exceptional platform that perfectly met our needs. His attention to detail and technical expertise are impressive. Highly recommended!",
    },
    {
      name: "Sarah Martin",
      role: "Marketing Director, CreativeAgency",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Working with Mohamed was a pleasure. He understood our vision immediately and brought it to life with a stunning design and smooth functionality.",
    },
    {
      name: "David Cohen",
      role: "Founder, StartUp Inc.",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      text: "Fast, reliable, and incredibly skilled. Mohamed improved our site's performance significantly and fixed issues we've had for months.",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#0a192f] py-24 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">
            Don't just take my word for it—hear what my clients have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] p-8 rounded-xl border border-gray-800 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-4xl text-yellow-400/20 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
