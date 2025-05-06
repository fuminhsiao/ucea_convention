"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import storeLogo from "@/assets/ucea-storelogo.png";
import SectionWrapper from "../ui/general/SectionWrapper";

export default function ShopSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = products.length;

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleSlide = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(startIndex - itemsPerPage, 0)
        : Math.min(startIndex + itemsPerPage, totalItems - itemsPerPage);
    setStartIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (diff > 50) {
        handleSlide("right");
      } else if (diff < -50) {
        handleSlide("left");
      }
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-[#f6f6f6] py-28">
      <div className="mb-12 flex justify-center">
        <Image
          src={storeLogo}
          alt="UCEA Store Logo"
          width={300}
          height={80}
          sizes="(max-width: 768px) 80vw, 300px"
          className="object-contain"
        />
      </div>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Button - hidden on small screens */}
        <button
          onClick={() => handleSlide("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
        </button>

        {/* Product Grid */}
        <SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 md:mx-0">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col h-full "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={512}
                  height={192}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                  className="object-contain rounded mx-auto"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-4 line-clamp-2 h-[3em] leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{product.price}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition mt-4 inline-block"
                >
                  VIEW PRODUCT
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Right Button - hidden on small screens */}
        <button
          onClick={() => handleSlide("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
}
