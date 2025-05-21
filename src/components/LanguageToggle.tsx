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

    // Load the saved language when the component mounts
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "ar";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("i18nextLng", lang);

    // Get the current path after the language
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentPath =
      pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "";

    // Navigate to the same path with the new language
    navigate(`/${lang}${currentPath}${location.search}`);

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
