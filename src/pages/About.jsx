import React from "react";

export default function About() {
  return (
    <section className="flex items-center justify-center px-6 py-10 bg-transparent">
      
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl">

        {/* Left (Image Section) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <div
            className="
              p-3
              rounded-2xl
              border border-slate-300/20
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              hover:scale-105
              transition-all duration-300
              bg-white/5 backdrop-blur-md
              w-72 md:w-auto
            "
          >
            <img
              src="/images/logo.png"
              alt="About Us"
              className="w-56 sm:w-64 md:w-72 rounded-2xl object-contain"
            />
          </div>
        </div>

        {/* Right (Text Section) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-5 text-center md:text-left">
            About Us
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-center md:text-left">
            AMD is a collection of likeminded people for a common cause. Islam came 
            as a blessing for all mankind (Al-Quran 21:107) and it is duty of all 
            Muslims to exhibit this very basic tenant in the deeds and action of their 
            daily life. This was the background in which some young Muslim Doctors 
            of Bihar decided to form a registered body in its inaugural meeting at 
            Hajipur on 20th Feb 2009. About 35 Doctors attended under the banner of 
            Islamic Medical Association of India (IMAI) by the initiation of Dr. Md 
            Athar Ansari Convener with steering committee lead by Founder Secretary 
            Dr. Abbas Mustafa, with an idea to organise Muslim Doctors in the form 
            of an association based on moral values and basic teachings of Islam.
          </p>
        </div>
      </div>

    </section>
  );
}
