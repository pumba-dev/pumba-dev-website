<template>
  <div class="projects-menu" ref="projectsMenu">
    <button
      type="button"
      class="menu-button"
      :aria-label="t('header.projects.ariaLabel')"
      :aria-expanded="isOpen.toString()"
      :title="t('header.projects.button')"
      @click.stop="toggleMenu"
    >
      <span class="menu-button-label">{{ t("header.projects.button") }}</span>
      <i
        class="ri-arrow-down-s-line menu-chevron"
        :class="{ open: isOpen }"
        aria-hidden="true"
      ></i>
    </button>

    <transition name="menu-fade">
      <ul
        v-if="isOpen"
        class="menu-list"
        role="menu"
        :aria-label="t('header.projects.listAriaLabel')"
      >
        <li v-for="project in projects" :key="project.key">
          <a
            class="menu-link"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            @click="closeMenu"
          >
            <span class="menu-link-text">
              {{ t(`header.projects.items.${project.key}`) }}
            </span>
            <i
              class="ri-external-link-line menu-link-icon"
              aria-hidden="true"
            ></i>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import getProjectsList from "../../assets/javascripts/ProjectsList";

export default {
  name: "ProjectsDropdown",
  setup() {
    const { t } = useI18n();
    const projects = getProjectsList();
    const isOpen = ref(false);
    const projectsMenu = ref(null);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    const handleClickOutside = (event) => {
      if (projectsMenu.value && !projectsMenu.value.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeydown);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    });

    return {
      t,
      projects,
      isOpen,
      projectsMenu,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style lang="postcss" scoped>
.projects-menu {
  @apply relative;
}

.menu-button {
  @apply flex justify-center items-center gap-1 cursor-pointer
  max-w-max text-blue dark:text-white-gray
  py-1 md:py-2
  transition-colors duration-300;
}

.menu-button:hover {
  @apply lg:text-disable-blue dark:lg:text-gray-blue;
}

.menu-button:hover .menu-button-label {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.menu-button-label {
  @apply font-normal
  text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl;
}

.menu-chevron {
  @apply text-lg md:text-xl transition-transform duration-300;
}

.menu-chevron.open {
  @apply rotate-180;
}

.menu-list {
  @apply absolute right-0 top-full mt-2 z-40
  rounded-lg border-2 border-blue dark:border-white-gray
  bg-white-gray dark:bg-dark-blue
  p-2 shadow-lg;
  min-width: 17rem;
  max-width: 85vw;
}

.menu-list li + li {
  @apply mt-1 pt-1 border-t border-blue dark:border-white-gray;
}

.menu-link {
  @apply flex items-center justify-between gap-3 rounded-lg px-3 py-2
  text-dark-blue dark:text-white-gray
  text-sm md:text-base
  hover:bg-blue hover:text-white-gray
  dark:hover:bg-white-gray dark:hover:text-dark-blue
  transition-colors duration-200;
}

.menu-link-text {
  @apply font-medium;
}

.menu-link-icon {
  @apply text-base opacity-70 transition-all duration-200;
}

.menu-link:hover .menu-link-icon {
  opacity: 1;
  transform: translate(2px, -2px);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
