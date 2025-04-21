import { motion } from "motion/react";
import { fadeIn, stagger } from "~/app/_lib/anim";
import SectionWrapper from "../section-wrapper";

const JourneySection = () => {
  return (
    <SectionWrapper id="perjalanan">
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
          Perjalanan Menggapai Kemakmuran Indonesia
        </motion.h2>

        <div>
          Setiap aset dan sumber daya negara harus dikelola secara efektif dan tepat
          sasaran agar manfaatnya dapat langsung dirasakan oleh seluruh rakyat
          Indonesia, sesuai dengan upaya mengoptimalkan pengamalan mandat Pasal 33
          Ayat 3 Undang Undang Dasar 1945 serta Misi Asta Cita terkait pengelolaan
          kekayaan negara.
        </div>

        <div className="mt-5">
          “Semua kekayaan kita harus sebesar-besarnya untuk kepentingan dan
          kemakmuran rakyat kita (rakyat Indonesia).”
        </div>

        <div className="mt-2">
          Pidato Presiden Prabowo Subianto pada Sidang Paripurna MPR RI dalam rangka
          Pelantikan Presiden dan Wakil Presiden RI Terpilih Periode 2024-2029
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default JourneySection;
