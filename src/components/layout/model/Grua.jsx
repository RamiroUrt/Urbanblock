import React from 'react';
import { useGLTF } from '@react-three/drei';

function Grua(props) {
  const { nodes, materials } = useGLTF('/model/grua.glb');
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube052_UV_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube056_frame_0.geometry} material={materials.frame} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube060_CONCRETE_0.geometry} material={materials.CONCRETE} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cylinder010_IRON_0.geometry} material={materials.IRON} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube068_BUCKET_0.geometry} material={materials.BUCKET} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane005_Curve002_ROPE_0.geometry} material={materials.ROPE} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Slice005_GLASS_0.geometry} material={materials.GLASS} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/model/grua.glb'); 

export default Grua;