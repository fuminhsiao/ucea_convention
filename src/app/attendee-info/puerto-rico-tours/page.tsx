"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

export default function PuertoRicoToursPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Puerto Rico Tours & Excursions" />

      <SectionWrapper>
        <SectionContent>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://ucea.org/photos/UCEA1762548635_Destination_Puerto_Rico.png"
              alt="Destination Puerto Rico"
              className="max-w-[260px] h-auto"
            />
          </div>

          <p className="text-lg mb-4">
            Have some free time when you are in Puerto Rico? Want to tour Old Town San Juan, 
            take a rum tour, or visit the Rainforest?
          </p>

          <p className="mb-4">
            UCEA has partnered with <strong>Destination Puerto Rico</strong> to offer a selection
            of guided tours for UCEA25 attendees. 
            Please note that tours have minimum and maximum participant requirements, so book early!
          </p>

          <p className="mb-6">
            <strong>Transportation is provided</strong> and will depart from the{" "}
            <strong>Sheraton Puerto Rico Resort and Casino</strong>.
          </p>
                    <p className="mb-6">Here is the link for the <strong>Book Your Tour</strong> button.

</p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.bookeo.com/UCEA_Annual_Convention"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300 text-lg"
            >
              Book Your Tour
            </a>
          </div>

        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
