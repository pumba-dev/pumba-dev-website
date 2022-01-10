<template>
  <ul class="nav-btn-list">
    <li><p class="btn-text">Ajude o Dev</p></li>
    <li><p class="btn-text">Baixar CV</p></li>
    <li><MailBtn></MailBtn></li>
  </ul>
</template>

<script>
import MailBtn from "./MailBtn.vue";
export default {
  components: { MailBtn },
};
</script>

<style>
.nav-btn-list {
  @apply flex justify-center items-center gap-5;
}

.btn-text {
  @apply text-dark-blue text-2xl font-normal
  hover:text-blue cursor-pointer;
}
</style>