<template>
  <div>
    <!-- Floating Button -->
    <button
      class="floating-chat-btn"
      @click="toggleChat"
      aria-label="Abrir chat IA"
    >
      <img
        src="../../assets/svg/chat-bot/ai-bot.svg"
        alt="Abrir chat IA"
        class="chat-ia-svg"
        style="width: 2.2rem; height: 2.2rem; display: block"
      />
    </button>

    <!-- Chat Modal -->
    <transition name="fade">
      <div v-if="showChat" class="chat-modal">
        <div class="chat-header">
          <span>Tire suas Dúvidas!</span>
          <button class="close-btn" @click="toggleChat">×</button>
        </div>
        <div class="chat-body">
          <div class="chat-history" ref="chatHistoryRef">
            <div
              v-for="(msg, idx) in chatHistory"
              :key="idx"
              :class="[
                'chat-bubble',
                msg.sender === 'user' ? 'user-bubble' : 'bot-bubble',
              ]"
            >
              <template v-if="msg.sender === 'bot'">
                <div class="bot-header">
                  <span class="bot-icon">🤖</span>
                  <span class="bot-name">Paulo Eduardo</span>
                </div>
                <div class="bubble-content">{{ msg.text }}</div>
              </template>
              <template v-else>
                <div class="user-header">
                  <span class="user-name">Você</span>
                </div>
                <div class="bubble-content">{{ msg.text }}</div>
              </template>
            </div>
            <div v-if="loading" class="chat-bubble bot-bubble loading-bubble">
              <div class="bot-header">
                <span class="bot-icon">🤖</span>
                <span class="bot-name">Paulo Eduardo</span>
              </div>
              <div class="bubble-content chat-loading">Pensando...</div>
            </div>
            <div ref="chatEnd"></div>
          </div>
        </div>
        <form class="chat-form" @submit.prevent="sendMessage">
          <div style="flex: 1; display: flex; flex-direction: column">
            <input
              v-model="message"
              :disabled="loading"
              class="chat-input"
              type="text"
              placeholder="Digite sua pergunta..."
              autocomplete="off"
              required
              maxlength="1000"
            />
            <div class="char-count">{{ message.length }} / 1000</div>
          </div>
          <button
            :disabled="loading || !message.trim()"
            class="send-btn"
            type="submit"
          >
            ➤
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import AIChartService from "../../services/AIChartService";

const STORAGE_KEY = "floatingChatHistory";

const mockChat = [
  {
    sender: "bot",
    text: "Olá! 👋\n\n Pode perguntar o que quiser sobre mim: minha carreira, experiências, habilidades ou projetos.\n\nDigite sua pergunta abaixo!",
  },
];

export default {
  name: "FloatingChat",
  data() {
    return {
      showChat: false,
      message: "",
      chatHistory: this.loadHistory(),
      loading: false,
    };
  },
  methods: {
    loadHistory() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {}
      return mockChat.slice();
    },
    saveHistory() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.chatHistory));
      } catch {}
    },
    toggleChat() {
      this.showChat = !this.showChat;
      if (!this.showChat) {
        this.message = "";
        // Não limpa o histórico ao fechar
        this.loading = false;
      }
    },
    addChatMessage(sender, text) {
      this.chatHistory.push({ sender, text });
      this.saveHistory();
      this.scrollToBottom();
    },
    async sendMessage() {
      if (!this.message.trim()) return;
      const userMsg = this.message;
      this.addChatMessage("user", userMsg);
      this.loading = true;
      this.message = "";

      await AIChartService.generateResponse(userMsg)
        .then((response) => {
          this.addChatMessage("bot", response.data.output);
        })
        .catch((error) => {
          const errorMessage =
            error.response?.data.message ||
            "Os servidores estão indisponíveis, tente novamente mais tarde.";
          this.addChatMessage("bot", errorMessage);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    scrollToBottom(behavior = "smooth") {
      // Usa um elemento dummy no final para garantir o scroll
      this.$nextTick(() => {
        setTimeout(() => {
          const chatEnd = this.$refs.chatEnd;
          if (chatEnd && chatEnd.scrollIntoView) {
            chatEnd.scrollIntoView({ behavior });
          }
        }, 30);
      });
    },
  },
  watch: {
    showChat(val) {
      if (val) {
        this.scrollToBottom("auto");
      }
    },
  },
};
</script>

<style scoped>
.floating-chat-btn {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  background: #2563eb;
  border: 2px solid rgb(35, 43, 75);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    border-color 0.2s,
    background 0.2s;
}
.floating-chat-btn:hover {
  background: #f0f6ff;
  border-color: #1e40af;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.18);
}
.char-count {
  font-size: 0.85rem;
  color: #6366f1;
  text-align: right;
  margin-top: 0.1rem;
  margin-bottom: -0.3rem;
  letter-spacing: 0.01em;
  user-select: none;
}
.chat-modal {
  position: fixed;
  right: 3rem;
  bottom: 6.5rem;
  width: 350px;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.18);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: fadeIn 0.2s;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.chat-header {
  background: linear-gradient(90deg, #2563eb 70%, #6366f1 100%);
  color: #fff;
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  border-bottom: 1px solid #e0e7ff;
}
.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  transition: color 0.2s;
}
.close-btn:hover {
  color: #a5b4fc;
}
.chat-body {
  padding: 1.2rem 1rem 1rem 1rem;
  min-height: 220px;
  max-height: 340px;
  overflow-y: auto;
  font-size: 1.05rem;
  color: #222;
  background: #f3f4f6;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}
.chat-history {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.chat-bubble {
  max-width: 85%;
  padding: 0.85rem 1.15rem;
  border-radius: 1.2rem;
  margin-bottom: 0.15rem;
  word-break: break-word;
  box-shadow: 0 1px 6px rgba(99, 102, 241, 0.06);
  position: relative;
  font-size: 1.05rem;
  line-height: 1.6;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}
.bot-bubble {
  align-self: flex-start;
  background: #e0e7ff;
  color: #3730a3;
  border-bottom-left-radius: 0.3rem;
}
.user-bubble {
  align-self: flex-end;
  background: linear-gradient(135deg, #2563eb 70%, #6366f1 100%);
  color: #fff;
  border-bottom-right-radius: 0.3rem;
}
.bot-header,
.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.18rem;
  font-size: 0.98em;
  font-weight: 700;
  gap: 0.3em;
}
.bot-icon {
  margin-right: 0.3em;
  font-size: 1.25em;
}
.user-icon {
  margin-right: 0.3em;
  font-size: 1.25em;
}
.bot-name {
  color: #3730a3;
  font-weight: 700;
}
.user-name {
  color: #fff;
  font-weight: 700;
}
.bubble-content {
  white-space: pre-line;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}
.loading-bubble .bubble-content {
  color: #888;
  font-style: italic;
}
.chat-form {
  display: flex;
  border-top: 1px solid #e0e7ff;
  padding: 0.7rem 1.1rem;
  background: #f8fafc;
  gap: 0.5rem;
}
.chat-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.08rem;
  padding: 0.6rem 0.9rem;
  border-radius: 0.7rem;
  background: #e0e7ff;
  margin-right: 0.2rem;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  color: #222;
  transition: background 0.2s;
}
.chat-input:focus {
  background: #fff;
}
.send-btn {
  background: linear-gradient(135deg, #2563eb 70%, #6366f1 100%);
  color: #fff;
  border: none;
  border-radius: 0.7rem;
  padding: 0 1.2rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 700;
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.08);
}
.send-btn:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
