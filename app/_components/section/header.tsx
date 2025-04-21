"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { fadeIn } from "../../_lib/anim";
import { useCallback, useState } from "react";

const GarudaScene = dynamic(() => import("~/app/_components/garuda/scene"), {
  ssr: false,
});

// Yellow gradient on the back of header text & garuda.
const Gradient = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFECA2] rounded-full w-[750px] h-[700px] blur-3xl opacity-25 z-10" />
  );
};

const GrainedBackground = () => {
  return (
    <div className="absolute w-full h-full opacity-80 md:opacity-60">
      <Image
        src="/images/header/grained-cloud.png"
        alt="cloud"
        fill
        draggable={false}
        className="object-contain scale-y-[300%] scale-x-150 sm:scale-y-200 md:scale-150 lg:scale-100 "
      />
    </div>
  );
};

const CloudBackground = () => {
  return (
    <div className="absolute overflow-hidden -bottom-0  left-0 scale-[450%] sm:scale-[300%]  md:scale-x-100    md:scale-y-100  w-full h-auto z-[100]">
      <Image
        src="/images/header/white-cloud-bottom.png"
        alt="cloud"
        width={500}
        height={300}
        draggable={false}
        className="object-bottom w-full"
      />
    </div>
  );
};

function LoadingSpinner() {
  return (
    <motion.div
      key="loading"
      exit={{ opacity: 0 }}
      className="fixed w-full h-full inset-0 flex items-center justify-center bg-amber-50 z-[500]"
    >
      <Image
        src="/images/logo.png"
        alt="logo"
        width={38}
        height={38}
        className="opacity-75"
      />
    </motion.div>
  );
}

const Header = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const updateModelStatus = useCallback(() => {
    setIsModelLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>{!isModelLoaded && <LoadingSpinner />}</AnimatePresence>

      {/* <header className="relative bg-gradient-to-t from-amber-50 to-amber-100/60  max-h-screen overflow-hidden  flex flex-col h-dvh">
        <div className="flex flex-col h-full ">
          <div className="relative  w-full h-full flex flex-col justify-center items-center ">
            {isModelLoaded && (
              <>
                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="absolute h-fit top-[18%] sm:top-[16%] md:top-[13%] lg:top-[10%] inset-0  text-center text-6xl sm:text-7xl   md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-neutral-800 z-20 font-(family-name:--font-moglan)"
                >
                  Daya Anagata Nusantara
                </motion.h1>

                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  // top-[50vw] sm:top-[20vw] xl:top-15
                  className="absolute z-20 text-center whitespace-nowrap font-semibold text-red-800 "
                  style={{
                    fontFamily: "var(--font-moglan)",
                    fontSize: "clamp(2rem, 9vw, 10rem)",
                  }}
                >
                  Daya Anagata Nusantara
                </motion.h1>
              </>
            )}

            <div className="flex flex-1 justify-center items-center w-full h-full 0">
              <GarudaScene onLoaded={() => setIsModelLoaded(true)} />
            </div>
          </div>
        </div>

        {/* Bottom Header *a/}
        <div className="absolute bottom-0 inset-x-0 flex mx-auto w-fit">
          <h5 className="font-(family-name:--font-grenze-gotisch) text-center  text-amber-800  mb-6 text-3xl z-[210]">
            “Untuk Kemakmuran Indonesia”
          </h5>
        </div>

        <Gradient />

        <GrainedBackground />

        <CloudBackground />
      </header> */}

      <header className="relative flex flex-col justify-between h-[100vh] max-h-screen overflow-hidden bg-gradient-to-t from-amber-50 to-amber-100/60">
        {/* Background Elements */}
        <Gradient />
        <GrainedBackground />
        <CloudBackground />

        {/* Main Content */}
        <div className="relative flex flex-col items-center w-full h-full z-10">
          {/* Center container for both title and model */}
          <div className="flex flex-col items-center justify-center h-full w-full relative">
            {/* 3D Model Container - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <GarudaScene onLoaded={updateModelStatus} />
            </div>

            {/* Title - Overlapping with the model */}
            {isModelLoaded && (
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative z-20 text-center leading-16 md:leading-normal whitespace-nowrap sm:whitespace-normal font-semibold text-neutral-800 mb-[60vh]"
                style={{
                  fontFamily: "var(--font-moglan)",
                  fontSize: "clamp(4rem, 8.5vw, 9rem)",
                }}
              >
                <span className="block mt-28 sm:mt-0 sm:inline">Daya Anagata</span>{" "}
                <span className="block mb-10 sm:mb-0 sm:inline">Nusantara</span>
              </motion.h1>
            )}
          </div>

          {/* Bottom Tagline */}
          <div className="w-full mb-6 z-[500]">
            <h5
              className="text-center text-amber-800 text-2xl sm:text-3xl ]"
              style={{ fontFamily: "var(--font-grenze-gotisch)" }}
            >
              `&quot;`Untuk Kemakmuran Indonesia`&quot;`
            </h5>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
