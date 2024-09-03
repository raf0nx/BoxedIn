import { useRef } from 'react'
import { Canvas as R3Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Outline } from '@react-three/postprocessing'

import './Canvas.css'

export function Canvas() {
  const ref = useRef(null)

  return (
    <section className="canvas">
      <R3Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <mesh ref={ref}>
          <boxGeometry />
          <meshStandardMaterial color={0xffa500} />
        </mesh>
        <OrbitControls />
        <EffectComposer autoClear={false}>
          <Outline
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            selection={ref as unknown as any}
            blur={false}
            visibleEdgeColor={0xffffff}
            edgeStrength={0.5}
          />
        </EffectComposer>
      </R3Canvas>
    </section>
  )
}
