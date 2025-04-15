<template>
  <ul class="nav-btn-list">
    <li>
      <a :href="getImgUrl" target="_blank" class="btn-text"> English CV </a>
    </li>
    <li><CVButton></CVButton></li>
  </ul>
</template>

<script>
import CVButton from "./CVButton.vue";
export default {
  components: { CVButton },
  computed: {
    getImgUrl() {
      return new URL(
        "../../assets/downloads/pumbadev-english-resume.pdf",
        import.meta.url
      ).href;
    },
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
