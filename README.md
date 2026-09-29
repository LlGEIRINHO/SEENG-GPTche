# 🤖 Front-end na Prática — Criando seu Primeiro Site

> Projeto desenvolvido durante o mini curso **Front-end na Prática: Criando seu Primeiro Site**, apresentado na **Semana das Engenharias do Instituo Federal do Mato Grosso do Sul - Três Lagoas**.

Neste projeto, vamos desenvolver juntos um **chatbot utilizando a API do Google Gemini**, colocando em prática conceitos fundamentais de desenvolvimento **Front-end**.

A ideia é começar do zero e construir, passo a passo, uma aplicação utilizando **HTML, CSS e JavaScript**. 🚀

---

## 🎯 O que você vai aprender?

Durante o mini curso, vamos entender na prática:

* 🌐 O que é **Front-end**
* 🧱 Como estruturar uma página com **HTML**
* 🎨 Como estilizar uma página com **CSS**
* ⚡ Como adicionar interatividade com **JavaScript**
* 🤖 Como consumir uma **API**
* 💬 Como criar um chatbot utilizando a **API do Gemini**
* 🖥️ Como executar um projeto web utilizando o **VS Code + Live Server**

---

## 🛠️ Tecnologias utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Gemini API](https://img.shields.io/badge/Gemini%20API-8E75B2?style=for-the-badge\&logo=google\&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge\&logo=visualstudiocode\&logoColor=white)

</div>

---

## 📁 Estrutura do projeto

O projeto possui uma estrutura simples para facilitar o aprendizado:

```text
📦 sua-pasta-principal
├── 📄 index.html
├── 🎨 style.css
└── ⚡ app.js
└── ⚡ config.js
```

### 📄 `index.html`

Responsável pela **estrutura da página**.

É nele que criamos os elementos que aparecem na tela, como:

* título;
* campo de mensagem;
* botão de envio;
* área das mensagens;
* estrutura do chatbot.

### 🎨 `style.css`

Responsável pela **aparência da aplicação**.

Aqui trabalhamos com:

* cores;
* fontes;
* tamanhos;
* espaçamentos;
* posicionamento dos elementos;
* responsividade;
* estilos das mensagens do usuário e do chatbot.

### ⚡ `app.js`

Responsável pelo **comportamento da aplicação**.

É onde vamos utilizar JavaScript para:

* capturar a mensagem digitada;
* responder aos eventos do usuário;
* adicionar mensagens na tela;
* realizar a comunicação com a API;
* receber e exibir a resposta do Gemini.

### ⚡ `config.js`

Responsável pela **conexão com o Gemini**.

É onde vamos utilizar JavaScript para:

* exportar a chave de API do Gimini;

---

# 🚀 Como executar o projeto

## 1. Instale o Visual Studio Code

Caso ainda não tenha o VS Code instalado, faça o download e instale em seu computador.

---

## 2. Abra o projeto no VS Code

No VS Code, abra a pasta onde estão os arquivos do projeto:

```text
Arquivo → Abrir Pasta...
```

Selecione a pasta do projeto.

---

## 3. Instale a extensão Live Server

Para executar o projeto de forma simples durante o mini curso, vamos utilizar a extensão **Live Server**.

No VS Code:

1. Abra a aba **Extensões**.
2. Pesquise por:

```text
Live Server
```
ou aperte as teclas CTRL + SHIFT + X para abrir diretamente a aba de extesões do VSCode

3. Instale a extensão **Live Server**.

> 💡 O Live Server cria um servidor local para executar seu projeto no navegador e atualiza a página automaticamente quando você salva alguma alteração.

---

## 4. Execute o projeto

Depois de instalar o Live Server:

1. Abra o arquivo `index.html`.
2. Clique com o **botão direito** dentro do arquivo.
3. Selecione:

```text
Open with Live Server
```

O projeto será aberto automaticamente no navegador. 🌐

Também é possível utilizar o botão **Go Live** que aparece na barra inferior do VS Code.

---

# 🤖 Sobre o Chatbot

O chatbot utiliza a **API do Google Gemini** para gerar as respostas.

O funcionamento básico da aplicação é:

```text
👤 Usuário
     ↓
💬 Digita uma mensagem
     ↓
⚡ JavaScript
     ↓
🔗 API do Gemini
     ↓
🤖 Resposta da IA
     ↓
💬 Mensagem exibida na tela
```

Assim conseguimos conectar uma interface criada com HTML, CSS e JavaScript a um serviço externo de Inteligência Artificial.

---

# 🔑 API do Gemini

Para utilizar o chatbot, é necessário possuir uma **chave de API do Gemini**.

A chave é utilizada pelo JavaScript para realizar as requisições à API, e ela deve estar da seguinte maneira no arquivo config.js:

```text
export const API_KEY = "SUA CREDENCIAL DO GOOGLE AI STUDIO AQUI";
```

> ⚠️ **Importante:** nunca compartilhe sua chave de API publicamente em um repositório do GitHub.

Durante o desenvolvimento, utilize sua própria chave que pode ser extraida no site: Google AI Studio
https://aistudio.google.com na aba "Get API Key" e siga as orientações apresentadas durante o mini curso.

---

# 🧠 O que estamos construindo?

Este projeto é mais do que apenas um chatbot.

Ele serve como uma introdução prática ao desenvolvimento Front-end, mostrando como diferentes tecnologias trabalham juntas:

### HTML

Define **o que existe na página**.

### CSS

Define **como a página aparece**.

### JavaScript

Define **como a página funciona**.

### API

Permite que nossa aplicação **converse com um serviço externo**.

No final, temos:

> **HTML + CSS + JavaScript + API = uma aplicação web interativa 🚀**

---

## 💜 Desenvolvido durante a Semana das Engenharias

Projeto desenvolvido para o mini curso:

### **Front-end na Prática: Criando seu Primeiro Site**

**Semana das Engenharias — 2026**

---

<div align="center">

### 🚀 Codifique. Teste. Erre. Aprenda. Crie.

**Seu primeiro site pode começar aqui. 💻✨**
**Ester Pazini e André Alves**

</div>
