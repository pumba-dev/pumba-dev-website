import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { availableLocales } from "../locales";

export function useLocale() {
  const { locale, t } = useI18n();

  const currentLocale = computed({
    get: () => locale.value,
    set: (newLocale) => {
      locale.value = newLocale;
      localStorage.setItem("user-locale", newLocale);
      document.documentElement.setAttribute("lang", newLocale);
    },
  });

  const changeLocale = (newLocale) => {
    if (availableLocales.some((l) => l.code === newLocale)) {
      currentLocale.value = newLocale;
    }
  };

  const getCurrentFlag = computed(() => {
    const current = availableLocales.find(
      (l) => l.code === currentLocale.value,
    );
    return current?.flag || "br";
  });

  const getCurrentLocaleName = computed(() => {
    const current = availableLocales.find(
      (l) => l.code === currentLocale.value,
    );
    return current?.name || "Português (Brasil)";
  });

  return {
    locale: currentLocale,
    availableLocales,
    changeLocale,
    getCurrentFlag,
    getCurrentLocaleName,
    t,
  };
}
