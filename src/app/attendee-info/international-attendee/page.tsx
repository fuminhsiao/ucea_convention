"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

export default function InternationalPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="International Attendees" />

      <SectionWrapper>
        <SectionContent>
          <p className=" text-gray-800">
            Puerto Rico is a territory of the United States. Thus, this is a <strong className="text-blue-700">domestic travel destination</strong> and international students in{" "}
            <strong className="text-red-600">F-1 status</strong> should be able to travel to this year’s convention{" "}
            <strong className="text-blue-700">without a visa</strong>. However, you must carry{" "}
            <strong className="text-blue-700">immigration documents</strong> (like passports).
          </p>

          <p className=" text-gray-800 mt-4">
            Given current national events that have created some confusion and challenges for international students, we would encourage all international students to{" "}
            <strong >discuss your UCEA attendance with your faculty advisor</strong>.
          </p>

          <p className=" text-gray-800 mt-4">
            We also suggest that you make contact with your university’s{" "}
            <strong >Office of Global Student Engagement</strong> (or similar) to make sure that you are following all processes that are recommended by your university in relation to your travel to Puerto Rico.
          </p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
