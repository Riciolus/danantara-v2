"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

interface GarudaProps {
  onLoaded?: () => void;
}

export default function Garuda({ onLoaded }: GarudaProps) {
  const { scene } = useGLTF("/garuda.glb");
  const ref = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const smokeRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Load textures once with useMemo
  const textures = useMemo(() => {
    return {
      particle: new THREE.TextureLoader().load("/glowv2.png"),
      smoke: new THREE.TextureLoader().load("/cloud3.png"),
    };
  }, []);

  useEffect(() => {
    scene.position.set(scene.position.x, -0.67, scene.position.z);
    onLoaded?.();
  }, [scene, onLoaded]);

  // Responsive values based on threshold
  const isSmallScreen = useMemo(() => viewport.width < 6, [viewport.width < 6]);

  // Derived values only recalculated when threshold changes
  const modelScale = useMemo<[number, number, number]>(
    () => (isSmallScreen ? [2.1, 2.3, 2.3] : [3.35, 3.35, 3.35]),
    [isSmallScreen]
  );

  const smokeScale = useMemo<[number, number]>(
    () => (isSmallScreen ? [3, 2.2] : [3.5, 3]),
    [isSmallScreen]
  );

  // Create floating particles geometry
  const { particleGeometry, particleMaterial } = useMemo(() => {
    const particleCount = isSmallScreen ? 20 : 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3; // Z
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      map: textures.particle,
      color: "gold",
      size: 0.1,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    return { particleGeometry: geometry, particleMaterial: material };
  }, [isSmallScreen, textures.particle]);

  // Memoize smoke material to prevent recreation
  const smokeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#E5B80B",
      map: textures.smoke,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    });
  }, [textures.smoke]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (ref.current) {
      // Simplified animation with single time source
      ref.current.position.x = Math.sin(time) * 0.1;
      ref.current.position.y = Math.cos(time) * 0.05;
      ref.current.rotation.z = Math.sin(time) * 0.02;
    }

    if (particlesRef.current) {
      // Lower rotation rate for better performance
      particlesRef.current.rotation.y += 0.015;
    }

    if (smokeRef.current) {
      // Simplified smoke animation
      smokeRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref} scale={modelScale}>
      <primitive object={scene} />
      <points
        ref={particlesRef}
        geometry={particleGeometry}
        material={particleMaterial}
      />
      <mesh ref={smokeRef} position={[-0.1, -0.2, -1]}>
        <planeGeometry args={smokeScale} />
        <meshStandardMaterial {...smokeMaterial} />
      </mesh>
    </group>
  );
}
