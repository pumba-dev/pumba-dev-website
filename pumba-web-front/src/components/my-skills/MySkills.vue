<template>
  <section class="my-skills-container">
    <SectionTitle :titleText="'Minhas Habilidades'"></SectionTitle>
    <SkillsCarousel></SkillsCarousel>
  </section>
</template>

<script>
import SectionTitle from "../shared/SectionTitle.vue";
import SkillsCarousel from "./SkillsCarousel.vue";
export default {
  components: { SectionTitle, SkillsCarousel },
};
</script>

<style scoped>
.my-skills-container {
  @apply hidden lg:flex flex-col
  gap-12 w-full h-max
  items-center;
}
</style>