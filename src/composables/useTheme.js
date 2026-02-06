import { ref, computed } from "vue";

const theme = ref(localStorage.getItem("user-theme") || "light");

export function useTheme() {
  const isDark = computed(() => theme.value === "dark");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    applyTheme();
    localStorage.setItem("user-theme", theme.value);
  };

  const setTheme = (newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      theme.value = newTheme;
      applyTheme();
      localStorage.setItem("user-theme", theme.value);
    }
  };

  const applyTheme = () => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("user-theme");

    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      theme.value = prefersDark ? "dark" : "light";
    }

    applyTheme();
  };

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  };
}
