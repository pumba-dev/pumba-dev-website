<template>
  <div class="repo-list">
    <Repository
      v-for="(repoData, index) in repoList"
      :key="index"
      :repoData="repoData"
    ></Repository>
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "@vue/runtime-core";
import { getRepos } from "../../plugins/github-api.js";
import Repository from "./Repository.vue";
export default {
  components: { Repository },
  setup() {
    const data = reactive({
      repoList: [],
    });

    onBeforeMount(() => {
      getRepos().then((response) => {
        const repoQuantity = 4;
        data.repoList = response.data.slice(0, repoQuantity).reverse();
      });
    });

    return { ...toRefs(data) };
  },
};
</script>

<style scoped>
.repo-list {
  @apply gap-5 flex flex-col
  
  /* Reponsivity */
  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-7;
}
</style>