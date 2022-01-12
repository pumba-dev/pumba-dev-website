<template>
  <section class="first-bg">
    <slot></slot>
  </section>
</template>

<script>
import AboutMe from "../about-me/AboutMe.vue";
import LastRepos from "../last-repos/LastRepos.vue";
export default {
  components: { AboutMe, LastRepos },
};
</script>

<style scoped>
.first-bg {
  @apply flex flex-col items-center
  h-[40rem]
  bg-blue
  text-2xl;
}
</style>