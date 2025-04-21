import { fadeIn, stagger } from "~/app/_lib/anim";
import SectionWrapper from "../section-wrapper";
import { motion } from "motion/react";

const Template = ({ title, desc }: { title: string; desc: string }) => {
  return (
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
        {title}
      </motion.h2>

      <motion.div variants={fadeIn}>{desc}</motion.div>
    </motion.div>
  );
};

const VisionAndMissionSection = () => {
  return (
    <SectionWrapper id="visi&misi">
      <div className="mx-16s">
        <div className="text-left">
          <Template
            title="Visi"
            desc="Sebagai pengelola investasi terkemuka, di mana BUMN strategis akan menjadi enabler penempatan investasinya, Danantara Indonesia mendorong transformasi ekonomi Indonesia dengan menumbuhkan badan Sovereign Wealth Fund berskala dunia, mendukung pembangunan nasional dan menciptakan kemakmuran bagi seluruh rakyat Indonesia."
          />
        </div>
        <div className="text-right">
          <Template
            title="Misi"
            desc="1. Mengelola kekayaan negara secara profesional, transparan, dan berkelanjutan sesuai dengan prinsip good governance untuk mendorong kesejahteraan rakyat, sebagaimana diamanatkan dalam Pasal 33 Ayat 3 UUD 1945 dan misi Asta Cita.
            2. Mengoptimalkan dan mengelola aset BUMN untuk menciptakan nilai tambah ekonomi yang signifikan.
            "
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisionAndMissionSection;
