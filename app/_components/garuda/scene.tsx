"use client";

// Garuda environment scene (lighting, etc.)

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Garuda from "./model";

export default function Scene() {
  return (
    <Canvas className="z-[101]" gl={{ antialias: true }} dpr={[1, 1.2]}>
      <Suspense fallback={null}>
        <directionalLight position={[-0.6, 0, 3]} intensity={30} />
        <Garuda />
      </Suspense>
    </Canvas>
  );
}
