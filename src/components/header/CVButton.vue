<template>
  <button class="btn-background">
    <a :href="getImgUrl" target="_blank" class="btn-text">Currículo</a>
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
.btn-background {
  @apply flex justify-center items-center 
  max-w-max text-blue
  border-solid border-2 border-blue rounded-full
  py-1 px-3 md:py-2 md:px-5;
}

.btn-background:hover {
  @apply lg:text-white-gray lg:bg-blue;
}

.btn-text {
  @apply font-normal
  text-base md:text-lg lg:text-xl  xl:text-2xl 2xl:text-3xl;
}
</style>
