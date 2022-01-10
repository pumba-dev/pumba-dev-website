<template>
  <div class="repo-data">
    <h1 class="repo-name">{{ repoData.name }}</h1>
    <h2 class="repo-desc">{{ repoData.description }}</h2>
    <RepoStats :repoData="repoData"></RepoStats>
  </div>
</template>

<script>
import RepoStats from "./RepoStats.vue";
export default {
  components: { RepoStats },
  props: {
    repoData: {
      typeof: Object,
      required: true,
    },
  },
};
</script>

<style>
.repo-data {
  @apply flex flex-col gap-2
  text-left;
}

.repo-name {
  @apply font-bold text-xl;
}

.repo-desc {
  @apply w-72 h-10
  font-medium text-sm 
  overflow-hidden text-ellipsis;
}
</style>