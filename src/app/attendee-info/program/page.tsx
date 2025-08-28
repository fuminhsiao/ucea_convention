"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";


const SchedulePage = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Program" />
      <SectionWrapper>
        <SectionContent>
          The schedule for <strong>#UCEA25</strong> is now available in All Academic.
          <ul className="list-disc m-6 space-y-3 pl-6 text-gray-800">

            <li>
              Access the online schedule by clicking the red{" "}
              <strong>UCEA Member Login</strong> button and then the yellow{" "}
              <strong>All Academic</strong> button.
            </li>
            <li>
              <strong>Note:</strong> The schedule is still in progress and not finalized.
            </li>
            <li>
              <em>Saturday presentations or sessions will not be moved.</em>
            </li>
            <li>
              Plan your travel accordingly.
            </li>
            
          </ul>

              <a
                href="mailto:convention@ucea.org"
                className="text-blue-600 underline"
              >
                Email
              </a> us with any presentation/session updates, presenter affiliations, or other corrections.  
              
          
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default SchedulePage;
