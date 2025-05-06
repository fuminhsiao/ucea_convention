"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface BioBlockProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function BioBlock({
  name,
  position,
  description,
  imageUrl,
  reverse = false,
}: BioBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 500;

  const shouldTruncate = description.length > maxLength;
  const displayedDescription = expanded || !shouldTruncate
    ? description
    : description.slice(0, maxLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white shadow-lg mx-auto my-8 p-8  flex flex-col xl:flex-row items-center md:items-stretch gap-10 md:gap-20"
    >
      {/* 左右圖片區塊 */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={clsx(
          "w-full xl:w-3/12 flex justify-center",
          reverse && "md:order-last"
        )}
      >
        <div className="relative w-80 h-80 ">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover "
          />
        </div>
      </motion.div>

      {/* 文字區塊 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full xl:w-9/12 flex flex-col justify-start text-black text-left px-2 md:px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{name}</h2>
        <h3 className="text-xl md:text-2xl text-gray-600 mb-4">{position}</h3>

        <motion.div
          animate={{ height: expanded ? "auto" : 200 }}
          initial={false}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-lg md:text-2xl leading-relaxed">
            {displayedDescription}
          </p>
        </motion.div>

        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="cursor-pointer flex justify-end text-blue-600 hover:underline mt-2 text-lg md:text-xl"
          >
            {expanded ? "Read Less" : "READ MORE"}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
