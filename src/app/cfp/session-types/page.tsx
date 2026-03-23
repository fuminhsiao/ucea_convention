import { sessionTypesData } from "@/data/sessionTypesData2026";
import AccordionBlock from "@/components/ui/general/AccordionBlock";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader2026";

export default function SessionTypesPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="SESSION TYPES" />

      <SectionWrapper>
        <SectionContent>
          <p>
            In the spirit of the 2026 Convention theme, “Unity as a Bridge to
            Freedom: Educational Leadership and the Interdependence of Research,
            Practice, and Community,” the Convention offers the following
            session types to promote unity, interdependence, inclusion,
            community, and freedom.
          </p>

          <div className="flex justify-end mt-6">
            <a
              href="https://www.ucea.org/docs/UCEA26Convention_SessionTypes_Feb24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              VIEW PDF
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          {sessionTypesData.map((block, index) => (
            <AccordionBlock
              key={index}
              title={block.title}
              items={block.accordions}
            />
          ))}
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}