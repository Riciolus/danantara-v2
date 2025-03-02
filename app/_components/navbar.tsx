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
    <div className="fixed w-full mt-3 z-[100]">
      <Link href="/">
        <Image
          className="absolute left-5"
          src={"/logoBlack.png"}
          alt="@icon-black"
          width={120}
          height={120}
        />
      </Link>

      <nav className="mx-auto  w-fit flex gap-2 shadow-inner  rounded-xl font-serif border backdrop-blur-lg  bg-gradient-to-r from-neutral-300/70 to-red-300/60">
        {navLinks.map(({ section, url }, i) => (
          <Link
            key={url}
            href={url}
            //   still not working
            className="bg-transparent hover:bg-amber-100/50 hover:underline hover:border hover:scale-90 border-neutral-400 text-sm transition-all py-2.5 px-3 rounded-xl"
          >
            {section}
          </Link>
        ))}
        <button className="bg-amber-200 py-2.5 px-3 rounded-xl border-l ">🇮🇩</button>
      </nav>
    </div>
  );
};

export default Navbar;
