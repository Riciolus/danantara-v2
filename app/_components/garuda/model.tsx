"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

const particleTexture = new THREE.TextureLoader().load("/glow.png");

export default function Garuda() {
  const { scene } = useGLTF("/garuda.glb");

  const ref = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { viewport } = useThree(); // Get screen size

  // Center
  useEffect(() => {
    scene.position.y += -0.36;
  }, [scene.position]);

  // Responsive scale: Adjust based on screen width
  const modelScale: [number, number, number] =
    viewport.width < 6.5 ? [2.1, 2.3, 2.3] : [3.5, 3.5, 3.5];

  useFrame(() => {
    if (ref.current) {
      // Add slight random rotation
      ref.current.position.x = Math.sin(performance.now() * 0.001) * 0.05;
      ref.current.position.y = Math.cos(performance.now() * 0.001) * 0.05;
      ref.current.rotation.z = Math.sin(performance.now() * 0.001) * 0.02;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0028; // Slowly rotate the particles
    }
  });

  // Responsive particle height

  // Create floating particles
  const particleGeometry = useMemo(() => {
    const particleSpace = viewport.width < 6.5 ? 2 : 3; // Smaller height and  for mobile
    const geometry = new THREE.BufferGeometry();
    const particleCount = viewport.width < 6.5 ? 75 : 150;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * particleSpace; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * particleSpace; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * particleSpace; // Z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
    // linter issue in useMemo dependencies, yet don't know if this affecting performance or not.
  }, [viewport.width]);

  // Glowing Particle Material
  const particleMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        map: particleTexture, // Use a circular glow texture
        color: "gold",
        size: 0.2, // Adjust particle size
        transparent: true,
        depthWrite: false, // Avoid depth issues
        opacity: 1,
        blending: THREE.AdditiveBlending, // Makes glow effect
        sizeAttenuation: true, // Makes particles scale with distance
      }),
    []
  );

  return (
    <group scale={modelScale} ref={ref}>
      <primitive object={scene} />
      {/* Floating Sparkles */}
      <points
        ref={particlesRef}
        geometry={particleGeometry}
        material={particleMaterial}
      />
    </group>
  );
}
