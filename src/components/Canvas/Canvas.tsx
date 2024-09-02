import { Canvas as R3Canvas } from '@react-three/fiber'

import './Canvas.css'

export function Canvas() {
  return (
    <section className="canvas">
      <R3Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </R3Canvas>
    </section>
  )
}
