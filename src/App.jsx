import { Canvas } from "@react-three/fiber";
import Home from "./Pages/Home"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Navi from "./Pages/Navi";
import { Suspense } from "react";
import PortFolio from "./Pages/PortFolio";
function App() {
  return (
    <>
    <Canvas shadows camera={{position:[0,0,5],fov:42}}>
      <fog attach="fog" args={['#000000',10,60]}/>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.2}/>
      </EffectComposer>
      <Suspense>
        <Home/>
      </Suspense>
    </Canvas>
    <Navi/>
    <PortFolio/>
    </>
  )
}

export default App
