<template>
  <section class="home">
    <HomePresentation class="home-presentation"></HomePresentation>
    <HomeProfileImage class="home-profile-img"></HomeProfileImage>
    <HomeBgImg class="home-bg-img"></HomeBgImg>
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

<style scoped>
.home {
  @apply flex flex-col items-center;
}

.home-presentation {
  @apply py-12;
}

.home-profile-img {
  @apply pb-6;
}

.home-bg-img {
  @apply pt-24;
}
</style>