"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

const particleTexture = new THREE.TextureLoader().load("/glowv2.png");
const smokeTexture = new THREE.TextureLoader().load("/cloud3.png");
// const cloudTexture = new THREE.TextureLoader().load("/cloud3.png");

export default function Garuda() {
  const { scene } = useGLTF("/garuda.glb");

  const ref = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const smokeRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree(); // Get screen size

  useEffect(() => {
    scene.position.set(scene.position.x, -0.72, scene.position.z);
  }, []);

  // Responsive scale: Adjust based on screen width
  const modelScale: [number, number, number] = useMemo(
    () => (viewport.width < 6.5 ? [2.1, 2.3, 2.3] : [3.5, 3.5, 3.5]),
    [viewport.width]
  );

  const smokeScale: [number, number] = useMemo(
    () => (viewport.width < 6.5 ? [3, 2.2] : [3.5, 3]),
    [viewport.width]
  );

  useFrame(({ clock }) => {
    const time = performance.now() * 0.001;

    if (ref.current) {
      // Add slight random rotation
      ref.current.position.x = Math.sin(time) * 0.1;
      ref.current.position.y = Math.cos(time) * 0.05;
      ref.current.rotation.z = Math.sin(time) * 0.02;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.025; // Slowly rotate the particles
      // particlesRef.current.rotation.y += 0.0028; // Slowly rotate the particles
    }

    if (cloudRef.current) {
      const cloudTime = clock.getElapsedTime() * 0.5; // Slower movement for clouds
      cloudRef.current.position.y = Math.sin(cloudTime + 2) * 0.1; // Different phase shift
      cloudRef.current.position.x = Math.cos(cloudTime * 0.7) * 0.4; // Different frequency
    }
  });

  // Responsive particle height

  // Create floating particles
  const particleGeometry = useMemo(() => {
    // const particleSpace = viewport.width < 6.5 ? 2 : 3; // Smaller height and  for mobile
    const particleCount = viewport.width < 6.5 ? 20 : 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3; // Z
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [viewport.width]);

  // Glowing Particle Material
  const particleMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        map: particleTexture, // Use a circular glow texture
        color: "gold",
        size: 0.1, // Adjust particle size
        transparent: true,
        depthWrite: false, // Avoid depth issues
        opacity: 1,
        blending: THREE.AdditiveBlending, // Makes glow effect
        sizeAttenuation: true, // Makes particles scale with distance
      }),
    []
  );

  return (
    <group ref={ref} scale={modelScale}>
      <primitive object={scene} />
      {/* Floating Sparkles */}
      <points
        ref={particlesRef}
        geometry={particleGeometry}
        material={particleMaterial}
      />
      {/* <mesh ref={smokeRef} position={[-0.1, -0.2, -1]}>
        <planeGeometry args={smokeScale} />
        <meshStandardMaterial
          color={"yellow"}
          map={smokeTexture}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh> */}
      {/* <mesh ref={cloudRef} position={[0, 0, -1]} scale={[2, 2, 2]}>
        <planeGeometry args={[viewport.width * 0.2, viewport.height * 0.2]} />
        <meshBasicMaterial map={cloudTexture} transparent opacity={0.6} />
      </mesh> */}
      <mesh ref={smokeRef} position={[-0.1, -0.2, -1]}>
        <planeGeometry args={smokeScale} />
        <meshStandardMaterial
          color={"#E5B80B"}
          map={smokeTexture}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
      {/* <mesh ref={cloudRef} position={[-2, 1, -1]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial
          color={"default"}
          map={cloudTexture}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh> */}
      ;
    </group>
  );
}
