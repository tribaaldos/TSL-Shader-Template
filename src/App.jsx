// Threejs journey original https://threejs-journey.com/lessons/sliced-model-shader
// Threejs examples TSL version https://threejs.org/examples/?q=tsl#webgpu_tsl_angular_slicing

import * as THREE from 'three/webgpu'
import { Canvas, extend,} from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Shadow, Sky } from '@react-three/drei'
import GridPlane from './components/Grid'

import './App.css'
import FirePlane from './components/Grid'
import StarDome from './components/Grid'

export default function App() {
  return (
  <Canvas
    className='canvas'
    shadows
    camera={{ fov: 15, position: [0, 0, 5] }}
    gl={(props) => {
      extend(THREE)
      const renderer = new THREE.WebGPURenderer(props)
      return renderer.init().then(() => renderer)
    }}>
    <color attach="background" args={['white']} />
    <OrbitControls  enablePan={false}  />
    <Environment preset="sunset" environmentIntensity={0.5} />
    <Shadow position={[0, -0.49, 0]} />
    {/* <fog attach="fog" args={['#202025', 8, 9.25]} /> */}
    <StarDome />
    
    {/* <Model position={[0, 0.025, 0]} scale={0.2} /> */}
  </Canvas>
)
}

function Model(props) {

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow >
        {/* <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalNodeMaterial color="red"/> */}
      </mesh>
    </group>
  )
}
