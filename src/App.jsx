import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { faqIntents, fallbackAnswer } from './faqData'

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function findFaqAnswer(userText) {
  const normalized = normalizeText(userText)
  for (const intent of faqIntents) {
    for (const pattern of intent.patterns) {
      if (normalized.includes(normalizeText(pattern))) {
        return intent.answer
      }
    }
  }
  return null
}

function getTimestamp() {
  const d = new Date()
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function App() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: "Hi! I'm the Iron Lady FAQs bot. Ask me about programs, duration, online/offline, certificates, or mentors.", time: getTimestamp() },
  ])
  const [input, setInput] = useState('')
  const [useAI, setUseAI] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messageEndRef = useRef(null)

  const suggestedQuestions = [
    'What programs do you offer?',
    'What is the program duration?',
    'Is the program online or offline?',
    'Are certificates provided?',
    'Who are the mentors/coaches?',
  ]

  const aiAvailable = useMemo(() => {
    return true
  }, [])

  function scrollToBottom() {
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  async function sendToAI(question) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'AI request failed')
      }
      const data = await res.json()
      return data.answer
    } catch (err) {
      return `AI is unavailable right now. Falling back to FAQs. (${err.message})`
    }
  }

  async function handleSend(e) {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg = { id: Date.now(), role: 'user', text: trimmed, time: getTimestamp() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    // Add loading message from chatbot
    const loadingMsg = { id: Date.now() + 0.5, role: 'assistant', text: 'Thinking...', time: getTimestamp(), isLoading: true }
    setMessages((prev) => [...prev, loadingMsg])

    let answer = null
    if (useAI) {
      answer = await sendToAI(trimmed)
      if (answer && answer.startsWith('AI is unavailable')) {
        answer = findFaqAnswer(trimmed) || fallbackAnswer
      }
    } else {
      answer = findFaqAnswer(trimmed) || fallbackAnswer
    }

    // Replace loading message with actual answer
    const botMsg = { id: Date.now() + 1, role: 'assistant', text: answer, time: getTimestamp() }
    setMessages((prev) => prev.map(msg => msg.isLoading ? botMsg : msg))
    setIsLoading(false)
    scrollToBottom()
  }

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>Iron Lady FAQ Chatbot</h1>
          <p>Your quick guide to programs, schedules, and coaches.</p>
        </div>
        <div className="ai-toggle">
          <label>
            <input
              type="checkbox"
              checked={useAI}
              onChange={(e) => setUseAI(e.target.checked)}
              disabled={!aiAvailable}
            />
            Use AI (optional)
          </label>
        </div>
      </div>

      <div className="suggested">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            className="chip"
            onClick={() => setInput(q)}
            type="button"
          >
            {q}
          </button>
        ))}
      </div>

      <main className="chat-window">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.role}`}>
            {m.role === 'assistant' ? (
              <div className="avatar">IL</div>
            ) : (
              <div className="avatar you">You</div>
            )}
            <div className={`bubble ${m.isLoading ? 'isLoading' : ''}`}>
              <div className="text">{m.text}</div>
              {m.time ? <div className="meta">{m.time}</div> : null}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </main>

      <form className="composer" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input.trim()}>
          Send
        </button>
      </form>

      
    </div>
  )
}

export default App
