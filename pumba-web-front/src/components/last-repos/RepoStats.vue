<template>
  <div class="repo-stats">
    <RepoStars :starsCount="repoData.stargazers_count"></RepoStars>
    <RepoForks :forkCount="repoData.forks_count"></RepoForks>
    <RepoLang :language="repoData.language"></RepoLang>
  </div>
</template>

<script>
import RepoForks from "./RepoForks.vue";
import RepoLang from "./RepoLang.vue";
import RepoStars from "./RepoStars.vue";
export default {
  components: { RepoStars, RepoForks, RepoLang },
  props: {
    repoData: {
      typeof: Object,
      required: true,
    },
  },
};
</script>

<style>
.repo-stats {
  @apply flex gap-12
  text-sm;
}
</style>