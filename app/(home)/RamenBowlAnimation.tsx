"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Stage } from "@react-three/drei";
import { LineWobble } from "ldrs/react";
import "ldrs/react/LineWobble.css";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";

function Loader() {
  return (
    <Html center>
      <h2 className="text-xl font-serif">Loading</h2>
      <LineWobble
        size="80"
        stroke="5"
        bgOpacity="0.1"
        speed="1.75"
        color="black"
      />
    </Html>
  );
}

function AnimatedRamenModel() {
  const { scene } = useGLTF("/models/ramen_bowl.glb");
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);

  const isDragging = useRef(false);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 18.6;
    }
  }, []);

  useFrame(() => {
    if (groupRef.current && !isDragging.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const bind = useDrag(({ delta: [dx], first, last }) => {
    if (first) isDragging.current = true;
    if (groupRef.current) {
      groupRef.current.rotation.y += dx * 0.005;
    }
    if (last) isDragging.current = false;
  });

  return (
    <group ref={groupRef} {...bind()}>
      <group ref={modelRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export function RamenBowlAnimation() {
  return (
    <Canvas
      shadows={false}
      camera={{ position: [0, 200, 200], fov: 20 }}
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={<Loader />}>
        <Stage
          intensity={1}
          shadows={false}
        >
          <AnimatedRamenModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
}