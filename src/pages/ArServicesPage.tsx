import { useEffect } from "react";
import { ArNavbar } from "../components/ArNavbar";
import { ArFooter } from "../components/ArFooter";
import {
  Briefcase,
  Users,
  FileText,
  Plane,
  Building,
  Scale,
  UserCheck,
  DollarSign,
  FileSignature,
  ShieldCheck,
  HeartPulse,
  ScrollText,
  Clock,
  CheckCircle,
  Star,
  PhoneCall,
  Award,
  Target,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/TypingAnimation";

export const ArServicesPage = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.title = "خدماتنا - تأكيد";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "خدمات دائرة التنمية الاقتصادية",
      description: "تأسيس الشركات وإتمام معاملات الرخص التجارية بكل سهولة ويسر",
      details: [
        "تأسيس الشركات ذات المسؤولية المحدودة",
        "إصدار الرخص التجارية والصناعية والمهنية",
        "تجديد وتعديل الرخص التجارية القائمة",
        "إضافة وحذف الأنشطة التجارية حسب الحاجة",
        "خدمات المناطق الحرة (جافزا، جيبل علي، إلخ)",
        "تغيير الشكل القانوني للشركات",
        "نقل ملكية الشركات والرخص",
        "خدمات الشركات العقارية والاستثمارية",
      ],
      processTime: "3-7 أيام عمل",
      price: "ابتداءً من 2,500 درهم",
      warranty: "ضمان مدى الحياة على جميع الخدمات",
    },
    {
      icon: Plane,
      title: "خدمات التأشيرات الشاملة",
      description: "إصدار وتجديد جميع أنواع التأشيرات بأسرع الطرق المعتمدة",
      details: [
        "تأشيرات العمل للمواطنين والمقيمين",
        "تأشيرات الزيارة السياحية قصيرة وطويلة المدى",
        "تأشيرات الاستثمار ورجال الأعمال",
        "تجديد جميع أنواع التأشيرات",
        "تأشيرات الخروج والعودة متعددة الرحلات",
        "تأشيرات المرافقين والخدم المنزليين",
        "تأشيرات الطلاب والتدريب",
        "تأشيرات الإقامة الذهبية",
      ],
      processTime: "1-5 أيام عمل",
      price: "ابتداءً من 500 درهم",
      warranty: "ضمان الحصول على التأشيرة أو استرداد المبلغ",
    },
    {
      icon: Building,
      title: "خدمات عقود الإيجار المتكاملة",
      description: "توثيق وتجديد عقود الإيجار وفق أحدث الأنظمة المعتمدة",
      details: [
        "توثيق عقود الإيجار السكنية والتجارية",
        "تجديد عقود الإيجار المنتهية الصلاحية",
        "تعديل بنود العقود الإيجارية",
        "إلغاء عقود الإيجار رسمياً",
        "استخراج شهادات الإيجار للمؤسسات",
        "حل النزاعات الإيجارية ودياً",
        "عقود الإيجار للمناطق الحرة",
        "استشارات قانونية للعقود الإيجارية",
      ],
      processTime: "1-3 أيام عمل",
      price: "ابتداءً من 300 درهم",
      warranty: "متابعة مجانية لمدة 6 أشهر",
    },
    {
      icon: UserCheck,
      title: "خدمات الهوية الإماراتية المتقدمة",
      description: "إصدار وتجديد الهوية الإماراتية بأحدث التقنيات",
      details: [
        "إصدار الهوية الإماراتية للمقيمين الجدد",
        "تجديد الهوية الإماراتية المنتهية",
        "استبدال الهوية التالفة أو المفقودة",
        "تحديث البيانات الشخصية والعنوان",
        "الحصول على بطاقة هوية عاجلة",
        "خدمات كبار السن وذوي الاحتياجات الخاصة",
        "ربط الهوية بالخدمات الرقمية",
        "استخراج بدل فاقد للهوية",
      ],
      processTime: "2-7 أيام عمل",
      price: "ابتداءً من 200 درهم",
      warranty: "ضمان صحة البيانات المدخلة",
    },
    {
      icon: FileText,
      title: "خدمات الإقامات الشاملة",
      description: "إجراءات إصدار وتجديد الإقامة بجميع أنواعها وفئاتها",
      details: [
        "إصدار إقامات العمل والاستثمار",
        "تجديد الإقامات المنتهية الصلاحية",
        "إقامات المرافقين والعائلة",
        "تغيير كفيل الإقامة (نقل الكفالة)",
        "إلغاء الإقامات رسمياً",
        "خدمات الإقامة الذهبية للمستثمرين",
        "إقامات المتقاعدين",
        "إقامات الطلاب والباحثين",
      ],
      processTime: "3-10 أيام عمل",
      price: "ابتداءً من 1,000 درهم",
      warranty: "متابعة مجانية حتى انتهاء الإجراءات",
    },
    {
      icon: Scale,
      title: "الخدمات القانونية والتراخيص المهنية",
      description: "إجراءات التراخيص المتخصصة والعقود القانونية",
      details: [
        "صياغة العقود التجارية والقانونية",
        "التراخيص المهنية المتخصصة",
        "تسجيل العلامات التجارية وحقوق الملكية",
        "الاستشارات القانونية للشركات",
        "تراخيص المطاعم والمقاهي والفنادق",
        "التراخيص الطبية والتعليمية",
        "تراخيص الأنشطة الرياضية والترفيهية",
        "التراخيص البيئية والصناعية",
      ],
      processTime: "5-15 يوم عمل",
      price: "ابتداءً من 1,500 درهم",
      warranty: "ضمان قانوني على جميع العقود",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ArNavbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-blue-50"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-heading font-bold text-gray-900 mb-6">
              <TypingAnimation
                text="خدماتنا المتكاملة"
                highlightedWord="خدماتنا"
                direction="rtl"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              في <span className="font-bold text-primary">تأكيد</span>، نفخر
              بتقديم أشمل باقة من الخدمات الحكومية والتجارية في دولة الإمارات
              العربية المتحدة. بخبرة تمتد لأكثر من 15 عاماً، نضمن لعملائنا إنجاز
              جميع معاملاتهم بأعلى مستويات الجودة والكفاءة.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+15</div>
                <div className="text-gray-600">عام من الخبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+10K</div>
                <div className="text-gray-600">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+50K</div>
                <div className="text-gray-600">معاملة منجزة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">معدل النجاح</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار تأكيد؟
            </h2>
            <p className="text-xl text-gray-600">
              المميزات التي تجعلنا الخيار الأول لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
              <Clock className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                سرعة في الإنجاز
              </h3>
              <p className="text-gray-600">
                نضمن أسرع الأوقات الممكنة في إنجاز جميع المعاملات دون تأخير
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ضمان النتائج
              </h3>
              <p className="text-gray-600">
                نضمن نجاح جميع المعاملات 100% أو استرداد كامل للمبلغ
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl">
              <Star className="text-yellow-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                خبرة عريقة
              </h3>
              <p className="text-gray-600">
                أكثر من 15 عام خبرة عميقة في السوق الإماراتي وقوانينه
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
              <PhoneCall className="text-purple-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                دعم مستمر
              </h3>
              <p className="text-gray-600">
                فريق دعم متخصص متاح على مدار الساعة لخدمتكم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              خدماتنا التفصيلية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعتنا الشاملة من الخدمات المصممة لتلبية جميع احتياجاتك
              التجارية والشخصية
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="p-10">
                  <div className="flex items-start gap-8 mb-8">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-2xl">
                      <service.icon className="text-primary w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* What we offer */}
                    <div className="lg:col-span-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Target className="text-primary w-6 h-6" />
                        ما نقدمه لك:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl text-center">
                        <Clock className="text-primary w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">
                          مدة الإنجاز
                        </h5>
                        <p className="text-lg font-semibold text-primary">
                          {service.processTime}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
                        <DollarSign className="text-green-600 w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">
                          الأسعار
                        </h5>
                        <p className="text-lg font-semibold text-green-600">
                          {service.price}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl text-center">
                        <Award className="text-yellow-600 w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">الضمان</h5>
                        <p className="text-sm font-medium text-yellow-700">
                          {service.warranty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          {/* Additional Contact Info */}
          <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">هل أنت مستعد للبدء؟</h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف العملاء الراضين الذين اختاروا تأكيد لخدماتهم
              الحكومية في الإمارات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <a
                href="tel:+971564331993"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-sky-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition text-lg font-bold"
              >
                <Phone className="w-6 h-6" />
                اتصل الآن
              </a>
              <a
                href="https://wa.me/971564331993?text=مرحباً%2C%20كيف%20يمكننا%20مساعدتك%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-2 border-green-400 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg font-bold"
              >
                <MessageCircle className="w-6 h-6" />
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      <ArFooter />
    </div>
  );
};
