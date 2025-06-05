import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ArHero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "من الحلم إلى الواقع، شركتك تبدأ مع تأكيد";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    setTimeout(typeText, 500);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleNavigateToServices = () => {
    window.location.href = "/ar/services";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-sky-50 via-white to-blue-50"
      dir="rtl"
    >
      {/* content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-3 bg-sky-950/10 text-sky-950 px-6 py-3 rounded-full font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-950"></span>
            </span>
            شريكك الموثوق لتأسيس الشركات في الإمارات
          </div>

          <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight min-h-[120px] flex items-center justify-center">
            <span>
              {text.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className={`inline-block mx-1 ${
                    word === "تأكيد" ? "text-sky-950" : ""
                  }`}
                >
                  {word}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))}
              <span
                className={`inline-block w-[3px] h-[60px] bg-sky-950 ml-1 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            تأسيس شركات، تراخيص قانونية، إقامات مستثمرين، كل الخدمات في مكان
            واحد
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto bg-sky-950 hover:bg-sky-800 text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              احصل على استشارة مجانية الآن
              <ArrowLeft
                className="mr-2 transition-transform group-hover:-translate-x-1"
                size={20}
              />
            </Button>

            <Button
              size="lg"
              onClick={handleNavigateToServices}
              className="w-full sm:w-auto bg-white text-sky-950 border-2 border-sky-950 hover:bg-sky-950 hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              تعرف على خدماتنا
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                +15
              </div>
              <div className="text-gray-600 font-medium">عام من الخبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-medium">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">معاملة منجزة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">معدل النجاح</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
