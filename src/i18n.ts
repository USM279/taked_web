import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from './locales/ar/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslation },
      en: { translation: enTranslation }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    debug: false,
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    initImmediate: false,
    saveMissing: false,
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation key: ${key} for language: ${lng}`);
    }
  });

i18n.on('initialized', () => {
  console.log('i18next initialized successfully');
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Failed loading language ${lng}: ${msg}`);
});

export default i18n;
