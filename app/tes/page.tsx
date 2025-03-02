"use client";

import dynamic from "next/dynamic";

// const Scene = dynamic(() => import)
const GarudaScene = dynamic(() => import("~/app/_components/garuda/scene"), {
  ssr: false,
});

export default function Test() {
  return (
    <main className="h-screen autofill:">
      <GarudaScene />
    </main>
  );
}
