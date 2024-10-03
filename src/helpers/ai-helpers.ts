import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // TODO: consider moving to Firebase functions
  dangerouslyAllowBrowser: true,
})

const systemPrompt = `
You're an expert logistics planner with extensive experience in optimizing space allocation for various types of loads. You specialize in leveraging technologies like React Three Fiber to visualize and implement efficient load distributions in three-dimensional spaces.
`

const userPrompt = `
Your task is to optimally plan the load distribution within a constrained space, ensuring maximum utilization without exceeding the provided dimensions. Here is the load information represented in a JavaScript object format:

{
  box1: { dimensions: [1, 1, 1] },
  box2: { dimensions: [1, 1, 1] },
}

The available space for loading has the following dimensions: [1, 1, 2].

Keep in mind the following guidelines while distributing the load:
- Positioning must be relative to the [0, 0, 0] position.
- No overlaps are allowed between loads, although they can touch.
- Begin placement at the rear along the Z-axis.
- No loads can hang in the air.
- The assigned position on any axis plus the corresponding load dimension cannot exceed the dimensions of the loaded space on a given axis; for example, if the assigned position is [1,0,0], the load dimensions are [2,1,1] and the loaded space dimensions are [2,2,2] then such assigned position ([1,0,0]) is incorrect because 1(assigned position X-axis) + 2(load dimension on X-axis) is greater than 2 (loaded space restriction on X-axis).

If the available space is too small to accommodate the loads, return a JSON response indicating this through the "errorMessage" field. If successful, format the output JSON so that keys are the load IDs, and values include their dimensions and positions in React Three Fiber. 

Please respond strictly in JSON format.
`

export async function getCargoDistribution() {
  const openAiCompletion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userPrompt,
      },
    ],
  })

  return openAiCompletion.choices[0].message.content
}
