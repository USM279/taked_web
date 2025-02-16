import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-body">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary text-slate-50"></span>
            </span>
            شريكك الموثوق في الإمارات
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
            حلول متكاملة لتأسيس <span className="relative">
              <span className="relative z-10">وإدارة أعمالك</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto">
            نقدم خدمات شاملة من تأسيس الشركات إلى إصدار التراخيص والتأشيرات وأكثر
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              asChild
              className="w-full sm:w-auto bg-sky-950 hover:bg-sky-800 group"
            >
              <a href="#contact">
                احصل على استشارة مجانية
                <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={18} />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="w-full sm:w-auto hover:bg-primary/5"
            >
              <a href="#services">
                تعرف على خدماتنا
              </a>
            </Button>
          </div>

          <div className="relative mt-16 animate-fade-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent pointer-events-none"></div>
            
          </div>
        </div>
      </div>
    </section>;
};