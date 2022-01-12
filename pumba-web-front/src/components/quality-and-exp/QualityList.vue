<template>
  <div class="quality-list">
    <CardData
      v-for="(quality, index) in qualityListArray"
      :key="index"
      :CardData="quality"
    ></CardData>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import CardData from "./CardData.vue";
import ArrayOfqualitys from "../../assets/javascripts/MyQualityList";
export default {
  components: { CardData },
  setup() {
    const data = reactive({
      qualityListArray: ArrayOfqualitys,
    });

    return { ...toRefs(data) };
  },
};
</script>

<style scoped>
.quality-list {
  @apply flex w-1/2 justify-around items-center;
}
</style>