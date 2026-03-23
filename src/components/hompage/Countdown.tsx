"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
  title?: string;
  videoSrc?: string | null;
  showRegister?: boolean;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = ({
  targetDate,
  title = "CONVENTION\nSTARTS IN",
  videoSrc = "/videos/ocean.mp4",
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = timeLeft
    ? [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section className="relative w-full py-10 md:h-[26rem] overflow-hidden">
      
      {/* 🎥 VIDEO（有才顯示） */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute bottom-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* 🎨 沒影片用底色 */}
      {!videoSrc && (
        <div className="absolute inset-0 bg-[#000000] z-0" />
      )}

      {/* 🎯 正確的漸層（重點） */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 40%, rgba(255,255,255,0.25) 100%)",
        }}
      />

      {/* 🔥 內容 */}
      <div className="xl:w-[60%] mx-auto relative z-20 h-full flex flex-col md:flex-row items-center justify-around md:justify-between">
        
        <h2 className="text-white text-2xl md:text-2xl lg:text-3xl font-bold font-sans mb-4 md:mb-0 whitespace-pre-line">
          {title}
        </h2>

        <div className="flex space-x-6 text-white">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold font-sans">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm tracking-wider mt-1">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Countdown;