"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-300 transition-all duration-300">
      {/* Header */}
      <button
        className={`w-full flex justify-between items-center text-left py-5 transition-all duration-300 
        ${isOpen ? "text-xl font-semibold text-[#3366cc]" : "text-xl  text-[#000000] hover:text-[#3366cc]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
      </button>

      {/* Content with animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 text-base text-gray-700 leading-relaxed">
          <div className="[&>ul]:pl-6 [&>ul]:list-disc [&>li]:mb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
