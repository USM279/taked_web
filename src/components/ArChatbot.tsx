import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const arabicChatbotOptions = [
  {
    label: "أرغب بالحصول على رخصة تجارية",
    response: [
      "يسعدنا مساعدتك في استخراج الرخصة التجارية! نوفر خدمات متكاملة تشمل:",
      "• استشارة مجانية لاختيار النشاط التجاري المناسب",
      "• مساعدة في تحديد المنطقة المناسبة للرخصة",
      "• إنهاء كافة الإجراءات الحكومية بكفاءة وسرعة",
      "هل ترغب في التواصل مع أحد مستشارينا للمزيد من التفاصيل؟",
    ],
  },
  {
    label: "استشارة قانونية أو حول التأشيرة والإقامة",
    response: [
      "نوفر خدمات شاملة للتأشيرات والإقامة والاستشارات القانونية",
      "• تأشيرة المستثمر والشريك في شركة",
      "• تأشيرات الإقامة للعائلة والموظفين",
      "• خدمات تجديد الإقامة وتعديل الوضع",
      "يمكننا مساعدتك في الحصول على التأشيرة المناسبة لأهدافك.",
    ],
  },
  {
    label: "معلومات التواصل",
    response: [
      "يمكنك التواصل معنا من خلال:",
      "📞 الهاتف: +971 56 433 1993",
      "📧 البريد الإلكتروني: info@takedgroup.com",
      "🏢 العنوان: الطابق الأرضي، مركز الممزر - ديرة - دبي",
      "⏰ ساعات العمل: الأحد - الخميس، 9:00 صباحًا - 6:00 مساءً",
    ],
  },
];

export function ArChatbot() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ from: string; text: string }>
  >([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowChatIcon(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "مرحبًا بك في تأكيد! 👋 كيف يمكننا مساعدتك اليوم؟",
      },
    ]);
  }, []);

  const handleStart = () => {
    setStarted(true);
    setShowOptions(true);
  };

  const handleOption = async (option: (typeof arabicChatbotOptions)[0]) => {
    setMessages((msgs) => [...msgs, { from: "user", text: option.label }]);
    setShowOptions(false);

    setTimeout(() => {
      option.response.forEach((line, index) => {
        setTimeout(() => {
          setMessages((msgs) => [...msgs, { from: "bot", text: line }]);
        }, index * 500);
      });
      setTimeout(
        () => setShowOptions(true),
        option.response.length * 500 + 500
      );
    }, 1000);
  };

  if (!showChatIcon) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full w-14 h-14 bg-sky-950 hover:bg-sky-800 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <Card
          className="w-80 h-96 shadow-xl bg-white border border-gray-200"
          dir="rtl"
        >
          <CardHeader className="bg-sky-950 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">تأكيد - المساعد الذكي</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-full overflow-auto bg-white">
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm ${
                    msg.from === "bot" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg max-w-[80%] ${
                      msg.from === "bot"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-sky-950 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {!started && (
                <Button onClick={handleStart} className="w-full bg-sky-950">
                  ابدأ المحادثة
                </Button>
              )}

              {showOptions && (
                <div className="space-y-2">
                  {arabicChatbotOptions.map((option, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      onClick={() => handleOption(option)}
                      className="w-full text-right text-sm h-auto p-2"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
