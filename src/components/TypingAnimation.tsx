import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  highlightedWord: string;
  highlightClass?: string;
  speed?: number;
  direction?: "rtl" | "ltr";
}
export const DEFAULT_TYPING_SPEED = 50;
export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  highlightedWord,
  highlightClass = "text-sky-950",
  speed = DEFAULT_TYPING_SPEED,
  direction = "rtl",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const renderText = () => {
    const words = displayedText.split(" ");
    return words.map((word, i) => {
      const cleanWord = word.replace(/[^A-Za-zأ-ي]/g, "");
      const isHighlight = cleanWord === highlightedWord;
      return (
        <span key={i} className={isHighlight ? highlightClass : ""}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <span dir={direction} className="whitespace-pre-wrap">
      {renderText()}
      {index < text.length && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-gray-800 ml-1 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
};
