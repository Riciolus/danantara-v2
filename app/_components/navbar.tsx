import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { section: "Tentang", url: "#tentang" },
  { section: "Perjalanan", url: "#perjalanan" },
  // { section: "Visi misi", url: "#visi&misi" },
  { section: "Narahubung", url: "#narahubung" },
];

const Navbar = () => {
  return (
    <div className="fixed w-screen mt-3 z-[102]">
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
      <nav className="mx-auto  w-fit flex gap-2 shadow-inner  rounded-xl font-serif border backdrop-blur-sm  bg-gradient-to-r from-neutral-200/40 to-amber-600/60 ">
        {navLinks.map(({ section, url }) => (
          <Link
            key={url}
            href={url}
            className="bg-transparent hover:bg-amber-100/50 hover:underline hover:border hover:scale-90 border-neutral-400 text-sm transition-all py-2.5 px-3 rounded-xl"
          >
            {section}
          </Link>
        ))}
        <button className="bg-amber-200 p-2 rounded-xl border-l ">
          ID
          {/* <Image
            src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/us.svg"
            alt="US Flag"
            width="20"
            height="20"
            className="rounded-sm"
          /> */}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
