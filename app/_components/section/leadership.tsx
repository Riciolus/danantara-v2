import { fadeIn, stagger } from "~/app/_lib/anim";
import SectionWrapper from "../section-wrapper";
import { motion } from "motion/react";
import Image from "next/image";

// Leadership data array
const DirectionLeaderships = [
  {
    id: 1,
    name: "Rosan Roeslani",
    rank: "CEO",
    image: "/images/leaderships/rosan-roeslani.png",
  },
  {
    id: 2,
    name: "Pandu Patria Sjahrir",
    rank: "Chief Investment Officer",
    image: "/images/leaderships/pandu-patria.png",
  },
  {
    id: 3,
    name: "Dony Oskaria",
    rank: "Chief Operating Officer",
    image: "/images/leaderships/dony-oskaria.png",
  },

  {
    id: 5,
    name: "Erick Thohir",
    rank: "Ketua Pengawas",
    image: "/images/leaderships/erick-thohir.png",
  },
  {
    id: 6,
    name: "Muliaman Hadad",
    rank: "Wakil Ketua Pengawas",
    image: "/images/leaderships/muliaman-hadad.png",
  },
  {
    id: 7,
    name: "Sri Mulyani",
    rank: "Anggota",
    image: "/images/leaderships/sri-mulyani.png",
  },
  {
    id: 8,
    name: "Susilo Bambang Yudhoyono",
    rank: "Dewan Pengawas",
    image: "/images/leaderships/sby.jpg",
  },
  {
    id: 9,
    name: "Joko Widodo",
    rank: "Dewan Pengawas",
    image: "/images/leaderships/jokowi.jpg",
  },
];

const LeadershipSection = () => {
  return (
    <SectionWrapper id="kepemimpinan">
      <motion.div
        className="mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 font-(family-name:--font-moglan)"
          variants={fadeIn}
        >
          Kenali pemimpin kami.
        </motion.h2>

        <motion.div variants={fadeIn}>
          {/* V1 */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
            {DirectionLeaderships.map((leader) => (
              <div
                key={leader.id}
                className="relative flex min-w-[300px] max-w-[400px] group cursor-pointer"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={340}
                  height={324}
                  className="w-full h-full rounded-xl object-cover"
                />

                Gradient background div
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 rounded-b-xl"></div>

                Text content
                <div className="absolute bottom-0 pb-3 px-4 w-full">
                  <h3 className="mt-2 text-lg font-semibold font-moglan text-neutral-200">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-neutral-300">{leader.rank}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="py-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1">
                {DirectionLeaderships.map((leader) => (
                  <div
                    key={leader.id}
                    className="relative group cursor-pointer rounded-lg overflow-hidden group"
                  >
                    <div className="aspect-[6/8] w-full md:h-full relative">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover"
                      />
                      {/* Gradient overlay always visible */}
                      <div className="absolute bottom-0 group-hover:h-44  group-hover:from-footer-base  transition-all left-0 w-full h-24 bg-gradient-to-t from-footer-primary to-transparent"></div>
                    </div>
                    {/* Text content always visible */}
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-base font-poppins font-medium text-white">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-gray-300">{leader.rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div variants={fadeIn}>
            <div className="flex flex-wrap gap-1">
              {WatcherLeaderships.map((leader) => (
                <div
                  key={leader.id}
                  className="relative flex-1 min-w-[200px] max-w-[400] "
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={324}
                    height={324}
                    className="w-full h-full rounded-xl"
                  />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="mt-2 text-lg font-semibold font-moglan text-neutral-200">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-neutral-300">{leader.rank}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}
      </motion.div>
    </SectionWrapper>
  );
};

export default LeadershipSection;
