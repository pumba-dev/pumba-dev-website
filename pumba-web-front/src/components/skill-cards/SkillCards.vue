<template>
  <section class="skill-cards">
    <h1 class="title"></h1>
    <!-- Quality Card -->
    <CardBackground>
      <h1 class="title">QUALIDADES</h1>
      <Qualities></Qualities>
    </CardBackground>
    <!-- Experiences Card -->
    <CardBackground>
      <h1 class="title">EXPERIÊNCIAS</h1>
      <Experiences></Experiences>
    </CardBackground>
  </section>
</template>

<script>
import CardBackground from "./CardBackground.vue";
import Experiences from "./Experiences.vue";
import Qualities from "./Qualities.vue";
export default {
  components: {
    CardBackground,
    Qualities,
    Experiences,
  },
};
</script>

<style scoped>
.skill-cards {
  @apply flex justify-center gap-12 w-full;
}

.title {
  @apply text-dark-blue text-center font-medium 
  text-2xl tracking-wider;
}
</style>