<template>
  <ul class="nav-btn-list">
    <li><p class="btn-text">Ajude o Dev</p></li>
    <li><a href="src/assets/downloads/pumba-dev-curriculo.pdf" target="_blank" ><p class="btn-text">Baixar CV</p></a></li>
    <li><MailBtn></MailBtn></li>
  </ul>
</template>

<script>
import MailBtn from "./MailBtn.vue";
export default {
  components: { MailBtn },
};
</script>

<style scoped>
.nav-btn-list {
  @apply flex justify-center items-center gap-5;
}

.btn-text {
  @apply text-dark-blue text-2xl font-normal
  hover:text-blue cursor-pointer;
}
</style>