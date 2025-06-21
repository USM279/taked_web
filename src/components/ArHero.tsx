import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "./motions/TypingAnimation";
import { RotatingText } from "./motions/RotatingText";

export const ArHero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "من الحلم إلى الواقع، شركتك تبدأ مع تأكيد";

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, DEFAULT_TYPING_SPEED);
      } else {
        // إخفاء المؤشر وبدء التأثير الدوار
        setShowCursor(false);
        setTimeout(() => {
          setTypingComplete(true);
        }, 800);
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
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photos/dubai.svg')" }}
      dir="rtl"
    >
      {/* background blur */}
      <div className="absolute inset-0 bg-white/80 sm:bg-white/70 md:bg-white/60 backdrop-blur-sm z-0"></div>

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
              {!typingComplete ? (
                <>
                  {currentText.split(" ").map((word, i, arr) =>
                    word === "شركتك" ? (
                      <span
                        key={i}
                        className="relative inline-block mx-1 text-sky-950"
                      >
                        <span className="relative z-10">{word}</span>
                        <span className="absolute bottom-0 left-0 w-full h-2 bg-sky-500/20 -z-0"></span>
                        {i < arr.length - 1 ? " " : ""}
                      </span>
                    ) : (
                      <span
                        key={i}
                        className={`inline-block mx-1 ${word === "تأكيد" ? "text-sky-950" : ""}`}
                      >
                        {word}
                        {i < arr.length - 1 ? " " : ""}
                      </span>
                    )
                  )}
                  <span
                    className={`inline-block w-[3px] h-[60px] bg-sky-950 ml-1 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              ) : (
                <>
                  من الحلم إلى الواقع،{" "}
                  <RotatingText
                    words={["إقامتك", "تأشيرتك", "ضريبتك", "تأمينك", "شركتك"]}
                    className="text-sky-950"
                    interval={2500}
                    highlight
                  />{" "}
                  تبدأ مع <span className="text-sky-950">تأكيد</span>
                </>
              )}
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

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white z-10"></div>
    </section>
  );
};
