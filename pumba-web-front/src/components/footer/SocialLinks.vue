<template>
  <div class="social-links">
    <SocialBtn
      v-for="social in socialList"
      :key="social.name"
      :socialMedia="social"
    ></SocialBtn>
  </div>
</template>

<script>
import SocialMediaArray from "../../assets/javascripts/SocialMidias.js";
import SocialBtn from "./SocialBtn.vue";

export default {
  components: { SocialBtn },
  data() {
    return {
      socialList: SocialMediaArray,
    };
  },
};
</script>

<style>
.social-links {
  @apply flex gap-6 justify-center;
}
</style>