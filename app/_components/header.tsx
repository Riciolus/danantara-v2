"use client";

import dynamic from "next/dynamic";
// import Image from "next/image";

const GarudaScene = dynamic(() => import("~/app/_components/garuda/scene"), {
  ssr: false,
});

// Yellow gradient on the back of header text & garuda.
const Gradient = () => {
  return (
    <div className="absolute inset-0 bg-[#FFECA2] rounded-full w-[750px] h-[700px] blur-3xl opacity-25 z-10" />
  );
};

const Header = () => {
  return (
    <header className="h-screen flex flex-col mt-36">
      {/* This div takes up the available space and centers the content */}
      <div className="relative flex flex-col  h-full ">
        {/* idea: giving border-b    */}
        <div className="relative w-full h-[280px]XXX rounded-b-4xl bg-red-400/70 flex flex-col justify-center items-center ">
          {/* <Image
            className="mx-auto z-30"
            src="/garuda.png"
            alt="@garuda"
            width={700}
            height={300}
          /> */}
        </div>
        <div className="relative w-full h-full  justify-center items-center ">
          <h1 className="absolute -top-16  inset-0  text-center text-9xl font-semibold text-neutral-800 z-20 font-(family-name:--font-grenze-gotisch)">
            Daya Anagata Nusantara
          </h1>
          <GarudaScene />
        </div>
        <Gradient />
        {/* <div className="absolute bg-red-300 rounded-full right-0 w-[750px] h-[700px] blur-3xl opacity-25 z-10" /> */}
      </div>

      {/* This ensures <h5> stays at the bottom */}
      <h5 className="font-(family-name:--font-grenze-gotisch) text-amber-800 text-center mb-10 text-3xl">
        “Untuk Kemakmuran Indonesia”
      </h5>
    </header>
  );
};

export default Header;
