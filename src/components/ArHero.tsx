import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ArHero = () => {
  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photos/dubai.svg')" }}
      dir="rtl"
    >
      {/* خلفية ضبابية فوق الصورة */}
      <div className="absolute inset-0 bg-white/80 sm:bg-white/70 md:bg-white/60 backdrop-blur-sm z-0"></div>

      {/* تدرج سفلي سلس */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-10"></div>

      {/* المحتوى */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up rtl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-body">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary text-slate-50"></span>
            </span>
            شريكك الموثوق لتأسيس الشركات في الإمارات
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            من الحلم إلى الواقع، شركتك تبدأ مع{" "}
            <span className="relative">
              <span className="relative z-10">تأكيد</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/20 -z-0"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-body max-w-2xl mx-auto">
            تأسيس شركات، تراخيص قانونية، إقامات مستثمرين، كل الخدمات في مكان
            واحد
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto bg-sky-950/90 hover:bg-sky-950/100 text-white backdrop-blur-md shadow-md transition group"
            >
              احصل على استشارة مجانية الآن
              <ArrowLeft
                className="mr-2 transition-transform group-hover:-translate-x-1"
                size={18}
              />
            </Button>

            <Button
              size="lg"
              onClick={() => handleScroll("services")}
              className="w-full sm:w-auto bg-white/60 text-sky-950 border border-sky-950/30 hover:bg-white/80 backdrop-blur-md transition"
            >
              تعرف على خدماتنا
            </Button>
          </div>

          <div className="relative mt-16 animate-fade-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
