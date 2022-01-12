<template>
  <div class="last-repos">
    <img
      class="github-icon"
      src="/src/assets/svg/github/github-logo.svg"
      alt="Icone do GitHub"
    />
    <h1 class="title">Últimos Repositórios</h1>
    <Repos></Repos>
  </div>
</template>

<script>
import Repos from "./Repos.vue";
export default {
  components: { Repos },
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

.title {
  @apply text-dark-blue font-bold text-5xl;
}
</style>