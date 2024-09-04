import { useLoader } from '@react-three/fiber'
import { NearestFilter, TextureLoader } from 'three'

export function Base() {
  const notebookTexture = useLoader(TextureLoader, '/squares.png')
  notebookTexture.minFilter = NearestFilter
  notebookTexture.magFilter = NearestFilter

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[96, 54]} />
      <meshStandardMaterial map={notebookTexture} />
    </mesh>
  )
}
