# Iron Lady FAQ Chatbot

A modern React-based chatbot for Iron Lady leadership programs with both rule-based FAQ responses and AI-powered answers using Google's Gemini API.

## 🚀 Features

- **Dual Response Modes**: Rule-based FAQs + AI-powered responses
- **Knowledge Base**: Structured data from Iron Lady technical reports
- **Modern UI**: Clean, responsive chat interface with suggested questions
- **Real-time Chat**: Auto-scrolling, timestamps, and loading indicators
- **Smart Retrieval**: Context-aware responses using relevant knowledge chunks

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key (optional, for AI responses)

## 🛠️ Installation

1. **Clone or download the project**
   ```bash
   cd chatbot_iron_lady

   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (for AI responses)**
   
   Create a file `server/.env` with your Gemini API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5174
   ```
   
   **How to get Gemini API key:**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy and paste it in `server/.env`

## 🏃‍♂️ Running the Application

### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```

### Option 2: Run Servers Separately
```bash
# Terminal 1 - Backend (Express + Gemini)
npm run server

# Terminal 2 - Frontend (React + Vite)
npm run dev
```

## 🌐 Access the Application

- **Frontend**: http://localhost:5173 (or next available port)
- **Backend API**: http://localhost:5174

## 💬 How to Use

1. **Open the frontend URL** in your browser
2. **Toggle "Use AI (optional)"** to enable Gemini-powered responses
3. **Ask questions** about Iron Lady programs:
   - "What programs do you offer?"
   - "What is the program duration?"
   - "Who are the mentors?"
   - "What is Business War Tactics?"
4. **Click suggested question chips** for quick queries

## 🏗️ Project Structure

```
chatbot/
├── src/                    # React frontend
│   ├── App.jsx            # Main chat component
│   ├── App.css            # Chat UI styles
│   ├── faqData.js         # Rule-based FAQ responses
│   └── main.jsx           # React entry point
├── server/                # Express backend
│   ├── index.js           # API server with Gemini integration
│   ├── kb.js              # Knowledge base and retrieval logic
│   └── .env               # Environment variables (create this)
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration with API proxy
```

## 🔧 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run server` - Start Express API server
- `npm run dev:all` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🧠 How It Works

### Rule-Based Mode (Default)
- Uses pattern matching in `src/faqData.js`
- Provides instant responses for common questions
- No API key required

### AI-Powered Mode (Optional)
- Uses Google Gemini API via `server/index.js`
- Retrieves relevant context from knowledge base (`server/kb.js`)
- Provides more nuanced, contextual responses
- Requires valid `GEMINI_API_KEY`

### Knowledge Base
The chatbot includes structured data about:
- **Programs**: Leadership Essentials, 100 Board Members, Master of Business Warfare
- **Key Concepts**: Business War Tactics, Shameless Pitching, Maximization vs Balance
- **Mentors**: Rajesh Bhat, Suvarna Hegde, Simon, Sridhar
- **Testimonials**: Real participant feedback
- **Pricing**: Program costs and community memberships

## 🔒 Environment Variables

Create `server/.env`:
```env
GEMINI_API_KEY=your_api_key_here
PORT=5174
```

**Security Note**: Never commit `.env` files to version control. Add `server/.env` to your `.gitignore`.

## 🐛 Troubleshooting

### Server Won't Start
- Check if ports 5173/5174 are available
- Kill existing Node processes: `taskkill /f /im node.exe` (Windows)
- Restart with `npm run dev:all`

### AI Responses Not Working
- Verify `GEMINI_API_KEY` is set in `server/.env`
- Check console for "GEMINI_API_KEY loaded: Yes"
- Ensure API key is valid and has Gemini access

### Proxy Errors
- Backend must be running on port 5174
- Check `vite.config.js` proxy configuration
- Restart both servers if needed

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku)
- Set `GEMINI_API_KEY` environment variable
- Deploy `server/` folder
- Update frontend API calls to production URL

## 📝 Customization

### Adding New FAQs
Edit `src/faqData.js`:
```javascript
{
  id: 'new-topic',
  patterns: ['question pattern', 'another pattern'],
  answer: 'Your answer here'
}
```

### Updating Knowledge Base
Edit `server/kb.js` to add new programs, concepts, or testimonials.

### Styling Changes
Modify `src/App.css` for UI customization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational/demonstration purposes. Please respect Iron Lady's intellectual property and branding guidelines.

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify all dependencies are installed
3. Ensure environment variables are set correctly
4. Check console logs for error messages

---

**Built with**: React, Vite, Express, Google Gemini API, and lots of ☕
