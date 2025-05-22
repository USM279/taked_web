import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { changeLanguage, getCurrentLanguage, Language } from "@/lib/language";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (lang: Language) => {
    // تغيير اللغة باستخدام النظام الجديد
    changeLanguage(lang);

    // تحديث المسار
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentLang = pathParts[0];

    // إذا كان المسار يبدأ باللغة، استبدلها
    if (currentLang === "ar" || currentLang === "en") {
      const restPath =
        pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "";
      navigate(`/${lang}${restPath}`, { replace: true });
    } else {
      // إذا لم يكن المسار يبدأ باللغة، أضف اللغة في البداية
      navigate(`/${lang}${location.pathname}`, { replace: true });
    }

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
          onClick={() => handleLanguageChange("ar")}
          className="cursor-pointer"
        >
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
