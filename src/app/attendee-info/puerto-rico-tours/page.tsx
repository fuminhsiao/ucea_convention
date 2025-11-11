"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const tours = [
  { name: "Rainforest Visit", src: "https://ucea.org/photos/UCEA1762873081_Rainforest_Visit3.png" },
  { name: "Ron del Barrilito Rum Tasting Experience", src: "https://ucea.org/photos/UCEA1762873081_Ron_del_Barrilito_Rum_Tasting_Experience2.png" },
  { name: "Sunset Walk & Taste Tour", src: "https://ucea.org/photos/UCEA1762873081_Taste_Tour3.png" },
  { name: "Rainforest Visit", src: "https://ucea.org/photos/UCEA1762873080_Rainforest_Visit.png" },
  { name: "Discover Old San Juan", src: "https://ucea.org/photos/UCEA1762873079_Old_San_Juan.png" },
  { name: "Sunset Walk & Taste Tour", src: "https://ucea.org/photos/UCEA1762873079_Taste_Tour.png" },
  { name: "Discover Old San Juan", src: "https://ucea.org/photos/UCEA1762873079_Old_San_Juan2.png" },
  { name: "Discover Old San Juan", src: "https://ucea.org/photos/UCEA1762873079_Old_San_Juan2.jpg" },
  { name: "Ron del Barrilito Rum Tasting Experience", src: "https://ucea.org/photos/UCEA1762873079_Ron_del_Barrilito_Rum_Tasting_Experience.jpg" },
  { name: "Rainforest Visit", src: "https://ucea.org/photos/UCEA1762873079_Rainforest_Visit2.jpg" },
];

export default function PuertoRicoToursPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    setLoadedImages(new Array(tours.length).fill(false));
  }, []);

  const handleLoad = (i: number) => {
    setLoadedImages(prev => {
      const arr = [...prev];
      arr[i] = true;
      return arr;
    });
  };

  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Puerto Rico Tours & Excursions" />

      <SectionWrapper>
        <SectionContent>
          
          {/* 🔥 LEFT TEXT / RIGHT LOGO */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 mb-12">

            {/* LEFT TEXT */}
            <div className="md:w-2/3 space-y-4 text-lg">
              <p>
                Have some free time when you are in Puerto Rico? Want to tour Old Town San Juan, 
                take a rum tour, or visit the Rainforest?
              </p>

              <p>
                UCEA has partnered with <strong>Destination Puerto Rico</strong> to offer 
                a selection of guided tours for UCEA25 attendees. 
                Please note that tours have minimum and maximum participant requirements, 
                so book early!
              </p>

              <p>
                <strong>Transportation is provided</strong> and will depart from the{" "}
                <strong>Sheraton Puerto Rico Resort and Casino</strong>.
              </p>

              <p>Explore some of the experiences available to UCEA attendees:</p>

              {/* Button */}
              <a
                href="https://www.bookeo.com/UCEA_Annual_Convention"
                target="_blank"
                className="inline-block bg-[#1e3a8a] hover:bg-[#3355aa] transition text-white font-semibold px-6 py-3 rounded shadow-lg"
              >
                Book Your Tour
              </a>
            </div>

            {/* RIGHT LOGO */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img
                src="https://ucea.org/photos/UCEA1762548635_Destination_Puerto_Rico.png"
                alt="Destination Puerto Rico"
                className="max-w-[260px] h-auto opacity-90"
              />
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {tours.map((tour, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                onClick={() => setSelected(tour.src)}
              >
                {!loadedImages[i] && (
                  <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg" />
                )}

                <img
                  src={tour.src}
                  alt={tour.name}
                  onLoad={() => handleLoad(i)}
                  className={`rounded-lg w-full shadow-md transition duration-300 transform group-hover:scale-[1.03] ${
                    loadedImages[i] ? "block animate-fadeIn" : "hidden"
                  }`}
                />

                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {tour.name}
                </div>
              </div>
            ))}
          </div>

        </SectionContent>
      </SectionWrapper>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[85vh] rounded-lg shadow-xl animate-fadeIn"
          />
        </div>
      )}
    </div>
  );
}
