import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { section: "Tentang", url: "#tentang" },
  { section: "Perjalanan", url: "#perjalanan" },
  { section: "Visi & Misi", url: "#visi&misi" },
  { section: "Narahubung", url: "#narahubung" },
];

const Navbar = () => {
  return (
    <div className="fixed w-full mt-3 z-[60]">
      <Link href="/">
        <Image
          className="absolute left-5"
          src={"/logoBlack.png"}
          alt="@icon-black"
          width={120}
          height={120}
        />
      </Link>

      <nav className="mx-auto  w-fit flex gap-3 shadow-inner  rounded-xl font-serif border backdrop-blur-lg  bg-gradient-to-r from-neutral-300/70 to-red-300/60">
        {navLinks.map(({ section, url }, i) => (
          <Link
            key={url}
            href={url}
            //   still not working
            className={` hover:bg-amber-50/50 text-sm transition-colors py-2.5 px-3 rounded-xl  ${
              i === 0 && "pl-1"
            }, ${i === 2 && "pr-1"}`}
          >
            {section}
          </Link>
        ))}
        <span className="bg-amber-200 py-2.5 px-3 rounded-xl border-l ">🇮🇩</span>
      </nav>
    </div>
  );
};

export default Navbar;
