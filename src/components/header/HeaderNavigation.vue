<template>
  <ul class="nav-btn-list">
    <li v-for="cv in curriculums" :key="cv.lang">
      <CVButton :label="cv.label" :url="cv.url"></CVButton>
    </li>
  </ul>
</template>

<script>
import CVButton from "./CVButton.vue";
export default {
  components: { CVButton },
  data() {
    return {
      curriculums: [
        {
          lang: "en",
          label: "English CV",
          url: new URL(
            "../../assets/downloads/pumbadev-en-resume.pdf",
            import.meta.url,
          ).href,
        },
        {
          lang: "pt",
          label: "Currículo",
          url: new URL(
            "../../assets/downloads/pumbadev-pt-resume.pdf",
            import.meta.url,
          ).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-btn-list {
  @apply flex justify-center items-center gap-3
  xs:gap-4
  sm:gap-5
  md:gap-6
  lg:gap-7;
}

.btn-text {
  @apply text-dark-blue font-medium
  text-sm
  xs:text-base
  sm:text-lg
  md:text-xl
  lg:text-2xl
  hover:text-blue cursor-pointer
  transition-colors duration-300
  inline-block;
}
</style>
