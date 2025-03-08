import Navbar from "./_components/navbar";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="relative text-neutral-900 h-screen  flex flex-col overflow-x-hidden">
      <Navbar />
      <Header />
    </div>
  );
}
