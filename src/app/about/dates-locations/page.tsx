"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import Link from "next/link";

export default function DateAndLocationPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="DATE & LOCATION" />

      <SectionWrapper>
        <SectionTitle>CONVENTION DATE</SectionTitle>
        <SectionContent>
          <p>
            The 2025 UCEA Annual Convention will be held from <strong>November 19–22, 2025</strong>.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>LOCATION</SectionTitle>
        <SectionContent>
          <p>
            UCEA has arranged for premium hotel accommodations at the <strong>Sheraton Puerto Rico Resort & Casino</strong>, the host site for the 2025 Annual Convention in <strong>San Juan, Puerto Rico</strong>.
          </p>
          <p className="mt-4">
            While final room rates are still being negotiated, attendees can expect competitive pricing with flexible cancellation and modification policies. Reservations should be made exclusively through our official booking partner to ensure access to discounted rates and secure accommodations.
          </p>
          <p className="mt-4">
            Booking through the official system also helps UCEA demonstrate the Convention’s economic impact on the host city, which is essential for securing future benefits for our attendees.
          </p>
          <p className="mt-4 font-semibold text-red-700">
            Please note: Discounted Convention rates will not be available if you contact the hotel directly.
          </p>

          <Link
            href="/hotel"
            className="inline-block mt-6 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
          >
            View Hotel & Travel Details
          </Link>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
