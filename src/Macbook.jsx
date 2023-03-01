import {
  OrbitControls,
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
  Text3D,
  useMatcapTexture,
  Center,
} from "@react-three/drei";

export default function Macbook() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  //   console.log(macbook);
  const [matcapTexture] = useMatcapTexture("04CC77_0CF7CA_04E9A7_04AB54", 256);
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#241a1a"]} />

      {/* <OrbitControls makeDefault /> */}
      <PresentationControls
        global
        rotation={[0.13, -0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        {/* <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#1A43A9"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.05, -1.15]}
          /> */}
        <group position={[0, 0, 0]}>
          <primitive object={macbook.scene} position-y={-1.9} />

          <Html
            transform
            wrapperClass="htmlScene"
            distanceFactor={1.17}
            position={[0, -0.4, -1.5]}
            rotation={[-0.2, 0, 0]}
          >
            <iframe src="https://nft-gallery-ten-xi.vercel.app/" />
          </Html>
        </group>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-1.5, 1, -1.5]}
        >
          Projects
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
        {/* </Float> */}
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
