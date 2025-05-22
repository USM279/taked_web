import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // تحميل اللغة المحفوظة عند تحميل المكون
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "ar";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLanguage = (lang: string) => {
    // تغيير اللغة في i18n
    i18n.changeLanguage(lang);

    // تعيين اتجاه الصفحة بناءً على اللغة
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // حفظ اللغة في التخزين المحلي
    localStorage.setItem("i18nextLng", lang);

    // الحصول على المسار الحالي بعد اللغة
    const pathParts = location.pathname.split("/").filter(Boolean);

    // إذا كان المسار يحتوي على لغة (ar أو en)، استبدلها بالمسار الجديد
    const restPath =
      pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "";

    // التنقل إلى نفس المسار باللغة الجديدة
    const newPath = `/${lang}${restPath}`;
    navigate(newPath, { replace: true });

    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-5 h-5 md:w-6 md:h-6 opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src="/photos/language-svgrepo-com.svg"
            alt="Language"
            className="w-full h-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-lg">
        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          className="cursor-pointer"
        >
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
