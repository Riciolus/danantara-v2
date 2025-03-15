"use client";
import { motion } from "motion/react";
import { fadeIn, stagger } from "../../_lib/utils";

const danantaraNames = [
  {
    name: "Daya",
    meaning: "berarti energi",
    //       icon: LineChart,
    color: "bg-amber-100",
  },
  {
    name: "Anagata",
    meaning: "berarti masa depan",
    //       icon: Target,
    color: "bg-amber-200/65",
  },
  {
    name: "Nusantara",
    meaning: "merujuk pada Negara Kesatuan Republik Indonesia",
    //       icon: Globe,
    color: "bg-white",
  },
];

const commitAndGoals = [
  {
    title: "Mendorong transformasi ekonomi",
    desc: "dengan pendekatan profesional",
  },
  {
    title: "Menerapkan good governance",
    desc: "dalam setiap aspek operasional",
  },
  {
    title: "Meningkatkan efisiensi aset",
    desc: "untuk hasil yang optimal",
  },
  {
    title: "Menarik investasi global",
    desc: "untuk pertumbuhan berkelanjutan",
  },
  {
    title: "Memperkuat daya saing Indonesia",
    desc: "di sektor strategis",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-amber-50]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large description card */}
            <motion.div
              className="bg-amber-900 text-white p-8 rounded-2xl lg:col-span-2 row-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <p className="text-2xl  leading-relaxed tracking-wider font-extralight  mb-8 font-(family-name:--font-swanley)">
                &quot;Badan Pengelola Investasi Daya Anagata Nusantara (Danantara
                Indonesia) adalah badan pengelola investasi strategis yang
                mengonsolidasikan dan mengoptimalkan investasi pemerintah untuk
                mendukung pertumbuhan ekonomi nasional.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center">
                  {/* <Shield className="w-6 h-6" /> */}
                </div>
                <div>
                  <h4 className="font-medium">Presiden Prabowo Subianto</h4>
                  <p className="text-white/80 text-sm">Republik Indonesia</p>
                </div>
              </div>
            </motion.div>

            {/* Meaning cards */}
            {danantaraNames.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.color} p-8 rounded-2xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-amber-900/10 rounded-full flex items-center justify-center mb-6">
                  {/* <item.icon className="w-6 h-6 text-amber-900" /> */}
                </div>
                <h3 className="text-2xl font-(family-name:--font-swanley) mb-2 text-amber-900">
                  {item.name}
                </h3>
                <p className="text-amber-900/80">{item.meaning}</p>
              </motion.div>
            ))}

            {/* Commitments large card */}
            <motion.div
              className="bg-amber-100/50 p-8 rounded-2xl lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-(family-name:--font-swanley) mb-6 text-amber-900">
                Komitmen dan Tujuan
              </h3>
              <div className="grid gap-4">
                {commitAndGoals.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-900/10 rounded-full flex items-center  justify-center flex-shrink-0">
                      {/* <ArrowRight className="w-4 h-4 text-amber-900" /> */}
                    </div>
                    <div className="font-poppins">
                      <h4 className="font-medium text-amber-900">{item.title}</h4>
                      <p className="text-amber-900/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Final statement card */}
            <motion.div
              className="bg-white p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <p className="text-lg text-amber-900">
                Dengan langkah-langkah tersebut, Danantara Indonesia bertujuan
                menciptakan kemakmuran yang merata bagi seluruh rakyat Indonesia.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
