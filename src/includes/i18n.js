import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fa from "@/locales/fa.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fa,
  },
});
