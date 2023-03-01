import { Suspense } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import Texts from "./components/Texts";
import Particles from "./components/Particles";
import Objects from "./components/Objects";

export default function Experience() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.001
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });
  return (
    <ScrollControls pages={4}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <Texts />
      </Scroll>
    </ScrollControls>
  );
}
