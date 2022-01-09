<template>
  <section>
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
</style>