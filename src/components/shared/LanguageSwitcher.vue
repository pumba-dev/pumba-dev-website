<template>
  <div class="lang-switcher">
    <div
      class="lang-button-container"
      :class="{ expanded: isExpanded }"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
    >
      <!-- Current language button -->
      <button
        class="lang-button current"
        :aria-label="`Current language: ${getCurrentLocaleName}`"
        @click="toggleMenu"
      >
        <img
          :src="getFlagUrl(getCurrentFlag)"
          :alt="getCurrentLocaleName"
          class="flag-icon"
        />
      </button>

      <!-- Language options (shown on expand) -->
      <transition-group name="lang-option" tag="div" class="lang-options">
        <button
          v-for="loc in otherLocales"
          :key="loc.code"
          class="lang-button option"
          :aria-label="`Switch to ${loc.name}`"
          @click="switchLanguage(loc.code)"
        >
          <img :src="getFlagUrl(loc.flag)" :alt="loc.name" class="flag-icon" />
        </button>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useLocale } from "../../composables/useLocale";

export default {
  name: "LanguageSwitcher",
  setup() {
    const {
      locale,
      availableLocales,
      changeLocale,
      getCurrentFlag,
      getCurrentLocaleName,
    } = useLocale();
    const isExpanded = ref(false);

    const otherLocales = computed(() => {
      return availableLocales.filter((l) => l.code !== locale.value);
    });

    const getFlagUrl = (flag) => {
      return new URL(`../../assets/svg/flags/${flag}.svg`, import.meta.url)
        .href;
    };

    const switchLanguage = (newLocale) => {
      changeLocale(newLocale);
      isExpanded.value = false;
    };

    const toggleMenu = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      isExpanded,
      locale,
      otherLocales,
      getCurrentFlag,
      getCurrentLocaleName,
      getFlagUrl,
      switchLanguage,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.lang-switcher {
  @apply fixed bottom-8 left-8 z-50;
}

.lang-button-container {
  @apply flex flex-col-reverse gap-2 items-center;
}

.lang-button {
  @apply w-12 h-12 rounded-full
  border-2 border-blue bg-white-gray
  shadow-lg hover:shadow-xl
  transition-all duration-300
  cursor-pointer
  flex items-center justify-center
  overflow-hidden;
}

.lang-button.current {
  @apply w-14 h-14;
}

.lang-button.option {
  @apply opacity-0 scale-0;
}

.lang-button-container.expanded .lang-button.option {
  @apply opacity-100 scale-100;
}

.lang-button:hover {
  @apply scale-110 border-dark-blue;
}

.flag-icon {
  @apply w-full h-full object-cover;
}

.lang-options {
  @apply flex flex-col-reverse gap-2;
}

/* Transition animations */
.lang-option-enter-active,
.lang-option-leave-active {
  transition: all 0.3s ease;
}

.lang-option-enter-from {
  opacity: 0;
  transform: scale(0) translateY(10px);
}

.lang-option-leave-to {
  opacity: 0;
  transform: scale(0) translateY(10px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .lang-switcher {
    @apply bottom-4 left-4;
  }

  .lang-button-container {
    @apply gap-1.5;
  }

  .lang-button {
    @apply w-8 h-8 border;
  }

  .lang-button.current {
    @apply w-10 h-10;
  }

  .lang-options {
    @apply gap-1.5;
  }
}
</style>
