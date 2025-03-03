"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";

const particleTexture = new THREE.TextureLoader().load("/glow.png");

export default function Garuda() {
  const { scene } = useGLTF("/garuda.glb");

  const ref = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { viewport } = useThree(); // Get screen size
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.BoxHelper(ref.current, 0xff0000); // Red box
      ref.current.add(box);
    }
  }, []);

  // Center
  useEffect(() => {
    if (ref.current) {
      const bbox = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      bbox.getCenter(center);

      // Lock the model's base to y = 0
      const modelHeight = bbox.max.y - bbox.min.y;
      setPosition([0, -modelHeight / 2, 0]); // Move it down by half its height
    }
  }, [scene]); // Runs once when the model loads

  // Responsive scale: Adjust based on screen width
  const modelScale: [number, number, number] =
    viewport.width < 6.5 ? [2.3, 2.5, 2.5] : [4.5, 4.5, 4.5];

  useFrame(() => {
    if (ref.current) {
      //       ref.current.rotations.y += 0.005; // Putar model pada sumbu Y

      ref.current.position.x = Math.sin(performance.now() * 0.001) * 0.05;
      ref.current.position.y = Math.cos(performance.now() * 0.001) * 0.05;

      // Add slight random rotation
      ref.current.rotation.z = Math.sin(performance.now() * 0.001) * 0.02;
    }
  });

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002; // Slowly rotate the particles
    }
  });

  // Responsive particle height
  const particleHeight = viewport.width < 6.5 ? 2 : 3; // Shorter height for mobile

  // Create floating particles
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = viewport.width < 6.5 ? 50 : 150;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * particleHeight; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3; // Z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

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
    <group scale={modelScale} position={[0, 0, 0]} ref={ref}>
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
