<template>
  <ul class="nav-btn-list">
    <li>
      <ThemeToggle />
    </li>
    <li>
      <CVButton :label="currentCV.label" :url="currentCV.url"></CVButton>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import CVButton from "./CVButton.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";

export default {
  components: { CVButton, ThemeToggle },
  setup() {
    const { locale, t } = useI18n();

    const curriculums = [
      {
        lang: "pt-BR",
        label: computed(() => t("header.cvButton")),
        filename: "pumbadev-resume-pt-BR.pdf",
      },
      {
        lang: "pt-PT",
        label: computed(() => t("header.cvButton")),
        filename: "pumbadev-resume-pt-PT.pdf",
      },
      {
        lang: "en-US",
        label: computed(() => t("header.cvButton")),
        filename: "pumbadev-resume-en-US.pdf",
      },
      {
        lang: "es-ES",
        label: computed(() => t("header.cvButton")),
        filename: "pumbadev-resume-es-ES.pdf",
      },
    ];

    const currentCV = computed(() => {
      const cv =
        curriculums.find((c) => c.lang === locale.value) || curriculums[0];
      return {
        label: cv.label.value,
        url: new URL(`../../assets/downloads/${cv.filename}`, import.meta.url)
          .href,
      };
    });

    return {
      currentCV,
    };
  },
};
</script>

<style scoped>
.nav-btn-list {
  @apply flex justify-center items-center gap-3
  xs:gap-4
  sm:gap-5
  md:gap-6
  lg:gap-7;
}

.btn-text {
  @apply text-dark-blue font-medium
  text-sm
  xs:text-base
  sm:text-lg
  md:text-xl
  lg:text-2xl
  hover:text-blue cursor-pointer
  transition-colors duration-300
  inline-block;
}
</style>
