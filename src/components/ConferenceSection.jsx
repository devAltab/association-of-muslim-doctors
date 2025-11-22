import React from "react";

const conferences = [
  { year: "2019", image: "/images/conf-2019.jpg" },
  { year: "2018", image: "/images/conf-2018.jpg" },
  { year: "2017", image: "/images/conf-2017.jpg" },
  { year: "2014", image: "/images/conf-2014.jpg" },
  { year: "2013", image: "/images/conf-2013.jpg" },
];

export default function ConferenceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Conferences
        </h2>

        <div className="mt-3 w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">

          {conferences.map((conf, i) => (
            <div
              key={i}
              className="relative bg-white w-full max-w-[300px] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1 cursor-pointer"
            >

              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {conf.year}
              </div>


              <div className="h-48 w-full overflow-hidden">
                <img
                  src={conf.image}
                  alt={conf.year}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>


              <div className="py-4 px-4 text-center">
                <h3 className="text-md font-semibold text-gray-800">
                  AMDCON {conf.year}
                </h3>
                <p className="text-sm text-gray-500">Annual Medical Conference</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
