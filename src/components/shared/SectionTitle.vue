<template>
  <h1 class="section-title">{{ titleText }}</h1>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.section-title {
  @apply text-dark-blue font-bold text-center tracking-wide
  text-[1.5rem]
  xs:text-[1.75rem]
  sm:text-[2rem]
  md:text-[2.25rem];
}
</style>