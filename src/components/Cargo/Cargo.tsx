import { Box, Edges } from '@react-three/drei'

export function Cargo() {
  return (
    <Box args={[1, 1, 1]} position={[0, 0.5, 0]}>
      <meshStandardMaterial color="orange" />
      <Edges linewidth={2} threshold={1} color={0xffffff} />
    </Box>
  )
}
