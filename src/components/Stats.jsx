// components/Stats.jsx
export default function Stats() {
  return (
    <section id="stats" className="bg-[#f8fafc] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">150+</p>
            <p className="mt-2 text-lg font-semibold text-slate-700">Projects Completed</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">7</p>
            <p className="mt-2 text-lg font-semibold text-slate-700">Years of Experience</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">100%</p>
            <p className="mt-2 text-lg font-semibold text-slate-700">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
