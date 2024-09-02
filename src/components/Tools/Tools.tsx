import { useEffect, useState } from 'react'

import { getGroqChatCompletion } from '../../helpers/ai-helpers'

import './Tools.css'

export function Tools() {
  const [response, setResponse] = useState('')

  // TODO: temp, to be deleted
  useEffect(() => {
    console.log(response)
  }, [response])

  async function sendPrompt() {
    const chatCompletion = await getGroqChatCompletion()
    setResponse(chatCompletion.choices[0]?.message?.content || '')
  }

  return (
    <aside className="tools">
      <div className="tools__content">Content</div>
      <button className="tools__action" onClick={sendPrompt}>
        Get boxed!
      </button>
    </aside>
  )
}
