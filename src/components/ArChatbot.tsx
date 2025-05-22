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
      "📞 الهاتف: ‪+971 56 433 1993‬",
      "📧 البريد الإلكتروني: ‪info@takedgroup.com‬",
      "🏢 العنوان: الطابق الأرضي، مركز الممزر - ديرة - دبي",
      "⏰ ساعات العمل: الأحد - الخميس، ‪9:00‬ صباحًا - ‪6:00‬ مساءً",
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
    const handleScroll = () => setShowChatIcon(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMessages([
      { from: "bot", text: "مرحبًا بك في تأكيد! 👋 كيف يمكننا مساعدتك اليوم؟" },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStart = () => {
    setStarted(true);
    setShowOptions(true);
  };

  const handleOption = (option: (typeof arabicChatbotOptions)[0]) => {
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
    <>
      {!open && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full w-14 h-14 bg-sky-950 hover:bg-sky-800 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card
            className="w-[360px] h-[500px] shadow-2xl rounded-2xl border border-slate-200 bg-white overflow-hidden animate-fade-in"
            dir="rtl"
          >
            <CardHeader className="bg-gradient-to-r from-sky-900 to-sky-700 text-white px-4 py-3 rounded-t-2xl relative z-10">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold tracking-wide">
                  تأكيد - المساعد الذكي
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 rounded-full relative z-20"
                  onClick={() => setOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 h-[calc(100%-60px)] overflow-y-auto bg-white">
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`text-sm ${
                      msg.from === "bot" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-xl max-w-[80%] whitespace-pre-line ${
                        msg.from === "bot"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-sky-950 text-white"
                      }`}
                    >
                      {msg.text.split("\n").map((line, index) => (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(
                                /(\+\d{1,3}\s*\d[\d\s-]*)/g,
                                '<span dir="ltr">$1</span>'
                              )
                              .replace(
                                /(info@takedgroup\.com)/g,
                                '<span dir="ltr">$1</span>'
                              )
                              .replace(
                                /(\d{1,2}:\d{2}\s*(صباحًا|مساءً))/g,
                                '<span dir="ltr">$1</span>'
                              ),
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
                {!started && (
                  <Button
                    onClick={handleStart}
                    className="w-full bg-sky-900 text-white hover:bg-sky-800 mt-4 rounded-xl py-2 text-base"
                  >
                    ابدأ المحادثة
                  </Button>
                )}
                {showOptions && (
                  <div className="space-y-2 mt-2">
                    {arabicChatbotOptions.map((option, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        onClick={() => handleOption(option)}
                        className="w-full text-right text-sm h-auto py-3 px-4 border-sky-950 hover:bg-sky-50 rounded-lg shadow-sm"
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
        </div>
      )}
    </>
  );
}
