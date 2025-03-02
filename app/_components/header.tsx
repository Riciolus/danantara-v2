"use client";

import Image from "next/image";

const Gradient = () => {
  return (
    <div className="absolute bg-[#FFECA2] rounded-full w-[750px] h-[700px] blur-3xl opacity-25 z-10">
      a
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* This div takes up the available space and centers the content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="relative w-full flex justify-center ">
          <h1 className="absolute -top-4 text-center text-9xl font-semibold text-neutral-800 z-20 font-(family-name:--font-grenze-gotisch)">
            Daya Anagata Nusantara
          </h1>
          <Image
            className="mx-auto z-30"
            src="/garuda.png"
            alt="@garuda"
            width={700}
            height={300}
          />
        </div>
        <Gradient />
      </div>

      {/* This ensures <h5> stays at the bottom */}
      <h5 className="font-(family-name:--font-grenze-gotisch) text-amber-800 text-center mb-10 text-3xl">
        “Untuk Kemakmuran Indonesia”
      </h5>
    </div>
  );
};

export default Header;
