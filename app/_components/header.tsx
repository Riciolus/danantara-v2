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
    <header className="max-h-screen flex flex-col h-[85%] md:h-full">
      {/* This div takes up the available space and centers the content */}
      <div className="relative flex flex-col  h-full ">
        {/* idea: giving border-b    */}
        {/* <div className="relative w-full h-[280px]XXX rounded-b-4xl bg-red-400/70 flex flex-col justify-center items-center "> */}
        {/* <Image
            className="mx-auto z-30"
            src="/garuda.png"
            alt="@garuda"
            width={700}
            height={300}
          /> */}
        {/* </div> */}
        <div className="relative w-full  h-full mt-16  justify-center items-center ">
          <h1 className="absolute  h-fit top-0 inset-0  text-center text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-neutral-800 z-20 font-(family-name:--font-grenze-gotisch)">
            Daya Anagata Nusantara
          </h1>
          <div className="flex md:pt-3 justify-center items-center  h-full w-screen">
            <GarudaScene />
          </div>
        </div>
        <Gradient />
        {/* <div className="absolute bg-red-300 rounded-full right-0 w-[750px] h-[700px] blur-3xl opacity-25 z-10" /> */}
      </div>

      {/* This ensures <h5> stays at the bottom */}
      <h5 className="font-(family-name:--font-grenze-gotisch) text-amber-800 text-center mb-3 text-3xl">
        “Untuk Kemakmuran Indonesia”
      </h5>
    </header>
  );
};

export default Header;
