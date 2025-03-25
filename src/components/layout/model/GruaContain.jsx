import { Canvas } from "@react-three/fiber";
import Grua  from "./Grua";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Bounds } from "@react-three/drei";
const GruaContain = () => {

  return (
    <Canvas
     camera={{zoom: 0.8, position: [50, 100, 100], fov: 30}} frameLoop="demand"  className="grua">
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <directionalLight intensity={1} position={[-5, -5, -5]} />
        <directionalLight intensity={1} position={[35, 35, 35]} />
        <directionalLight intensity={0.8} position={[-35, -35, -35]} />
        {/* <Environment files='../../../assets/textures' /> */}
        <Suspense fallback={null}>
            <Grua   />
        </Suspense>
     <OrbitControls
      target={[10, 20, 0]}
       enableZoom={true}
          autoRotate={true} 
          enablePan={true} 
          autoRotateSpeed={1} />
    </Canvas>
  )
}

export default GruaContain