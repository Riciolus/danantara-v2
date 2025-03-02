"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Group } from "three";

export default function Cube() {
  const { scene } = useGLTF("/garuda.glb");

  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      //       ref.current.rotation.y += 0.005; // Putar model pada sumbu Y

      ref.current.position.x = Math.sin(performance.now() * 0.001) * 0.05;
      ref.current.position.y = Math.cos(performance.now() * 0.001) * 0.05;

      // Add slight random rotation
      ref.current.rotation.z = Math.sin(performance.now() * 0.001) * 0.02;
    }
  });

  return (
    <group scale={[5, 5, 5]} ref={ref}>
      <primitive object={scene} />
    </group>
  );
}
