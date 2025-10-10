"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl = "https://www.ucea.org/docs/UCEA_2025_ProgramWebOct8.pdf";

const ProgramPage = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Program" />

      <SectionWrapper>
        <SectionContent>
          <p className="  text-gray-800 mb-4">
            We’re excited to have you join us in <strong>San Juan, Puerto Rico!</strong> 
            To help you make the most of your experience, we’ve put together a detailed 
            program schedule outlining all the sessions, speakers, sponsors, and key 
            moments happening throughout the Annual Convention.
          </p>

          <p className="  text-gray-800 mb-4">
            <strong>
              The deadline to submit changes for the print program is October 15.
            </strong>{" "}
            Any changes submitted after October 15 will not be included in the print program.
          </p>

          <p className="  text-gray-800 mb-4">
            Please send change requests to{" "}
            <a
              href="mailto:convention@ucea.org"
              className="text-blue-600 underline"
            >
              convention@ucea.org
            </a>
            . Be sure to reference the <strong>session number</strong>, not the page number.
          </p>

          <p className="  text-gray-800 mb-6">
            <em>
              Note: Saturday presentations and sessions cannot be moved to Thursday or Friday.
            </em>
          </p>

          <p className="  italic text-gray-700 mb-6">
            Please include the following text above the PDF and also add the date of the draft each time a new version is posted.
          </p>

          <p className="  text-gray-800 mb-2">
            This version is a low-resolution draft, and updated versions will be posted periodically.
          </p>

          <div className="mt-6 mb-10">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#2d4fa3] transition-colors duration-300"
            >
              📄 Download Program PDF
            </a>
          </div>

          {/* PDF Preview Frame */}
          <div className="w-full h-[900px] border rounded-md shadow-inner">
            <iframe
              src={pdfUrl}
              title="UCEA 2025 Program PDF Preview"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default ProgramPage;
