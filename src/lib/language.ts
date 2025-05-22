import i18n from 'i18next';

export type Language = 'ar' | 'en';

// التحقق من صحة اللغة
export const isValidLanguage = (lang: string | null): lang is Language => {
  return lang === 'ar' || lang === 'en';
};

// الحصول على اللغة الحالية (مبسطة)
export const getCurrentLanguage = (): Language => {
  // محاولة الحصول على اللغة من المسار أولاً
  const pathLang = window.location.pathname.split('/')[1];
  if (isValidLanguage(pathLang)) {
    return pathLang;
  }
  
  // ثم من localStorage
  const storedLang = localStorage.getItem('i18nextLng');
  if (isValidLanguage(storedLang)) {
    return storedLang;
  }
  
  // افتراضياً العربية
  return 'ar';
};

// تغيير اللغة (مبسطة - سيتم التعامل معها في LanguageLayout)
export const changeLanguage = (lang: Language): void => {
  if (!isValidLanguage(lang)) return;
  
  i18n.changeLanguage(lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  localStorage.setItem('i18nextLng', lang);
}; 