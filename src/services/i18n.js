import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      en: ["en-US"],
      default: ["en-US"],
    },
    lng: "en-US",
    debug: true,
    ns: [
      "ResourcesHeader",
      "LanguageControl",
      "ResourcesFilter",
      "DetailsView",
    ],
    defaultNS: "ResourcesHeader",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
    load: "currentOnly",
  });

export default i18n;
