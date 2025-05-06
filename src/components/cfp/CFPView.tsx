"use client";
import type { CFPData } from "@/data/types";
import SectionTitle from "../ui/general/SectionTitle";
import SectionWrapper from "../ui/general/SectionWrapper";
import SectionContent from "../ui/general/SectionContent";

export default function CFPView({ data }: { data: CFPData; year: string }) {
  return (
    <div className="w-full">
      {data.sections.map((section, index) => (
        <section key={index} className={`w-full ${section.bg || "bg-white"}`}>
          <SectionWrapper>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionContent>
                  {section.content}
                </SectionContent>
          </SectionWrapper>
        </section>
      ))}
    </div>
  );
}