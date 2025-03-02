import Image from "next/image";
import Navbar from "./_components/navbar";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className=" text-neutral-900 h-screen">
      <Navbar />
      <Header />
    </div>
  );
}
