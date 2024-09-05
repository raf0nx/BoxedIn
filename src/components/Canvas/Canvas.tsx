import { Canvas as R3Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Base } from '../Base'
import { Cargo } from '../Cargo'
import { CargoContainer } from '../CargoContainer'
import { CAMERA, LIGHT } from '../../helpers/constants'

import './Canvas.css'

export function Canvas() {
  return (
    <section className="canvas">
      <R3Canvas camera={CAMERA.initialPosition}>
        <ambientLight intensity={LIGHT.intensity} />
        <directionalLight
          position={LIGHT.position}
          intensity={LIGHT.intensity}
        />
        <Base />
        <CargoContainer />
        <Cargo dimensions={[1, 1, 1]} position={[0.5, 0.5, 0]} color="orange" />
        <OrbitControls
          minDistance={CAMERA.minDistance}
          maxDistance={CAMERA.maxDistance}
          maxPolarAngle={CAMERA.minVerticalRotation}
        />
      </R3Canvas>
    </section>
  )
}
