<template>
  <section class="my-skills-container">
    <h1 class="title">Minhas Habilidades</h1>
    <SkillsCarousel></SkillsCarousel>
    <slot></slot>
  </section>
</template>

<script>
import SkillsCarousel from "./SkillsCarousel.vue";
export default {
  components: { SkillsCarousel },
};
</script>

<style scoped>
.my-skills-container {
  @apply flex flex-col
  gap-12 w-full h-max
  items-center;
}
</style>