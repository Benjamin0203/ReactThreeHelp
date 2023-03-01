import { useIntersect, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export default function MackBookItem({ position, children, rotation }) {
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
      visible.current ? 1.5 : 1,
      5,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {children}
    </group>
  );
}
