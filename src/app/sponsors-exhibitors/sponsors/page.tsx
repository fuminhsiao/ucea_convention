"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

const SponsorsPage = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Sponsors" />

      {/* 2025 SPONSORS SECTION */}
      <SectionWrapper>
        <SectionTitle>2025 Sponsors</SectionTitle>
        <SectionContent>
          <p className="text-base text-gray-800 mb-4">
            Our list of <strong>2025 UCEA Convention Sponsors</strong> is continuously growing! We are grateful to the partners who have already committed to supporting #UCEA25 in San Juan, Puerto Rico.
          </p>
          <p className="text-base text-gray-800">
            Stay tuned as we announce our 2025 sponsors in the coming months. If your organization is interested in joining us as a sponsor, we welcome your partnership!
          </p>
        </SectionContent>
      </SectionWrapper>

      {/* 2024 SPONSORS SECTION */}
      <SectionWrapper>
        <SectionTitle>2024 Sponsors</SectionTitle>
        <SectionContent>
          <p className="text-base text-gray-800 mb-4">
            We extend our heartfelt thanks to all the sponsors who supported the <strong>2024 UCEA Convention</strong>. Your contributions helped us create a meaningful and impactful experience for educational leaders, researchers, and graduate students across the country.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="https://ucea.org/photos/Sponsors2_11122024201738.JPG"
              alt="2024 Sponsors"
              width={800}
              height={500}
              className="rounded-md border shadow-md"
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default SponsorsPage;
