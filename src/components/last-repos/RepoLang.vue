<template>
  <div class="repo-lang">
    <div class="lang-color" :style="{ 'background-color': langColor }"></div>
    <span class="lang-text">{{ language }}</span>
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
  @apply flex items-center gap-1
  md:gap-2;
}

.lang-color {
  @apply h-4 w-4
  rounded-full border bg-white dark:bg-white
  border-white-gray dark:border-white-gray border-opacity-25;
}

.lang-text {
  @apply overflow-hidden text-ellipsis whitespace-nowrap
  max-w-[12ch]
  
  /* Reponsivity */
  text-xs
  md:text-sm
  lg:text-base;
}
</style>
