"use client";


import travelBg from "@/assets/travel.jpg";

import Countdown from "@/components/hompage/Countdown";
import CallForProposalsSection from "@/components/hompage/CallForProposalsSection";
import InfoSection from "@/components/hompage/InfoSection";
import ShopSection from "@/components/hompage/ShopSection";
import Hero from "@/components/hompage/Hero";
export default function Home() {
  return (
    <main >

      <Hero />
      <Countdown />
      <CallForProposalsSection />
      <InfoSection
        title="TRAVEL & HOTEL"
        backgroundImageUrl={travelBg.src}
        buttonText="LEARN MORE"
        buttonLink="/hotel"
        paragraphs={[
          "We are thrilled to welcome you to the 2025 UCEA Convention hosted at the Sheraton Puerto Rico Resort and Casino in the vibrant city of San Juan.",
          "Located in the Convention Center District and just minutes from historic Old San Juan, the Sheraton offers exceptional amenities, breathtaking ocean views, and convenient access to local attractions.",
          "We encourage attendees to book their rooms early to take advantage of special convention rates and enjoy a seamless travel experience during their stay.",
        ]}
      />
      <ShopSection />
    </main>
  );
}
