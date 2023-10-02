/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene-transformed.glb 
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Car(props) {
  const { nodes, materials } = useGLTF("./models/porsche911-transformed.glb");
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: 2 * Math.PI, z: 0 },
      0
    );
    tl.current.to(ref.current.position, { duration: 1, x: 2.5, y: 0, z: 0 }, 1);
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI, z: 0 },
      1
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 4, z: 0 },
      2
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: (Math.PI * 3) / 8, z: 0 },
      3
    );
    // tl.current.to(ref.current.position, { duration: 1, x: 0, y: 0, z: 2.5 }, 2);
  }, []);
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["930_plastics"]}
        position={[0, 0.38, 2.536]}
        rotation={[-2.834, 0, Math.PI]}
        scale={[0.812, 0.78, 0.812]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["930_stickers"]}
        position={[0, 0.38, 2.536]}
        rotation={[-2.834, 0, Math.PI]}
        scale={[0.812, 0.78, 0.812]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.plate}
        position={[0, 0.38, 2.536]}
        rotation={[-2.834, 0, Math.PI]}
        scale={[0.812, 0.78, 0.812]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["930_rim"]}
        position={[-0.944, 0.453, -0.982]}
        rotation={[0.479, 0, 0]}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["930_tire"]}
        position={[-0.944, 0.453, -0.982]}
        rotation={[0.479, 0, 0]}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials["930_lights"]}
        position={[0.57, 0.418, -2.057]}
        rotation={[0.044, -0.215, 0.01]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.glass}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials["930_chromes"]}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.paint}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.coat}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_55.geometry}
        material={materials.black}
        position={[0.011, 1.355, 0.53]}
        scale={0.047}
      />
      <mesh
        geometry={nodes.Object_95.geometry}
        material={materials["930_lights_refraction"]}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_122.geometry}
        material={materials["930_wunderbaum"]}
        position={[-0.002, 1.285, 0.542]}
        scale={0.812}
      />
      <mesh
        geometry={nodes.Object_140.geometry}
        material={materials.material_0}
        position={[0, 0.118, 0.225]}
        scale={[1.558, 1.558, 3.117]}
      />
    </group>
  );
}

useGLTF.preload("./models/porsche911-transformed.glb");
