import { Canvas as R3Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Base } from '../Base'
import { Cargo } from '../Cargo'
import { CargoContainer } from '../CargoContainer'
import { CAMERA, LIGHT } from '../../helpers/constants'
import { useCargoDistributionContext } from '../../hooks'

import './Canvas.css'

export function Canvas() {
  const { cargoDistribution } = useCargoDistributionContext()

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
        {Object.entries(cargoDistribution).map(([cargoID, cargo]) => (
          <Cargo
            key={cargoID}
            id={cargoID}
            dimensions={cargo.dimensions}
            position={cargo.position}
            color={cargo.color}
            label={cargo.name}
          />
        ))}
        <OrbitControls
          minDistance={CAMERA.minDistance}
          maxDistance={CAMERA.maxDistance}
          maxPolarAngle={CAMERA.minVerticalRotation}
        />
      </R3Canvas>
    </section>
  )
}
