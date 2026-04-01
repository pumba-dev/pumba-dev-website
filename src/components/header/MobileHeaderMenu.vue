<template>
  <div class="mobile-menu-wrapper" ref="mobileMenuRef" @click.stop>
    <button
      type="button"
      class="mobile-menu-btn sm:hidden"
      :aria-expanded="isMobileMenuOpen.toString()"
      :aria-label="
        isMobileMenuOpen
          ? t('header.mobileMenu.closeAriaLabel')
          : t('header.mobileMenu.openAriaLabel')
      "
      :title="
        isMobileMenuOpen
          ? t('header.mobileMenu.closeAriaLabel')
          : t('header.mobileMenu.openAriaLabel')
      "
      @click.stop="toggleMobileMenu"
    >
      <i
        :class="isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'"
        aria-hidden="true"
      ></i>
    </button>

    <div v-if="isMobileMenuOpen" class="mobile-menu-panel" @click.stop>
      <div class="mobile-menu-group">
        <p class="mobile-menu-group-title">
          {{ t("header.mobileMenu.optionsTitle") }}
        </p>

        <a
          :href="currentCv.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mobile-menu-item"
          :title="currentCv.label"
          @click="closeMobileMenu"
        >
          <i class="ri-file-download-line" aria-hidden="true"></i>
          <span>{{ currentCv.label }}</span>
        </a>

        <button
          type="button"
          class="mobile-menu-item"
          :title="t('header.donation.button')"
          @click="handleDonationClick"
        >
          <i class="ri-cup-line" aria-hidden="true"></i>
          <span>{{ t("header.donation.button") }}</span>
        </button>

        <button
          type="button"
          class="mobile-menu-item"
          :title="
            isDark
              ? t('header.mobileMenu.themeToLight')
              : t('header.mobileMenu.themeToDark')
          "
          @click="handleThemeToggle"
        >
          <i
            :class="isDark ? 'ri-sun-line' : 'ri-moon-line'"
            aria-hidden="true"
          ></i>
          <span>
            {{
              isDark
                ? t("header.mobileMenu.themeToLight")
                : t("header.mobileMenu.themeToDark")
            }}
          </span>
        </button>
      </div>

      <div class="mobile-menu-group">
        <p class="mobile-menu-group-title">
          {{ t("header.mobileMenu.projectsTitle") }}
        </p>
        <a
          v-for="project in projects"
          :key="project.key"
          class="mobile-menu-item"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMobileMenu"
        >
          <i class="ri-external-link-line" aria-hidden="true"></i>
          {{ t(`header.projects.items.${project.key}`) }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, toRef } from "vue";
import { useI18n } from "vue-i18n";
import getProjectsList from "../../assets/javascripts/ProjectsList";
import { useTheme } from "../../composables/useTheme";

export default {
  name: "MobileHeaderMenu",
  emits: ["open-donation"],
  props: {
    currentCv: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const currentCv = toRef(props, "currentCv");
    const { t } = useI18n();
    const { isDark, toggleTheme } = useTheme();
    const projects = getProjectsList();
    const isMobileMenuOpen = ref(false);
    const mobileMenuRef = ref(null);
    let desktopMediaQuery = null;

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    const handleThemeToggle = () => {
      toggleTheme();
      closeMobileMenu();
    };

    const handleDonationClick = () => {
      emit("open-donation");
      closeMobileMenu();
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.value && !mobileMenuRef.value.contains(event.target)) {
        closeMobileMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    const handleDesktopBreakpointChange = (event) => {
      if (event.matches) {
        closeMobileMenu();
      }
    };

    onMounted(() => {
      if (typeof window !== "undefined") {
        desktopMediaQuery = window.matchMedia("(min-width: 640px)");
        if (desktopMediaQuery.addEventListener) {
          desktopMediaQuery.addEventListener(
            "change",
            handleDesktopBreakpointChange,
          );
        } else {
          desktopMediaQuery.addListener(handleDesktopBreakpointChange);
        }
      }

      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);

      if (desktopMediaQuery) {
        if (desktopMediaQuery.removeEventListener) {
          desktopMediaQuery.removeEventListener(
            "change",
            handleDesktopBreakpointChange,
          );
        } else {
          desktopMediaQuery.removeListener(handleDesktopBreakpointChange);
        }
      }
    });

    return {
      t,
      currentCv,
      isDark,
      projects,
      isMobileMenuOpen,
      mobileMenuRef,
      toggleMobileMenu,
      closeMobileMenu,
      handleThemeToggle,
      handleDonationClick,
    };
  },
};
</script>

<style scoped>
.mobile-menu-wrapper {
  @apply relative items-center z-50;
}

.mobile-menu-btn {
  @apply flex items-center justify-center
  w-8 h-8 xs:w-9 xs:h-9
  text-blue dark:text-white-gray
  text-2xl transition-all duration-300
  hover:scale-110 cursor-pointer;
}

.mobile-menu-panel {
  @apply absolute right-0 top-full mt-2 z-[60]
  min-w-max
  rounded-lg border-solid border-2 border-blue dark:border-white-gray
  bg-white-gray dark:bg-dark-blue
  p-2 shadow-lg;
  max-width: 85vw;
}

.mobile-menu-item {
  @apply w-full flex items-center gap-2
  rounded-lg px-3 py-2
  text-sm text-dark-blue dark:text-white-gray
  transition-colors duration-200
  hover:bg-blue hover:text-white-gray
  dark:hover:bg-white-gray dark:hover:text-dark-blue;
}

.mobile-menu-group {
  @apply py-1;
}

.mobile-menu-group + .mobile-menu-group {
  @apply mt-1 pt-2 border-t border-blue dark:border-white-gray;
}

.mobile-menu-group-title {
  @apply px-3 pb-1 text-xs font-semibold text-dark-blue dark:text-white-gray;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
