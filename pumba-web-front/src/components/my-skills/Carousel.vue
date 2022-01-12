<template>
  <div class="carousel-container">
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
.carousel-container {
  @apply flex justify-center relative overflow-hidden
  w-full h-48;
}

.carousel-wall {
  @apply flex animation absolute left-0;
}

@keyframes carouselleft {
  from {
    left: 0%;
  }
  to {
    left: -150%;
  }
}

.animation {
  @apply w-[300%] animate-carousel;
}
</style>