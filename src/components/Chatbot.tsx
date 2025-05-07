import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";

// الردود الثابتة المعدة مسبقًا باللغة العربية
const arabicChatbotOptions = [
  {
    label: "أرغب بالحصول على رخصة تجارية",
    response: [
      "يسعدنا مساعدتك في استخراج الرخصة التجارية! نوفر خدمات متكاملة تشمل:",
      "• استشارة مجانية لاختيار النشاط التجاري المناسب",
      "• مساعدة في تحديد المنطقة المناسبة للرخصة (بر دبي، ديرة، المناطق الحرة)",
      "• إنهاء كافة الإجراءات الحكومية بكفاءة وسرعة",
      "هل ترغب في التواصل مع أحد مستشارينا للمزيد من التفاصيل؟",
    ],
  },
  {
    label: "استشارة قانونية أو حول التأشيرة والإقامة",
    response: [
      "نوفر خدمات شاملة للتأشيرات والإقامة والاستشارات القانونية، بما في ذلك:",
      "• تأشيرة المستثمر والشريك في شركة",
      "• تأشيرات الإقامة للعائلة والموظفين",
      "• خدمات تجديد الإقامة وتعديل الوضع",
      "• استشارات قانونية متعلقة بالإقامة والتأشيرات",
      "يمكننا مساعدتك في الحصول على التأشيرة أو الاستشارة المناسبة لأهدافك. هل لديك استفسار محدد؟",
    ],
  },
  {
    label: "معلومات التواصل",
    response: [
      "يمكنك التواصل معنا من خلال:",
      "📞 الهاتف: +971 56 433 1993",
      "📞 الهاتف: +971 56 433 1990",
      "📧 البريد الإلكتروني: info@takedgroup.com",
      "🏢 العنوان: الطابق الأرضي، مركز الممزر - ديرة - دبي - الإمارات العربية المتحدة",
      "📱 واتساب: +971 56 433 1993",
      "⏰ ساعات العمل: الأحد - الخميس، 9:00 صباحًا - 6:00 مساءً",
    ],
  },
];

// الردود الثابتة المعدة مسبقًا باللغة الإنجليزية
const englishChatbotOptions = [
  {
    label: "I want to get a business license",
    response: [
      "We are happy to help you obtain a business license! We provide comprehensive services including:",
      "• Free consultation to select the appropriate business activity",
      "• Assistance in determining the suitable area for the license (Bur Dubai, Deira, Free Zones)",
      "• Efficiently completing all government procedures",
      "Would you like to speak with one of our consultants for more details?",
    ],
  },
  {
    label: "Legal or visa/residency consultation",
    response: [
      "We provide comprehensive visa, residency, and legal consultation services, including:",
      "• Investor and company partner visas",
      "• Family and employee residency visas",
      "• Residency renewal and status adjustment services",
      "• Legal consultations related to residency and visas",
      "We can help you obtain the appropriate visa or consultation for your goals. Do you have a specific inquiry?",
    ],
  },
  {
    label: "Contact information",
    response: [
      "You can contact us through:",
      "📞 Phone: +971 56 433 1993",
      "📞 Phone: +971 56 433 1990",
      "📧 Email: info@takedgroup.com",
      "🏢 Address: Ground Floor, Al Mamzar Centre - Deira - Dubai - UAE",
      "📱 WhatsApp: +971 56 433 1993",
      "⏰ Working hours: Sunday - Thursday, 9:00 AM - 6:00 PM",
    ],
  },
];

// تعريف الألوان الجديدة
const COLORS = {
  primary: "rgba(8, 47, 73, 1)",
  primaryLight: "rgba(8, 47, 73, 0.1)",
  primaryBorder: "rgba(8, 47, 73, 0.2)",
  secondary: "#f8f9fa",
  text: "#ffffff",
  accent: "#e9f0f5",
};

function TypingIndicator({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="flex items-center gap-2 mt-2 animate-fade-in">
      <span
        className="block w-2 h-2 rounded-full animate-bounce [animation-delay:0ms]"
        style={{ backgroundColor: COLORS.primary }}
      ></span>
      <span
        className="block w-2 h-2 rounded-full animate-bounce [animation-delay:150ms]"
        style={{ backgroundColor: COLORS.primary }}
      ></span>
      <span
        className="block w-2 h-2 rounded-full animate-bounce [animation-delay:300ms]"
        style={{ backgroundColor: COLORS.primary }}
      ></span>
      <span className="text-xs" style={{ color: COLORS.primary + "CC" }}>
        {isArabic ? "يكتب..." : "typing..."}
      </span>
    </div>
  );
}

export function Chatbot() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // استخدام خيارات الشات بوت بناءً على اللغة
  const chatbotOptions = isArabic
    ? arabicChatbotOptions
    : englishChatbotOptions;

  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ from: string; text: string }>
  >([]);
  const [showOptions, setShowOptions] = useState(false);
  const [typing, setTyping] = useState(false);

  // مرجع للمحتوى لاستخدامه في التمرير التلقائي
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // دالة التمرير إلى أسفل المحادثة
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // استدعاء دالة التمرير عند تغيير الرسائل أو حالة الكتابة
  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  // إعادة تعيين الرسائل عند تغيير اللغة
  useEffect(() => {
    // إعادة تعيين الشات بوت عند تغيير اللغة
    setMessages([
      {
        from: "bot",
        text: isArabic
          ? "مرحبًا بك في تأكيد! 👋 كيف يمكننا مساعدتك اليوم؟"
          : "Welcome to Taked! 👋 How can we help you today?",
      },
    ]);
    setStarted(false);
    setShowOptions(false);
    setTyping(false);
  }, [i18n.language]);

  // عند بدء المحادثة
  const handleStart = () => {
    setStarted(true);
    setShowOptions(true);
  };

  // عند اختيار خيار - تم تحديثها لاستخدام الردود الثابتة مباشرة
  const handleOption = async (option: (typeof chatbotOptions)[0]) => {
    setMessages((msgs) => [...msgs, { from: "user", text: option.label }]);
    setShowOptions(false);
    setTyping(true);

    // محاكاة وقت الاستجابة
    setTimeout(() => {
      setTyping(false);
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: option.response.join("\n") },
      ]);
      setShowOptions(true);
    }, 1500);
  };

  // إغلاق الشات
  const handleClose = () => {
    setOpen(false);
    setStarted(false);
    setMessages([
      {
        from: "bot",
        text: isArabic
          ? "مرحبًا بك في تأكيد! 👋 كيف يمكننا مساعدتك اليوم؟"
          : "Welcome to Taked! 👋 How can we help you today?",
      },
    ]);
    setShowOptions(false);
    setTyping(false);
  };

  return (
    <>
      {/* ستايلات موشن مخصصة */}
      <style>{`
        @keyframes chatbot-fade-in {
          from { opacity: 0; transform: scale(0.85) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .chatbot-animate-in {
          animation: chatbot-fade-in 0.35s cubic-bezier(.4,1.3,.6,1) both;
        }
        @keyframes chatbot-msg-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chatbot-msg-in {
          animation: chatbot-msg-in 0.4s cubic-bezier(.4,1.3,.6,1) both;
        }
        .chatbot-bounce {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .chatbot-bounce:hover {
          box-shadow: 0 0 0 4px ${COLORS.primaryLight}, 0 4px 24px 0 ${COLORS.primaryBorder};
          transform: scale(1.08) rotate(-6deg);
        }
        /* تعديل طريقة عرض أرقام الهواتف بحيث تكون من اليمين لليسار */
        .phone-number {
          direction: ltr;
          unicode-bidi: bidi-override;
          text-align: right;
        }
      `}</style>
      {/* أيقونة الشات بوت */}
      <button
        className="fixed z-50 bottom-6 right-6 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center chatbot-bounce focus:outline-none"
        style={{
          backgroundColor: COLORS.primary,
          boxShadow: `0 4px 24px 0 ${COLORS.primaryBorder}`,
        }}
        onClick={() => setOpen(true)}
        aria-label={isArabic ? "افتح الشات بوت" : "Open chatbot"}
      >
        <MessageCircle size={28} />
      </button>

      {/* نافذة الشات بوت */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 max-w-xs w-[350px] sm:w-[350px] chatbot-animate-in">
          <Card className="shadow-2xl border-0">
            <CardHeader
              className="flex flex-row items-center justify-between text-white rounded-t-lg py-2 px-3"
              style={{ backgroundColor: COLORS.primary }}
            >
              <CardTitle className="text-base font-bold tracking-tight">
                {isArabic ? "المساعد الذكي من تأكيد" : "Taked AI Bot"}
              </CardTitle>
              <button
                className="text-white hover:opacity-70 transition"
                onClick={handleClose}
                aria-label={isArabic ? "إغلاق الشات" : "Close chat"}
              >
                <X size={20} />
              </button>
            </CardHeader>
            <CardContent className="bg-white min-h-[220px] max-h-[350px] overflow-y-auto flex flex-col gap-2 py-3 px-3">
              {/* الرسائل */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "bot" ? "justify-start" : "justify-end"
                  } chatbot-msg-in`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`rounded-xl px-3 py-1.5 text-xs shadow-sm max-w-[85%] whitespace-pre-line border`}
                    style={{
                      backgroundColor:
                        msg.from === "bot" ? COLORS.accent : COLORS.primary,
                      color: msg.from === "bot" ? COLORS.primary : COLORS.text,
                      borderColor:
                        msg.from === "bot"
                          ? COLORS.primaryBorder
                          : "transparent",
                    }}
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {/* تنسيق خاص للأرقام في رسائل البوت */}
                    {msg.from === "bot"
                      ? msg.text.split("\n").map((line, index) => {
                          // التحقق إذا كان السطر يحتوي على رقم هاتف أو واتساب
                          const hasPhone =
                            (isArabic &&
                              (line.includes("الهاتف:") ||
                                line.includes("واتساب:"))) ||
                            (!isArabic &&
                              (line.includes("Phone:") ||
                                line.includes("WhatsApp:")));

                          return hasPhone ? (
                            <div key={index} dir={isArabic ? "rtl" : "ltr"}>
                              {line.split(":")[0] + ": "}
                              <span className="phone-number">
                                {line.split(":")[1]}
                              </span>
                            </div>
                          ) : (
                            <div key={index}>{line}</div>
                          );
                        })
                      : msg.text}
                  </div>
                </div>
              ))}

              {/* مؤشر الكتابة */}
              {typing && <TypingIndicator isArabic={isArabic} />}

              {/* عنصر غير مرئي للتمرير التلقائي */}
              <div ref={messagesEndRef} />

              {/* زر بدء المحادثة */}
              {!started && !typing && (
                <div
                  className="flex justify-center mt-4 chatbot-msg-in"
                  style={{ animationDelay: `${messages.length * 80}ms` }}
                >
                  <Button
                    className="text-primary font-bold px-5 py-1.5 text-xs rounded-full shadow hover:opacity-90"
                    style={{ backgroundColor: COLORS.accent }}
                    onClick={handleStart}
                  >
                    {isArabic ? "بدء المحادثة" : "Start Chat"}
                  </Button>
                </div>
              )}

              {/* الخيارات */}
              {started && showOptions && !typing && (
                <div
                  className="flex flex-col gap-1.5 mt-3 chatbot-msg-in"
                  style={{ animationDelay: `${(messages.length + 1) * 80}ms` }}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {chatbotOptions.map((option) => (
                    <Button
                      key={option.label}
                      variant="outline"
                      className="justify-start text-xs py-1.5 hover:opacity-80"
                      style={{
                        borderColor: COLORS.primary,
                        color: COLORS.primary,
                      }}
                      onClick={() => handleOption(option)}
                      disabled={typing}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
