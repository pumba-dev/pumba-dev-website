<template>
  <div class="repo-lang">
    <div class="lang-color" :style="{ 'background-color': langColor }"></div>
    <span>{{ language }}</span>
  </div>
</template>

<script>
import langColorJson from "../../plugins/lang-colors.json";
export default {
  props: {
    language: {
      type: String,
      required: true,
    },
  },
  computed: {
    langColor() {
      const color = langColorJson[this.language].color;
      return color;
    },
  },
};
</script>

<style scoped>
.repo-lang {
  @apply flex gap-1
  md:gap-2;
}

.lang-color {
  @apply h-4 w-4
  rounded-full border bg-white
  border-white-gray border-opacity-25;
}
</style>