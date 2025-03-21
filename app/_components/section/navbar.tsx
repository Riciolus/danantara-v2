"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TLanguage = "id" | "en";

const navLinks = [
  { section: "Tentang", url: "#tentang" },
  { section: "Perjalanan", url: "#perjalanan" },
  { section: "Visi & Misi", url: "#visi&misi" },
  { section: "Narahubung", url: "#narahubung" },
];

const Navbar = () => {
  const [lang, setLang] = useState<TLanguage>("id");

  return (
    <div className="fixed w-screen mt-3 z-[505]">
      {/* Upper Corner logo */}
      <div className="hidden md:flex">
        <Link href="/">
          <Image
            className="absolute left-5"
            src={"/logoBlack.png"}
            alt="@icon-black"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <nav className="mx-auto  w-fit flex md:gap-1 py-1 px-1 md:px-2 border border-neutral-300 shadow-sm inset-shadow-2xs shadow-neutral-400/40 bg-neutral-50/50 backdrop-blur-md font-(family-name:--font-poppins)  rounded-4xl     ">
        {navLinks.map(({ section, url }) => (
          <Link
            key={url}
            href={url}
            className="flex items-center justify-center bg-transparent hover:bg-lime-50 hover:inset-shadow-2xs text-xs hover:underline border border-transparent text-neutral-700 hover:border-neutral-300 transition-all px-1  md:px-2 rounded-4xl"
          >
            {section}
          </Link>
        ))}
        {/* ID */}
        {lang === "id" ? (
          <button
            onClick={() => setLang("en")}
            className="p-2 rounded-xl cursor-pointer"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/id.svg"
              alt="ID Flag"
              width="20"
              height="20"
              className="rounded-sm border border-gray-300"
            />
          </button>
        ) : (
          lang === "en" && (
            <button
              onClick={() => setLang("id")}
              className="p-2 rounded-xl cursor-pointer"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/us.svg"
                alt="US Flag"
                width="20"
                height="20"
                className="rounded-sm border border-gray-300"
              />
            </button>
          )
        )}
      </nav>
    </div>
  );
};

export default Navbar;
