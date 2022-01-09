<template>
  <section class="header-section">
    <Logo :width="80" :height="80"></Logo>
    <HeaderNavigation></HeaderNavigation>
  </section>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import Logo from "../shared/Logo.vue";
export default {
  components: { Logo, HeaderNavigation },
};
</script>

<style scoped>
.header-section {
  @apply flex justify-between
  px-48 py-12;
}
</style>