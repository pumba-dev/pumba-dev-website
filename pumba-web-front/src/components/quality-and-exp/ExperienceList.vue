<template>
  <div class="experience-list">
    <CardData
      v-for="(experience, index) in experienceListArray"
      :key="index"
      :CardData="experience"
    ></CardData>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ArrayOfExperience from "../../assets/javascripts/MyExperienceList";
import CardData from "./CardData.vue";

export default {
  components: { CardData },
  setup() {
    const data = reactive({
      experienceListArray: ArrayOfExperience,
    });

    return { ...toRefs(data) };
  },
};
</script>

<style scoped>
.experience-list {
  @apply flex w-1/2 justify-around items-center;
}
</style>