import Image from "next/image";
import logo from "@/assets/ucea-logoB.png";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";

import HeroSlideshow from "./HeroSlideshow";
import TypedSlogan from "./TypedSlogan";

const heroImages = [hero1, hero2, hero3, hero4];
const slogans = [
  `“Fostering Leadership Resilience\nThrough Collaboration and Community”`,
  `“Fomentando la Resiliencia de Liderazgo\na través de Colaboración y Comunidad.”`,
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden ">
      <HeroSlideshow images={heroImages} />

      <div className="relative z-10 w-full h-[100vh] top-0 md:top-0 md:w-1/2 flex flex-col justify-center items-center px-4  md:px-20 py-12  bg-[#fff]/70">
        <div className="max-w-2xl w-full flex flex-col items-center gap-6">
          <div className="relative w-full flex flex-col items-start">
            {/* Logo */}
            <Image
              src={logo}
              alt="UCEA Logo"
              className="h-auto w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 mb-4"
              priority
              sizes="(max-width: 768px) 40vw, 300px"
            />

            {/* 巨大 2025（響應式文字大小，使用 absolute 疊在 Logo 背後） */}
            <h1 className="absolute top-0 left-0 text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] font-extrabold text-[#3366cc]/40 tracking-tight -z-10 pointer-events-none">
              2025
            </h1>
          </div>


          <div className="w-full min-h-[140px] flex items-start justify-start">
            <TypedSlogan slogans={slogans} />
          </div>
        </div>


      </div>
      <div
        className="absolute bottom-0 left-0 w-full py-24 pt-36 px-4 md:px-0 text-white z-50"
        style={{
          backgroundColor: "#000",
          opacity: 0.7,
          clipPath: "polygon(-30% 100%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className=" md:pr-20 text-right">
          <p className="text-xl md:text-4xl font-semibold">November 19–22, 2025</p>
          <p className="text-base md:text-2xl mt-2 leading-relaxed">
            Sheraton Puerto Rico Resort and Casino
            <br />
            San Juan, Puerto Rico
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden md:block" />
    </section>
  );
}
