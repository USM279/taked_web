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
      "• Assistance in determining the suitable area for the license",
      "• Efficiently completing all government procedures",
      "Would you like to speak with one of our consultants for more details?",
    ],
  },
  {
    label: "Legal or visa/residency consultation",
    response: [
      "We provide comprehensive visa, residency, and legal consultation services:",
      "• Investor and company partner visas",
      "• Family and employee residency visas",
      "• Residency renewal and status adjustment services",
      "We can help you obtain the appropriate visa for your goals.",
    ],
  },
  {
    label: "Contact information",
    response: [
      "You can reach us through:",
      "📞 Phone: +971 56 433 1993",
      "📧 Email: info@takedgroup.com",
      "🏢 Address: Ground Floor, Al Mamzar Centre - Deira - Dubai",
      "⏰ Working Hours: Sunday - Thursday, 9:00 AM - 6:00 PM",
    ],
  },
];

// define new colors
const COLORS = {
  primary: "rgba(8, 47, 73, 1)",
  primaryLight: "rgba(8, 47, 73, 0.1)",
  primaryBorder: "rgba(8, 47, 73, 0.2)",
  secondary: "#f8f9fa",
  text: "#ffffff",
  accent: "#e9f0f5",
};

function TypingIndicator() {
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
        typing...
      </span>
    </div>
  );
}

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

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStart = () => {
    setStarted(true);
    setShowOptions(true);
  };

  const handleOption = (option: (typeof englishChatbotOptions)[0]) => {
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
      {/* chatbot icon */}
      {!open && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full w-14 h-14 bg-sky-950 hover:bg-sky-800 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}

      {/* chatbot window */}
      {open && (
        <div className="fixed bottom-6 left-6 z-50">
          <Card
            className="w-[360px] h-[500px] shadow-2xl rounded-2xl border border-slate-200 bg-white overflow-hidden animate-fade-in"
            dir="ltr"
          >
            <CardHeader className="bg-gradient-to-r from-sky-900 to-sky-700 text-white px-4 py-3 rounded-t-2xl relative z-10">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold tracking-wide">
                  Taked - Smart Assistant
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
                      msg.from === "bot" ? "text-left" : "text-right"
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
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}

                {!started && (
                  <Button
                    onClick={handleStart}
                    className="w-full bg-sky-900 text-white hover:bg-sky-800 mt-4 rounded-xl py-2 text-base"
                  >
                    Start Conversation
                  </Button>
                )}

                {showOptions && (
                  <div className="space-y-2 mt-2">
                    {englishChatbotOptions.map((option, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        onClick={() => handleOption(option)}
                        className="w-full text-left text-sm h-auto py-3 px-4 border-sky-950 hover:bg-sky-50 rounded-lg shadow-sm"
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
