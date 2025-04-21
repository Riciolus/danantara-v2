"use client";

import Image from "next/image";
import SectionWrapper from "../section-wrapper";
import { BlurIn } from "~/app/_lib/anim";

const regulators = [
  {
    id: 1,
    name: "Badan Pemeriksa Keuangan",
    imagePath: "/images/regulators/bpk.png",
  },
  {
    id: 2,
    name: "Badan Pemeriksa Keuangan dan Pembangungan",
    imagePath: "/images/regulators/bpkp.png",
  },
  {
    id: 3,
    name: "Komisi Pemberantas Korupsi",
    imagePath: "/images/regulators/kpk.png",
  },
  {
    id: 4,
    name: "Kejaksaan Agung",
    imagePath: "/images/regulators/kejagung.png",
  },
  {
    id: 5,
    name: "Pusat Pelaporan dan Analisis Transaksi Keuangan",
    imagePath: "/images/regulators/ppatk.png",
  },
];

const RegulatoryBody = () => {
  return (
    <div className="bg-footer-base text-neutral-50 relative overflow-hidden">
      <SectionWrapper>
        <BlurIn>
          <div className="relative bg-footer-primary rounded-xl z-10 py-16 px-6 flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
            {/* Abstract illustration - top left */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-20 z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFFFFF"
                  d="M42.8,-62.2C54.9,-54.3,63.7,-40.9,69.2,-26.2C74.8,-11.5,77.1,4.6,73.3,19.2C69.5,33.9,59.6,47.2,46.5,56.9C33.4,66.6,16.7,72.8,0.2,72.5C-16.3,72.3,-32.6,65.6,-45.9,55.3C-59.2,45,-69.5,31.1,-74.2,14.8C-78.9,-1.5,-78,-21.2,-69.4,-36.1C-60.8,-51,-44.5,-61.1,-29,-66.5C-13.5,-71.9,1.2,-72.6,16.1,-70.1C31,-67.6,62,-70,42.8,-62.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Abstract illustration - bottom right */}

            {/* disabled because of sizes issues is over the div container */}

            {/* <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 ">

              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFFFFF"
                  d="M39.9,-48.2C51.1,-36.9,59.5,-23.4,62.5,-8.5C65.5,6.4,63.1,22.8,54.6,34.4C46.1,46,31.5,52.8,16.2,57.2C0.9,61.5,-15.1,63.4,-29.7,58.5C-44.3,53.6,-57.5,41.9,-65.2,26.6C-72.9,11.3,-75,-7.6,-69.2,-23.4C-63.3,-39.2,-49.5,-51.9,-34.9,-62C-20.3,-72.1,-5.1,-79.6,5.2,-75.9C15.5,-72.2,28.7,-59.4,39.9,-48.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div> */}

            {/* Dotted pattern - bottom left */}
            <div className="absolute bottom-0 left-6 w-1/4 h-1/4 opacity-20 z-0">
              <div className="grid grid-cols-10 gap-2">
                {Array(100)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
              </div>
            </div>

            <div className="mb-8 md:leading-[4rem] font-semibold ">
              <p className="bg-amber-500/70 rounded-sm text-3xl md:text-4xl px-3 py-1 inline-block mb-2">
                Diawasi
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                oleh Komite Pengawas
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl font-moglan">
                Lembaga kami diawasi oleh regulator terkemuka untuk memastikan
                kepatuhan dan transparansi.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              {regulators.map((regulator) => (
                <div
                  key={regulator.id}
                  className="flex flex-col justify-center items-center p-3"
                >
                  <Image
                    className="grayscale-50 hover:grayscale-0 transition-all opacity-75"
                    src={regulator.imagePath || "/placeholder.svg"}
                    alt={regulator.name}
                    width={54}
                    height={54}
                  />
                  <span className="text-neutral-300 tracking-tighter text-sm font-poppin text-center pt-3 max-w-[120px]">
                    {regulator.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>
    </div>
  );
};

export default RegulatoryBody;
