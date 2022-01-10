<template>
  <section class="home">
    <HomePresentation></HomePresentation>
    <HomeProfileImage></HomeProfileImage>
    <HomeBgImg></HomeBgImg>
  </section>
</template>

<script>
import HomeBgImg from "./HomeBgImg.vue";
import HomePresentation from "./HomePresentation.vue";
import HomeProfileImage from "./HomeProfileImage.vue";
export default {
  components: { HomePresentation, HomeProfileImage, HomeBgImg },
};
</script>

<style>
.home {
  @apply flex flex-col items-center;
}
</style>