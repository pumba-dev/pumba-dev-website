<template>
  <section class="skill-cards">
    <!-- Quality Card -->
    <CardBackground>
      <QualitiesCard></QualitiesCard>
    </CardBackground>
    <!-- ExperiencesCard Card -->
    <CardBackground>
      <ExperiencesCard></ExperiencesCard>
    </CardBackground>
  </section>
</template>

<script>
import CardBackground from "./CardBackground.vue";
import ExperiencesCard from "./ExperiencesCard.vue";
import QualitiesCard from "./QualitiesCard.vue";
export default {
  components: {
    CardBackground,
    QualitiesCard,
    ExperiencesCard,
  },
};
</script>

<style>
.skill-cards {
  @apply flex flex-col justify-center gap-12 w-full items-center
   lg:flex-row;
}

.card-title {
  @apply text-dark-blue text-center font-medium 
  text-2xl tracking-wider;
}
</style>