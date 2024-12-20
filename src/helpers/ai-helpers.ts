import OpenAI from 'openai'

import type {
  AI_DISTRIBUTED_CARGO,
  DIMENSIONS_3D,
  PROMPT_TRANSFORMED_CARGO,
} from './types'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // TODO: consider moving to Firebase functions
  dangerouslyAllowBrowser: true,
})

const systemPrompt = `
You're an expert logistics planner with extensive experience in optimizing space allocation for various types of loads. You specialize in leveraging technologies like React Three Fiber to visualize and implement efficient load distributions in three-dimensional spaces.
`

function getUserPrompt(
  cargo: PROMPT_TRANSFORMED_CARGO,
  loadingSpaceDimensions: DIMENSIONS_3D
) {
  return `
  Your task is to optimally plan the load distribution within a constrained space, ensuring maximum utilization without exceeding the provided dimensions. Here is the load information represented in a JavaScript object format:
  
  ${JSON.stringify(cargo)}
  
  The available space for loading has the following dimensions: [${loadingSpaceDimensions}].
  
  Keep in mind the following guidelines while distributing the load:
  - Positioning must be relative to the [0, 0, 0] position.
  - No overlaps are allowed between loads, although they can touch.
  - Begin placement at the rear along the Z-axis.
  - No loads can hang in the air.
  - The assigned position on any axis plus the corresponding load dimension cannot exceed the dimensions of the loaded space on a given axis; for example, if the assigned position is [1,0,0], the load dimensions are [2,1,1] and the loaded space dimensions are [2,2,2] then such assigned position ([1,0,0]) is incorrect because 1(assigned position X-axis) + 2(load dimension on X-axis) is greater than 2 (loaded space restriction on X-axis).
  
  If the available space is too small to accommodate the loads, return a JSON response indicating this through the "errorMessage" field. If successful, format the output JSON so that keys are the load IDs, and values include their names, colors, dimensions and positions in React Three Fiber. 
  
  Please respond strictly in JSON format.
  `
}

export async function getCargoDistribution(
  cargo: PROMPT_TRANSFORMED_CARGO,
  loadingSpaceDimensions: DIMENSIONS_3D
) {
  const openAiCompletion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: getUserPrompt(cargo, loadingSpaceDimensions),
      },
    ],
  })

  return openAiCompletion.choices[0].message.content
}

export function extractCargoDistributionFromAIResponse(
  response: string | null
): AI_DISTRIBUTED_CARGO {
  if (response === null) {
    throw new Error('Failed to fetch distributed cargo. Please try again.')
  }

  const jsonRegex = /```json([\s\S]*?)```/
  const match = response.match(jsonRegex)

  if (match && match[1]) {
    const jsonString = match[1].trim()

    try {
      return JSON.parse(jsonString)
    } catch {
      throw new Error('Failed to parse cargo data.')
    }
  } else {
    throw new Error('No cargo data found.')
  }
}
