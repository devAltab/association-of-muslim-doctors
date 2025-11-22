

import Hero from "../components/Hero";
import BriefIntro from "../components/BriefIntro";
import ActivitySection from "../components/ActivitySection";
import EducationSection from "../components/EducationSection";
import ConferenceSection from "../components/ConferenceSection";
// import logo from "../public/images/logo.png";



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <Hero />
      <BriefIntro />
      <ActivitySection />
      <EducationSection />
      <ConferenceSection />

    </div>
  );
};




