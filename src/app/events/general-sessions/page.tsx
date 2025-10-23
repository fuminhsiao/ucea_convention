"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import SessionBlock from "@/components/ui/general/SessionBlock";

const pdfUrl1 = "https://www.ucea.org/docs/Opening_General_Session_091625.pdf";
const pdfUrl2 = "https://www.ucea.org/docs/GeneralSessionII_Oct22.pdf";

export default function GeneralSessionsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="General Sessions" />

      <SectionWrapper>
        {/* Opening General Session */}
        <SessionBlock
          sessionType="Opening General Session"
          sessionName={
            <>
              From Colonial Legacies to Collaborative Leadership:
              <br /> Policy Change and Resilience in Puerto Rico’s Schools
            </>
          }
          name="Patricia Virella, Montclair State University"
          description={
            <>
              <p>THURSDAY, NOV 20, 11:00 A.M.–12:15 P.M.</p>
              <p>SAN JUAN 4–5</p>
            </>
          }
          imageUrl="https://ucea.org/photos/UCEA1758814125_Patricia_Virella_general_session.png"
          readMoreLink={pdfUrl1}
        />

        {/* General Session II */}
        <SessionBlock
          sessionType="General Session II"
          sessionName={
            <>
              Elevating Practitioner Voices: <br />
              Discussions on Resilience Through Collaboration and Community
            </>
          }
          name="Jaime Aquino, Cathi Davis, Virginia Hill, Ana María García Blanco, Facilitator: Osly Flores"
          description={
            <>
              <p>FRIDAY, NOV 21, 9:20 A.M.–10:30 A.M.</p>
              <p>SAN JUAN 4–5</p>
            </>
          }
          imageUrl="https://ucea.org/photos/UCEA1761234783_General_session_21023-2.png"
          readMoreLink={pdfUrl2}
        />
        
        {/* UCEA Presidential Address */}
        <SessionBlock
          sessionType="UCEA Presidential Address"
          sessionName={
            <>
              Kasserian Ingera de la Comunidad: <br />
              Inquiry, Sensemaking, and Engagement in Leadership Preparation
            </>
          }
          name="Karen Stansberry Beard, Ohio State University"
          description={
            <>
              <p>FRIDAY, NOV 21, 5:30 P.M.–6:30 P.M.</p>
              <p>
                The Presidential Address summons the cultural and racial
                influence mosaic of native (Taíno), colonized, and immigrant
                peoples’ learning exchange. Using both the Maasai and Spanish
                languages the title, <em>Kasserian Ingera de la Comunidad</em>{" "}
                (meaning, “and how are the children of the community?”) poses a
                universal question. Through Inquiry, Sensemaking, and Engagement
                research, Beard responds with the collective responsibility to
                prepare leaders focused on quality educational experiences and
                the well-being of all students as a guiding light and hope for
                the future.
              </p>
            </>
          }
          imageUrl="https://ucea.org/photos/UCEA1759457638_Bio.png"
        />
      </SectionWrapper>

      {/* Footer note */}
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
