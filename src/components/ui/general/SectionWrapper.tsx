import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  center?: boolean; // 是否置中內容
  className?: string; // 額外 Tailwind class
  style?: React.CSSProperties; // 新增 inline style 支援
}

export default function SectionWrapper({
  children,
  center = false,
  className = "",
  style = {},
}: SectionWrapperProps) {
  return (
    <section className={`pb-15 px-5 md:px-0 ${className}`} style={style}>
      <div
        className={`xl:w-[85%] mx-auto flex flex-col ${
          center ? "items-center" : "items-start"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
