import { describe, it, expect } from 'vitest'

import {
  transformCargoToArray,
  generateCargoId,
  generateRandomHexColor,
  transformCargoForPrompt,
} from '../components/Tools/helpers'
import type { CARGO, PROMPT_TRANSFORMED_CARGO } from '../helpers/types'

describe('transformCargoToArray', () => {
  it('transforms cargo object to an array of cargo items', () => {
    // Given
    const cargo: CARGO = {
      '1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        count: 1,
      },
      '2': {
        name: 'Box B',
        color: '#00ff00',
        dimensions: [3, 4, 5],
        count: 2,
      },
    }

    // When
    const result = transformCargoToArray(cargo)

    // Then
    expect(result).toEqual([
      {
        id: '1',
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        count: 1,
      },
      {
        id: '2',
        name: 'Box B',
        color: '#00ff00',
        dimensions: [3, 4, 5],
        count: 2,
      },
    ])
  })

  it('returns an empty array if cargo is empty', () => {
    // Given
    const cargo: CARGO = {}

    // When
    const result = transformCargoToArray(cargo)

    // Then
    expect(result).toEqual([])
  })
})

describe('generateCargoId', () => {
  it('generates a unique cargo id with the format "box-xxxxxx"', () => {
    // When
    const id = generateCargoId()

    // Then
    expect(id).toMatch(/^box-[a-z0-9]{6}$/)
  })

  it('generates unique ids each time', () => {
    // When
    const id1 = generateCargoId()
    const id2 = generateCargoId()

    // Then
    expect(id1).not.toEqual(id2)
  })
})

describe('generateRandomHexColor', () => {
  it('generates a random hex color string in the format "#xxxxxx"', () => {
    // When
    const color = generateRandomHexColor()

    // Then
    expect(color).toMatch(/^#[a-fA-F0-9]{6}$/)
  })

  it('generates different colors each time', () => {
    // When
    const color1 = generateRandomHexColor()
    const color2 = generateRandomHexColor()

    // Then
    expect(color1).not.toEqual(color2)
  })
})

describe('transformCargoForPrompt', () => {
  it('transforms cargo for prompt format correctly', () => {
    // Given
    const cargo: CARGO = {
      '1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        count: 2,
      },
      '2': {
        name: 'Box B',
        color: '#00ff00',
        dimensions: [3, 4, 5],
        count: 1,
      },
    }

    const expected: PROMPT_TRANSFORMED_CARGO = {
      '1-1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
      },
      '1-2': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
      },
      '2-1': {
        name: 'Box B',
        color: '#00ff00',
        dimensions: [3, 4, 5],
      },
    }

    // When
    const result = transformCargoForPrompt(cargo)

    // Then
    expect(result).toEqual(expected)
  })

  it('returns an empty object if cargo is empty', () => {
    // Given
    const cargo: CARGO = {}

    // When
    const result = transformCargoForPrompt(cargo)

    // Then
    expect(result).toEqual({})
  })

  it('handles cargo with count of 1 correctly', () => {
    // Given
    const cargo: CARGO = {
      '1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        count: 1,
      },
    }

    const expected: PROMPT_TRANSFORMED_CARGO = {
      '1-1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
      },
    }

    // When
    const result = transformCargoForPrompt(cargo)

    // Then
    expect(result).toEqual(expected)
  })

  it('generates unique keys for each box based on count', () => {
    // Given
    const cargo: CARGO = {
      '1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        count: 3,
      },
    }

    // When
    const result = transformCargoForPrompt(cargo)

    // Then
    expect(Object.keys(result)).toEqual(['1-1', '1-2', '1-3'])
  })
})
