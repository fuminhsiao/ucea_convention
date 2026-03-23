// pages/session-types.tsx
import { sessionTypesData } from "@/data/sessionTypesData"; // 修改變數名稱以配合您的 export 名
import AccordionBlock from "@/components/ui/general/AccordionBlock";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader";

export default function SessionTypesPage() {
  return (
    <div className="w-full">
      <PageHeader/>
      <PageTitle title="SESSION TYPES" />
      <SectionWrapper>
        <SectionContent>
          In our planning for Convention sessions, we paid attention to offering a broader array of session types to promote greater levels of inclusion within the UCEA community. We also designed sessions to support our community- and capacity-building interests. You will see several more creative, innovative session formats below, and we want to encourage our colleagues to consider submitting to one of these newly introduced session types.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
      <SectionContent>
        {sessionTypesData.map((block, index) => (
          <AccordionBlock key={index} title={block.title} items={block.accordions} />
        ))}
        
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
