<template>
  <div class="header-nav-wrapper">
    <MobileHeaderMenu
      :current-cv="currentCV"
      class="flex sm:hidden"
      @open-donation="requestDonationModalOpen"
    />

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
      <li>
        <DonationButton :open-signal="donationModalOpenSignal" />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import CVButton from "./CVButton.vue";
import DonationButton from "./DonationButton.vue";
import MobileHeaderMenu from "./MobileHeaderMenu.vue";
import ProjectsDropdown from "./ProjectsDropdown.vue";
import ThemeToggle from "../shared/ThemeToggle.vue";

export default {
  components: {
    CVButton,
    DonationButton,
    MobileHeaderMenu,
    ProjectsDropdown,
    ThemeToggle,
  },
  setup() {
    const { locale, t } = useI18n();
    const donationModalOpenSignal = ref(0);

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

    const requestDonationModalOpen = () => {
      donationModalOpenSignal.value += 1;
    };

    return {
      currentCV,
      donationModalOpenSignal,
      requestDonationModalOpen,
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
