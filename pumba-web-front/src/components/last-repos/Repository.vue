<template>
  <section class="repository">
    <img
      class="repo-icon"
      src="/src/assets/svg/github/repo-icon.svg"
      alt="Icone do Repositório"
    />
    <RepoData :repoData="repoData"></RepoData>
  </section>
</template>

<script>
import RepoData from "./RepoData.vue";
export default {
  components: { RepoData },
  props: {
    repoData: {
      typeof: Object,
      required: true,
    },
  },
};
</script>

<style>
.repository {
  @apply flex justify-between gap-2
  p-8 rounded-xlarge
  bg-dark-blue text-white-gray;
}

.repo-icon {
  @apply h-12;
}
</style>