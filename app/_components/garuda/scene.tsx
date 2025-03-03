"use client";

// Garuda environment scene (lighting, etc.)

import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Garuda from "./model";

export default function Scene() {
  return (
    <Canvas className="z-[101]" gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[0, 0, 3]} intensity={20} />
      <Suspense fallback={null}>
        <Garuda />
      </Suspense>
    </Canvas>
  );
}
