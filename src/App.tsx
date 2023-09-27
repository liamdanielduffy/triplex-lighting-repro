import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import Scene from "./scene";

function Camera() {
    return (
      <>
        <OrbitControls />
        <PerspectiveCamera
          position={[0, 0, 5]}
          rotation={[0, 0, 0]}
          makeDefault
          fov={75}
        />
        <color attach="background" args={["#171720"]} />

      </>
    );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Camera/>
        <Scene/>
      </Canvas>
    </Suspense>
  );
}

export default App;
