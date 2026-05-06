import type { CFPData } from "./types";
import ExpandableSection from "@/components/cfp/ExpandableSection";
import SectionWithCards from "@/components/ui/general/Card";

const exampleItems = [
  {
    title: "SESSION TYPES",
    description:
      "Session types include paper sessions, practice-based presentations, ignite presentations, roundtables, community building sessions, terrace talks, workshop/development sessions, symposia, international community-building sessions, innovative sessions/mini-workshops, and pre-Convention work sessions and workshops.",
    link: "/cfp/session-types",
  },
  {
    title: "SUBMISSION GUIDELINES",
    description:
      "For submission guidelines, participation limits, proposal reviewer information, and other details.",
    link: "/cfp/submission-details",
  },
  {
    title: "HOW TO SUBMIT A STRONG PROPOSAL",
    description:
      "Guidance for new submitters, recommended proposal structure, and sample proposal resources.",
    link: "/cfp/strong-proposal",
  },
];

export const CFP_2026: CFPData = {
  sections: [
    {
      title: "GENERAL INFO",
      bg: "bg-white",
      content: (
        <>
          <p className="text-[#b91c1c] font-semibold mb-4">
            Proposals must be received by Sunday, May 3, 2026. All proposals
            must be submitted electronically through All Academic. This site
            will officially open March 9, 2026.
          </p>

          <p>
            The University Council for Educational Administration (UCEA) invites
            you to submit proposals for the 2026 Annual Convention. This year’s
            theme,{" "}
            <strong>
              <em>
                “Unity as a Bridge to Freedom: Educational Leadership and the
                Interdependence of Research, Practice, and Community”
              </em>
            </strong>
            , underscores the Convention&apos;s location in Pittsburgh,
            Pennsylvania, where history, activism, and collaboration offer a
            powerful context for educational leadership.
            <br />
            <br />
            Pittsburgh’s bridges serve as a metaphor for unity across diverse
            communities, while the city’s history of labor organizing and
            collective action reflects enduring struggles for freedom and
            justice. In that spirit, the 2026 Convention invites educational
            leaders, researchers, practitioners, and students to consider how
            research, practice, and community are deeply interdependent in
            building more just and liberatory educational systems.
            <br />
            <br />
            We welcome proposals that engage this year’s theme and highlight
            innovative, critical, and collaborative work in educational
            leadership. Join us in{" "}
            <strong>Pittsburgh, Pennsylvania, November 18–21, 2026</strong>.
          </p>

          <div className="flex justify-end mt-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ucea.org/docs/UCEA26_GSS_Call_for_Proposals_April28.pdf"
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
      title: "IMPORTANT DATES",
      bg: "bg-white",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>All Academic opens: March 9, 2026</li>
            <li>Proposal Submission Deadline: May 11, 2026, 11:59 p.m. (EST)</li>
            <li>Proposal Reviews Deadline: May 27, 2026, 11:59 p.m. (EST) (EST)</li>

            <li>Notification of Acceptance: June 22, 2026</li>
            <li>Early-Bird Registration Deadline: September 18, 2026</li>
            <li>Registration Deadline: October 16, 2026</li>
            <li>Conference Dates: November 18–21, 2026</li>
          </ul>
        </>
      ),
    },
    {
      title: "2026 CONVENTION THEME",
      bg: "bg-white",
      content: (
        <>
          <p className="mb-4">
            <strong>
              Unity as a Bridge to Freedom: Educational Leadership and the
              Interdependence of Research, Practice, and Community
            </strong>
          </p>

          <p className="mb-4">
            The 40th annual UCEA Convention theme underscores the Convention’s
            location in Pittsburgh, Pennsylvania. In this city, history and
            landscape epitomize freedom, unity, and interdependence in driving
            transformative change.
          </p>

          <p className="mb-4">
            Pittsburgh’s iconic bridges, connecting distinct communities across
            rivers, runs, and valleys, serve as a metaphor for unity among
            people with diverse identities and experiences. The city also
            reflects a powerful history of activism, from labor conflicts in the
            1880s to contemporary organizing and long-running strikes.
          </p>

          <p>
            Today, Pittsburgh also reflects collaborative partnerships and
            networks among universities, foundations, school districts,
            museums, libraries, nonprofits, artists, and more. The Convention
            theme invites us to think deeply about how educational leadership
            can build bridges across difference and strengthen the relationships
            among research, practice, and community in pursuit of freedom and
            justice.
          </p>
        </>
      ),
    },
    
  ],
};