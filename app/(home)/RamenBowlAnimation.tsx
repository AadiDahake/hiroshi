"use client";

import React, { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Stage } from "@react-three/drei";

export function RamenBowlAnimation() {
  const { scene } = useGLTF("/models/ramen_bowl_no_meat.glb");

  const ref = useRef(null);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 200, 200], fov: 20 }}
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={null}>
        <Stage
          preset="rembrandt"
          intensity={1}
          castShadow={true}
          shadows
          adjustCamera
          environment="city"
        >
          <primitive object={scene} />
        </Stage>
      </Suspense>
      <OrbitControls
        ref={ref}
        autoRotate={true}
        enableZoom={false}
        enablePan={false}
        autoRotateSpeed={5}
      />
    </Canvas>
  );
}
