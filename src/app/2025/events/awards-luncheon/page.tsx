"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import Award from "@/assets/2024 Awards Luncheon 2.jpg";

export default function AwardsLuncheonPage() {
  return (
    <div className="w-full">
      <PageHeader imageSrc={Award} />
      <PageTitle title="UCEA Awards Luncheon" />

      <SectionWrapper>
        <SectionContent>
          <p className="text-lg md:text-2xl text-gray-800 mb-4">
            <strong>Thursday, November 20</strong>
            <br />
            Sheraton Puerto Rico Resort and Casino: Miramar 4
          </p>

          <p className="text-lg md:text-2xl text-gray-800 mb-4">
            Sponsored by <strong>The Wallace Foundation</strong>, this luncheon
            was established to honor the recipients of UCEA Awards. The UCEA
            Awards focus on contributions to scholarship, teaching, student
            development, and the improvement of educational leadership
            preparation and practice.
          </p>

          <p className="text-lg md:text-2xl text-gray-800 mb-6">
            Award recipients receive complimentary tickets for the Awards
            Luncheon. For a full list of current and past UCEA award winners,&nbsp;
            <a
              href="https://www.ucea.org/ucea_awards.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              please click here
            </a>
            .
          </p>
          <p  className="text-lg md:text-2xl text-blue mb-6">Online sales are closed</p>

          {/* Purchase Ticket Button */}
          <div className="mt-10 hidden">
            <a
              href="https://members.ucea.org/members/evr/reg_main.php?orgcode=UCEA&evid=58961179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              🎟️ Purchase a Ticket
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
