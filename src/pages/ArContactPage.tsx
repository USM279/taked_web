import { useEffect, useState } from "react";
import { ArNavbar } from "../components/ArNavbar";
import { ArFooter } from "../components/ArFooter";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Users,
  CheckCircle,
  AlertCircle,
  Star,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_TYPING_SPEED,
  TypingAnimation,
} from "../components/TypingAnimation";

export const ArContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Field validation errors
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation functions
  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const internationalPhoneRegex = /^\+[1-9]\d{6,14}$/;
    const localPhoneRegex = /^\d{7,11}$/;
    return (
      internationalPhoneRegex.test(cleanPhone) ||
      localPhoneRegex.test(cleanPhone)
    );
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 5;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 50;
  };

  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10 && message.trim().length <= 500;
  };

  const validateField = (fieldName: string, value: string) => {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          error = "يرجى تعبئة الاسم";
        } else if (!validateName(value)) {
          error = "الاسم يجب أن يكون من 2-50 حرف";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "يرجى تعبئة البريد الإلكتروني";
        } else if (!validateEmail(value)) {
          error = "يرجى إدخال بريد إلكتروني صحيح";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "يرجى تعبئة رقم الهاتف";
        } else if (!validatePhoneNumber(value)) {
          error = "يرجى إدخال رقم هاتف صحيح";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "يرجى كتابة رسالتك";
        } else if (!validateMessage(value)) {
          error = "الرسالة يجب أن تكون من 10-500 حرف";
        }
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.title = "تواصل معنا - تأكيد";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return; // Don't submit if there are validation errors
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setFieldErrors({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      info: <div dir="ltr">+971 56 433 1993</div>,
      description: "متاح على مدار الساعة لاستقبال استفساراتكم",
      action: "tel:+971564331993",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      info: <div dir="ltr">+971 56 433 1993</div>,
      description: "تواصل سريع ومباشر عبر واتساب",
      action: "https://wa.me/971564331993",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      info: "info@takedgroup.com",
      description: "راسلنا وسنرد عليك خلال ساعة واحدة",
      action: "mailto:info@takedgroup.com",
      color: "from-blue-50 to-sky-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "زورنا",
      info: "دبي، الإمارات",
      description: "مكاتبنا في موقع استراتيجي في قلب دبي",
      action: "#",
      color: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
    },
  ];

  const workingHours = [
    { day: "السبت - الأربعاء", hours: "9:00 ص - 6:00 م" },
    { day: "الخميس", hours: "9:00 ص - 5:00 م" },
    { day: "الجمعة", hours: "مغلق" },
  ];

  const services = [
    "تأسيس الشركات والرخص التجارية",
    "التأشيرات والإقامات",
    "تجديد الإقامة والتأشيرات",
    "الهوية الإماراتية",
    "عقود الإيجار",
    "التراخيص المهنية",
    "خدمات وزارة الموارد البشرية",
    "تصديق الوثائق والترجمة",
    "خدمات كاتب العدل",
    "التأمين الطبي",
    "الاستشارات القانونية",
    "خدمة أخرى",
  ];

  const faqItems = [
    {
      question: "كم يستغرق إنجاز المعاملات؟",
      answer:
        "تختلف مدة الإنجاز حسب نوع الخدمة، لكن معظم خدماتنا تكتمل خلال 1-7 أيام عمل.",
    },
    {
      question: "هل تقدمون ضمان على خدماتكم؟",
      answer:
        "نعم، نقدم ضمان 100% على جميع خدماتنا، وفي حالة عدم النجاح نسترد المبلغ كاملاً.",
    },
    {
      question: "هل يمكنني تتبع حالة معاملتي؟",
      answer:
        "بالطبع! نوفر خدمة تتبع مباشرة ونرسل لك تحديثات دورية عن حالة معاملتك.",
    },
    {
      question: "هل تقدمون استشارات مجانية؟",
      answer:
        "نعم، نقدم استشارة مجانية أولية لجميع عملائنا لمساعدتهم في اختيار الخدمة المناسبة.",
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
                text="تواصل معنا تأكيد"
                highlightedWord="تواصل معنا"
                direction="rtl"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              نحن هنا لمساعدتك في كل خطوة من رحلتك التجارية. تواصل معنا اليوم
              ودع خبراءنا يرشدوك نحو النجاح.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  &lt; 1hr
                </div>
                <div className="text-gray-600">متوسط وقت الرد</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">دعم مستمر</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              طرق التواصل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر الطريقة الأنسب لك للتواصل معنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`block p-8 bg-gradient-to-br ${method.color} rounded-2xl hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <method.icon className={`${method.iconColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {method.info}
                  </p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                املأ النموذج أدناه وسنتواصل معك خلال ساعة واحدة
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField("name", e.target.value)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                        fieldErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField("phone", e.target.value)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 text-left ${
                        fieldErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+971 50 123 4567"
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={(e) => validateField("email", e.target.value)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                      fieldErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    الخدمة المطلوبة
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950"
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={(e) => validateField("message", e.target.value)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 resize-none ${
                      fieldErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-950 text-white px-8 py-4 rounded-lg hover:bg-sky-800 transition flex items-center justify-center gap-3 text-lg font-medium disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      جارٍ الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span className="text-green-800">
                      تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                معلومات التواصل
              </h2>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-primary w-6 h-6" />
                  أوقات العمل
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.day}
                      </span>
                      <span className="text-primary font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" />
                  موقعنا
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>العنوان:</strong> الطابق الأرضي، مركز الممزر - ديرة
                    - دبي - الإمارات العربية المتحدة
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Headphones className="text-red-600 w-6 h-6" />
                  رقم التواصل
                </h3>

                <a
                  href="tel:+971564331993"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-sky-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition text-lg font-bold"
                >
                  <Phone className="w-6 h-6" />
                  اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً من عملائنا
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <AlertCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pr-9">
                  {item.answer}
                </p>
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
