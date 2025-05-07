import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // تحميل اللغة المحفوظة عند بدء التشغيل
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "ar";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", lang);

    const currentHash = window.location.hash;
    const parts = currentHash.replace("#", "").split("/");

    const section = parts[1] || ""; // القسم الحالي إذا موجود
    window.location.hash = section ? `#${lang}/${section}` : `#${lang}`;

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
