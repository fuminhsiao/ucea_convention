"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import Link from "next/link";

export default function ThemePage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="2025 CONVENTION THEME" />

      <SectionWrapper>
        <SectionTitle>Theme</SectionTitle>
        <SectionContent>
          <p className="text-lg font-semibold italic">
            “Fostering Leadership Resilience Through Collaboration and Community”
            <br />
            “Fomentando la Resiliencia de Liderazgo a través de Colaboración y Comunidad.”
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Overview</SectionTitle>
        <SectionContent>
          <p>
            This year’s theme reflects UCEA’s commitment to cultivating inclusive, resilient, and collaborative leadership communities across PK–12 and higher education. Leaders today face unprecedented challenges—from attacks on DEI and academic freedom to systemic inequities that marginalize vulnerable student populations. UCEA responds by reaffirming its dedication to equity, community, and advocacy.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Key Themes</SectionTitle>
        <SectionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Resilience & R(ac)esilience:</strong> Recognizing leadership resilience as a response to adversity rooted in colonialism, oppression, and systemic inequities—especially for minoritized groups in education.
            </li>
            <li>
              <strong>Community & Collectivity:</strong> Emphasizing belonging, shared responsibility, and inclusive engagement across identities, roles, and borders—drawing inspiration from Puerto Rico’s historical and cultural context.
            </li>
            <li>
              <strong>Communication & Advocacy:</strong> Advancing our field through strategic engagement with the public, resisting harmful policies, and making research accessible and impactful.
            </li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Call for Proposals</SectionTitle>
        <SectionContent>
          <p>
            We invite proposals that explore these themes and contribute to work that improves educational leadership, promotes equity in PK–12 education, and strengthens our professional and research communities.
          </p>
          <Link
            href="/cfp/2025"
            className="inline-block mt-4 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
          >
            View 2025 Call for Proposals
          </Link>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
