<template>
  <ul class="nav-btn-list">
    <li>
      <a
        href="https://nubank.com.br/pagar/1ou9f/ifu2K7YNO7"
        target="_blank"
        class="btn-text"
      >
        Ajude o Dev
      </a>
    </li>
    <li><CVButton></CVButton></li>
  </ul>
</template>

<script>
import CVButton from "./CVButton.vue";
export default {
  components: { CVButton },
};
</script>

<style scoped>
.nav-btn-list {
  @apply flex justify-center items-center gap-5;
}

.btn-text {
  @apply text-dark-blue font-normal 
  text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
  hover:text-blue cursor-pointer
  hidden sm:inline-block;
}
</style>