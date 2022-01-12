<template>
  <section class="my-skills-container">
    <h1 class="title">Minhas Habilidades</h1>
    <Carousel></Carousel>
    <CarouselNav></CarouselNav>
  </section>
</template>

<script>
import Carousel from "./Carousel.vue";
import CarouselNav from "./CarouselNav.vue";
export default {
  components: { Carousel, CarouselNav },
};
</script>

<style scoped>
.my-skills-container {
  @apply flex flex-col
  gap-12 w-full h-max;
}

.title {
  @apply text-dark-blue font-bold text-5xl text-center;
}
</style>