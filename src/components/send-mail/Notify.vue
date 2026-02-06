<template>
  <div class="notify" :class="[Notify.type]">
    <div class="notify-content">
      <div class="notify-icon" :class="[Notify.type]">
        <i v-if="Notify.type === 'sucess'" class="fas fa-check-circle"></i>
        <i
          v-else-if="Notify.type === 'error'"
          class="fas fa-exclamation-circle"
        ></i>
        <i v-else class="fas fa-info-circle"></i>
      </div>
      <div class="notify-text-content">
        <h3 class="notify-title">{{ getTitle }}</h3>
        <p class="notify-text">{{ Notify.text }}</p>
      </div>
    </div>
    <div class="notify-progress" :class="[Notify.type]"></div>
  </div>
</template>

<script>
export default {
  props: {
    Notify: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getTitle() {
      switch (this.Notify.type) {
        case "sucess":
          return this.$t("contact.notifications.success.title");
        case "error":
          return this.$t("contact.notifications.error.title");
        default:
          return this.$t("contact.notifications.info.title");
      }
    },
  },
};
</script>

<style scoped>
.notify {
  @apply fixed bottom-4 right-4 z-50
  min-w-[18rem] max-w-[28rem]
  sm:min-w-[20rem] sm:max-w-[32rem]
  md:min-w-[22rem] md:max-w-[36rem]
  lg:min-w-[24rem] lg:max-w-[40rem]
  bg-white dark:bg-gray-blue rounded-large shadow-md
  overflow-hidden
  border border-gray border-opacity-20;
}

.notify-content {
  @apply flex items-start gap-4 p-5
  sm:p-6;
}

.notify-icon {
  @apply w-7 h-7 rounded-full flex items-center justify-center text-white text-lg mt-0.5
  sm:w-8 sm:h-8 sm:text-xl;
}

.notify-icon.normal {
  @apply bg-blue bg-opacity-90;
}

.notify-icon.error {
  @apply bg-orange-red bg-opacity-90;
}

.notify-icon.sucess {
  @apply bg-green bg-opacity-90;
}

.notify-text-content {
  @apply flex-1;
}

.notify-title {
  @apply text-dark-blue font-bold
  text-base
  sm:text-lg
  md:text-xl
  mb-1;
}

.notify-text {
  @apply text-dark-blue font-medium select-none
  text-sm leading-relaxed
  sm:text-base
  md:text-lg;
}

.notify-progress {
  @apply h-0.5 w-full;
  animation: progress 3.5s linear forwards;
}

.notify-progress.normal {
  @apply bg-blue bg-opacity-90;
}

.notify-progress.error {
  @apply bg-orange-red bg-opacity-90;
}

.notify-progress.sucess {
  @apply bg-green bg-opacity-90;
}

@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Animação de entrada e saída */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
