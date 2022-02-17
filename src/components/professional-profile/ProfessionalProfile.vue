<template>
  <div>
    <SectionTitle
      class="mb-12"
      :titleText="'Perfil Profissional'"
    ></SectionTitle>
    <section class="professional-cards">
      <ProfessionalCard
        :CardDataList="QualitiesData"
        :CardType="'qualities'"
        :TitleText="'Qualidades'"
      ></ProfessionalCard>

      <ProfessionalCard
        :CardDataList="ExperiencesData"
        :CardType="'experiences'"
        :TitleText="'Experiências'"
      ></ProfessionalCard>
    </section>
  </div>
</template>

<script>
// Hooks
import { reactive, toRefs } from "@vue/reactivity";
// Cards Data
import QualitiesData from "../../assets/javascripts/QualitiesList";
import ExperiencesData from "../../assets/javascripts/ExperiencesList";
// Components
import ProfessionalCard from "./ProfessionalCard.vue";
import SectionTitle from "../shared/SectionTitle.vue";
import CardBackground from "./CardBackground.vue";

export default {
  components: {
    SectionTitle,
    CardBackground,
    ProfessionalCard,
  },
  setup() {
    const data = reactive({
      QualitiesData,
      ExperiencesData,
    });

    return { ...toRefs(data) };
  },
};
</script>

<style>
.professional-cards {
  @apply flex flex-col justify-center gap-12 w-full items-center
   lg:flex-row;
}
</style>