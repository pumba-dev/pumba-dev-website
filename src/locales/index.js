import ptBR from "./pt-BR.json";
import ptPT from "./pt-PT.json";
import enUS from "./en-US.json";
import esES from "./es-ES.json";

export const locales = {
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  "en-US": enUS,
  "es-ES": esES,
};

export const availableLocales = [
  { code: "pt-BR", name: "Português (Brasil)", flag: "br" },
  { code: "pt-PT", name: "Português (Portugal)", flag: "pt" },
  { code: "en-US", name: "English (US)", flag: "us" },
  { code: "es-ES", name: "Español (España)", flag: "es" },
];

export const defaultLocale = "pt-BR";
