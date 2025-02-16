import { Building, Users, Shield } from "lucide-react";
export const About = () => {
  return <section id="about" className="bg-white py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">مـــــن نـــــحـــــن</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">نحن شركة متخصصة في تقديم حلول متكاملة للأعمال في الإمارات
نساعد رواد الأعمال والمستثمرين على تحقيق أهدافهم بكل ثقة وسهولة</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">+15 عام من الخبرة </h3>
            <p className="text-gray-600">نمتلك خبرة عميقة في السوق الإماراتي وفهم شامل للمتطلبات القانونية</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">فريق محترف</h3>
            <p className="text-gray-600">فريق متخصص يقدم حلولاً مخصصة تناسب احتياجات كل عميل</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">موثوقية تامة</h3>
            <p className="text-gray-600">نلتزم بأعلى معايير الجودة والشفافية في جميع خدماتنا</p>
          </div>
        </div>
      </div>
    </section>;
};