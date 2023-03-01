import { useIntersect, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import MackBookItem from "./MackBookItem.jsx";
import Macbook from "../Macbook";

function Item({ position, children, rotation, scale }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  );

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();

    // ref.current.rotation.x = elapsedTime * xRandomFactor;
    // ref.current.rotation.y = elapsedTime * yRandomFactor;

    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {children}
    </group>
  );
}

const Objects = () => {
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} position={[0, 1, 0]} />

      <MackBookItem position={[1, -2, 1]} rotation={[0, 0, 0]}>
        <Macbook />
      </MackBookItem>
    </>
  );
};

export default Objects;
