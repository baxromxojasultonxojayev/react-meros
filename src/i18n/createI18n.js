import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import locales from "./locales";

const createI18n = () =>
  i18n.use(initReactI18next).init({
    resources: locales,
    lng: "uz",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default createI18n;
