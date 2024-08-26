import React, { useState, useRef, useEffect } from "react";
import "./Team.css";
import githubLogo from "../../assets/images/github.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import instagramLogo from "../../assets/images/instagram.png";
import { Collapse } from "react-collapse";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Element } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);
extend({ MeshLineGeometry, MeshLineMaterial });

const Team = () => {
  const data = [
    {
      name: "Archit Garg",
      role: "Secretary",
      modelPath: "/secretary.glb",
      linkedin:
        "https://www.linkedin.com/in/archit-garg-7a1478266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "",
      insta:
        "https://www.instagram.com/___ig_archit___?igsh=MTF0ZGV6N3VuOHM4aQ%3D%3D&utm_source=qr",
    },
    {
      name: "Devam Sheth",
      role: "Frontend Development Lead",
      modelPath: "/frontend.glb",
      linkedin:
        "https://www.linkedin.com/in/devam-sheth-011011280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Devam-Sheth",
      insta: "",
    },
    {
      name: "Ameesh Sethi",
      role: "Competitive Coding Lead",
      modelPath: "/cp.glb",
      linkedin: "",
      github: "",
      insta: "",
    },
    {
      name: "Akshaj Rao",
      role: "Backend Development Lead",
      modelPath: "/backend.glb",
      linkedin: "https://in.linkedin.com/in/akshaj-rao-4a7082311",
      github: "https://github.com/cross-codes",
      insta: "https://www.instagram.com/akshaj.rao?igsh=ejIwcGhuczY3bXBq",
    },
    {
      name: "Manvendra Siwatch",
      role: "AI/ML lead",
      modelPath: "/ai-ml.glb",
      linkedin: "",
      github: "",
      insta: "",
    },
    {
      name: "Aditya Garg",
      role: "Game Development Lead",
      modelPath: "/gamedev.glb",
      linkedin: "https://www.linkedin.com/in/aditya-garg-508873261",
      github: "https://github.com/garg10aditya",
      insta: "https://www.instagram.com/aditya_g.arg?igsh=MWtmMWh4eWttYjR0cw==",
    },
    {
      name: "Parth Khandelwal",
      role: "Oasis Coordinator",
      modelPath: "/oasis.glb",
      linkedin: "",
      github: "",
      insta: "",
    },
    {
      name: "Siddharth Khemani",
      role: "Apogee Coordinator, App Development Lead",
      modelPath: "/apogee.glb",
      linkedin: "",
      github: "",
      insta: "",
    },
    {
      name: "Manish Goyal",
      role: "BOSM Joint Coordinator",
      modelPath: "/bosm.glb",
      linkedin: "",
      github: "",
      insta: "",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedModel, setSelectedModel] = useState("/secretary.glb");
  const sectionRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    if (data[index].modelPath) {
      setSelectedModel(data[index].modelPath);
    }
  };

  return (
    <Element name="Team">
      <div id="Team">
        <h1 className="team-head">MEET THE TEAM</h1>
        <div className="team-cont">
          <div className="team-container">
            <div className="team">
              {data.map((member, index) => (
                <div key={index} className="team-member">
                  <div
                    className="collapsible"
                    onClick={() => handleClick(index)}
                  >
                    {member.name}
                  </div>
                  <Collapse isOpened={expandedIndex === index}>
                    <div className="content">
                      <p>
                        <strong>Role:</strong> {member.role}
                      </p>
                      <div className="social-media-handles">
                        <a href={member.linkedin} target="_blank">
                          <img
                            src={linkedinLogo}
                            alt="LinkedIn"
                            className="social-media-icons"
                          />
                        </a>
                        <a href={member.github} target="_blank">
                          <img
                            src={githubLogo}
                            alt="GitHub"
                            className="social-media-icons"
                          />
                        </a>
                        {showPopup && member.name === "Devam Sheth" && (
                          <div className="popup">
                            <p>
                              Bro thinks he is ahead of the curve so he is not
                              on Instagram
                            </p>
                          </div>
                        )}
                        <a
                          href={member.insta}
                          target="_blank"
                          onMouseEnter={() =>
                            member.name === "Devam Sheth" && setShowPopup(true)
                          }
                          onMouseLeave={() =>
                            member.name === "Devam Sheth" && setShowPopup(false)
                          }
                        >
                          <img
                            src={instagramLogo}
                            alt="Instagram"
                            className="social-media-icons"
                          />
                        </a>
                      </div>
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
          <div className="team-card" ref={sectionRef}>
            <Canvas
              key={selectedModel}
              camera={{ position: [0, 0, 13], fov: 25 }}
            >
              {modelLoaded && (
                <>
                  <ambientLight intensity={Math.PI} />
                  <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    {selectedModel && <Band modelPath={selectedModel} />}
                  </Physics>
                  <Environment background blur={0.75}>
                    <color attach="background" args={["black"]} />
                    <Lightformer
                      intensity={2}
                      color="white"
                      position={[0, -1, 5]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={3}
                      color="white"
                      position={[-1, -1, 1]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={3}
                      color="white"
                      position={[1, 1, 1]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={10}
                      color="white"
                      position={[-10, 0, 14]}
                      rotation={[0, Math.PI / 2, Math.PI / 3]}
                      scale={[100, 10, 1]}
                    />
                  </Environment>
                </>
              )}
            </Canvas>
          </div>
        </div>
      </div>
    </Element>
  );
};

function Band({ modelPath, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };

  const texture = useTexture("/band.jpg");

  const { nodes, materials } = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.manager.onError = (url) => {
      console.error(`Error loading ${url}`);
    };
  });

  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => (
              e.target.setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base?.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

export default Team;
