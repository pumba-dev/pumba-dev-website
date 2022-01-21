<template>
  <img
    class="logo"
    src="/src/assets/svg/general/logo.svg"
    alt="Pumba Developer Logo"
    @click="this.scrollUp()"
  />
</template>

<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.logo {
  @apply w-12 sm:w-14 md:w-16 lg:w-20 xl:w-[5.5rem] 2xl:w-[6rem]
  lg:cursor-pointer;
}
</style>
