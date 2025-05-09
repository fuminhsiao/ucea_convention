"use client";

import { useState,} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  const itemsPerPage = 3;
  const maxIndex = items.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  return (
    <div className="w-full py-12">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / itemsPerPage) * currentIndex}%)` }}
        >
          {items.map((item, index) => (
            <div
            key={index}
            className="w-full md:w-1/3 px-4 flex-shrink-0"
            style={{ minHeight: "300px" }}
          >
            <div className="h-full transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-6 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">{item.title}</h2>
                  <p className="text-black text-lg leading-relaxed">{item.description}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <a href={item.link} target={item.targetBlank ? "_blank" : "_self"}>
                    <button className="cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      </div>

      {items.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-blue-600 hover:text-blue-800 text-3xl transition-colors disabled:opacity-30"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="text-blue-600 hover:text-blue-800 text-3xl transition-colors disabled:opacity-30"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}
