"use client";

import dynamic from "next/dynamic";

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
    <header className="relative max-h-screen flex flex-col h-[85%] md:h-full">
      {/* This div takes up the available space and centers the content */}
      <div className="flex flex-col  h-full ">
        {/* idea: giving border-b    */}
        {/* <div className="relative w-full h-[280px] rounded-b-4xl bg-red-400/70 flex flex-col justify-center items-center "/> */}

        <div className="relative w-full h-full flex flex-col justify-center items-center ">
          <h1 className="absolute h-fit top-0 inset-0 mt-28 md:mt-16 text-center text-7xl  md:text-8xl lg:text-8xl xl:text-9xl font-semibold text-neutral-800 z-20 font-(family-name:--font-grenze-gotisch)">
            Daya Anagata Nusantara
          </h1>

          <div className="flex flex-1 justify-center items-center w-full h-full 0">
            <GarudaScene />
          </div>
          <Gradient />
        </div>
      </div>

      {/* This ensures <h5> stays at the bottom */}
      <div className="absolute bottom-0 inset-x-0 flex mx-auto w-fit">
        <h5 className="font-(family-name:--font-grenze-gotisch) text-amber-800  mb-3 text-3xl ">
          “Untuk Kemakmuran Indonesia”
        </h5>
      </div>
    </header>
  );
};

export default Header;
