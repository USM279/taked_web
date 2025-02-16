import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img alt="تأكيد" className="h-12" src="/lovable-uploads/002677c5-a852-429a-b1aa-4f21fa7a3256.png" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">من نحن</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">خدماتنا</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">تواصل معنا</a>
            <Button className="text-white flex items-center gap-2 bg-sky-950 hover:bg-sky-800">
              <Phone size={18} />
              <span style={{ direction: 'ltr' }}>+971 56 433 1993</span>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</a>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors">من نحن</a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">خدماتنا</a>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">تواصل معنا</a>
                <Button className="text-white flex items-center gap-2 justify-center bg-sky-950 hover:bg-sky-800">
                  <Phone size={18} />
                  <span style={{ direction: 'ltr' }}>+971 56 433 1993</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>;
};