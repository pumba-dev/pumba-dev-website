<template>
  <section class="repository">
    <img
      class="repo-icon"
      src="/src/assets/svg/github/repo-icon.svg"
      :alt="$t('alt.repositoryIcon')"
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

<style scoped>
.repository {
  @apply flex rounded-xlarge
  bg-dark-blue dark:bg-blue text-white-gray dark:text-white-gray
  /* Reponsivity */
  gap-[0.5rem] p-[0.8rem]
  2xs:gap-2 2xs:p-[1.2rem]
  xs:p-[1.5rem]
  sm:p-[1.6rem]
  md:gap-[0.75rem] md:p-[1.2rem]
  lg:gap-2 lg:p-[1.8rem]
  xl:p-[2rem]
  2xl:p-[2.2rem];
}

.repo-icon {
  @apply mt-1 flex-shrink-0
  
  /* Reponsivity */
  h-[3rem]
  xs:h-[3.5rem]
  sm:h-[3.75rem]
  md:h-[3.25rem]
  lg:h-[4.25rem]
  xl:h-[4.50rem]
  2xl:h-[4.75rem];
}
</style>
