<template>
  <div class="repo-data">
    <div class="repo-container">
      <a class="repo-name" :href="repoData.html_url" target="_blank">{{
        repoData.name
      }}</a>
      <h2 class="repo-desc">{{ repoDescription }}</h2>
    </div>
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
  computed: {
    repoDescription() {
      return this.repoData.description == null
        ? "Repositório sem descrição."
        : this.repoData.description;
    },
  },
};
</script>

<style scoped>
.repo-data {
  @apply flex flex-col justify-between
  text-left
  
  /* Reponsivity */
  gap-[0.5rem];
}

.repo-container {
  @apply flex flex-col justify-between gap-1;
}

.repo-name {
  @apply font-bold hover:underline tracking-wider
  whitespace-nowrap overflow-hidden text-ellipsis
  max-w-full
  
  /* Reponsivity */
  text-base
  md:text-lg
  lg:text-xl;
}

.repo-desc {
  @apply font-medium 
  overflow-hidden
  text-ellipsis
  transition-all duration-300
  
  /* Reponsivity */
  w-[12.8rem]  text-[0.79rem]
  md:w-[14rem] 
  lg:w-[16rem] lg:text-[0.83rem]
  xl:w-[18rem]  xl:text-[0.875rem]
  2xl:w-[20rem] 2xl:text-[0.95rem];

  /* Limitar a 3 linhas */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 4.5em;
}

.repo-desc:hover {
  -webkit-line-clamp: unset;
  max-height: none;
}
</style>
