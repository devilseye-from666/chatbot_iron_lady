import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Get current directory and load .env from server folder
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const envPath = join(__dirname, '.env')

console.log('Loading .env from:', envPath)
const result = dotenv.config({ path: envPath })
if (result.error) {
  console.log('Dotenv error:', result.error.message)
} else {
  console.log('Dotenv loaded successfully')
}
console.log('GEMINI_API_KEY loaded:', process.env.GEMINI_API_KEY ? 'Yes' : 'No')
import { retrieveRelevant } from './kb.js'

const app = express()
app.use(cors())
app.use(express.json())

// Simple guard: only enable AI if key exists
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || ''
const AI_ENABLED = Boolean(GEMINI_API_KEY)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, aiEnabled: AI_ENABLED })
})

app.post('/api/chat', async (req, res) => {
  try {
    const { question } = req.body || {}
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Invalid question' })
    }

    if (!AI_ENABLED) {
      return res.status(503).json({ error: 'AI not configured' })
    }

    // Lazy import Gemini SDK
    const { GoogleGenerativeAI } = await import('@google/generative-ai')
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const systemPrompt = 'You are a concise assistant for Iron Lady leadership program FAQs. Use ONLY the provided context; if unknown, say it\'s not publicly available and suggest applying via official channels.'
    const context = retrieveRelevant(question).join('\n\n')
    const prompt = `Context (trusted):\n${context}\n\nUser question: ${question}\n\nAnswer:`

    const result = await model.generateContent(prompt)
    const answer = result.response?.text?.() || 'Sorry, I could not generate a response.'
    res.json({ answer })
  } catch (err) {
    res.status(500).json({ error: err.message || 'Server error' })
  }
})

const PORT = process.env.PORT || 5174
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})


