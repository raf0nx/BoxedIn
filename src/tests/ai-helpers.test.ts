import { describe, it, expect } from 'vitest'

import { extractCargoDistributionFromAIResponse } from '../helpers/ai-helpers'
import type { AI_DISTRIBUTED_CARGO } from '../helpers/types'

describe('extractCargoDistributionFromAIResponse', () => {
  it('extracts and parses a valid JSON cargo distribution from response', () => {
    // Given
    const response = `Here is the cargo data:
    \`\`\`json
    {
      "box-1": {
        "name": "Box A",
        "color": "#ff0000",
        "dimensions": [2, 3, 4],
        "position": [1, 1, 1]
      },
      "box-2": {
        "name": "Box B",
        "color": "#00ff00",
        "dimensions": [3, 4, 5],
        "position": [2, 2, 2]
      }
    }
    \`\`\``

    const expected: AI_DISTRIBUTED_CARGO = {
      'box-1': {
        name: 'Box A',
        color: '#ff0000',
        dimensions: [2, 3, 4],
        position: [1, 1, 1],
      },
      'box-2': {
        name: 'Box B',
        color: '#00ff00',
        dimensions: [3, 4, 5],
        position: [2, 2, 2],
      },
    }

    // When
    const result = extractCargoDistributionFromAIResponse(response)

    // Then
    expect(result).toEqual(expected)
  })

  it('throws an error if response is null', () => {
    // Then
    expect(() => extractCargoDistributionFromAIResponse(null)).toThrowError(
      'Failed to fetch distributed cargo. Please try again.'
    )
  })

  it('throws an error if JSON is not properly formatted in the response', () => {
    // Given
    const response = `Here is the cargo data:
    \`\`\`json
    {
      "box-1": { name: "Box A", color: "#ff0000", dimensions: [2, 3, 4] position: [1, 1, 1] }
    }
    \`\`\`` // Missing comma between "dimensions" and "position"

    // Then
    expect(() => extractCargoDistributionFromAIResponse(response)).toThrowError(
      'Failed to parse cargo data.'
    )
  })

  it('throws an error if JSON block is not found in the response', () => {
    // Given
    const response = `Here is the cargo data without JSON block.`

    // Then
    expect(() => extractCargoDistributionFromAIResponse(response)).toThrowError(
      'No cargo data found.'
    )
  })

  it('ignores non-JSON text outside the code block and correctly parses JSON', () => {
    // Given
    const response = `Random intro text...
    \`\`\`json
    {
      "box-3": {
        "name": "Box C",
        "color": "#0000ff",
        "dimensions": [4, 5, 6],
        "position": [3, 3, 3]
      }
    }
    \`\`\`
    More random text here.`

    const expected: AI_DISTRIBUTED_CARGO = {
      'box-3': {
        name: 'Box C',
        color: '#0000ff',
        dimensions: [4, 5, 6],
        position: [3, 3, 3],
      },
    }

    // When
    const result = extractCargoDistributionFromAIResponse(response)

    // Then
    expect(result).toEqual(expected)
  })

  it('handles multiline JSON data correctly', () => {
    // Given
    const response = `\`\`\`json
    {
      "box-4": {
        "name": "Box D",
        "color": "#ff00ff",
        "dimensions": [
          5,
          6,
          7
        ],
        "position": [
          4,
          4,
          4
        ]
      }
    }
    \`\`\``

    const expected: AI_DISTRIBUTED_CARGO = {
      'box-4': {
        name: 'Box D',
        color: '#ff00ff',
        dimensions: [5, 6, 7],
        position: [4, 4, 4],
      },
    }

    // When
    const result = extractCargoDistributionFromAIResponse(response)

    // Then
    expect(result).toEqual(expected)
  })
})
