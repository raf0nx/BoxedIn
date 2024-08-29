import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState('')

  return (
    <>
      <div className="card">
        <button onClick={() => setResponse('')}>Send prompt</button>
      </div>
      <p>Response:</p>
      <p>{response}</p>
    </>
  )
}

export default App
