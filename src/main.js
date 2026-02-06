import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./global.css";
import { locales, defaultLocale } from "./locales";
import { useTheme } from "./composables/useTheme";

// Detect browser language or use stored preference
const getBrowserLocale = () => {
  const stored = localStorage.getItem("user-locale");
  if (stored && locales[stored]) {
    return stored;
  }

  const browserLang = navigator.language || navigator.userLanguage;

  // Try exact match first
  if (locales[browserLang]) {
    return browserLang;
  }

  // Try to match language code only (e.g., 'pt' from 'pt-BR')
  const langCode = browserLang.split("-")[0];
  const matchedLocale = Object.keys(locales).find((key) =>
    key.startsWith(langCode),
  );

  return matchedLocale || defaultLocale;
};

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: defaultLocale,
  messages: locales,
  globalInjection: true,
});

const app = createApp(App);
app.use(i18n);

// Set HTML lang attribute
document.documentElement.setAttribute("lang", getBrowserLocale());

// Initialize theme
const { initTheme } = useTheme();
initTheme();

app.mount("#app");
