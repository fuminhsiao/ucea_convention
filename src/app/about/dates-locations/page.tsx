"use client";

import PageHeader from "@/components/ui/general/PageHeader2026";
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
            The 2026 UCEA Annual Convention will be held from{" "}
            <strong>November 18–21, 2026</strong>.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>LOCATION</SectionTitle>
        <SectionContent>
          <p>
            The 2026 UCEA Annual Convention will take place at the{" "}
            <strong>David L. Lawrence Convention Center</strong> in{" "}
            <strong>Pittsburgh, Pennsylvania</strong>.
          </p>

          <p className="mt-4">
            Additional information regarding hotel accommodations and travel
            arrangements will be available soon. Please check back for updates.
          </p>

          <Link
            href="/attendee-info/hotel"
            className="inline-block mt-6 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
          >
            View Hotel & Travel Details
          </Link>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}