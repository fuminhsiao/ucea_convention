"use client";

interface SectionTitleProps {
  children: React.ReactNode;
  center?: boolean; // 可選：是否置中
  className?: string; // 可選：自定義 className
}

export default function SectionTitle({ children, center = false, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-4xl font-semibold mb-3 text-gray-800 leading-snug ${center ? "text-center" : "text-left"} ${className}`}
    >
      {children}
    </h2>
  );
}
