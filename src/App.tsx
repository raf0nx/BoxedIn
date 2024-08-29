import { useState } from 'react'

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
      <div className="card">
        <button onClick={sendPrompt}>Send prompt</button>
      </div>
      <p>Response:</p>
      <p>{response}</p>
    </>
  )
}

export default App
