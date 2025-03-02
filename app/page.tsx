import Navbar from "./_components/navbar";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className=" text-neutral-900 h-screen flex flex-col">
      <Navbar />
      <Header />
    </div>
  );
}
