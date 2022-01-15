<template>
  <div class="skill-list">
    <Skill
      v-for="(skill, index) in skillListArray"
      :key="index"
      :skill="skill"
    ></Skill>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Skill from "./Skill.vue";
import ArrayOfSkills from "../../assets/javascripts/SkillsList";
export default {
  components: { Skill },
  setup() {
    const data = reactive({
      skillListArray: ArrayOfSkills,
    });

    return { ...toRefs(data) };
  },
};
</script>

<style scoped>
.skill-list {
  @apply flex w-1/2 justify-around items-center;
}
</style>