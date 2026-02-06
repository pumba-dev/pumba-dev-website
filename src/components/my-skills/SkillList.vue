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
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import Skill from "./Skill.vue";
import getSkillsList from "../../assets/javascripts/SkillsList";
export default {
  components: { Skill },
  setup() {
    const { t } = useI18n();

    const skillListArray = computed(() => getSkillsList(t));

    return { skillListArray };
  },
};
</script>

<style scoped>
.skill-list {
  @apply flex w-1/2 justify-around items-center;
}
</style>
