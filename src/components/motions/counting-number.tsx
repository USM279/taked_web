import React from "react";
import { CountingNumber as BaseNumber } from "@/components/animate-ui/text/counting-number";

interface Props {
  number: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number; // يقبل prop من المكوّن الأصلي
}

export const CountingNumber = ({
  number,
  prefix = "",
  suffix = "",
  className = "",
  duration,
}: Props) => {
  const AnimatedNumber = BaseNumber as unknown as React.FC<{
    number: number;
    duration?: number;
  }>;

  return (
    <span className={`inline-flex items-baseline gap-0.5 ${className}`}>
      {prefix && <span>{prefix}</span>}
      <AnimatedNumber number={number} duration={duration} />
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
