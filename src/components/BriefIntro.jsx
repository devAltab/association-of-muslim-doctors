export default function BriefIntro() {
  return (<>
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">


        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 h-px bg-gray-300"></div>

          <h2 className="px-6 text-gray-800 text-lg sm:text-xl font-semibold tracking-[0.25em] uppercase">
            Brief Introduction
          </h2>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            AMD is a collection of likeminded people for a common cause. Islam
            came as a blessing for all mankind (Al-Quran 21:107), and it is the
            duty of all Muslims to serve humanity through knowledge, compassion,
            and professional excellence. Association of Muslim Doctors works to
            bring together doctors and healthcare professionals to support the
            community with high-quality medical services, ethical practice, and
            continuous medical education.
          </p>
        </div>

      </div>
    </section>
  </>
  );
}