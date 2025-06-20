"use client";

import React, { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, Stage, Html } from "@react-three/drei";

import { LineWobble } from "ldrs/react";
import "ldrs/react/LineWobble.css";

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

export function RamenBowlAnimation() {
  const { scene } = useGLTF("/models/ramen_bowl.glb");

  const ref = useRef(null);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 200, 200], fov: 20 }}
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={<Loader />}>
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
