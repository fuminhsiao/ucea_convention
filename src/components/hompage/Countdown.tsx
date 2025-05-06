"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(null);

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-11-19T00:00:00") - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    // 初始化
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      {/* Background Video */}
      <video
        src="/videos/ocean.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, #003366 0%, #ffffff 100%)",
          opacity: 0.5,
        }}
      />

      {/* Foreground */}
      <div className="xl:w-[60%] mx-auto relative z-20 h-full flex flex-col md:flex-row items-center justify-around md:justify-between ">
        <h2 className="text-white text-2xl md:text-2xl lg:text-3xl font-bold font-sans mb-4 md:mb-0">
          CONVENTION <br /> STARTS IN
        </h2>

        {/* Countdown */}
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
