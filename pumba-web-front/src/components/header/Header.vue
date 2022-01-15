<template>
  <section class="header-section">
    <Logo></Logo>
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
  @apply flex justify-between w-full;
}
</style>