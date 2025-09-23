"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const sessionDates = [
  {
    day: "Friday, November 21, 2025",
    events: [
      "8:00 – 9:10 a.m. | Intergenerational Leadership in Action: Practical Strategies for Equity and Community Collaboration",
      "4:00 – 5:10 p.m. | Scholarship in Action: A Workshop on Building and Sustaining Research–Practitioner Partnerships",
    ],
  },
  {
    day: "Saturday, November 22, 2025",
    events: [
      "10:40 – 11:50 a.m. | Seizing the Moment: Policy Windows, Policy Change, and Building Resilient Education Systems",
    ],
  },
];

const pdfUrl =
  "https://www.ucea.org/docs/Convention_Resilience_Focused_092225.pdf";
const downloadText = "📄 Download Full PDF";

const sessions = [
  {
    title:
      "Intergenerational Leadership in Action: Practical Strategies for Equity and Community Collaboration",
    description:
      "This interactive session explores intergenerational organizing as a pathway to educational equity and leadership resilience. Participants will engage with hands-on tools that can be adapted for practice or preparation courses. These activities invite reflection on positionality and provide strategies for transforming adult-centered practices into intergenerational coalitions.",
    facilitator: "Katherine C. Rodela, Rudolfo “Rudy” David Rodela Duncan",
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Katherine_C._Rodela.png",
      "https://ucea.org/photos/UCEA1758662459_Rudolfo_Rudy_David_Rodela_Duncan.png",
    ],
    bio: [
      "Katherine C. Rodela is associate professor and department chair at Washington State University. Her research centers family, youth, and community voices to advance equity and justice in PK–20 education.",
      'Rudolfo “Rudy” David Rodela Duncan is a ninth-grade student leader in Portland Public Schools. He created the district’s first elementary youth-led group and serves as cochair of the district’s Racial Equity and Social Justice Community Advisory Committee.',
    ],
  },
  {
    title:
      "Scholarship in Action: A Workshop on Building and Sustaining Research–Practitioner Partnerships",
    description:
      "This session examines strategies for initiating and sustaining research–practice partnerships, especially around politically contested topics like LGBTQ+ inclusion. Participants will gain tools for navigating tensions and maintaining scholarly rigor while collaborating with practitioners.",
    facilitator: "Mollie McQuillan",
    photo: "https://ucea.org/photos/UCEA1758662459_Mollie_McQuillan.png",
    bio: "Mollie McQuillan is an associate professor at the University of Wisconsin–Madison. Their research investigates how policies and leaders shape school climate and health, particularly for LGBTQ+ populations.",
  },
  {
    title:
      "Seizing the Moment: Policy Windows, Policy Change, and Building Resilient Education Systems",
    description:
      "Periods of crisis can expose vulnerabilities and open unique 'policy windows' for systemic change. This session explores how education leaders can use these windows to build equity-focused, resilient systems.",
    facilitator: "Casey D. Cobb, Maria E. Hyler, Cathy Yun",
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Casey_D._Cobb.png",
      "https://ucea.org/photos/UCEA1758662458_Maria_E._Hyler.png",
      "https://ucea.org/photos/UCEA1758662458_Cathy_Yun.png",
    ],
    bio: [
      "Casey D. Cobb is the Raymond Neag Professor of Educational Policy at the University of Connecticut. His work examines school choice, accountability, and reform through the lens of equity.",
      "Maria E. Hyler is director of the Learning Policy Institute’s DC office and co-leads EdPrepLab to transform educator preparation through research, practice, and policy alignment.",
      "Cathy Yun is a senior researcher at the Learning Policy Institute and deputy director of EdPrepLab. Her work supports early childhood education, teacher preparation, and local policy partnerships.",
    ],
  },
];

export default function ResilienceFocusedSchedule() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Resilience-Focused Capacity-Building Workshops" />
      <SectionWrapper>
        <SectionContent>
          This year’s Convention is being designed as a space for research
          presentations and for participant learning and capacity-building.
          These invited workshops focus on building resilience through community
          partnerships, intergenerational leadership, and education policy
          reform. Each session is interactive, hands-on, and spread across
          Friday and Saturday to allow for multiple workshop opportunities.
        </SectionContent>
      </SectionWrapper>

      {sessionDates.map((session, idx) => (
        <SectionWrapper key={idx}>
          <SectionContent>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
              {session.day}
            </h3>
            <ul className="space-y-2 mb-10">
              {session.events.map((event, i) => {
                const [time, content] = event.split(" | ");
                return (
                  <li
                    key={i}
                    className="text-base md:text-lg text-gray-800 pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-600 before:-translate-x-4"
                  >
                    <span className="font-medium">{time} | </span>
                    {content}
                  </li>
                );
              })}
            </ul>
          </SectionContent>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-6">
            Featured Workshop Sessions
          </h3>
          <ul className="space-y-10">
            {sessions.map((s, index) => (
              <li key={index} className="text-base md:text-lg text-gray-900">
                <p className="font-bold text-lg mb-1">{s.title}</p>
                <p className="italic mb-2">{s.description}</p>
                {Array.isArray(s.photo) ? (
                  <div className="flex flex-col md:flex-row gap-6 mb-3">
                    {s.photo.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={s.facilitator.split(", ")[i]}
                        className="w-36 h-36 object-cover rounded shadow"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={s.photo}
                    alt={s.facilitator}
                    className="w-36 h-36 object-cover rounded shadow mb-3"
                  />
                )}
                {Array.isArray(s.bio) ? (
                  s.bio.map((b, i) => (
                    <p key={i} className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">
                        {s.facilitator.split(", ")[i]}:
                      </span>{" "}
                      {b}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{s.facilitator}:</span>{" "}
                    {s.bio}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              {downloadText}
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}