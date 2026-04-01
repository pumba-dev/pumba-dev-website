<template>
  <Teleport to="body">
    <transition name="donation-modal-fade">
      <div
        v-if="isOpen"
        class="donation-modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="t('header.donation.modalTitle')"
        @click="closeModal"
      >
        <section class="donation-modal-card" @click.stop>
          <button
            type="button"
            class="donation-close-btn"
            :aria-label="t('header.donation.closeAriaLabel')"
            :title="t('header.donation.close')"
            @click="closeModal"
          >
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>

          <header class="donation-modal-header">
            <h2 class="donation-modal-title">
              {{ t("header.donation.modalTitle") }}
            </h2>
            <p class="donation-modal-subtitle">
              {{ t("header.donation.modalSubtitle") }}
            </p>
          </header>

          <div class="donation-qr-wrapper">
            <canvas
              ref="qrCanvasRef"
              class="donation-qr-canvas"
              :aria-label="t('header.donation.qrAriaLabel')"
            ></canvas>
            <p v-if="qrRenderFailed" class="donation-qr-fallback">
              {{ t("header.donation.qrFallback") }}
            </p>
          </div>

          <div class="donation-actions">
            <button
              type="button"
              class="donation-copy-btn"
              :title="t('header.donation.copyQrCode')"
              @click="copyQrCode"
            >
              <i class="ri-file-copy-line" aria-hidden="true"></i>
              <span>{{ qrCopyText }}</span>
            </button>

            <button
              type="button"
              class="donation-copy-btn"
              :title="t('header.donation.copyPixKey')"
              @click="copyPixKey"
            >
              <i class="ri-qr-code-line" aria-hidden="true"></i>
              <span>{{ pixCopyText }}</span>
            </button>
          </div>

          <div class="donation-account-box">
            <p class="donation-account-title">
              {{ t("header.donation.accountTitle") }}
            </p>

            <div class="donation-account-row">
              <span class="donation-account-label">{{
                t("header.donation.name")
              }}</span>
              <span class="donation-account-value">{{
                donationData.receiverName
              }}</span>
            </div>

            <div class="donation-account-row">
              <span class="donation-account-label">{{
                t("header.donation.pixKey")
              }}</span>
              <span class="donation-account-value">{{
                donationData.pixKey
              }}</span>
            </div>

            <div class="donation-account-row">
              <span class="donation-account-label">{{
                t("header.donation.cpf")
              }}</span>
              <span class="donation-account-value">{{
                donationData.cpfMasked
              }}</span>
            </div>

            <div class="donation-account-row">
              <span class="donation-account-label">{{
                t("header.donation.bank")
              }}</span>
              <span class="donation-account-value">{{
                donationData.bank
              }}</span>
            </div>

            <div class="donation-account-row">
              <span class="donation-account-label">{{
                t("header.donation.identifier")
              }}</span>
              <span class="donation-account-value">{{
                donationData.identifier
              }}</span>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { computed, nextTick, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import QRCode from "qrcode";
import getDonationData from "../../assets/javascripts/DonationData";

export default {
  name: "DonationModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { t } = useI18n();
    const donationData = getDonationData();
    const qrCanvasRef = ref(null);
    const qrRenderFailed = ref(false);
    const qrCopyState = ref("idle");
    const pixCopyState = ref("idle");
    const copyTimeouts = [];

    const closeModal = () => {
      emit("close");
    };

    const resetCopyStates = () => {
      qrCopyState.value = "idle";
      pixCopyState.value = "idle";
    };

    const clearCopyTimeouts = () => {
      copyTimeouts.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      copyTimeouts.length = 0;
    };

    const setCopyState = (stateRef, state) => {
      stateRef.value = state;
      const timeoutId = window.setTimeout(() => {
        stateRef.value = "idle";
        const timeoutIndex = copyTimeouts.indexOf(timeoutId);
        if (timeoutIndex !== -1) {
          copyTimeouts.splice(timeoutIndex, 1);
        }
      }, 1500);
      copyTimeouts.push(timeoutId);
    };

    const copyText = async (text, stateRef) => {
      const hasClipboardApi =
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function";

      try {
        if (hasClipboardApi) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.setAttribute("readonly", "");
          textArea.style.position = "absolute";
          textArea.style.left = "-9999px";
          document.body.appendChild(textArea);
          textArea.select();
          const copyResult = document.execCommand("copy");
          document.body.removeChild(textArea);

          if (!copyResult) {
            throw new Error("copy-failed");
          }
        }

        setCopyState(stateRef, "success");
      } catch (error) {
        setCopyState(stateRef, "error");
      }
    };

    const resolveCopyText = (state, defaultText) => {
      if (state === "success") {
        return t("header.donation.copySuccess");
      }

      if (state === "error") {
        return t("header.donation.copyError");
      }

      return defaultText;
    };

    const qrCopyText = computed(() => {
      return resolveCopyText(
        qrCopyState.value,
        t("header.donation.copyQrCode"),
      );
    });

    const pixCopyText = computed(() => {
      return resolveCopyText(
        pixCopyState.value,
        t("header.donation.copyPixKey"),
      );
    });

    const copyQrCode = async () => {
      await copyText(donationData.qrCode, qrCopyState);
    };

    const copyPixKey = async () => {
      await copyText(donationData.pixKey, pixCopyState);
    };

    const renderQrCode = async () => {
      if (!qrCanvasRef.value) {
        return;
      }

      try {
        await QRCode.toCanvas(qrCanvasRef.value, donationData.qrCode, {
          width: 240,
          margin: 1,
          color: {
            dark: "#141C3A",
            light: "#F7F7F7",
          },
        });
        qrRenderFailed.value = false;
      } catch (error) {
        qrRenderFailed.value = true;
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    watch(
      () => props.isOpen,
      async (isOpen) => {
        if (isOpen) {
          document.addEventListener("keydown", handleEscape);
          await nextTick();
          await renderQrCode();
          return;
        }

        document.removeEventListener("keydown", handleEscape);
        clearCopyTimeouts();
        resetCopyStates();
      },
    );

    onUnmounted(() => {
      document.removeEventListener("keydown", handleEscape);
      clearCopyTimeouts();
    });

    return {
      t,
      donationData,
      qrCanvasRef,
      qrRenderFailed,
      qrCopyText,
      pixCopyText,
      copyQrCode,
      copyPixKey,
      closeModal,
    };
  },
};
</script>

<style scoped>
.donation-modal-overlay {
  @apply fixed inset-0 z-[1100] bg-black bg-opacity-60
  flex items-center justify-center p-4;
}

.donation-modal-card {
  @apply relative w-full rounded-large border-2 border-blue dark:border-white-gray
  bg-white-gray dark:bg-dark-blue shadow-lg
  p-4 sm:p-5 md:p-6;
  max-width: 34rem;
  max-height: 88vh;
  overflow-y: auto;
}

.donation-close-btn {
  @apply absolute right-3 top-3 w-8 h-8 rounded-full
  flex items-center justify-center
  text-dark-blue dark:text-white-gray text-xl
  transition-colors duration-200
  hover:bg-blue hover:text-white-gray
  dark:hover:bg-white-gray dark:hover:text-dark-blue;
}

.donation-modal-header {
  @apply pr-10;
}

.donation-modal-title {
  @apply text-lg sm:text-xl md:text-2xl font-black
  text-dark-blue dark:text-white-gray;
}

.donation-modal-subtitle {
  @apply mt-2 text-sm sm:text-base leading-relaxed
  text-dark-blue dark:text-white-gray;
}

.donation-qr-wrapper {
  @apply mt-4 flex flex-col items-center;
}

.donation-qr-canvas {
  @apply rounded-md border-2 border-blue dark:border-white-gray
  bg-white-gray;
  width: 100%;
  max-width: 15rem;
  height: auto;
}

.donation-qr-fallback {
  @apply mt-2 text-sm text-orange-red text-center;
}

.donation-actions {
  @apply mt-4 grid gap-2 sm:grid-cols-2;
}

.donation-copy-btn {
  @apply w-full inline-flex items-center justify-center gap-2
  rounded-lg border-2 border-blue dark:border-white-gray
  px-3 py-2 text-sm sm:text-base font-medium
  text-dark-blue dark:text-white-gray
  transition-colors duration-200
  hover:bg-blue hover:text-white-gray
  dark:hover:bg-white-gray dark:hover:text-dark-blue;
}

.donation-account-box {
  @apply mt-4 rounded-lg border border-blue dark:border-white-gray
  p-3 sm:p-4;
}

.donation-account-title {
  @apply text-sm sm:text-base font-semibold mb-2
  text-dark-blue dark:text-white-gray;
}

.donation-account-row {
  @apply flex justify-between gap-4 py-2;
}

.donation-account-row + .donation-account-row {
  @apply border-t border-gray-blue;
}

.donation-account-label {
  @apply text-xs sm:text-sm font-semibold
  text-dark-blue dark:text-white-gray;
}

.donation-account-value {
  @apply text-xs sm:text-sm text-right break-all
  text-dark-blue dark:text-white-gray;
}

.donation-modal-fade-enter-active,
.donation-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.donation-modal-fade-enter-from,
.donation-modal-fade-leave-to {
  opacity: 0;
}
</style>
