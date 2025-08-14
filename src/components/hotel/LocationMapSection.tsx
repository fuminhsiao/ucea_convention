// components/hotel/LocationMapSection.tsx
"use client";

import dynamic from "next/dynamic";
import Accordion from "@/components/ui/general/Accordion";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface HotelInfo {
  name: string;
  street: string;
  tel?: string;
  lat: number;
  lng: number;
  isHeadquarter?: boolean;
}

interface LocationMapSectionProps {
  /** Back-compat: single primary hotel fields */
  name?: string;
  street?: string;
  tel?: string;

  /** New: pass multiple hotels to render pins and a list */
  hotels?: HotelInfo[];

  transportOptions: AccordionItem[];
  mapCenter: { lat: number; lng: number };
  mapZoom: number;
}

const ClientMap = dynamic(() => import("./ClientMap"), { ssr: false });

export default function LocationMapSection({
  name,
  street,
  tel,
  hotels = [],
  transportOptions,
  mapCenter,
  mapZoom,
}: LocationMapSectionProps) {
  const multiple = hotels && hotels.length > 0;

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left: addresses & transportation */}
      <div className="md:w-1/2">
        {multiple ? (
          <div className="mb-6">
            <div className="text-2xl text-black mb-3">Convention District Hotels</div>
            <ul className="space-y-3">
              {hotels.map((h, idx) => (
                <li key={idx} className="text-sm leading-6">
                  <p className="font-semibold">
                    {h.name} {h.isHeadquarter && (
                      <span className="ml-2 rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs align-middle">Headquarter Hotel</span>
                    )}
                  </p>
                  <p>{h.street}</p>
                  {h.tel && (
                    <p>
                      Tel: {" "}
                      <a href={`tel:${h.tel}`} className="text-blue-600 underline">
                        {h.tel}
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-2xl text-black mb-6 space-y-1">
            <p>{name}</p>
            <p>{street}</p>
            {tel && (
              <p>
                Tel: {" "}
                <a href={`tel:${tel}`} className="text-blue-600 underline">
                  {tel}
                </a>
              </p>
            )}
          </div>
        )}

        {transportOptions.map((item, index) => (
          <Accordion key={index} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>

      {/* Right: map */}
      <div className="md:w-1/2 h-96">
        <ClientMap
          center={mapCenter}
          zoom={mapZoom}
          address={multiple ? undefined : `${name}, ${street}`}
          markers={multiple ? hotels.map((h) => ({
            position: { lat: h.lat, lng: h.lng },
            label: `${h.name}\n${h.street}`,
          })) : []}
          className="h-full w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
