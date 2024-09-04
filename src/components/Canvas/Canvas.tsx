import { Canvas as R3Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Base } from '../Base'
import { Cargo } from '../Cargo'

import './Canvas.css'

export function Canvas() {
  return (
    <section className="canvas">
      <R3Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Base />
        <Cargo />
        <OrbitControls
          minDistance={10}
          maxDistance={50}
          maxPolarAngle={(22 * Math.PI) / 45}
        />
      </R3Canvas>
    </section>
  )
}
