<template>
  <div class="last-repos">
    <img
      class="github-icon"
      src="/src/assets/svg/github/github-logo.svg"
      alt="Icone do GitHub"
    />
    <h1 class="title">Últimos Repositórios</h1>
    <RepoList></RepoList>
  </div>
</template>

<script>
import RepoList from "./RepoList.vue";
export default {
  components: { RepoList },
};
</script>

<style scoped>
.last-repos {
  @apply box-border px-24 py-12
  flex flex-col gap-4 h-max w-max
  items-center justify-around
  bg-white-gray rounded-2xlarge
  shadow-gray-blue shadow-lg 
  border-2 border-b-gray-blue;
}

.github-icon {
  @apply h-20 w-20;
}
</style>