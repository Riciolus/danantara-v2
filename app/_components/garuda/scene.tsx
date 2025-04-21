"use client";

// OLDER VERSION, NEWER VERSION IS FULLY VIBE CODED LMAOOOO BECAUSE I CANT STAND WITH THE RE RENDER ISSUE
// export default function Scene({ onLoaded }: { onLoaded: () => void }) {
//   useEffect(() => {
//     console.log("render scene");
//   });

//   return (
//     <Canvas className="z-[101]" gl={{ antialias: true }} dpr={[1, 1.3]}>
//       <directionalLight position={[-0.6, 0, 3]} intensity={30} />
//       <Garuda
//         onLoaded={() => {
//           // setIsLoaded(true);
//           onLoaded();
//         }}
//       />
//     </Canvas>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface ThreeJSSceneProps {
  onLoaded?: () => void;
}

interface SceneObjects {
  model: THREE.Group | null;
  particles: THREE.Points | null;
  smoke: THREE.Mesh | null;
}

export default function ThreeJSScene({ onLoaded }: ThreeJSSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const [sceneObjects, setSceneObjects] = useState<SceneObjects>({
    model: null,
    particles: null,
    smoke: null,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.3));

    // Get container dimensions and set renderer size
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5;

    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 30);
    light.position.set(-0.6, 0, 3);
    scene.add(light);

    // Add ambient light for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create group for all objects (for scaling and animation)
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Scale the model group to match your original scale
    const isSmallScreen = window.innerWidth < 768;
    const modelScale = isSmallScreen ? 2 : 2.35;
    modelGroup.scale.set(modelScale, modelScale, modelScale);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/images/header/glowv2.png");
    const smokeTexture = textureLoader.load("/images/header/cloud3.png");

    // Create particles
    const createParticles = (): THREE.Points => {
      const particleCount = isSmallScreen ? 20 : 200;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 3; // X
        positions[i * 3 + 1] = (Math.random() - 0.5) * 3; // Y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 3; // Z
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        map: particleTexture,
        color: 0xccad00, // Gold color
        size: 0.1,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      modelGroup.add(particles);

      return particles;
    };

    // Create smoke
    const createSmoke = (): THREE.Mesh => {
      const smokeScale = isSmallScreen ? [3, 2.2] : [3.5, 3];
      const smokeGeometry = new THREE.PlaneGeometry(smokeScale[0], smokeScale[1]);
      const smokeMaterial = new THREE.MeshStandardMaterial({
        color: 0xe5b80b,
        map: smokeTexture,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
      });

      const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
      smoke.position.set(-0.1, -0.2, -1);
      modelGroup.add(smoke);

      return smoke;
    };

    // Load model
    const loader = new GLTFLoader();
    loader.load("/garuda.glb", (gltf: GLTF) => {
      // Set model position
      gltf.scene.position.y = -0.67;

      // Add model to group
      modelGroup.add(gltf.scene);

      // Create particles and smoke
      const particles = createParticles();
      const smoke = createSmoke();

      // Store references for animation
      setSceneObjects({
        model: gltf.scene,
        particles,
        smoke,
      });

      // Notify parent component model is loaded
      if (onLoaded) onLoaded();
    });

    // Append renderer to DOM
    containerRef.current.appendChild(renderer.domElement);
    updateSize();

    // Handle resize
    window.addEventListener("resize", updateSize);

    // Animation loop
    const animate = (time: number) => {
      requestRef.current = requestAnimationFrame(animate);

      const t = time * 0.001; // Convert to seconds

      // Animate model group (like your original ref.current animation)
      if (modelGroup) {
        modelGroup.position.x = Math.sin(t) * 0.1;
        modelGroup.position.y = Math.cos(t) * 0.05;
        modelGroup.rotation.z = Math.sin(t) * 0.02;
      }

      // Animate particles
      if (sceneObjects.particles) {
        sceneObjects.particles.rotation.y += 0.015;
      }

      // Animate smoke
      if (sceneObjects.smoke) {
        sceneObjects.smoke.position.y = Math.sin(t * 0.5) * 0.1;
      }

      renderer.render(scene, camera);
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("resize", updateSize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onLoaded]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 101 }}
    />
  );
}
