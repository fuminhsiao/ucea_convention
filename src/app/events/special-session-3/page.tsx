"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const sessionDates = [
  {
    day: "Friday, November 21, 2025",
    events: [
      "1:20 – 2:30 p.m. | Policy and Politics and the Undermining of Public K-12 and Public Higher Education in Puerto Rico: Lessons and Implications for La Isla del Encanto and the Rest of the U.S.",
    ],
  },
];

const pdfUrl = "https://www.ucea.org/docs/PolicyandPolitics_in_PR_091725.pdf";
const downloadText = "📄 Download Full PDF";

const sessions = [
  {
    title:
      "Policy and Politics and the Undermining of Public Education in Puerto Rico",
    description:
      "Towards the end of the Joe Biden presidency, the White House Initiative and Presidential Advisory Commission for Educational Equity, Excellence, and Economic Opportunity for Hispanics, in partnership with then-Secretary of Education Miguel Cardona, advocated for public education in Puerto Rico. Their visit to the Island in September 2024 focused on understanding and addressing political and systemic challenges—including the politicization of K–12 leadership and increasing privatization of K–12 and higher education.\n\nRecommendations emerged to reverse the significant losses in funding, enrollment, and the educator workforce (in some cases, over 50%). This session brings together commissioners and members of the Biden administration to explore lessons and implications for public education both in Puerto Rico and across the United States.",
    facilitator: "Cristóbal Rodríguez",
    photo: ["https://ucea.org/photos/UCEA1758663389_Cristbal_Rodrguez.png"],
    bio: [
      "Cristóbal Rodríguez is a scholar of Educational Leadership and Policy Studies with deep experience in advocacy, educational equity, and Latino/a/x student success. His research and leadership reflect culturally responsive leadership and systemic reform.",
    ],
    panelists: [
      {
        name: "Chris Soto",
        title:
          "Senior Advisor to the 12th U.S. Secretary of Education, Miguel Cardona",
        photo: "https://ucea.org/photos/UCEA1758663388_Chris_Soto.jpg",
        bio: "Chris Soto has served at multiple levels of government and nonprofit sectors, including as a Connecticut state legislator and founder of Higher Edge, a college-access nonprofit.",
      },
      {
        name: "Melody Gonzales",
        title:
          "2021–2025 Executive Director, White House Initiative for Advancing Educational Equity, Excellence & Economic Opportunity for Hispanics",
        photo: "https://ucea.org/photos/UCEA1758663389_Melody_Gonzales.png",
        bio: "Melody brings federal, state, and union-based experience to her current leadership role in the Biden administration. Her policy advocacy spans education equity, interagency collaboration, and Latino representation.",
      },
      {
        name: "Ana María García Blanco",
        title:
          "2022–2025 White House Commissioner, Executive Director, Instituto Nueva Escuela",
        photo:
          "https://ucea.org/photos/UCEA1758663389_Ana_Mara_Garca_Blanco.jpg",
        bio: "An educator and Montessori advocate, Ana María has transformed dozens of Puerto Rican public schools through community-driven, justice-centered governance and pedagogy.",
      },
      {
        name: "Havidán Rodríguez",
        title:
          "2022–2025 White House Commissioner, President, University at Albany (SUNY)",
        photo: "https://ucea.org/photos/UCEA1758663389_Havidn_Rodrguez.jpg",
        bio: "As the first Hispanic president of a SUNY four-year institution, Dr. Rodríguez leads equity-focused innovations in research, disaster resilience, and Latino/a student success.",
      },
      {
        name: "Andrea Zayas",
        title:
          "2022–2025 White House Commissioner, Chief of Collaboration & Partnerships, National Alliance for Public Charter Schools",
        photo: "https://ucea.org/photos/UCEA1758663389_Andrea_Zayas.png",
        bio: "Andrea Zayas is a systems thinker and education equity advocate with leadership experience in Boston Public Schools, the NYC Department of Education, and the nonprofit sector.",
      },
    ],
    pdf: "https://www.ucea.org/docs/PolicyandPolitics_in_PR_091725.pdf",
    date: "Friday, November 21, 2025",
    time: "1:20 PM – 2:30 PM",
    location: "San Juan 1",
  },
];

export default function ResilienceFocusedSchedule() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Policy and Politics and the Undermining of Public Education in Puerto Rico" />

      <SectionWrapper>
        <SectionContent>
          This year’s UCEA Convention features a timely and powerful special
          session that explores how public K–12 and higher education in Puerto
          Rico have been undermined by political and systemic forces. Drawing on
          the 2024 White House Commission visit to the island and ongoing
          federal advocacy efforts, this interactive session will feature
          members of the Biden Administration and White House Commissioners who
          will discuss challenges such as centralized political control over
          school leadership, privatization of education funding, and significant
          losses in public school enrollment and staffing. While Puerto Rico
          serves as a warning sign for education policy across the U.S., the
          session also offers hope through examples of resilient organizing,
          public partnerships, and policy recommendations. Participants will
          gain insights into the broader implications for educational equity and
          governance nationwide.
          {/* Download Button at bottom */}
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

          <ul className="space-y-14">
            {sessions.map((s, index) => (
              <li key={index} className="text-base md:text-lg text-gray-900">
                <p className="font-bold text-lg mb-1">{s.title}</p>
                <p className="italic mb-3 whitespace-pre-line">
                  {s.description}
                </p>

                {/* Facilitators */}
                {s.photo &&
                  !s.panelists &&
                  (Array.isArray(s.photo) ? (
                    <div className="flex flex-col md:flex-row gap-6 mb-3">
                      {s.photo.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={s.facilitator?.split(", ")[i]}
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
                  ))}

                {/* Bios */}
                {s.bio &&
                  !s.panelists &&
                  (Array.isArray(s.bio) ? (
                    s.bio.map((b, i) => (
                      <p key={i} className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">
                          {s.facilitator.split(", ")[i]}:
                        </span>{" "}
                        {b}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-700 mb-3">
                      <span className="font-semibold">{s.facilitator}:</span>{" "}
                      {s.bio}
                    </p>
                  ))}

                {/* Panelists (e.g., Special Session 3) */}
                {s.panelists && (
                  <div className="mt-4 space-y-6">
                    {s.panelists.map((p, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="w-24 h-24 object-cover rounded shadow"
                        />
                        <div>
                          <p className="font-semibold">{p.name}</p>
                          <p className="text-sm italic">{p.title}</p>
                          <p className="text-sm text-gray-700 mt-1">{p.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
