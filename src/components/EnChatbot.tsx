import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

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
      "⏰ Working hours: Sunday - Thursday, 9:00 AM - 6:00 PM",
    ],
  },
];

export function EnChatbot() {
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
        text: "Welcome to Taked! 👋 How can we help you today?",
      },
    ]);
  }, []);

  const handleStart = () => {
    setStarted(true);
    setShowOptions(true);
  };

  const handleOption = async (option: (typeof englishChatbotOptions)[0]) => {
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
    <div className="fixed bottom-6 left-6 z-50">
      {!open ? (
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full w-14 h-14 bg-sky-950 hover:bg-sky-800 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <Card className="w-80 h-96 shadow-xl" dir="ltr">
          <CardHeader className="bg-sky-950 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Taked - Smart Assistant</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-full overflow-auto">
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm ${
                    msg.from === "bot" ? "text-left" : "text-right"
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
                  Start Conversation
                </Button>
              )}

              {showOptions && (
                <div className="space-y-2">
                  {englishChatbotOptions.map((option, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      onClick={() => handleOption(option)}
                      className="w-full text-left text-sm h-auto p-2"
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
