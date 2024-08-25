import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function RotatingModel() {
  const { scene } = useGLTF("/cclogo.glb"); // Replace with the correct path
  const modelRef = useRef();

  useEffect(() => {
    console.log("Loaded scene:", scene);
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh:", child);
        child.material.color.set("red"); // Apply red color to all materials
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate model
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default RotatingModel;
