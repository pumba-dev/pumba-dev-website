<template>
  <span class="footer-phrase" v-html="$t('footer.phrase')"></span>
</template>

<script>
export default {
  name: "FooterPhrase",
};
</script>

<style scoped>
.footer-phrase {
  @apply font-bold text-gray-blue dark:text-white-gray text-center tracking-wide select-none
  text-lg
  xs:text-xl
  sm:text-2xl;
}
</style>
