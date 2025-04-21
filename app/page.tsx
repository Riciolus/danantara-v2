"use client";

import Navbar from "./_components/section/navbar";
import Header from "./_components/section/header";
import AboutSection from "./_components/section/about";
import HeaderSectionSpacer from "./_components/header-section-spacer";
import Footer from "./_components/section/footer";
import JourneySection from "./_components/section/journey";
import VisionAndMissionSection from "./_components/section/vision-mission";
import LeadershipSection from "./_components/section/leadership";
import RegulatoryBody from "./_components/section/regulator";

export default function Home() {
  return (
    <div className="relative text-neutral-900 flex flex-col  overflow-y-hidden">
      <Navbar />

      <Header />

      <HeaderSectionSpacer />

      <AboutSection />

      <JourneySection />

      <VisionAndMissionSection />

      <LeadershipSection />

      <RegulatoryBody />

      <Footer />
    </div>
  );
}
