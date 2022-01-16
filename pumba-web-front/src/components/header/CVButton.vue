<template>
  <button class="btn-background">
    <a :href="getImgUrl" target="_blank" class="btn-text">Baixar CV</a>
  </button>
</template>

<script>
export default {
  computed: {
    getImgUrl() {
      return new URL(
        "../../assets/downloads/pumbadev-resume.pdf",
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
.btn-text {
  @apply text-2xl font-normal;
}

.btn-background {
  @apply flex justify-center items-center 
  w-36 h-12 text-blue
  border-solid border-2 border-blue rounded-full
  cursor-pointer;
}

.btn-background:hover {
  @apply text-white-gray bg-blue;
}
</style>