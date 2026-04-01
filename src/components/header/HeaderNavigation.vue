<template>
  <div class="header-nav-wrapper">
    <MobileHeaderMenu :current-cv="currentCV" class="flex sm:hidden" />

    <ul class="nav-btn-list hidden sm:flex">
      <li>
        <ThemeToggle />
      </li>
      <li>
        <ProjectsDropdown />
      </li>
      <li>
        <CVButton :label="currentCV.label" :url="currentCV.url"></CVButton>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import CVButton from "./CVButton.vue";
import MobileHeaderMenu from "./MobileHeaderMenu.vue";
import ProjectsDropdown from "./ProjectsDropdown.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";

export default {
  components: { CVButton, MobileHeaderMenu, ProjectsDropdown, ThemeToggle },
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
.header-nav-wrapper {
  @apply relative flex items-center;
}

.nav-btn-list {
  @apply justify-center items-center gap-2
  xs:gap-3
  sm:gap-5
  md:gap-6
  lg:gap-7;
}
</style>
