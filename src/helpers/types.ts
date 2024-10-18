export type DIMENSIONS_2D = [number, number]
export type DIMENSIONS_3D = [number, number, number]

interface CARGO_DATA {
  name: string
  color: string
  dimensions: DIMENSIONS_3D
  count: number
}

export interface CARGO_DATA_WITH_ID extends CARGO_DATA {
  id: string
}

export interface CARGO {
  [id: string]: CARGO_DATA
}

export type CARGO_ARRAY = CARGO_DATA_WITH_ID[]
