import React from "react";

const educationItems = [
  {
    title: "General Education",
    image: "/images/general-edu.jpg",
  },
  {
    title: "Religious Education",
    image: "/images/religious-edu.jpg",
  },
];

export default function EducationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Educational
        </h2>


        <div className="mt-3 w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">

          {educationItems.map((item, i) => (
            <div
              key={i}
              className="bg-white w-full max-w-[420px] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="py-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
