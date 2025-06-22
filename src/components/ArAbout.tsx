import { Building, Users, Shield } from "lucide-react";

export const ArAbout = () => {
  return (
    <section id="about" className="bg-gray-50 py-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن شركة متخصصة في تقديم حلول متكاملة للأعمال في الإمارات. نساعد
            رواد الأعمال والمستثمرين على تحقيق أهدافهم بكل ثقة وسهولة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-sky-900 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              +15 عام من الخبرة
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نمتلك خبرة عميقة في السوق الإماراتي وفهم شامل للمتطلبات القانونية
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-sky-900 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">فريق محترف</h3>
            <p className="text-gray-600 leading-relaxed">
              فريق متخصص يقدم حلولاً مخصصة تناسب احتياجات كل عميل
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-sky-900 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              موثوقية تامة
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نلتزم بأعلى معايير الجودة والشفافية في جميع خدماتنا
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
