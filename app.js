import { API_KEY } from './config.js';

const chat = document.getElementById('chat');
const welcome = document.getElementById('welcome');
const form = document.getElementById('form');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button');
const suggestionButtons = document.querySelectorAll('.suggestions button');

// Ajusta a altura do textarea dinamicamente conforme a digitação
messageInput.addEventListener('input', () => {
  messageInput.style.height = 'auto';
  messageInput.style.height = `${Math.min(messageInput.scrollHeight, 140)}px`;
});

// Envia ao pressionar Enter (sem Shift)
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
});

// Clique nos botões de sugestão
suggestionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const promptText = button.getAttribute('data-prompt');
    if (promptText) {
      sendMessage(promptText);
    }
  });
});

// Botão para limpar histórico do chat
clearButton.addEventListener('click', () => {
  localStorage.removeItem('chatHistory');
  chat.innerHTML = '';
  if (welcome) chat.appendChild(welcome);
});

// Função auxiliar para chamar os modelos do Gemini
async function fetchGeminiResponse(modelName, userMessage) {
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
  return await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: userMessage }] }]
    })
  });
}

// Obtém a resposta da API com fallback caso o modelo principal esteja sobrecarregado
async function getBotReply(userMessage) {
  try {
    // 1ª tentativa: Modelo leve e estável
    let response = await fetchGeminiResponse('gemini-3.1-flash-lite', userMessage);

    // 2ª tentativa (fallback): Modelo padrão em caso de sobrecarga
    if (!response.ok) {
      console.warn('Tentando modelo alternativo...');
      response = await fetchGeminiResponse('gemini-2.5-flash', userMessage);
    }

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro na API:', data);
      return data.error?.message || 'Erro ao obter resposta da API.';
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Erro de requisição:', error);
    return 'Desculpe, ocorreu um erro ao conectar com o serviço.';
  }
}

// Adiciona uma mensagem na interface com avatares e balões estilizados
function appendMessage(role, text) {
  if (welcome && welcome.parentNode) {
    welcome.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', role);

  if (role === 'model') {
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.textContent = '🧉';
    messageDiv.appendChild(avatar);
  }

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = text;
  messageDiv.appendChild(bubble);

  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;

  return bubble;
}

// Fluxo de envio de mensagem
async function sendMessage(text) {
  const messageText = text || messageInput.value.trim();
  if (!messageText) return;

  appendMessage('user', messageText);
  messageInput.value = '';
  messageInput.style.height = 'auto';

  // Desabilita os controles enquanto aguarda a resposta
  sendButton.disabled = true;
  messageInput.disabled = true;

  // Cria o indicador de resposta do bot
  const botBubble = appendMessage('model', 'Digitando...');

  const reply = await getBotReply(messageText);
  botBubble.textContent = reply;

  // Reabilita os controles
  sendButton.disabled = false;
  messageInput.disabled = false;
  messageInput.focus();

  // Salva o histórico no LocalStorage
  localStorage.setItem('chatHistory', chat.innerHTML);
}

// Evento de envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

// Restaura mensagens do histórico caso existam
window.addEventListener('load', () => {
  const savedChat = localStorage.getItem('chatHistory');
  if (savedChat && savedChat.trim() !== '') {
    chat.innerHTML = savedChat;
    chat.scrollTop = chat.scrollHeight;
  }
});