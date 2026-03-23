import Image from "next/image";
import logo from "@/assets/ucea-logo2026.png";
import hero2026 from "@/assets/hero2026-1.webp";

import TypedSlogan from "./TypedSlogan";

const slogans = [
  `“Unity as a Bridge to Freedom:
Educational Leadership and the Interdependence of Research, Practice, and Community”`,
];

export default function Hero2026() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔹 背景圖 */}
      <Image
        src={hero2026}
        alt="UCEA 2026 Hero"
        fill
        priority
        className="object-cover"
      />

      {/* 🔹 遮罩 */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* 🔥 背景年份 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1 className="text-[32vw] md:text-[18vw] font-extrabold text-white/25 tracking-tight leading-none">
          2026
        </h1>
      </div>

      {/* 🔝 LOGO（跟著 2026 中心） */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="absolute -translate-y-[22vh]">
          <Image
            src={logo}
            alt="UCEA Logo"
            className="h-auto w-40 sm:w-52 md:w-64 lg:w-72"
            priority
          />
        </div>
      </div>

      {/* 🔥 中央 slogan */}
      <div className="relative z-30 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <TypedSlogan
            slogans={slogans}
            textClassName="text-white"
            cursorClassName="bg-white"
          />
        </div>
      </div>

      {/* 🔻 底部日期（固定） */}
      <div className="absolute bottom-0 left-0 w-full z-30 pb-10 md:pb-14 px-6">
        <div className="text-center text-white">
          <p className="text-xl md:text-3xl font-semibold">
            November 18–21, 2026
          </p>
          <p className="text-base md:text-xl mt-2 leading-relaxed">
            David L. Lawrence Convention Center
            <br />
            Pittsburgh, PA
          </p>
        </div>
      </div>

    </section>
  );
}