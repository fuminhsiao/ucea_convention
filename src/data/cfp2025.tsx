import type { CFPData } from "./types";
import ExpandableSection from "@/components/cfp/ExpandableSection";
import SectionWithCards from "@/components/ui/general/Card";
const exampleItems = [
  {
    title: "SESSION TYPES",
    description: "Session types include paper sessions, practice-based presentations, ignite presentations, roundtables, community building sessions, terrace talks, workshop/ development sessions symposia, international community - building sessions, innovative sessions / mini - workshops, and pre - Convention work sessions and workshops.",
    link: "/cfp/session-types",
  },
  {
    title: "SUBMISSION DETAILS",
    description: "For submission guidelines, participation limits, proposal reviewer information, and other details.",
    link: "/cfp/submission-details",
  },
  {
    title: "HOW TO SUBMIT A STRONG PROPOSAL",
    description: "Tips for writing a compelling proposal, recommended structure for different proposal types, and sample submissions.",
    link: "/cfp/strong-proposal",
  },



];
export const CFP_2025: CFPData = {
  sections: [
    {
      title: "GENERAL INFO",
      bg: "bg-white",
      content: (
        <>
  <p className="text-[#b91c1c] font-semibold mb-4">
    Proposals must be received by Wednesday, May 14, 2025. All proposals must be submitted electronically through All Academic. This site will officially open March 26, 2025.
  </p>

  <p>
    The University Council for Educational Administration (UCEA) invites
    you to join us as we open the Call for Proposals for the 2025 Annual
    Convention. This year’s theme,{" "}
    <strong><em>
      “Fostering Leadership Resilience Through Collaboration and
      Community”
    </em></strong>{" "}
    /{" "}
    <strong><em>
      “Fomentando la Resiliencia de Liderazgo a través de Colaboración y
      Comunidad”
    </em></strong>
    , challenges educational leaders, researchers, and practitioners to
    envision transformative possibilities for educational leadership and
    build more inclusive, resilient communities.
    <br />
    <br />
    We welcome proposals that elevate diverse voices, foster
    collaboration, and showcase equity-centered leadership and research.
    Submit your ideas by <strong>Wednesday, May 14, 2025</strong>, and
    join us in{" "}
    <strong>San Juan, Puerto Rico, November 19–22, 2025</strong>, to shape
    the future of educational leadership.
  </p>

  <div className="flex justify-end mt-6">
    <a
      target="_blank"
      href="https://www.ucea.org/docs/UCEA_Convention_2025_CFP_031925.pdf"
      className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
    >
      VIEW PDF
    </a>
  </div>
</>

      ),
    },
    {
      title: "",
      bg: "bg-[url('/assets/bg-noise-light.jpg')] bg-gray-200 bg-blend-overlay bg-cover",
      content: (
        <>
          <div>
            <SectionWithCards items={exampleItems} />
          </div>

        </>
      ),
    },

    {
      title: "2025 CONVENTION THEME",
      bg: "bg-white",
      content: (
        <ExpandableSection />
      ),
    },

  ],
};
