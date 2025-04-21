"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { navFadeIn } from "~/app/_lib/anim";

type TLanguage = "id" | "en";

const navLinks = [
  { section: "Tentang", url: "#tentang" },
  { section: "Perjalanan", url: "#perjalanan" },
  { section: "Visi & Misi", url: "#visi&misi" },
  { section: "Kepemimpinan", url: "#kepemimpinan" },
  { section: "Narahubung", url: "#narahubung" },
];

const Navbar = () => {
  const [lang, setLang] = useState<TLanguage>("id");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-screen mt-2 z-[505]">
      {/* Upper Corner logo */}
      <div className="hidden md:flex">
        <Link href="/">
          <Image
            className="absolute left-5"
            src="/images/logoBlack.png"
            alt="icon-black"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <nav className="mx-auto w-[90%] md:w-fit flex items-center justify-between md:gap-1 py-1.5 px-4 md:px-1 border border-neutral-600/30 shadow-xs inset-shadow-2xs shadow-neutral-400/40 bg-neutral-50/50 backdrop-blur-md font-(family-name:--font-poppins) rounded-xl relative">
        {/* Mobile Logo */}
        <div className="md:hidden flex items-center px-2">
          <Link href="/">
            <Image
              src="/images/logoBlack.png"
              alt="icon-black"
              width={96}
              height={96}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          {navLinks.map(({ section, url }) => (
            <Link
              key={url}
              href={url}
              className="flex items-center justify-center bg-transparent    text-xs hover:underline border border-transparent text-neutral-700  transition-all px-1 md:px-2 py-1.5 rounded-lg"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Language Toggle - Desktop */}
        <div className="hidden md:block">
          {lang === "id" ? (
            <button
              onClick={() => setLang("en")}
              className="p-2 rounded-xl cursor-pointer"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/id.svg"
                alt="ID"
                width="20"
                height="20"
                className="rounded-sm border border-gray-300"
              />
            </button>
          ) : (
            <button
              onClick={() => setLang("id")}
              className="p-2 rounded-xl cursor-pointer"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/us.svg"
                alt="US"
                width="20"
                height="20"
                className="rounded-sm border border-gray-300"
              />
            </button>
          )}
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-sm p-1.5 rounded-xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            "X"
          ) : (
            <Image
              src="/images/nav/hamburger.svg"
              alt="menu"
              width={20}
              height={20}
            />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={navFadeIn}
            className="absolute top-full left-0 right-0 w-full mt-2 py-3 px-4 bg-amber-50/95 backdrop-blur-md border border-neutral-600/30 rounded-xl shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ section, url }) => (
                <Link
                  key={url}
                  href={url}
                  onClick={closeMenu}
                  className="flex items-center py-2 px-3 bg-transparent hover:bg-lime-50/40 hover:inset-shadow-2xs text-sm border border-transparent text-neutral-700 hover:border-neutral-300 transition-all rounded-lg"
                >
                  {section}
                </Link>
              ))}

              {/* Language Toggle - Mobile */}
              <div className="flex items-center py-2 px-3">
                {lang === "id" ? (
                  <button
                    onClick={() => setLang("en")}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/id.svg"
                      alt="ID"
                      width="20"
                      height="20"
                      className="rounded-sm border border-gray-300"
                    />
                    <span className="text-sm text-neutral-700">
                      Bahasa Indonesia
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setLang("id")}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/us.svg"
                      alt="US"
                      width="20"
                      height="20"
                      className="rounded-sm border border-gray-300"
                    />
                    <span className="text-sm text-neutral-700">English</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
