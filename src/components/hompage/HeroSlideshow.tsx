"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeroSlideshowProps {
  images: StaticImageData[];
}

export default function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const clearAndRestartInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 15000);
  }, []);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + images.length) % images.length);
      clearAndRestartInterval();
    },
    [images.length, clearAndRestartInterval]
  );

  useEffect(() => {
    clearAndRestartInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [clearAndRestartInterval]);

  // Handle mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        paginate(-1); // swipe right
      } else {
        paginate(1); // swipe left
      }
    }
    setTouchStartX(null);
  };

  return (
    <>
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-gray-200"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Slide ${current}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
  onClick={() => paginate(-1)}
  className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-4 text-2xl hover:bg-white/50 transition z-20"
>
  {"<"}
</button>

<button
  onClick={() => paginate(1)}
  className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-4 text-2xl hover:bg-white/50 transition z-20"
>
  {">"}
</button>

    </>
  );
}
