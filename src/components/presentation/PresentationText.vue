<template>
  <section class="home-presentation" @click="startAnimation">
    <h1 class="home-title" :class="{ 'code-mode': isCodeMode }">
      {{ displayTitle }}
    </h1>
    <h2 class="home-subtitle" :class="{ 'code-mode': isCodeMode }">
      {{ displaySubtitle }}
    </h2>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    const displayTitle = ref("");
    const displaySubtitle = ref("");
    const isCodeMode = ref(false);
    let isAnimating = ref(false);

    const codeChars = "!@#$%^&*(){}[]<>?/\\|+=~`_;:,.".split("");

    const getRandomCodeChar = () => {
      return codeChars[Math.floor(Math.random() * codeChars.length)];
    };

    const animateText = (originalText, displayRef, callback) => {
      let iteration = 0;
      const maxIterations = originalText.length;

      const interval = setInterval(() => {
        displayRef.value = originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return originalText[index];
            }
            return getRandomCodeChar();
          })
          .join("");

        iteration += 1 / 3;

        if (iteration >= maxIterations) {
          clearInterval(interval);
          displayRef.value = originalText;
          if (callback) callback();
        }
      }, 30);

      return interval;
    };

    const startAnimation = () => {
      if (isAnimating.value) return;

      isAnimating.value = true;
      const title = t("presentation.title");
      const subtitle = t("presentation.subtitle");

      // Reset to code characters
      displayTitle.value = title
        .split("")
        .map((c) => (c === " " ? " " : getRandomCodeChar()))
        .join("");
      displaySubtitle.value = subtitle
        .split("")
        .map((c) => (c === " " ? " " : getRandomCodeChar()))
        .join("");
      isCodeMode.value = true;

      // Wait a bit then transform to text
      setTimeout(() => {
        animateText(title, displayTitle, () => {
          animateText(subtitle, displaySubtitle, () => {
            isCodeMode.value = false;
            isAnimating.value = false;
          });
        });
      }, 300);
    };

    onMounted(() => {
      // Initialize with normal text
      displayTitle.value = t("presentation.title");
      displaySubtitle.value = t("presentation.subtitle");
    });

    return {
      displayTitle,
      displaySubtitle,
      isCodeMode,
      startAnimation,
    };
  },
};
</script>

<style scoped>
.home-presentation {
  @apply text-dark-blue flex flex-col items-center text-center
  gap-[1px] lg:gap-[2px] xl:gap-[3px]
  cursor-pointer;
}

.home-title {
  @apply text-sm font-black
  2xs:text-base
  xs:text-lg 
  sm:text-xl
  md:text-3xl
  lg:text-3xl
  xl:text-4xl
  2xl:text-5xl
  transition-all duration-300
  tracking-wide
  md:tracking-wider;
}

.home-title.code-mode {
  font-family: "Courier New", Consolas, monospace;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(30, 58, 138, 0.3);
}

.home-subtitle {
  @apply text-sm font-light
  sm:text-base
  lg:text-xl
  xl:text-2xl
  2xl:text-3xl
  transition-all duration-300
  tracking-wide;
}

.home-subtitle.code-mode {
  font-family: "Courier New", Consolas, monospace;
  letter-spacing: 0.05em;
  text-shadow: 0 0 8px rgba(30, 58, 138, 0.3);
}
</style>
