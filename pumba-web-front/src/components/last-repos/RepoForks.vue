<template>
  <div class="repo-forks">
    <img
      class="fork-icon"
      src="/src/assets/svg/github/fork-icon.svg"
      alt="Icone de Fork do GitHub"
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
  @apply flex gap-1
  md:gap-2;
}

.fork-icon {
  @apply h-4 w-4;
}
</style>