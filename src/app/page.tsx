"use client";

import travelBg from "@/assets/travel.jpg";

import Countdown from "@/components/hompage/Countdown";
import KeyInfoSection from "@/components/hompage/KeyInfoSection";
import InfoSection from "@/components/hompage/InfoSection";
import ShopSection from "@/components/hompage/ShopSection";
import Hero from "@/components/hompage/Hero2026";

export default function Home() {
  const conventionStartDate = "2026-11-18T00:00:00";

  // 👉 控制開關（之後只要改這裡）
  const showTravelSection = false;
  const showRegister = false;

  return (
    <main>
      <Hero />

<Countdown
  targetDate="2026-11-18T00:00:00"
  videoSrc={null} // 👈 關閉影片
/>


      {/* ✅ TRAVEL 隱藏 */}
      {showTravelSection && (
        <InfoSection
          title="TRAVEL & HOTEL"
          backgroundImageUrl={travelBg.src}
          buttonText="LEARN MORE"
          buttonLink="/attendee-info/hotel"
          paragraphs={[
            "We are thrilled to welcome you to the 2026 UCEA Convention in Pittsburgh, Pennsylvania, at the David L. Lawrence Convention Center.",
            "Join us November 18–21, 2026, for four days of engaging sessions, networking opportunities, and conversations that shape the future of educational leadership.",
            "The 2026 convention theme is “Unity as a Bridge to Freedom: Educational Leadership and the Interdependence of Research, Practice, and Community.”",
          ]}
        />
      )}

      <ShopSection />
    </main>
  );
}