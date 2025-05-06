import React from "react";

interface PageTitleProps {
  title: string;
  center?: boolean; // 可選：是否置中
}

export default function PageTitle({ title, center = false }: PageTitleProps) {
  return (
    <div
      className={`xl:w-[85%] mx-auto flex flex-col pt-10 ${
        center ? "items-center" : "items-start"
      }`}
    >
      <h1 className="text-6xl font-bold text-gray-800 mb-6">{title}</h1>
    </div>
  );
}
