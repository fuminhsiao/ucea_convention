import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string; // 可選：副標題
  center?: boolean;  // 可選：是否置中
}

export default function PageTitle({
  title,
  subtitle = "",
  center = false,
}: PageTitleProps) {
  return (
    <div
      className={`xl:w-[85%] mx-auto flex flex-col pt-10 ${
        center ? "items-center" : "items-start"
      }`}
    >
      <h1 className="text-6xl font-bold text-gray-800 mb-2">{title}</h1>
      <p
        className={`text-lg font-medium text-[#3366cc] mb-6 ${
          subtitle ? "opacity-100" : "opacity-0"
        }`}
      >
        {subtitle || "placeholder"}
      </p>
    </div>
  );
}
