"use client";

import { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabbedSwitchProps {
  tabs: Tab[];
}

export default function TabbedSwitch({ tabs }: TabbedSwitchProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white border border-blue-900 rounded-xl relative w-full">
      <div className="absolute -top-6 -left-[1.5px] flex z-10">
        {tabs.map((tab, index) => {
          const isFirst = index === 0;
          const isLast = index === tabs.length - 1;
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-4  border-blue-900 -mb-px text-xl 
                ${isFirst ? "rounded-tl-lg" : ""}
                ${isLast ? "rounded-tr-lg rounded-br-lg" : ""}
                ${isActive ? "bg-yellow-400 text-blue-900" : "bg-[#7e7e7e] text-white"}`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="p-10 pt-24 text-black space-y-4 text-xl w-full">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
