"use client";
import { motion } from "motion/react";
import { fadeIn, stagger } from "../../_lib/anim";
import Image from "next/image";
import SectionWrapper from "../section-wrapper";

const danantaraNames = [
  {
    name: "Daya",
    meaning: "Berarti energi, kekuatan",
    color: "bg-amber-100",
    image: "/images/about/image copy.png",
  },
  {
    name: "Anagata",
    meaning: "Berarti masa depan",
    color: "bg-amber-100",
    image: "/images/about/image.png",
  },
  {
    name: "Nusantara",
    meaning: "Merujuk pada Negara Kesatuan Republik Indonesia",
    color: "bg-amber-100",
    image: "/images/about/image copy 2.png",
  },
];

const commitAndGoals = [
  {
    title: "Mendorong transformasi ekonomi",
    desc: "Dengan pendekatan profesional",
  },
  {
    title: "Menerapkan good governance",
    desc: "Dalam setiap aspek operasional",
  },
  {
    title: "Meningkatkan efisiensi aset",
    desc: "Untuk hasil yang optimal",
  },
  {
    title: "Menarik investasi global",
    desc: "Untuk pertumbuhan berkelanjutan",
  },
  {
    title: "Memperkuat daya saing Indonesia",
    desc: "Di sektor strategis",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="tentang">
      <section>
        {/* Main heading */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-gray-900 font-(family-name:--font-moglan)"
            variants={fadeIn}
          >
            Tentang Danantara Indonesia
          </motion.h2>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-1">
          {/* Large description card */}
          <motion.div
            className="relative bg-gradient-to-tr from-amber-900 from-80% to-amber-100 text-white p-8 rounded-xl lg:col-span-2 row-span-1 z-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl lg:text-2xl  leading-relaxed z-10 tracking-wide f ont-extralight  mb-8 font-(family-name:--font-moglan)">
              &quot; Badan Pengelola Investasi Daya Anagata Nusantara (Danantara
              Indonesia) adalah badan pengelola investasi strategis yang
              mengonsolidasikan dan mengoptimalkan investasi pemerintah untuk
              mendukung pertumbuhan ekonomi nasional.&quot;
            </p>
            <div className=" flex items-center md:gap-3 z-10">
              <div className="relative w-16 h-16  rounded-full flex items-center justify-center">
                <Image
                  src="/images/about/ava-president-prabowo.webp"
                  alt="prabowo"
                  fill
                  draggable={false}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="px-2 py-0.5  bg-amber-600/40 rounded-xl backdrop-blur-xl lg:bg-transparent md:p-0 md:backdrop-blur-none">
                <h4 className="text-sm md:text-base font-medium">
                  Presiden Prabowo Subianto
                </h4>
                <p className="text-white/80 text-sm">Republik Indonesia</p>
              </div>
            </div>
            <Image
              src="/images/about/president-prabowo.webp"
              alt="prabowo"
              width={200}
              height={200}
              draggable={false}
              className="absolute right-0 bottom-0 -z-10  opacity-65"
            />
          </motion.div>

          {/* Danantara head-quarter */}
          <motion.div
            className="bg-amber-100 w-full h-full rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/danantara-building.png"
              alt="danantara-building"
              fill
              className="object-cover"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_70%,_rgba(0,0,0,0.6)_120%)]" />
          </motion.div>

          {/* Meaning cards */}
          {danantaraNames.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.color} relative rounded-xl flex flex-col ${
                item.name === "Nusantara" && "col-span-1 md:col-span-2 lg:col-span-1"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt="danantara-building"
                fill
                className="object-cover z-0 opacity-35 rounded-xl"
              />

              <h3 className="relative p-4 text-2xl font-semibold font-moglan mb-2 text-amber-900  w-fit">
                {item.name}
              </h3>

              <p className="relative p-3 text-amber-900/90 font-inter bg-amber-50 italic tracking-tight flex-grow rounded-b-xl">
                {item.meaning}
              </p>
            </motion.div>
          ))}

          {/* Commitments large card */}
          <motion.div
            className="relative p-5 rounded-2xl lg:col-span-2  overflow-hidden bg-yellow-50 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/illus1.png"
              alt="illus"
              width={200}
              height={200}
              className="absolute -right-32 rotate-12 opacity-90 top-0 z-0 scale-150 md:scale-200"
            />

            <h3 className="text-2xl z-10 font-semibold font-(family-name:--font-moglan) mb-4 text-amber-950">
              Komitmen dan Tujuan
            </h3>

            <div className="grid grid-cols-2 gap-1">
              {commitAndGoals.map((item, index) => (
                <div key={index} className="flex z-10 items-start gap-6 py-1">
                  <div>
                    <h4 className=" text-amber-900  font-medium font-(family-name:--font-poppins)">
                      {item.title}
                    </h4>
                    <p className="text-amber-900/90  text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final statement card */}
          <motion.div
            className="relative z-10 bg-teal-950  p-8 rounded-xl "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl tracking-wider  text-neutral-100 font-(family-name:--font-moglan)">
              Dengan langkah-langkah tersebut, Danantara Indonesia bertujuan
              menciptakan kemakmuran yang merata bagi seluruh rakyat Indonesia.
            </p>
            <Image
              src="/images/about/batik-floral.png"
              alt="prabowo"
              width={124}
              height={124}
              className="absolute opacity-60 right-0 bottom-0 -z-10 rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
}
