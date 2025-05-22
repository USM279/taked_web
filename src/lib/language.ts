import i18n from 'i18next';

export type Language = 'ar' | 'en';

// التحقق من صحة اللغة
export const isValidLanguage = (lang: string | null): lang is Language => {
  return lang === 'ar' || lang === 'en';
};

// الحصول على اللغة الحالية
export const getCurrentLanguage = (): Language => {
  // محاولة الحصول على اللغة من المسار
  const pathLang = window.location.pathname.split('/')[1];
  
  // محاولة الحصول على اللغة المحفوظة
  const storedLang = localStorage.getItem('i18nextLng');
  
  // استخدام اللغة الصالحة أو العودة إلى العربية كلغة افتراضية
  if (isValidLanguage(pathLang)) {
    return pathLang;
  } else if (isValidLanguage(storedLang)) {
    return storedLang;
  } else {
    return 'ar';
  }
};

// تغيير اللغة
export const changeLanguage = (lang: Language): void => {
  if (!isValidLanguage(lang)) return;
  
  // تغيير اللغة في i18n
  i18n.changeLanguage(lang);
  
  // تغيير اتجاه الصفحة
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // حفظ اللغة في التخزين المحلي
  localStorage.setItem('i18nextLng', lang);
  
  // تحديث المسار إذا لزم الأمر
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter(Boolean);
  
  if (pathParts.length > 0 && isValidLanguage(pathParts[0]) && pathParts[0] !== lang) {
    // إذا كان المسار يحتوي على لغة مختلفة، قم بتحديثه
    const newPath = `/${lang}${currentPath.substring(3)}`;
    window.history.replaceState(null, '', newPath);
  } else if (pathParts.length === 0 || !isValidLanguage(pathParts[0])) {
    // إذا لم يحتوِ المسار على لغة، أضفها
    const newPath = `/${lang}${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`;
    window.history.replaceState(null, '', newPath);
  }
};

// تهيئة اللغة
export const initializeLanguage = (): void => {
  const currentLang = getCurrentLanguage();
  changeLanguage(currentLang);
}; 