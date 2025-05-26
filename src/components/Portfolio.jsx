// components/PortfolioGallery.jsx
import Image from "next/image";
import image_1 from "../../public/images/project-1.png";
import image_2 from "../../public/images/project-2.png";
import image_3 from "../../public/images/project-3.png";
import image_4 from "../../public/images/project-4.png";
import image_5 from "../../public/images/project-5.png";
import image_6 from "../../public/images/project-6.png";
export default function PortfolioGallery() {
  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  return (
    <section id="portfolio" className="bg-[#f8fafc] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Our Work
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          A curated selection of landing pages crafted with precision and
          passion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <Image
              src={src}
              alt={`Portfolio sample ${idx + 1}`}
              className="w-full h-56 object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
