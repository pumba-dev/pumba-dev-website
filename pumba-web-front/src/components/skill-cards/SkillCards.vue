<template>
  <section class="skill-cards">
    <h1 class="card-title"></h1>
    <!-- Quality Card -->
    <CardBackground>
      <h1 class="card-title">QUALIDADES</h1>
      <Qualities></Qualities>
    </CardBackground>
    <!-- Experiences Card -->
    <CardBackground>
      <h1 class="card-title">EXPERIÊNCIAS</h1>
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
  @apply flex flex-col justify-center gap-12 w-full items-center
   xl:flex-row;
}

.card-title {
  @apply text-dark-blue text-center font-medium 
  text-2xl tracking-wider;
}
</style>