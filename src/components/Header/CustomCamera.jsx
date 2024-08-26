import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const CustomCamera = () => {
  return (
    <PerspectiveCamera
      makeDefault
      position={[50, 5, 10]} // Adjust the camera position here
      fov={75} // Field of view
      near={0.1}
      far={1000}
    />
  );
};

export default CustomCamera;
