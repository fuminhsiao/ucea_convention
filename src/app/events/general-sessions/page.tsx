"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import BioBlock from "@/components/ui/general/BioBlock";

const pdfUrl = "https://www.ucea.org/docs/Opening_General_Session_091625.pdf";

export default function GeneralSessionsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="General Sessions" />



      <SectionWrapper>
        <SectionContent>

          <BioBlock
            name={`UCEA25 Opening General Session: 
From Colonial Legacies to Collaborative Leadership: Policy Change and Resilience in Puerto Rico’s Schools`}
            position="Patricia Virella, Montclair State University"
            description={
              <>
                <p>Thursday, November 20</p>
                <p>11:00 a.m.–12:15 p.m.</p>
                <p>San Juan 4–5</p>
              </>
            }
            imageUrl="https://ucea.org/photos/UCEA1758748752_Patricia_Virella_.jpg"
            reverse={false}
            variant="narrow"
            readMoreLink={pdfUrl}
          />
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <p className="text-base md:text-lg text-gray-700">
            More General Sessions will be announced soon. Please check back for
            additional details as the Convention approaches.
          </p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
