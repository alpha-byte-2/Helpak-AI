# 🤖 Helpak AI — DSA Mock Interviewer
## 🌐 Live Demo
🚀 **[Try Helpak AI](http://13.63.154.225:3000/)**

**Helpak AI** is an AI-powered technical mock interviewer designed to help developers prepare for **DSA and coding interviews**.

Instead of directly giving you the solution, Helpak AI behaves like a technical interviewer. It presents an interview problem, asks you to explain your approach, evaluates your reasoning, and focuses on **time and space complexity** while providing hints when you get stuck.

## 🚀 Features

* 🤖 AI-powered DSA mock interviews
* 💬 Interactive chat-based interview experience
* 🧠 Focuses on problem-solving and conceptual thinking
* ⏱️ Discusses time complexity
* 💾 Discusses space complexity
* 💡 Provides hints instead of immediately revealing solutions
* 📝 Maintains conversation history during the interview
* 🌙 Modern dark-themed interface
* ⚡ Fast and responsive chat experience

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js
* CORS
* dotenv

**AI**

* Google Gemini 2.5 Flash API

## 🏗️ How It Works

```text
                ┌─────────────────┐
                │     User        │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │  Chat Interface │
                │ HTML/CSS/JS     │
                └────────┬────────┘
                         │
                    POST /api/chat
                         │
                         ▼
                ┌─────────────────┐
                │  Express.js     │
                │    Backend      │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │  Gemini 2.5     │
                │  Flash API      │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │ AI Interviewer  │
                │    Response     │
                └─────────────────┘
```

## 🧠 Interview Approach

Helpak AI follows a structured interview style:

1. Introduces the interview problem.
2. Allows the candidate to think and explain their approach.
3. Asks about time and space complexity.
4. Avoids immediately providing the complete solution.
5. Provides subtle hints when the candidate gets stuck.
6. Continues the conversation based on the candidate's responses.

The goal is to make DSA practice feel more like a **real technical interview** rather than simply solving problems with an AI.

## 📂 Project Structure

```text
Helpak-AI/
│
├── index.html        # Frontend structure
├── style.css         # UI styling
├── script.js         # Frontend logic & API communication
├── server.js         # Express backend & Gemini integration
├── package.json      # Dependencies and scripts
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/alpha-byte-2/Helpak-AI.git
```

### 2. Navigate to the project

```bash
cd Helpak-AI
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env`

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Start the application

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

## 🔑 Environment Variables

| Variable         | Description                                |
| ---------------- | ------------------------------------------ |
| `GEMINI_API_KEY` | Google Gemini API key                      |
| `PORT`           | Server port (optional, defaults to `3000`) |

> **Important:** Never commit your `.env` file or expose your Gemini API key publicly.

## 🔮 Future Improvements

* [ ] Easy / Medium / Hard difficulty selection
* [ ] DSA topic selection
* [ ] Interview scoring system
* [ ] Automated complexity evaluation
* [ ] Timed interview sessions
* [ ] Code-writing interview rounds
* [ ] Interview performance dashboard
* [ ] User authentication
* [ ] Persistent interview history
* [ ] Voice-based mock interviews

## 🎯 Purpose

Helpak AI was built to make **DSA interview preparation more interactive and realistic** by focusing not only on the final solution but also on how a candidate thinks, communicates, and analyzes a problem.

## 👨‍💻 Author

**Aman Choudhary**

GitHub: [@alpha-byte-2](https://github.com/alpha-byte-2)

---

⭐ If you find this project useful, consider giving the repository a star!
