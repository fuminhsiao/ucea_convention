"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

export default function ExhibitorsPage() {
  const exhibitors = [
    {
      name: "CEEDAR",
      logo: "https://ucea.org/photos/UCEA1760929045_ceedar_center_logo.png",
    },
    {
      name: "Myers Education Press",
      logo: "https://ucea.org/photos/UCEA1760929045_MEP_color_logo_medium.png",
    },
    {
      name: "SchoolSims",
      logo: "https://ucea.org/photos/UCEA1760929045_SchoolSimsNewLogo2025.png",
    },
    {
      name: "Lead IDEA",
      logo: "https://ucea.org/photos/UCEA1760929046_Lead-IDEA-logo-v07-lvr-FNL_1.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <PageHeader />
      <PageTitle title="Convention Exhibitors" />

      {/* Intro Section */}
      <SectionWrapper>
        <SectionContent>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            We are proud to welcome our <strong>2025 UCEA Convention Exhibitors</strong>!  
            Each exhibitor plays an important role in supporting leadership preparation, 
            research, and innovation across the field of educational administration.  
            Visit their booths to explore their resources, publications, and interactive experiences 
            throughout the Convention.
          </p>
        </SectionContent>
      </SectionWrapper>

      {/* Exhibitor Grid */}
      <SectionWrapper>
        <SectionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
            {exhibitors.map((ex, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-300 p-4"
              >
                <img
                  src={ex.logo}
                  alt={ex.name}
                  className="w-40 h-40 object-contain mb-3"
                />
                <p className="font-semibold text-gray-800 text-base">{ex.name}</p>
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
