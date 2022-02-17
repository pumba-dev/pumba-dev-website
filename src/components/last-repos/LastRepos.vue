<template>
  <div class="last-repos">
    <img
      class="github-icon"
      src="/src/assets/svg/github/github-logo.svg"
      alt="Icone do GitHub"
    />
    <SectionTitle
      :titleText="'Últimos Projetos'"
      class="repo-title"
    ></SectionTitle>
    <RepoList></RepoList>
  </div>
</template>

<script>
import SectionTitle from "../shared/SectionTitle.vue";
import RepoList from "./RepoList.vue";
export default {
  components: { SectionTitle, RepoList },
};
</script>

<style scoped>
.last-repos {
  @apply box-border
  flex flex-col gap-4 h-max w-max
  items-center justify-around
  bg-white-gray rounded-2xlarge
  shadow-gray-blue shadow-lg 
  border-2 border-b-gray-blue
  /* Reponsivity */
  px-[1rem] py-[1.5rem]
  2xs:px-[1.5rem] 2xs:py-[2rem]
  xs:px-[2.5rem] xs:py-[2.5rem]
  sm:px-[5rem] sm:pb-[3rem]
  md:px-[2rem]
  lg:px-[5rem]
  xl:pb-[4rem]
  2xl:px-[7rem];
}

.repo-title {
  @apply /* Reponsivity */
  text-[1.5rem]
  xs:text-[1.6rem]
  sm:text-[1.7rem]
  md:text-[1.9rem]
  lg:text-[2rem]
  xl:text-[2.1rem]
  2xl:text-[2.3rem];
}

.github-icon {
  /* Reponsivity */
  @apply w-[3.5rem]
  xs:w-[3.7rem]
  sm:w-[3.8rem]
  md:w-[4rem]
  lg:w-[4.5rem]
  xl:w-[5rem]
  2xl:w-[5.5rem];
}
</style>