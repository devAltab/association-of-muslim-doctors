import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-4">
              AMD • Since 2009
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Quality healthcare
              <span className="text-emerald-700"> with
                <TypeAnimation
                  sequence={[
                    " modern technology",
                    1500,
                    " responsibility",
                    1500,
                    " trust & transparency",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-xl">
              Association of Muslim Doctors (AMD) unites healthcare
              professionals to serve society with excellence, ethics, and empathy—
              organizing medical camps, conferences, and continuous learning for
              doctors across the country.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition">
                Join as a Member
              </button>
              <button className="px-5 py-2.5 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition">
                Upcoming Conferences
              </button>
            </div>


            <div className="grid grid-cols-3 gap-4 max-w-md text-center text-xs sm:text-sm">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 py-3">
                <div className="text-lg sm:text-2xl font-bold text-emerald-700">
                  500+
                </div>
                <div className="text-slate-500 mt-1">Active Members</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 py-3">
                <div className="text-lg sm:text-2xl font-bold text-emerald-700">
                  30+
                </div>
                <div className="text-slate-500 mt-1">Cities Covered</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 py-3">
                <div className="text-lg sm:text-2xl font-bold text-emerald-700">
                  15+
                </div>
                <div className="text-slate-500 mt-1">Years of Service</div>
              </div>
            </div>
          </div>


          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900/80">
              <div className="relative h-64 sm:h-80 lg:h-96">
                {/* Replace src with your real group/photo image */}
                <img
                  src="/images/amd-hero.jpg"
                  alt="AMD Conference"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-1">
                    AMDCON 2016 • Patna
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    National conference bringing together specialists,
                    surgeons, and physicians from across India.
                  </h3>
                </div>
              </div>
            </div>


            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                AMD
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Community Health Camps
                </p>
                <p className="text-[11px] text-slate-500">
                  Free check-ups and awareness drives every year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}