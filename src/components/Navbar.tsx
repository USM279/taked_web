import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

// المكون العربي
const ArabicNavbar = ({ isOpen, setIsOpen, handleScroll }: any) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "ar";

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-sm z-50 transition-all duration-300">
      <div dir="rtl" className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* الشعار - يمين */}
          <div className="flex-shrink-0">
            <img
              alt="شعار تأكيد"
              className="h-12 w-auto object-contain cursor-pointer"
              src="/photos/002677c5-a852-429a-b1aa-4f21fa7a3256.png"
              onClick={() => handleScroll("home")}
            />
          </div>

          {/* الروابط - وسط */}
          <div className="hidden md:flex items-center gap-8 flex-grow justify-center">
            <a
              onClick={() => handleScroll("home")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              الرئيسية
            </a>
            <a
              onClick={() => handleScroll("about")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              من نحن
            </a>
            <a
              onClick={() => handleScroll("services")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              خدماتنا
            </a>
            <a
              onClick={() => handleScroll("contact")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              تواصل معنا
            </a>
          </div>

          {/* زر الهاتف + زر اللغة - يسار */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+971564331993"
              className="hidden md:flex items-center gap-2 text-white bg-sky-950 hover:bg-sky-800 px-4 py-2 rounded-md"
            >
              <Phone size={18} />
              <span style={{ direction: "ltr" }}>+971 56 433 1993</span>
            </a>
            <LanguageToggle />
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* قائمة الموبايل */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-start space-y-4">
                <a
                  onClick={() => handleScroll("home")}
                  className="text-xl text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  الرئيسية
                </a>
                <a
                  onClick={() => handleScroll("about")}
                  className="text-xl text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  من نحن
                </a>
                <a
                  onClick={() => handleScroll("services")}
                  className="text-xl text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  خدماتنا
                </a>
                <a
                  onClick={() => handleScroll("contact")}
                  className="text-xl text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  تواصل معنا
                </a>
                <div className="w-full pt-4 border-t">
                  <a
                    href="tel:+971564331993"
                    className="flex items-center gap-2 justify-center bg-sky-950 text-white hover:bg-sky-800 px-4 py-3 rounded-md w-full text-lg"
                  >
                    <Phone size={20} />
                    <span style={{ direction: "ltr" }}>+971 56 433 1993</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// المكون الإنجليزي
const EnglishNavbar = ({ isOpen, setIsOpen, handleScroll }: any) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split("/")[1] || "en";

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            alt="Taked Logo"
            className="h-12 w-auto object-contain cursor-pointer"
            src="/photos/taked FULL EN.png"
            onClick={() => handleScroll("home")}
          />

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              onClick={() => handleScroll("home")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleScroll("about")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a
              onClick={() => handleScroll("services")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => handleScroll("contact")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Phone + Language */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+971564331993"
              className="hidden md:flex items-center gap-2 text-white bg-sky-950 hover:bg-sky-800 px-4 py-2 rounded-md"
            >
              <Phone size={18} />
              <span style={{ direction: "ltr" }}>+971 56 433 1993</span>
            </a>
            <LanguageToggle />
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-start space-y-4">
                <a
                  onClick={() => handleScroll("home")}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  Home
                </a>
                <a
                  onClick={() => handleScroll("about")}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  About Us
                </a>
                <a
                  onClick={() => handleScroll("services")}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  Services
                </a>
                <a
                  onClick={() => handleScroll("contact")}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
                <div className="w-full pt-4 border-t">
                  <a
                    href="tel:+971564331993"
                    className="flex items-center gap-2 justify-center bg-sky-950 text-white hover:bg-sky-800 px-4 py-3 rounded-md w-full text-lg"
                  >
                    <Phone size={20} />
                    <span style={{ direction: "ltr" }}>+971 56 433 1993</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// المكون الرئيسي
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    // الحصول على اللغة الحالية من المسار
    const currentLang = location.pathname.split("/")[1] || i18n.language;

    if (!["ar", "en"].includes(currentLang)) {
      // إذا كانت اللغة غير صالحة، استخدم اللغة المحفوظة أو الافتراضية
      const savedLang = localStorage.getItem("i18nextLng") || "ar";
      navigate(`/${savedLang}/${id}`, { replace: true });
    } else {
      // تحديث المسار مع الحفاظ على اللغة
      navigate(`/${currentLang}/${id}`, { replace: true });
    }

    // انتظر قليلاً للانتقال ثم قم بالتمرير
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }, 100);

    // إغلاق القائمة المنسدلة في الهاتف المحمول
    setIsOpen(false);
  };

  return i18n.language === "ar" ? (
    <ArabicNavbar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleScroll={handleScroll}
    />
  ) : (
    <EnglishNavbar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleScroll={handleScroll}
    />
  );
};
