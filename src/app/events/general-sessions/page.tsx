"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import SessionBlock from "@/components/ui/general/SessionBlock"; // 引入新的 SessionBlock

const pdfUrl = "https://www.ucea.org/docs/Opening_General_Session_091625.pdf";

export default function GeneralSessionsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="General Sessions" />

      <SectionWrapper>
        
          <SessionBlock
            sessionType="Opening General Session"
            sessionName={
              <>

                From Colonial Legacies to Collaborative Leadership:<br /> Policy Change and Resilience in Puerto Rico’s Schools
              </>
            }
            name="Patricia Virella, Montclair State University"
            description={
              <>
                <p>THURSDAY, NOV 20,
                11:00 A.M.–12:15 P.M.</p>
                <p>SAN JUAN 4–5</p>
              </>
            }
            imageUrl="https://ucea.org/photos/UCEA1758814125_Patricia_Virella_general_session.png"
            readMoreLink={pdfUrl}
          />
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
