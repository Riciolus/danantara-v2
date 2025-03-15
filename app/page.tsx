"use client";

import Navbar from "./_components/section/navbar";
import Header from "./_components/section/header";
import AboutSection from "./_components/section/about";
import SectionSpacer from "./_components/section-spacer";

export default function Home() {
  return (
    <div className="relative text-neutral-900 flex flex-col  overflow-y-hidden">
      <Navbar />

      <Header />

      <SectionSpacer />

      <AboutSection />
    </div>
  );
}
