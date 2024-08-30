import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { getGroqChatCompletion } from './ai-helpers'

import './App.css'

function App() {
  const [response, setResponse] = useState('')

  async function sendPrompt() {
    const chatCompletion = await getGroqChatCompletion()
    setResponse(chatCompletion.choices[0]?.message?.content || '')
  }

  return (
    <>
      <div>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className="card">
        <button onClick={sendPrompt}>Send prompt</button>
      </div>
      <p>Response:</p>
      <p>{response}</p>
    </>
  )
}

export default App
