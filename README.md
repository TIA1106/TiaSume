

# 💼 TiaSumé – AI-Powered Resume Builder

TiaSumé is a full-stack resume builder that helps users quickly create beautiful resumes using smart templates, AI-assisted writing, and MongoDB persistence. Users can save, edit, delete, and download their resumes — no login needed.

---

## 🚀 Features

- 📝 Fill in your resume details via guided form
- 🎨 Choose from 10+ modern templates
- 🤖 AI-generated suggestions for sections like “Objective” or “Skills”
- 💾 MongoDB storage with real-time editing
- 📤 One-click PDF download (via html2canvas)
- 📂 Dashboard to view, edit, delete saved resumes

---

## 🧠 Tech Stack

| Layer       | Stack                         |
|-------------|-------------------------------|
| Frontend    | Next.js 14, Tailwind CSS      |
| Backend     | MongoDB + Server Actions      |
| PDF Export  | `html2canvas`                 |
| AI          | OpenAI via LangChain          |



---
## ⚠️ Known Limitation: API Key Issues

This project uses OpenRouter API (free tier). Sometimes you may experience:

- `401 No Auth Credentials` errors
- AI features not working
- Random failures after pushing to GitHub

### 🔑 Why This Happens
- Free API keys can **expire**, be **revoked**, or hit **rate limits**
- `.env.local` is required and must have a working key
- The project does NOT ship with a production-grade API key

### ✅ How to Fix It
1. Create `.env.local` file in root
2. Add your own valid OpenRouter API key:
```env
OPENROUTER_API_KEY=your_key_here
3.
Restart your dev server

⚠️ Tip: You can get a new free key from https://openrouter.ai

## 🛠️ How to Run Locally

```bash
git clone https://github.com/TIA1106/tiasume.git
cd tiasume
npm install
npm run dev

👩‍💻 Author
Tia Sukhnanni
🎓 BTech Student @ JKLU Jaipur
🧾 Full-Stack Builder | AI Writer
