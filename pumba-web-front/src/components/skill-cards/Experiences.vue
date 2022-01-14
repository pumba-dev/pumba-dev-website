<template>
  <div class="experience-list">
    <transition-group>
      <CardData
        v-for="(experience, index) in experienceListArray"
        :key="index"
        :CardData="experience"
      ></CardData>
    </transition-group>
    <BubbleNav></BubbleNav>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ArrayOfExperience from "../../assets/javascripts/MyExperienceList";
import CardData from "./CardData.vue";
import BubbleNav from '../shared/BubbleNav.vue';

export default {
  components: { CardData, BubbleNav },
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