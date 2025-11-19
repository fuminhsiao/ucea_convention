"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl = "https://www.ucea.org/docs/Global_Dialogues_110625.pdf";
const downloadText = "📄 Download Full PDF";

export default function GlobalDialoguesPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="International Summit: Global Dialogues in Educational Leadership" />

      {/* Intro */}
      <SectionWrapper>
        <SectionContent>
          <h2 className="text-2xl font-semibold text-[#00334e] mb-4">
            Global Dialogues in Educational Leadership: Navigating Politics, Democracy, and AI
          </h2>

          <p className="text-sm text-gray-700 mb-2">
            <strong>Saturday, November 22, 2025</strong>
          </p>
          <p className="text-sm text-gray-700 mb-6">
            <strong>1:20–2:30 PM • San Juan 1 • Session 269</strong>
          </p>

          {/* PDF BUTTON */}
          <div className="mt-4 mb-8">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              {downloadText}
            </a>
          </div>

          <p className="leading-relaxed text-base text-gray-800 mb-6">
            The UCEA Advisory Board for International Initiatives is seeking engagement from U.S.-based
            scholars and graduate students working internationally and from international scholars and
            students in this networking and idea-sharing session.
          </p>

          <p className="leading-relaxed text-base text-gray-800 mb-6">
            The session will begin with a panel discussion of current issues facing educational
            leadership globally, including:
          </p>

          <ul className="list-disc list-inside text-base space-y-1 mb-6">
            <li>
              The navigation of sociopolitical tensions and the promotion of pluralistic democracy
              within today’s global political contexts
            </li>
            <li>
              The influence of AI on organizational culture and leadership practices in K–12 settings,
              with emphasis on leaders’ responsibilities in guiding AI adoption
            </li>
          </ul>

          <p className="leading-relaxed text-base text-gray-800 mb-6">
            The panel discussion will be followed by a group dialogue and a networking activity. 
            Light refreshments will be provided. All voices are welcome, and attendees are encouraged 
            to bring colleagues who may be interested.
          </p>
        </SectionContent>
      </SectionWrapper>

      {/* Panelists */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl font-semibold text-[#00334e] mb-4">Panelists</h3>

          <ul className="space-y-6 text-gray-900 text-base">
            <li>
              <p className="font-bold">Kofi Lomotey</p>
              <p className="text-sm text-gray-700">
                The Chancellor John Bardo and Deborah Bardo Distinguished Professor of Educational
                Leadership, Western Carolina University; Executive Committee Member, University Council
                for Educational Administration (UCEA)
              </p>
            </li>

            <li>
              <p className="font-bold">Deborah Outhwaite</p>
              <p className="text-sm text-gray-700">
                Chair of the Board of Trustees, The British Educational Leadership, Management and
                Administration Society (BELMAS)
              </p>
            </li>

            <li>
              <p className="font-bold">Jayson Richardson</p>
              <p className="text-sm text-gray-700">
                Professor of Educational Policy, Planning & Leadership, William & Mary; 
                UCEA Associate Director for Program Research Centers
              </p>
            </li>

            <li>
              <p className="font-bold">Mariela Rodríguez</p>
              <p className="text-sm text-gray-700">
                Professor of Educational Leadership, University of Texas at San Antonio; 
                Past Vice President, Division A (AERA); Past President of UCEA
              </p>
            </li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      {/* Participants */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl font-semibold text-[#00334e] mb-4">
            Participants (Members of the UCEA Advisory Board for International Initiatives)
          </h3>

          <ul className="space-y-2 text-base text-gray-800">
            <li>Khalid Arar, Texas State University</li>
            <li>Lisa Bass, North Carolina State University</li>
            <li>Jami Berry, University of Georgia</li>
            <li>Mónica Byrne-Jiménez, Michigan State University</li>
            <li>Lorenda Chisolm, Schenectady City School District</li>
            <li>Stephen Jacobson, University at Buffalo, SUNY</li>
            <li>Grace Liang, Kansas State University</li>
            <li>Matthew Militello, East Carolina University</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      {/* Facilitator */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl font-semibold text-[#00334e] mb-4">Facilitator</h3>

          <p className="font-bold">Maysaa Barakat</p>
          <p className="text-sm text-gray-700 mb-2">Florida Atlantic University</p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
