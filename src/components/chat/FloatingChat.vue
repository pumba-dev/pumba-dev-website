<template>
  <div>
    <!-- Floating Button -->
    <button
      class="floating-chat-btn"
      @click="toggleChat"
      :aria-label="$t('floatingChat.button.ariaLabel')"
      :class="{ active: showChat }"
    >
      <i class="ri-chat-3-fill chat-btn-icon"></i>
      <span v-if="!showChat" class="pulse-ring"></span>
    </button>

    <!-- Chat Modal -->
    <transition name="fade">
      <div v-if="showChat" class="chat-modal">
        <div class="chat-header">
          <div class="header-content">
            <i class="ri-chat-3-fill header-icon"></i>
            <div class="header-text">
              <h3>{{ $t("floatingChat.header.title") }}</h3>
              <p>{{ $t("floatingChat.header.subtitle") }}</p>
            </div>
          </div>
          <div class="header-actions">
            <button
              class="clear-btn"
              type="button"
              @click="clearChatHistory"
              :disabled="loading"
              :aria-label="$t('floatingChat.button.clearAriaLabel')"
              :title="$t('floatingChat.button.clearTitle')"
            >
              <i class="ri-delete-bin-6-line"></i>
            </button>
            <button
              class="close-btn"
              type="button"
              @click="toggleChat"
              :aria-label="$t('floatingChat.button.closeAriaLabel')"
              :title="$t('floatingChat.button.closeTitle')"
            >
              <i class="ri-close-line"></i>
            </button>
          </div>
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
                  <i class="ri-robot-2-line bot-avatar"></i>
                  <div>
                    <span class="bot-name">Paulo Eduardo</span>
                    <i class="ri-ai-generate-2 bot-badge"></i>
                  </div>
                </div>
                <div class="bubble-content">{{ msg.text }}</div>
              </template>
              <template v-else>
                <div class="user-header">
                  <span class="user-name">{{
                    $t("floatingChat.labels.user")
                  }}</span>
                </div>
                <div class="bubble-content">{{ msg.text }}</div>
              </template>
            </div>
            <div v-if="loading" class="chat-bubble bot-bubble loading-bubble">
              <div class="bot-header">
                <i class="ri-robot-2-line bot-avatar"></i>
                <div>
                  <span class="bot-name">Paulo Eduardo</span>
                  <i class="ri-ai-generate-2 bot-badge"></i>
                </div>
              </div>
              <div class="bubble-content">
                <span class="typing-indicator">
                  <span></span><span></span><span></span>
                </span>
              </div>
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
              :placeholder="$t('floatingChat.input.placeholder')"
              autocomplete="off"
              required
              maxlength="1000"
            />
            <div class="char-count">
              {{ message.length }}
              {{ $t("floatingChat.input.charLimitSuffix") }}
            </div>
          </div>
          <button
            :disabled="loading || !message.trim()"
            class="send-btn"
            type="submit"
            :title="$t('floatingChat.button.sendTitle')"
          >
            <!-- RiSendPlaneLine icon -->
            <i class="ri-send-ins-line"></i>
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import AIChartService from "../../services/AIChartService";
import { useI18n } from "vue-i18n";

const STORAGE_KEY = "floatingChatHistory";

export default {
  name: "FloatingChat",
  setup() {
    const { t } = useI18n();
    return { t };
  },
  created() {
    this.chatHistory = this.loadHistory();
  },
  data() {
    return {
      showChat: false,
      message: "",
      chatHistory: [],
      loading: false,
    };
  },
  methods: {
    getInitialHistory() {
      return [
        {
          sender: "bot",
          text: this.t("floatingChat.messages.initial"),
        },
      ];
    },
    loadHistory() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {}
      return this.getInitialHistory();
    },
    saveHistory() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.chatHistory));
      } catch {}
    },
    clearChatHistory() {
      if (this.loading) return;
      this.chatHistory = this.getInitialHistory();
      this.message = "";
      this.saveHistory();
      this.scrollToBottom("auto");
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
        .catch(() => {
          const errorMessage = this.t(
            "floatingChat.messages.serverUnavailable",
          );
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

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  30% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
}

.floating-chat-btn {
  @apply fixed right-8 bottom-8 border-0 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out appearance-none;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
}

.floating-chat-btn:hover:not(.active) {
  transform: scale(1.08);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.35);
}

.floating-chat-btn.active {
  background: linear-gradient(135deg, #1e40af 0%, #1e40af 100%);
}

.pulse-ring {
  @apply absolute w-full h-full rounded-full;
  animation: pulse 2.5s infinite;
}

.chat-btn-icon {
  @apply w-8 h-8 relative text-2xl text-white flex items-center justify-center;
  z-index: 1;
}

.chat-modal {
  @apply fixed right-8 w-screen bg-white rounded-xlarge shadow-2xl flex flex-col overflow-hidden;
  z-index: 1001;
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  right: 2rem;
  bottom: 6.5rem;
  width: 580px;
  max-width: 95vw;
  min-width: 260px;
  max-height: 80vh;
  font-family:
    "Inter",
    "Segoe UI",
    -apple-system,
    sans-serif;
}

@media (max-width: 900px) {
  .chat-modal {
    @apply right-8 w-auto min-w-0 rounded-lg;
    max-width: 80vw;
    max-height: 70vh;
  }
}

@media (max-width: 640px) {
  .floating-chat-btn {
    @apply right-4 bottom-4 w-10 h-10;
    min-width: 40px;
    min-height: 40px;
  }

  .chat-btn-icon {
    @apply w-6 h-6 text-xl;
  }
}

@media (max-width: 600px) {
  .chat-modal {
    @apply right-0.5 left-0.5 rounded-lg;
    left: 0.5rem;
    bottom: 4.5rem;
    max-width: 100vw;
    max-height: 60vh;
  }

  .chat-header {
    @apply text-base p-3.5;
  }

  .header-text h3 {
    @apply text-sm m-0;
  }

  .header-text p {
    @apply text-xs;
  }

  .close-btn {
    @apply w-8 h-8;
  }

  .clear-btn {
    @apply w-8 h-8;
  }

  .chat-body {
    @apply p-3.5 text-sm;
    min-height: 80px;
    max-height: 120px;
  }

  .chat-form {
    @apply p-3.5 gap-1 flex-row items-center;
  }

  .chat-input {
    @apply text-base p-2.5 w-full flex-1 mr-0.5 box-border max-w-full h-10;
    min-width: 40px;
  }

  .send-btn {
    @apply text-lg p-0 px-3.5 h-10 rounded-lg flex items-center justify-center box-border flex-shrink-0;
    min-width: 40px;
  }

  .chat-bubble {
    @apply text-sm p-3.5 max-w-xs;
  }

  .char-count {
    @apply text-xs;
  }
}

.chat-header {
  @apply text-white p-4 flex justify-between items-start;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  @apply flex items-center gap-3.5 flex-1;
}

.header-actions {
  @apply flex items-center gap-2;
}

.header-icon {
  @apply w-7 h-7 text-white flex-shrink-0 text-2xl;
}

.header-text h3 {
  @apply text-lg font-semibold m-0 tracking-tight;
}

.header-text p {
  @apply text-xs opacity-90 m-0 mt-0.5;
}

.close-btn,
.clear-btn {
  @apply border-0 text-white w-9 h-9 rounded-md cursor-pointer transition-all duration-200 flex items-center justify-center flex-shrink-0 self-start;
  background: rgba(255, 255, 255, 0.15);
  line-height: 1;
}

.close-btn:hover,
.clear-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.close-btn i,
.clear-btn i {
  @apply w-5 h-5 text-xl leading-none;
}

.close-btn:disabled,
.clear-btn:disabled {
  @apply cursor-not-allowed opacity-60;
}

.send-btn i {
  @apply w-5 h-5 text-xl;
}

.chat-body {
  @apply p-5 overflow-y-auto text-base text-black bg-white-gray;
  min-height: 220px;
  max-height: 340px;
}

.chat-body::-webkit-scrollbar {
  width: 6px;
}

.chat-body::-webkit-scrollbar-track {
  background: transparent;
}

.chat-body::-webkit-scrollbar-thumb {
  @apply bg-gray-blue rounded;
}

.chat-body::-webkit-scrollbar-thumb:hover {
  @apply bg-disable-blue;
}

.chat-history {
  @apply flex flex-col gap-3.5;
}

.chat-bubble {
  @apply max-w-sm p-3.5 rounded-xlarge break-words shadow-sm relative text-base leading-relaxed;
}

.bot-bubble {
  @apply self-start bg-gray-blue text-dark-blue rounded-bl-sm;
}

.user-bubble {
  @apply self-end text-white rounded-br-sm;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}

.bot-header,
.user-header {
  @apply flex items-center mb-1 text-sm font-semibold gap-2;
}

.bot-avatar {
  @apply text-2xl text-blue font-light flex-shrink-0 flex items-center justify-center w-6 h-6;
}

.bot-name {
  @apply font-semibold text-sm;
}

.bot-badge {
  @apply font-normal text-base text-blue ml-1 flex-shrink-0;
}

.user-name {
  @apply text-white text-opacity-95 font-semibold;
}

.bubble-content {
  @apply whitespace-pre-line break-words;
  overflow-wrap: break-word;
}

.typing-indicator {
  @apply flex gap-1 items-center;
}

.typing-indicator span {
  @apply w-1.5 h-1.5 rounded-full;
  background-color: currentColor;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

.char-count {
  @apply text-xs text-gray text-right mt-1 -mb-0.5 tracking-wider select-none;
}

.chat-form {
  @apply flex border-t border-gray-blue p-3.5 bg-white-gray gap-2.5 items-start flex-wrap;
}

.chat-form > div {
  @apply flex flex-col flex-1;
}

.chat-input {
  @apply flex-1 border border-gray-blue outline-none text-base p-2.5 h-11 rounded-lg bg-white text-black transition-all duration-200;
  font-family: inherit;
}

.chat-input::placeholder {
  @apply text-gray;
}

.chat-input:focus {
  @apply border-blue bg-white;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.chat-input:disabled {
  @apply bg-white-gray text-disable-blue;
}

.send-btn {
  @apply text-white border-0 rounded-lg h-11 px-4 cursor-pointer transition-all duration-200 font-semibold shadow-md flex items-center justify-center flex-shrink-0 self-start;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.send-btn:hover:not(:disabled) {
  @apply -translate-y-0.5;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.send-btn:active:not(:disabled) {
  @apply translate-y-0;
}

.send-btn:disabled {
  @apply cursor-not-allowed shadow-sm;
  background: linear-gradient(135deg, #cbd5e1 0%, #cbd5e1 100%);
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-200;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
