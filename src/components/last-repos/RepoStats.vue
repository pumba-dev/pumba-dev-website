<template>
  <div class="repo-stats">
    <RepoStars :starsCount="repoData.stargazers_count"></RepoStars>
    <RepoForks :forkCount="repoData.forks_count"></RepoForks>
    <RepoLang :language="repoLanguage"></RepoLang>
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
  computed: {
    repoLanguage() {
      return this.repoData.language == null
        ? "No Lang"
        : this.repoData.language;
    },
  },
};
</script>

<style scoped>
.repo-stats {
  @apply grid gap-2 pt-1 text-sm
  
  /* Reponsivity */
  grid-cols-[32px_32px_1fr]
  md:grid-cols-[40px_40px_1fr]
  lg:grid-cols-[48px_48px_1fr];
}
</style>
