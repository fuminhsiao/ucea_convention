"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import Image from "next/image";

const SchedulePage = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Schedule at a Glance" />
      <SectionWrapper>
        <SectionContent>
          <ul className="list-disc list-inside space-y-3 text-base text-gray-800">
            <li>
              The schedule for <strong>#UCEA25</strong> is now available in All Academic.
            </li>
            <li>
              Access the online schedule by clicking the red{" "}
              <strong>UCEA Member Login</strong> button and then the yellow{" "}
              <strong>All Academic</strong> button.
            </li>
            <li>
              <strong>Note:</strong> The schedule is still in progress and not finalized.
            </li>
            <li>
              <strong>Saturday presentations or sessions will not be moved.</strong> Please do not ask.
            </li>
            <li>
              Plan your travel accordingly.
            </li>
            <li>
              For presentation/session updates, presenter affiliations, or other corrections,
              please email us at{" "}
              <a
                href="mailto:convention@ucea.org"
                className="text-blue-600 underline"
              >
                convention@ucea.org
              </a>
              .
            </li>
          </ul>

          <div className="pt-6">
            <p className="mb-3">
              Click the yellow button as shown below to access All Academic:
            </p>
            <div className="w-full max-w-2xl relative aspect-[3/2] rounded-md overflow-hidden border shadow-md">
              <Image
                src="https://ucea.org/photos/Access_All_Academic_Here_1_08272025213115.PNG"
                alt="All Academic Button"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default SchedulePage;
