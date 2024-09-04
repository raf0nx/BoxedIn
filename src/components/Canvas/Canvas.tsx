import { NearestFilter, TextureLoader } from 'three'
import { Canvas as R3Canvas, useLoader } from '@react-three/fiber'
import { Edges, OrbitControls } from '@react-three/drei'

import './Canvas.css'

export function Canvas() {
  const notebookTexture = useLoader(TextureLoader, '/squares.png')
  notebookTexture.minFilter = NearestFilter
  notebookTexture.magFilter = NearestFilter

  return (
    <section className="canvas">
      <R3Canvas>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[96, 54]} />
          <meshStandardMaterial map={notebookTexture} />
        </mesh>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <mesh position={[0, 0.51, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={0xffa500} />
          <Edges linewidth={2} threshold={1} color={0xffffff} />
        </mesh>
        <OrbitControls />
      </R3Canvas>
    </section>
  )
}
