import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from './locales/ar/translation.json';
import enTranslation from './locales/en/translation.json';

// Attempt to retrieve saved language or use Arabic as default
const savedLanguage = localStorage.getItem('i18nextLng');
const defaultLanguage = (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    lng: defaultLanguage,
    fallbackLng: 'ar',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 