"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl =
  "https://www.ucea.org/docs/GettoKnowProgramCenters_Oct7a.pdf";

export default function ProgramCentersPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Get to Know Program Centers" />

      <SectionWrapper>
        <SectionContent>
          <div className="mb-6">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              📄 Download Full PDF
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Stop by the Caribe Lounge on Level 2 of the Sheraton Puerto Rico Resort and
            Casino to learn more about the UCEA Program Centers. Representatives
            from the different centers will be on-hand to answer any questions
            you may have and to let you know the next steps to get involved. All
            sessions are Friday November 21.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-2">
            123. Get to Know UCEA Program Centers: Ignite Presentations
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <strong>8:00 to 9:10 am</strong> — Sheraton Puerto Rico: Miramar 4
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Join us for an energizing session featuring rapid-fire Ignite
            presentations from all nine UCEA program centers. Each center will
            deliver a 5-minute presentation highlighting their unique work,
            mission, and vision. This fast-paced format offers attendees a
            comprehensive overview of our diverse programs and their impact
            across UCEA.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-2">
            139. Get to Know UCEA Program Centers #1
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <strong>10:40 to 11:50 am</strong> — Sheraton Puerto Rico: Caribe Lounge
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
            <li>
              Center for the Advanced Study of Technology Leadership in
              Education (CASTLE)
            </li>
            <li>The Center for Urban School Leadership</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-2">
            159. Get to Know UCEA Program Centers #2
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <strong>1:20 to 2:30 pm</strong> — Sheraton Puerto Rico: Caribe Lounge
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
            <li>
              Center for Educational Leadership and Social Justice (CELSJ)
            </li>
            <li>
              Consortium for the Study of Leadership and Ethics in Education
              (CSLEE)
            </li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-2">
            178. Get to Know UCEA Program Centers #3
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <strong>2:40 to 3:50 pm</strong> — Sheraton Puerto Rico: Caribe Lounge
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
            <li>
              National Center for the Evaluation of Educational Leadership
              Preparation and Practice
            </li>
            <li>Center for the International Study of School Leadership</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-2">
            198. Get to Know UCEA Program Centers #4
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <strong>4:00 to 5:10 pm</strong> — Sheraton Puerto Rico: Caribe Lounge
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
            <li>
              UCEA Joint Program Center for the Study of the Superintendency and
              District Governance
            </li>
            <li>Center for the Study of Leadership and the Law</li>
          </ul>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
