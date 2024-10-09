import { useEffect, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'

import type { DIMENSIONS_3D } from '../../helpers/types'
import { TRAILER } from '../../helpers/constants'

const TRAILER_WIDTH = TRAILER.dimensions[2]

export function useAdjustedPosition(
  initialPosition: DIMENSIONS_3D
): [DIMENSIONS_3D, RefObject<THREE.Mesh>] {
  const elementRef = useRef<THREE.Mesh>(null)
  const [adjustedPosition, setAdjustedPosition] = useState(initialPosition)

  useEffect(() => {
    if (!elementRef.current) return

    const boundingBox = new THREE.Box3().setFromObject(elementRef.current)
    const size = new THREE.Vector3()

    boundingBox.getSize(size)

    const halfLength = size.x / 2
    const halfHeight = size.y / 2
    const halfWidth = size.z / 2
    const adjustedZPosition = TRAILER_WIDTH / 2 - halfWidth

    setAdjustedPosition(initialPosition => {
      const [x, y, z] = initialPosition

      return [halfLength + x, halfHeight + y, adjustedZPosition - z]
    })
  }, [])

  return [adjustedPosition, elementRef]
}