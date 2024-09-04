import { useLoader } from '@react-three/fiber'
import { NearestFilter, TextureLoader } from 'three'

import { BASE } from '../../helpers/constants'

export function Base() {
  const notebookTexture = useLoader(TextureLoader, '/squares.png')
  notebookTexture.minFilter = NearestFilter
  notebookTexture.magFilter = NearestFilter

  return (
    <mesh rotation={BASE.rotation}>
      <planeGeometry args={BASE.dimensions} />
      <meshStandardMaterial map={notebookTexture} />
    </mesh>
  )
}
