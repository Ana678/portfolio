import { en } from "@/i18n/locales/en";
import { pt } from "@/i18n/locales/pt";
import type { Language, Translations } from "@/i18n/types";

export { type Language, type Translations } from "@/i18n/types";

export const translations: Record<Language, Translations> = {
    pt,
    en,
};
