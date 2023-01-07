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
  @apply flex justify-center items-center gap-5
  lg:gap-7;
}

.btn-text {
  @apply text-dark-blue font-normal 
  text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
  hover:text-blue cursor-pointer
  hidden 2xs:inline-block;
}
</style>
