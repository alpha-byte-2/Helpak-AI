const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
let conversationHistory = [];

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    userInput.value = '';

   
    const BACKEND_URL = '/api/chat'; 
    
    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, history: conversationHistory })
        });
        
        const data = await response.json();
        
        if (data.error) {
            appendMessage("Error: " + data.error, 'bot');
            return;
        }

        appendMessage(data.response, 'bot');
        
        conversationHistory.push({ role: 'user', parts: [{ text: text }] });
        conversationHistory.push({ role: 'model', parts: [{ text: data.response }] });
        
    } catch (error) {
        appendMessage("Helpak AI was unable to connect to the server.", 'bot');
    }
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
