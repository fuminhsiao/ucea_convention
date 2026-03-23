"use client";

import Image, { StaticImageData } from "next/image";
import defaultBanner from "@/assets/Banner2026-2.png";

interface PageHeaderProps {
  imageSrc?: StaticImageData | string;
  altText?: string;
  showOverlay?: boolean;
}

export default function PageHeader({
  imageSrc,
  altText = "Banner",
  showOverlay = false,
}: PageHeaderProps) {
  const bannerToUse = imageSrc ?? defaultBanner;

  return (
    <div className="w-full h-[70vh] relative overflow-hidden">
      <Image
        src={bannerToUse}
        alt={altText}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#75caff] to-transparent pointer-events-none" />
      )}
    </div>
  );
}