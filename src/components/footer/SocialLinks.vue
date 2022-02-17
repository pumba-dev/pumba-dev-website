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
import SocialMediaArray from "../../assets/javascripts/SocialList.js";
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

<style scoped>
.social-links {
  @apply flex justify-between
  w-[18rem]
  2xs:w-[20rem]
  xs:w-[22rem]
  sm:w-[24rem]
  md:w-[26rem];
}
</style>