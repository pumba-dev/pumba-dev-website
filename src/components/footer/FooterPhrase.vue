<template>
  <span class="footer-phrase" v-html="$t('footer.phrase')"></span>
</template>

<style scoped>
.footer-phrase {
  @apply font-bold text-gray-blue text-center tracking-wide select-none
  text-lg
  xs:text-xl
  sm:text-2xl;
}
</style>
