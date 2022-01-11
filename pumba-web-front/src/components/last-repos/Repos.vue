<template>
  <div class="Repos">
    <Repository
      v-for="(repoData, index) in repoList"
      :key="index"
      :repoData="repoData"
    ></Repository>
  </div>
</template>

<script>
import repoListMock from "../../assets/mocks/repoList";
import Repository from "./Repository.vue";
export default {
  components: { Repository },
  data() {
    return {
      repoList: repoListMock,
    };
  },
};
</script>

<style scoped>
.Repos {
  @apply grid grid-cols-2 grid-rows-2 gap-5;
}
</style>