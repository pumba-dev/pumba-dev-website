<template>
  <div class="repo-stars">
    <img
      class="star-icon"
      src="/src/assets/svg/github/star-icon.svg"
      :alt="$t('alt.starIcon')"
    />
    <span>{{ starsCount }}</span>
  </div>
</template>

<script>
export default {
  props: {
    starsCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.repo-stars {
  @apply flex gap-1
  md:gap-2;
}

.star-icon {
  @apply h-4 w-4;
}

.dark .star-icon {
  filter: brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(200%)
    hue-rotate(180deg) brightness(105%) contrast(95%);
}
</style>
