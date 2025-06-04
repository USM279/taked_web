import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const ArNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-sm z-50 transition-all duration-300">
      <div dir="rtl" className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* logo - right */}
          <div className="flex-shrink-0">
            <Link to="/ar" onClick={handleLogoClick}>
              <img
                alt="شعار تأكيد"
                className="h-12 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                src="/photos/002677c5-a852-429a-b1aa-4f21fa7a3256.png"
              />
            </Link>
          </div>

          {/* links - center */}
          <div className="hidden md:flex items-center gap-8 flex-grow justify-center">
            <Link
              to="/ar"
              onClick={handleLogoClick}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              to="/ar/about-us"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              من نحن
            </Link>
            <Link
              to="/ar/services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              خدماتنا
            </Link>
            <Link
              to="/ar/contact-us"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              تواصل معنا
            </Link>
          </div>

          {/* phone button + change language - left */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+971564331993"
              className="hidden md:flex items-center gap-2 text-white bg-sky-950 hover:bg-sky-800 px-4 py-2 rounded-md"
            >
              <span style={{ direction: "ltr" }}>+971 56 433 1993</span>
              <Phone size={18} />
            </a>

            {/* change language button */}
            <Link
              to="/en"
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
            >
              EN
            </Link>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-start space-y-4">
                <Link
                  to="/ar"
                  className="text-xl text-gray-700 hover:text-primary transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    handleLogoClick();
                  }}
                >
                  الرئيسية
                </Link>
                <Link
                  to="/ar/about-us"
                  className="text-xl text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  من نحن
                </Link>
                <Link
                  to="/ar/services"
                  className="text-xl text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  خدماتنا
                </Link>
                <Link
                  to="/ar/contact-us"
                  className="text-xl text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تواصل معنا
                </Link>
                <Link
                  to="/en"
                  className="text-xl text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  EN
                </Link>
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
