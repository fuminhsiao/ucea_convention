"use client";

import { useState } from "react";

interface CardItem {
  title: string;
  description: string;
  link: string;
  targetBlank?: boolean;
}

interface SectionWithCardsProps {
  items: CardItem[];
}

export default function SectionWithCards({ items }: SectionWithCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= items.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(items.length - 2, 0) : prev - 2));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 2);

  return (
    <div className="py-12 w-full">
      <div className=" mx-auto flex flex-wrap justify-between gap-8">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 w-full md:w-[45%] flex flex-col justify-between shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-black">{item.title}</h2>
              <p className="text-black text-2xl leading-relaxed">{item.description}</p>
            </div>
            <div className="flex justify-end mt-6">
              <a href={item.link} target={item.targetBlank ? "_blank" : "_self"}>
                <button className="cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {items.length > 2 && (
        <div className="flex justify-center items-center mt-8 space-x-6">
          <button
            onClick={prevSlide}
            className="text-blue-600 hover:text-blue-800 text-3xl transition-colors"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="text-blue-600 hover:text-blue-800 text-3xl transition-colors"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
