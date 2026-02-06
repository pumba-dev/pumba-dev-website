<template>
  <button
    class="input-btn"
    :class="{ loading: isLoading }"
    :disabled="isLoading"
  >
    <span v-if="!isLoading">{{ $t("contact.form.submitButton") }}</span>
    <div v-else class="loading-spinner"></div>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.input-btn {
  @apply h-12 m-auto
  text-blue font-normal text-center
  border-solid border-2 border-blue rounded-full
  cursor-pointer
  w-[9rem] text-lg
  xs:w-[10rem]
  sm:w-[11rem] sm:text-xl
  md:w-[12rem] md:text-2xl
  relative
  disabled:opacity-70 disabled:cursor-not-allowed;
}

.input-btn:hover {
  @apply lg:text-white-gray lg:bg-blue;
}

.input-btn.loading span {
  @apply opacity-0;
}

.loading-spinner {
  @apply absolute top-1/2 left-1/2 w-6 h-6;
  border: 4px solid #1e3a8a; /* cor dark-blue */
  border-top-color: transparent;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
