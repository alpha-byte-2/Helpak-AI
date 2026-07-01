require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // NEW: Built-in Node tool for file paths

const app = express();
app.use(cors());
app.use(express.json());

// NEW: This tells your server to host your HTML, CSS, and JS files to the public!
app.use(express.static(__dirname)); 

const SYSTEM_PROMPT = `
You are Helpak AI, a strict and highly technical DSA Mock Interviewer. 
Your objective is to conduct professional, interactive technical interviews.
Rules of Engagement:
1. Greet the user as Helpak AI and ask what DSA topic or specific question they want to tackle today.
2. Provide exactly ONE standard interview problem at a time.
3. Never output solutions or source code immediately.
4. Ask the user to explain their conceptual approach, along with Time and Space complexities.
5. Provide subtle, minor hints if they get stuck to guide them down the right path.
`;

app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;
    
    const contents = [
        ...history,
        { role: 'user', parts: [{ text: message }] }
    ];

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                contents: contents
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error("Google API Error:", data.error.message);
            return res.status(400).json({ error: data.error.message });
        }

        const botResponse = data.candidates[0].content.parts[0].text;
        res.json({ response: botResponse });
        
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ error: "Helpak AI failed to connect internally." });
    }
});

// NEW: If a user visits your website, send them the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Helpak AI backend engine active on port ${PORT}`));