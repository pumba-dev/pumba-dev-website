<template>
  <div class="repo-forks">
    <img
      class="fork-icon"
      src="/src/assets/svg/github/fork-icon.svg"
      :alt="$t('alt.forkIcon')"
    />
    <span>{{ forkCount }}</span>
  </div>
</template>

<script>
export default {
  props: {
    forkCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.repo-forks {
  @apply flex items-center gap-1
  md:gap-2;
}

.fork-icon {
  @apply h-4 w-4;
}

.dark .fork-icon {
  filter: brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(200%)
    hue-rotate(180deg) brightness(105%) contrast(95%);
}
</style>
