<template>
  <div class="repo-stars">
    <img
      class="star-icon"
      src="/src/assets/svg/github/star-icon.svg"
      alt="Icone de Estrela do GitHub"
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
</style>