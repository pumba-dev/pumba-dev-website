<template>
  <div class="skill-carousel-container">
    <div class="carousel-wall">
      <SkillList></SkillList>
      <SkillList></SkillList>
    </div>
  </div>
</template>

<script>
import SkillList from "./SkillList.vue";
export default {
  components: { SkillList },
};
</script>

<style scoped>
.skill-carousel-container {
  @apply flex justify-center relative overflow-hidden
  w-full h-[14rem];
}

.carousel-wall {
  animation-duration: 25s !important;
  @apply flex animation absolute left-0;
}

@keyframes carouselleft {
  from {
    left: 0%;
  }
  to {
    /* Metade do width da animation */
    left: -200%;
  }
}

.animation {
  @apply w-[400%] animate-carousel;
}
</style>
