import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn } from "~/app/_lib/anim";

const Footer = () => {
  return (
    <div id="narahubung" className="relative  overflow-hidden bg-footer-base pt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className=" font-poppins tracking-tight text-sm">
            <footer className="flex flex-col  justify-between  mx-auto bg-footer-primary text-white rounded-t-2xl p-3 sm:p-5 md:px-7 md:py-5">
              <div className="flex flex-col lg:flex-row lg:gap-10 mb-8">
                <div className="w-full lg:flex-1 mb-6 lg:mb-0">
                  <h2 className="font-semibold text-2xl sm:text-3xl font-moglan">
                    Danantara
                  </h2>
                  <p className="text-neutral-400 mt-2 font-light text-sm sm:text-base">
                    ​Danantara adalah badan pengelola investasi strategis Indonesia
                    yang mengoptimalkan aset negara untuk mendukung pertumbuhan
                    ekonomi nasional.
                  </p>
                </div>

                <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-5 text-neutral-500 text-sm sm:text-base">
                  <div>
                    <span className="text-neutral-400 block mb-1">Alamat</span>
                    <p>
                      Danantara Indonesia Sentra Mandiri Jl. R.P. Soeroso No.2-4
                      Jakarta Pusat, 10330, Indonesia
                    </p>
                  </div>
                  <div>
                    <span className="text-neutral-400 block mb-1">Email</span>
                    <p>contact@danantaraindonesia.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 mt-28">
                <div>
                  <Image
                    src="/images/footer/bumn.png"
                    alt="bumn"
                    width={124}
                    height={50}
                    className="h-auto w-24 sm:w-[124px]"
                  />
                </div>

                <div className="text-center sm:text-right">
                  <span className="font-poppins text-neutral-500 text-xs sm:text-sm">
                    © 2025 Badan Pengelola Investasi Daya Anagata Nusantara
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
