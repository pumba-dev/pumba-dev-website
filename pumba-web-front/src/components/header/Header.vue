<template>
  <section class="header-section">
    <Logo class="header-logo"></Logo>
    <HeaderNavigation class="header-nav"></HeaderNavigation>
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
  h-min w-11/12
  mx-auto mt-6
  lg:mt-12;
}

.header-logo {
  @apply w-12 sm:w-14 md:w-16 lg:w-20 xl:w-[5.5rem] 2xl:w-28;
}
</style>