"use client";

import { Canvas } from "@react-three/fiber";
import Garuda from "./model";

export default function Scene({ onLoaded }: { onLoaded: () => void }) {
  return (
    <Canvas className="z-[101]" gl={{ antialias: true }} dpr={[1, 1.3]}>
      <directionalLight position={[-0.6, 0, 3]} intensity={30} />
      <Garuda
        onLoaded={() => {
          // setIsLoaded(true);
          onLoaded();
        }}
      />
    </Canvas>
  );
}
