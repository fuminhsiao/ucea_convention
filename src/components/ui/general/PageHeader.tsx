"use client";

import Image, { StaticImageData } from "next/image";
import defaultBanner from "@/assets/Banner.png";

interface PageHeaderProps {
  imageSrc?: StaticImageData | string;
  altText?: string;
  showOverlay?: boolean; // 是否啟用遮罩（預設 false）
}

export default function PageHeader({
  imageSrc,
  altText = "Banner",
  showOverlay = false,
}: PageHeaderProps) {
  const bannerToUse = imageSrc ?? defaultBanner;

  return (
    <div className="w-full h-[70vh]  relative">
      <Image
        src={bannerToUse}
        alt={altText}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#004a78] to-transparent pointer-events-none" />
      )}
    </div>
  );
}
