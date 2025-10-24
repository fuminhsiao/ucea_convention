"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SessionBlockProps {
  sessionType: string;
  sessionName: React.ReactNode;
  name: string;
  description: React.ReactNode;
  imageUrl: string;
  readMoreLink?: string;
  reverse?: boolean;
}

export default function SessionBlock({
  sessionType,
  sessionName,
  name,
  description,
  imageUrl,
  readMoreLink,
  reverse = false,
}: SessionBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if content overflows
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > 160); // adjust 300px threshold if needed
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white shadow-lg mx-auto my-8 p-8 flex flex-col xl:flex-row items-center md:items-stretch gap-10 md:gap-20"
    >
      {/* 圖片區塊 */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={clsx(
          "flex justify-center",
          reverse && "md:order-last",
          "w-full xl:w-4/12"
        )}
      >
        <div className="relative w-full h-[28rem]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* 文字區塊 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center text-black text-left px-2 md:px-6 w-full xl:w-8/12"
      >
        {/* Session Type 標籤 */}
        <div className="text-xl w-fit text-white bg-[#00334e] inline-block px-3 py-1 rounded-full mb-3">
          {sessionType}
        </div>

        {/* Session Name */}
        <h2 className="font-bold mb-2 text-4xl md:text-3xl">{sessionName}</h2>

        {/* 講者姓名 */}
        <h3 className="text-[#3366cc] mb-4 text-2xl md:text-4xl font-bold">
          {name}
        </h3>

        {/* 展開式描述區塊 */}
        <motion.div
          animate={{ maxHeight: expanded ? 2000 : 160 }}
          initial={false}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative overflow-hidden"
        >
          <div
            ref={contentRef}
            className="leading-relaxed text-xl md:text-2xl font-bold space-y-3 [&_img]:max-w-[220px] [&_img]:h-auto [&_img]:rounded-md"
          >
            {description}
          </div>
          {!expanded && isOverflowing && (
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          )}
        </motion.div>

        {/* 控制按鈕列 */}
        {(isOverflowing || readMoreLink) && (
          <div className="flex justify-end gap-6 mt-3">
            {isOverflowing && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="cursor-pointer text-blue-600 hover:underline text-xl md:text-2xl"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
            {readMoreLink && (
              <a
                href={readMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xl md:text-2xl"
              >
                Download PDF
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
