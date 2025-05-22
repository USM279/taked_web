import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from './locales/ar/translation.json';
import enTranslation from './locales/en/translation.json';

// محاولة استرداد اللغة المحفوظة أو استخدام العربية كلغة افتراضية
const savedLanguage = localStorage.getItem('i18nextLng');
const defaultLanguage = (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';

// تعيين اتجاه الصفحة بناءً على اللغة الافتراضية
document.documentElement.dir = defaultLanguage === 'ar' ? 'rtl' : 'ltr';

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
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

// استمع إلى تغييرات اللغة وتحديث الاتجاه
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('i18nextLng', lng);
});

export default i18n; 