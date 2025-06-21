import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // milliseconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}
      {value}
      {isComplete && suffix}
    </span>
  );
};
