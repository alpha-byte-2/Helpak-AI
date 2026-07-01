# Helpak AI - DSA Mock Interviewer

Helpak AI is an interactive, real-time web application designed to help software engineers practice and master Data Structures and Algorithms (DSA) interviews. By leveraging the Gemini API, the application simulates a professional technical interview environment, offering structured problem-solving, real-time feedback, and a hint-based learning system.

## Key Features

- Interactive Mock Interviews: Simulates a professional interviewer persona.
- Topic-Focused Learning: Users can request specific DSA topics.
- Hint System: Provides guidance rather than direct solutions, fostering deep learning.
- Cloud-Ready Architecture: Designed for deployment on scalable cloud infrastructure.

## Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript.
- Backend: Node.js, Express.js.
- AI Engine: Google Gemini API (Flash Model).
- Deployment: AWS EC2 (Ubuntu).

## System Architecture & Trade-offs

### Architecture
The application follows a standard Client-Server-AI architecture:
1. Client: The user interacts with a responsive frontend.
2. Server: A Node.js backend handles secure API requests to the Google Gemini model.
3. Deployment: The application is hosted on an AWS EC2 instance.

### Trade-offs
- Complexity vs. Simplicity: We chose a Vanilla JavaScript frontend to reduce build time and complexity for a single-developer deployment.
- Security: By proxying all AI requests through our Node server, we added a layer of latency but gained crucial security, ensuring your API key remains hidden from the browser client.

## Getting Started

1. Clone the repository:
   git clone https://github.com/alpha-byte-2/Helpak-AI.git
   cd Helpak-AI

2. Install dependencies:
   npm install express cors dotenv

3. Setup Environment Variables:
   Create a .env file in the root folder and add your API key:
   GEMINI_API_KEY=your_actual_api_key_here

4. Run the server:
   node server.js

5. Visit: http://localhost:3000

## Deployment (AWS EC2)
The application is deployed on an AWS Ubuntu EC2 instance.
- Runtime: Node.js (via PM2 for process management).
- Firewall: Port 3000 is opened via AWS Security Groups for inbound TCP traffic.
- Process Management: Used pm2 to ensure the Helpak AI engine runs continuously.





   
