"use client";
import { useEffect, useState } from "react";

interface TypedSloganProps {
  slogans: string[];
  textClassName?: string; // 👈 可控制文字顏色
  cursorClassName?: string; // 👈 可控制游標顏色
}

export default function TypedSlogan({
  slogans,
  textClassName = "text-black", // 預設黑色（保留原本行為）
  cursorClassName = "bg-current", // 預設跟文字同色
}: TypedSloganProps) {
  const [lines, setLines] = useState<string[]>([""]);
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = slogans[sloganIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          updated[sloganIndex] =
            updated[sloganIndex] + currentLine[charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else if (sloganIndex < slogans.length - 1) {
      const delay = setTimeout(() => {
        setSloganIndex((prev) => prev + 1);
        setLines((prev) => [...prev, ""]);
        setCharIndex(0);
      }, 1000);

      return () => clearTimeout(delay);
    }
  }, [charIndex, sloganIndex, slogans]);

  return (
    <div
      className={`text-2xl md:text-3xl italic leading-relaxed font-[--font-playfair] space-y-2 ${textClassName}`}
    >
      {lines.map((line, index) => (
        <p key={index} className="whitespace-pre-line">
          {line}
          {index === sloganIndex && (
            <span
              className={`animate-pulse inline-block w-[10px] ml-1 h-6 align-middle ${cursorClassName}`}
            />
          )}
        </p>
      ))}
    </div>
  );
}