import "server-only";
import type { Locale } from "../config/i18n-config";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then(module => module.default),
  ko: () => import("../dictionaries/ko.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
