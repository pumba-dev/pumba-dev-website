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

<style scoped>
.professional-cards {
  @apply flex flex-col justify-center gap-12 w-full items-center
  xl:flex-row xl:gap-8;
}

.professional-profile {
  @apply w-full flex flex-col items-center gap-8
  px-4
  2xs:px-6
  xs:px-8
  sm:px-12
  md:px-16
  lg:px-20
  xl:px-24
  2xl:px-28;
}

.professional-profile-title {
  @apply text-dark-blue font-bold text-center
  text-xl
  2xs:text-2xl
  xs:text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  xl:text-7xl
  tracking-wide;
}

.professional-profile-cards {
  @apply w-full flex flex-col gap-8
  sm:gap-12
  md:gap-16
  lg:gap-12
  xl:gap-12;
}
</style>
