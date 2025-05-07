"use client";

import dynamic from "next/dynamic";
import Accordion from "@/components/ui/general/Accordion";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface LocationMapSectionProps {
  name: string;
  street: string;
  tel: string;
  transportOptions: AccordionItem[];
  mapCenter: { lat: number; lng: number };
  mapZoom: number;
}

const ClientMap = dynamic(() => import("./ClientMap"), { ssr: false });

export default function LocationMapSection({
  name,
  street,
  tel,
  transportOptions,
  mapCenter,
  mapZoom,
}: LocationMapSectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* 左側：地址與交通方式 */}
      <div className="md:w-1/2">
        <div className="text-2xl text-black mb-6 space-y-1">
          <p>{name}</p>
          <p>{street}</p>
          <p>
            Tel:{" "}
            <a href={`tel:${tel}`} className="text-blue-400 underline">
              {tel}
            </a>
          </p>
        </div>
        {transportOptions.map((item, index) => (
          <Accordion key={index} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>

      {/* 右側：動態載入地圖 */}
      <div className="md:w-1/2 h-96">
        <ClientMap center={mapCenter} zoom={mapZoom} address={`${name}, ${street}`} />
      </div>
    </div>
  );
}
