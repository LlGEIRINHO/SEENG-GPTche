import { API_KEY } from './config.js';

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

async function getBotReply(userMessage) {
    // Trocado para o gemini-3.1-flash-lite, que tem menor taxa de ocupação
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: userMessage }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('API Error:', data);
            return data.error?.message || 'Error fetching response';
        }

        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I couldn\'t get that.';
    }
}

// Adiciona uma mensagem na interface
function addMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Exibe a indicação visual de digitação do bot
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message');
    typingDiv.textContent = 'Typing...';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return typingDiv;
}

// Evento ao clicar no botão "Send"
sendBtn.onclick = async () => {
    const message = userInput.value.trim();

    if (message === '') return;

    // Adiciona mensagem do usuário
    addMessage(message, 'user-message');
    userInput.value = '';

    // Exibe o status de "Typing..."
    const typingDiv = showTyping();

    // Obtém resposta do bot
    const botReply = await getBotReply(message);

    // Remove a indicação de digitação e exibe a resposta
    typingDiv.remove();
    addMessage(botReply, 'bot-message');

    // Salva o histórico no LocalStorage
    localStorage.setItem('chatHistory', chatBox.innerHTML);
};

// Enviar mensagem ao pressionar "Enter"
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

// Carregar o histórico do chat ao recarregar a página
window.onload = () => {
    const savedChat = localStorage.getItem('chatHistory');
    if (savedChat) {
        chatBox.innerHTML = savedChat;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
};