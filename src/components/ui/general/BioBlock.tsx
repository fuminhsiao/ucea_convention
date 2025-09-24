"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface BioBlockProps {
  name: string;
  position: string;
  description: React.ReactNode; 
  imageUrl: string;
  reverse?: boolean;
  variant?: "default" | "narrow";
  readMoreLink?: string;
}

export default function BioBlock({
  name,
  position,
  description,
  imageUrl,
  reverse = false,
  variant = "default",
  readMoreLink,
}: BioBlockProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white shadow-lg mx-auto my-8 p-8 flex flex-col xl:flex-row items-center md:items-stretch gap-10 md:gap-20"
    >
      {/* 圖片 */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={clsx(
          "flex justify-center",
          reverse && "md:order-last",
          variant === "default" ? "w-full xl:w-3/12" : "w-full xl:w-4/12"
        )}
      >
        <div
          className={clsx(
            "relative",
            variant === "default" ? "w-80 h-80" : "w-96 h-[28rem]"
          )}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* 文字 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className={clsx(
          "flex flex-col justify-start text-black text-left px-2 md:px-6",
          variant === "default" ? "w-full xl:w-9/12" : "w-full xl:w-8/12"
        )}
      >
        <h2
          className={clsx(
            "font-bold mb-2",
            variant === "default"
              ? "text-3xl md:text-4xl"
              : "text-4xl md:text-5xl"
          )}
        >
          {name}
        </h2>
        <h3
          className={clsx(
            "text-gray-600 mb-4",
            variant === "default" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          )}
        >
          {position}
        </h3>

        {/* description with expand/collapse */}
        <motion.div
          animate={{ height: expanded ? "auto" : 160 }} // 預設截斷高度
          initial={false}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div
            className={clsx(
              "leading-relaxed",
              variant === "default"
                ? "text-lg md:text-2xl"
                : "text-xl md:text-3xl"
            )}
          >
            {description}
          </div>
        </motion.div>

        {/* READ MORE or PDF link */}
        {readMoreLink ? (
          <a
            href={readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex justify-end text-blue-600 hover:underline mt-2",
              variant === "default" ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}
          >
            READ MORE
          </a>
        ) : (
          <button
            onClick={() => setExpanded(!expanded)}
            className={clsx(
              "cursor-pointer flex justify-end text-blue-600 hover:underline mt-2",
              variant === "default" ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            )}
          >
            {expanded ? "Read Less" : "READ MORE"}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
