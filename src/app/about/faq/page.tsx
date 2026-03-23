"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import SectionTitle from "@/components/ui/general/SectionTitle";

const pdfUrl = "https://www.ucea.org/docs/2025_UCEA_FAQs_Oct31.pdf";

export default function FAQPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Frequently Asked Questions" />

      <SectionWrapper>
        <SectionContent>
          <p className="text-lg text-gray-800 mb-4">
            Below are answers to common questions about the 2025 UCEA Convention.
            You can also view or download the full PDF using the link below.
          </p>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300 mb-6"
          >
            📄 Download Full FAQ PDF
          </a>

          {/* iFrame viewer */}
          <div className="w-full h-[600px] mb-10">
            <iframe
              src={pdfUrl}
              className="w-full h-full border rounded"
              title="UCEA 2025 FAQ PDF Viewer"
            />
          </div>

          <SectionTitle>Quick FAQ Reference</SectionTitle>
          <div className="space-y-8 text-gray-800 text-lg leading-relaxed">

            <div>
              <p className="font-bold">Do I need to register if I am only presenting?</p>
              <p>Yes. All presenters and attendees must register to attend #UCEA25.</p>
            </div>

            <div>
              <p className="font-bold">We have community members presenting. Do they need to register?</p>
              <p>Yes. All presenters must be registered to attend.</p>
            </div>

            <div>
              <p className="font-bold">I am affiliated with a UCEA-member institution but I only see non-member rates.</p>
              <p>Email us and we will update your account accordingly.</p>
            </div>

            <div>
              <p className="font-bold">Where should I go for dining and local attractions?</p>
              <p>
                Visit&nbsp;
                <a href="https://www.discoverpuertorico.com/" className="underline text-blue-600">
                  Discover Puerto Rico
                </a>.
              </p>
            </div>

            <div>
              <p className="font-bold">Can I still purchase Awards Luncheon & Annual Banquet tickets?</p>
              <p>
                Yes, while supplies last.<br />
                <a
                  href="/events/awards-luncheon"
                  className="text-blue-600 underline"
                >
                  Awards Luncheon tickets
                </a>{" "}
                |{" "}
                <a
                  href="/events/banquet"
                  className="text-blue-600 underline"
                >
                  Annual Banquet tickets
                </a>
              </p>
            </div>

            <div>
              <p className="font-bold">Where do I upload my paper summary?</p>
              <p>Upload in All Academic by November 10 as professional courtesy.</p>
            </div>

            <div>
              <p className="font-bold">How do I view paper summaries?</p>
              <p>In All Academic → View Online Program → Search paper → Download.</p>
            </div>

            <div>
              <p className="font-bold">Where do I register onsite?</p>
              <p>Sheraton Puerto Rico, Level 2, San Juan Foyer.</p>
            </div>

            <div>
              <p className="font-bold">Registration Desk Hours</p>
              <ul className="list-disc pl-6">
                <li>Wed. Nov. 19 — 2:00–6:00 PM</li>
                <li>Thurs. Nov. 20 — 7:30 AM–5:00 PM</li>
                <li>Fri. Nov. 21 — 7:30 AM–5:00 PM</li>
                <li>Sat. Nov. 22 — 7:30 AM–12:00 PM</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">Special accommodation rooms</p>
              <ul className="list-disc pl-6">
                <li>Lactation Room: Meeting Planner Office (Level 2)</li>
                <li>Meditation Room: San Geronimo</li>
                <li>Ombudsperson Office: Sol Boardroom</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">Health & Preparedness</p>
              <p>
                Wristband system (Green/Yellow/Red), masks available, sanitation
                stations, emergency plans in place.
              </p>
            </div>

            <div>
              <p className="font-bold">Jackson Scholars scheduling conflict</p>
              <p>
                First-year Jackson Scholars should attend the Julie Laible Session.
              </p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
