<template>
  <section class="footer">
    <BackgroundBlue class="second-bg-blue">
      <Logo class="footer-logo"></Logo>
      <FooterPhrase></FooterPhrase>
      <SocialLinks></SocialLinks>
      <Copyright></Copyright>
      <MadeWith></MadeWith>
    </BackgroundBlue>
  </section>
</template>

<script>
import BackgroundBlue from "../shared/BackgroundBlue.vue";
import Logo from "../shared/Logo.vue";
import Copyright from "./Copyright.vue";
import FooterPhrase from "./FooterPhrase.vue";
import MadeWith from "./MadeWith.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
  components: {
    BackgroundBlue,
    Logo,
    FooterPhrase,
    SocialLinks,
    Copyright,
    MadeWith,
  },
};
</script>

<style scoped>
.footer {
  @apply w-full h-min;
}

.second-bg-blue {
  @apply py-12 flex flex-col items-center justify-between 
  h-[25rem]
  xs:h-[27rem]
  sm:h-[28.5rem]
  lg:h-[30rem]
  !important;
}

.footer-logo {
  filter: brightness(0) saturate(100%) invert(89%) sepia(15%) saturate(250%)
    hue-rotate(191deg) brightness(97%) contrast(96%);
}
</style>