import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const EnNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

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

            {/* Language Toggle */}
            <Link
              to="/ar"
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
            >
              AR
            </Link>

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
                <Link
                  to="/ar"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  AR
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
