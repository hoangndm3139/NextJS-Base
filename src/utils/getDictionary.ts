import type { Locale } from "../config/i18n-config";

export enum Module {
  auth = "auth",
}

const dictionaries = {
  en: {
    auth: () => import("../dictionaries/en/auth.json").then(module => module.default),
  },
  ko: {
    auth: () => import("../dictionaries/ko/auth.json").then(module => module.default),
  },
};

export const getDictionary = async (locale: Locale, key: Module) => {
  return dictionaries[locale]?.[key]?.() ?? dictionaries.en[key]();
};
