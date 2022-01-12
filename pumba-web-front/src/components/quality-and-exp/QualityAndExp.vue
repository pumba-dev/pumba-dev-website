<template>
  <section class="quality-and-exp">
    <!-- Quality Card -->
    <CardBackground>
      <h1 class="title">QUALIDADES</h1>
      <CardCarousel>
        <QualityList></QualityList>
        <QualityList></QualityList>
      </CardCarousel>
      <CardCarouselNav></CardCarouselNav>
    </CardBackground>
    <!-- Experiences Card -->
    <CardBackground>
      <h1 class="title">Experiences</h1>
      <CardCarousel>
        <ExperienceList></ExperienceList>
        <ExperienceList></ExperienceList>
      </CardCarousel>
      <CardCarouselNav></CardCarouselNav>
    </CardBackground>
  </section>
</template>

<script>
import CardBackground from "./CardBackground.vue";
import CardCarousel from "./CardCarousel.vue";
import CardCarouselNav from "./CardCarouselNav.vue";
import ExperienceList from "./ExperienceList.vue";
import QualityList from "./QualityList.vue";
export default {
  components: {
    CardBackground,
    CardCarouselNav,
    CardCarousel,
    QualityList,
    ExperienceList,
  },
};
</script>

<style>
.quality-and-exp {
  @apply flex justify-center gap-12 w-full;
}

.title {
  @apply text-dark-blue text-center font-medium text-2xl;
}
</style>