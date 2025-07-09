import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_TYPING_SPEED,
  TypingAnimation,
} from "./motions/TypingAnimation";
import { RotatingText } from "./motions/RotatingText";
import { useState, useEffect } from "react";

export const EnHero = () => {
  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleNavigateToServices = () => {
    window.location.href = "/en/services";
  };

  const [typingComplete, setTypingComplete] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const firstLineText = "From Dream to Reality";

  useEffect(() => {
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < firstLineText.length) {
        setCurrentText(firstLineText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(type, DEFAULT_TYPING_SPEED);
      } else {
        setShowCursor(false);
        setTimeout(() => setTypingComplete(true), 300);
      }
    };

    setTimeout(type, 500);

    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photos/dubai.svg')" }}
      dir="ltr"
    >
      {/* background blur */}
      <div className="absolute inset-0 bg-white/80 sm:bg-white/70 md:bg-white/60 backdrop-blur-sm z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-3 bg-sky-950/10 text-sky-900 px-6 py-3 rounded-full font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-950"></span>
            </span>
            Your Trusted Partner for Business Setup in UAE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight min-h-[120px] text-center">
            {!typingComplete ? (
              <>
                {currentText}
                <span
                  className={`inline-block w-[3px] h-[60px] bg-sky-950 ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
                />
              </>
            ) : (
              <>
                <span className="block">{firstLineText}</span>
                <span className="block">
                  Your{" "}
                  <RotatingText
                    words={["Company", "Residence", "Visa", "Tax", "Insurance"]}
                    className="text-sky-900 inline-block"
                    interval={2500}
                    highlight
                  />
                  <TypingAnimation
                    text=" Starts with Taked"
                    highlightedWord="Taked"
                    direction="ltr"
                    speed={DEFAULT_TYPING_SPEED}
                  />
                </span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Company formation, legal licensing, investor residency, all services
            in one place
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto bg-sky-950 hover:bg-sky-800 text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              Get Free Consultation Now
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Button>

            <Button
              size="lg"
              onClick={handleNavigateToServices}
              className="w-full sm:w-auto bg-white text-sky-900 border-2 border-sky-950 hover:bg-sky-950 hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-900 mb-2">
                +15
              </div>
              <div className="text-gray-600 font-medium">
                Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-900 mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-900 mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">
                Completed Services
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-900 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>

          <div className="relative mt-16 animate-fade-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
