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

<style scoped>
.repository {
  @apply flex justify-between gap-2
  rounded-xlarge
  bg-dark-blue text-white-gray
  /* Reponsivity */
  p-[1rem]
  2xs:p-[1.2rem]
  xs:p-[1.5rem]
  sm:p-[1.6rem]
  md:p-[1.7rem]
  lg:p-[1.8rem]
  xl:p-[2rem]
  2xl:p-[2.2rem];
}

.repo-icon {
  @apply mt-1
  
  /* Reponsivity */
  h-[3.25rem]
  xs:h-[3.5rem]
  sm:h-[3.75rem]
  md:h-[4rem]
  lg:h-[4.25rem]
  xl:h-[4.50rem]
  2xl:h-[4.75rem];
}
</style>