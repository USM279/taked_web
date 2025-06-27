import { useEffect, useState } from "react";
import { ArNavbar } from "../components/ArNavbar";
import { ArFooter } from "../components/ArFooter";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Building,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Star,
  Clock,
  Shield,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Eye,
  Zap,
  Globe,
  UserCheck,
  MessageCircle,
} from "lucide-react";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/motions/TypingAnimation";
import { CountingNumber } from "@/components/motions/counting-number";

export const ArAboutPage = () => {
  const [activeYear, setActiveYear] = useState(2025);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.title = "من نحن - تأكيد";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const timeline = [
    {
      year: 2011,
      title: "تأسيس الشركة",
      description:
        "تأسست تأكيد برؤية تبسيط المعاملات الحكومية في دولة الإمارات",
    },
    {
      year: 2012,
      title: "توسيع الخدمات",
      description: "توسعنا في خدماتنا لتشمل خدمات التأشيرات والتراخيص التجارية",
    },
    {
      year: 2016,
      title: "التحول الرقمي",
      description: "تطبيق أحدث التقنيات الرقمية لتعزيز تجربة العملاء",
    },
    {
      year: 2020,
      title: "الريادة في السوق",
      description:
        "أصبحنا إحدى الشركات الرائدة في الخدمات الحكومية في الإمارات",
    },
    {
      year: 2025,
      title: "النمو المستدام",
      description: "نواصل رحلتنا نحو الابتكار والتميز في خدمة العملاء",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "التميز",
      description:
        "نسعى للكمال في كل معاملة نتعامل معها، لضمان أعلى معايير الجودة",
    },
    {
      icon: Shield,
      title: "الثقة",
      description:
        "نبني علاقات طويلة المدى مع عملائنا قائمة على الثقة والشفافية",
    },
    {
      icon: Zap,
      title: "السرعة",
      description: "نضمن الإنجاز في أقل وقت ممكن دون التنازل عن الجودة",
    },
    {
      icon: Handshake,
      title: "النزاهة",
      description: "نقوم بأعمالنا بصدق وشفافية كاملة",
    },
    {
      icon: HeartHandshake,
      title: "الاهتمام بالعملاء",
      description: "رضا العملاء هو أولويتنا القصوى ومقياس نجاحنا",
    },
    {
      icon: Lightbulb,
      title: "الابتكار",
      description: "نتبنى باستمرار أحدث التقنيات لتحسين خدماتنا",
    },
  ];

  // const team = [
  //   {
  //     name: "أحمد المنصوري",
  //     position: "الرئيس التنفيذي",
  //     experience: "+15 عام",
  //     specialty: "القيادة الاستراتيجية وتطوير الأعمال",
  //   },
  //   {
  //     name: "سارة الزهراء",
  //     position: "رئيسة العمليات",
  //     experience: "+12 عام",
  //     specialty: "العلاقات الحكومية وإدارة العمليات",
  //   },
  //   {
  //     name: "محمد الراشد",
  //     position: "مدير الخدمات القانونية",
  //     experience: "+10 أعوام",
  //     specialty: "القانون التجاري والتراخيص",
  //   },
  //   {
  //     name: "فاطمة النعيمي",
  //     position: "مديرة علاقات العملاء",
  //     experience: "+8 أعوام",
  //     specialty: "تجربة العملاء والدعم",
  //   },
  // ];

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
                text="من نحن تأكيد"
                highlightedWord="تأكيد"
                direction="rtl"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              لأكثر من 15 عاماً، كنا شريككم الموثوق في التنقل في المشهد التجاري
              الإماراتي. نحن نحول الإجراءات الحكومية المعقدة إلى حلول بسيطة
              وفعالة.
            </p>

            {/* Quick Stats */}
            <div className="text-sky-900 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
              <div className="text-center">
                <div
                  className="flex items-baseline justify-center gap-0.5"
                  dir="ltr"
                >
                  <span className="text-3xl font-bold">+</span>
                  <CountingNumber
                    number={15}
                    className="text-4xl md:text-5xl font-bold"
                  />
                </div>
                <p className="text-gray-600 mt-1">عام من التميّز</p>
              </div>

              <div className="text-center">
                <div
                  className="flex items-baseline justify-center gap-0.5"
                  dir="ltr"
                >
                  <span className="text-3xl font-bold">+</span>
                  <CountingNumber
                    number={10}
                    className="text-4xl md:text-5xl font-bold"
                  />
                  <span className="text-4xl font-bold">K</span>
                </div>
                <p className="text-gray-600 mt-1">عميل سعيد</p>
              </div>

              <div className="text-center">
                <div
                  className="flex items-baseline justify-center gap-0.5"
                  dir="ltr"
                >
                  <span className="text-3xl font-bold">+</span>
                  <CountingNumber
                    number={50}
                    className="text-4xl md:text-5xl font-bold"
                  />
                  <span className="text-4xl font-bold">K</span>
                </div>
                <p className="text-gray-600 mt-1">خدمة مكتملة</p>
              </div>

              <div className="text-center">
                <div
                  className="flex items-baseline justify-center gap-0.5"
                  dir="ltr"
                >
                  <CountingNumber
                    number={100}
                    className="text-4xl md:text-5xl font-bold"
                  />
                  <span className="text-3xl font-bold">%</span>
                </div>
                <p className="text-gray-600 mt-1">معدل النجاح</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  وُلدت <strong className="text-primary">تأكيد</strong> من رؤية
                  بسيطة ولكنها قوية: جعل الخدمات الحكومية في دولة الإمارات في
                  متناول الجميع وفعالة وخالية من المتاعب. ما بدأ كفريق صغير من
                  المهنيين المتفانين نما ليصبح واحداً من أكثر الأسماء الموثوقة
                  في الخدمات الحكومية عبر الإمارات.
                </p>
                <p>
                  على مر السنين، شهدنا التحول المذهل لدولة الإمارات إلى مركز
                  أعمال عالمي. كان لنا شرف أن نكون جزءاً من هذه الرحلة، مساعدين
                  آلاف رجال الأعمال والشركات والأفراد على التنقل في المشهد
                  التنظيمي بثقة وسهولة.
                </p>
                <p>
                  اليوم، نواصل الابتكار والتطور، نبقى دائماً في المقدمة
                  للتغييرات التنظيمية ونتبنى التقنيات الجديدة لخدمة عملائنا بشكل
                  أفضل. التزامنا يبقى كما هو: تقديم التميز في كل تفاعل وضمان
                  النجاح بنسبة 100% في كل معاملة.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-sky-200/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  لماذا نحن مختلفون
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      خبرة لا مثيل لها في الأنظمة الإماراتية
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      نتائج مضمونة أو سياسة استرداد كامل
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      دعم عملاء 24/7 بعدة لغات
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      نهج رقمي أولاً لمعالجة أسرع
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      أسعار شفافة بدون رسوم خفية
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              رحلتنا عبر الزمن
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف المحطات الرئيسية التي شكلت شركتنا وحددت التزامنا بالتميز
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12 overflow-x-auto">
              <div className="flex gap-4 min-w-max">
                {timeline.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`px-6 py-3 rounded-full transition ${
                      activeYear === item.year
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Item */}
            <div className="text-center">
              {timeline.map(
                (item) =>
                  activeYear === item.year && (
                    <div
                      key={item.year}
                      className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100"
                    >
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <Calendar className="text-primary w-8 h-8" />
                        <span className="text-4xl font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {item.title}
                      </h3>
                      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        {item.description}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المبادئ التي توجه كل قرار نتخذه وكل خدمة نقدمها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تعرف على فريقنا الخبير
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المهنيون وراء نجاحنا، المتفانون في تقديم خدمة استثنائية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8 text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-sky-200/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-primary w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.position}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                    <p className="leading-relaxed">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تواصل معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              هل أنت مستعد لبدء رحلتك التجارية في الإمارات؟ فريقنا هنا لمساعدتك
              في كل خطوة من الطريق
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
              <Phone className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">اتصل بنا</h3>
              <a
                href="tel:+971564331993"
                className="text-primary font-semibold text-lg hover:underline"
              >
                +971 56 433 1993
              </a>
              <p className="text-gray-600 mt-2">متاح 24/7</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <Mail className="text-green-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">راسلنا</h3>
              <a
                href="mailto:info@takedgroup.com"
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                info@takedgroup.com
              </a>
              <p className="text-gray-600 mt-2">رد خلال ساعة واحدة</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
              <MapPin className="text-purple-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">زرنا</h3>
              <p className="text-purple-600 font-semibold text-lg">
                دبي، الإمارات
              </p>
              <p className="text-gray-600 mt-2">موقع استراتيجي في قلب دبي</p>
            </div>
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
