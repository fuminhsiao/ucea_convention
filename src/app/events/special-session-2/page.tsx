"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl =
  "https://www.ucea.org/docs/Capacity_Building_for_Communication_101325.pdf";
const downloadText = "📄 Download Full PDF";

const workshops = [
  {
    title:
      "Intergenerational Leadership in Action: Practical Strategies for Equity and Community Collaboration",
    datetime: "Friday, November 21 | 8:00–9:10 AM",
    room: "San Juan 1",
    description:
      "This interactive session explores intergenerational organizing as a pathway to educational equity and leadership resilience. Participants will engage with hands-on tools that can be adapted for practice or preparation courses. These activities invite reflection on positionality and provide strategies for transforming adult-centered practices into intergenerational coalitions.",
    facilitator:
      "Katherine C. Rodela, Washington State University; Rudolfo “Rudy” David Rodela Duncan, Portland Public Schools",
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Katherine_C._Rodela.png",
      "https://ucea.org/photos/UCEA1758662459_Rudolfo_Rudy_David_Rodela_Duncan.png",
    ],
    bio: [
      "Katherine C. Rodela is associate professor and department chair at Washington State University. Her research centers family, youth, and community voices to advance equity and justice in PK–20 education.",
      "Rudolfo “Rudy” David Rodela Duncan is a ninth-grade student leader in Portland Public Schools. He created the district’s first elementary youth-led group and serves as cochair of the district’s Racial Equity and Social Justice Community Advisory Committee.",
    ],
  },
  {
    title:
      "Scholarship in Action: A Workshop on Building and Sustaining Research–Practitioner Partnerships",
    datetime: "Friday, November 21 | 4:00–5:10 PM",
    room: "San Juan 1",
    description:
      "This session examines strategies for initiating and sustaining research–practice partnerships, especially around politically contested topics like LGBTQ+ inclusion. Participants will gain tools for navigating tensions and maintaining scholarly rigor while collaborating with practitioners.",
    facilitator: "Mollie McQuillan, University of Wisconsin–Madison",
    photo: "https://ucea.org/photos/UCEA1758662459_Mollie_McQuillan.png",
    bio: "Mollie McQuillan is an associate professor at the University of Wisconsin–Madison. Their research investigates how policies and leaders shape school climate and health, particularly for LGBTQ+ populations.",
  },
  {
    title: "Building Resilient Systems: Being Resilient Leaders",
    datetime: "Saturday, November 22 | 8:00–9:10 AM",
    room: "San Juan 8",
    description:
      "This workshop will focus on leaders’ resilience, well-being, and humanity, as they stand in the epicenter of community, bridging the expanse between the imperfect and vulnerable self and the public nature of skilled and effective leadership. Through a series of reflections and exercises, participants will gain and enhance strategies for supporting themselves and others, to do effective work, nurture relationships, and build more equitable systems.",
    facilitator: "Sharon Radd, St. Catherine University",
    photo: "https://ucea.org/photos/UCEA1760318292_Radd_Headshot.jpg",
    bio: "Sharon Radd is Professor of Organizational Leadership at St Catherine University. Her research examines and re-envisions leader development toward more equitable, just, and humane leadership, organizations, and systems.",
  },
  {
    title:
      "Seizing the Moment: Policy Windows, Policy Change, and Building Resilient Education Systems",
    datetime: "Saturday, November 22 | 10:40–11:50 AM",
    room: "San Juan 1",
    description:
      "Periods of crisis can expose vulnerabilities and open unique 'policy windows' for systemic change. This session explores how education leaders can use these windows to build equity-focused, resilient systems.",
    facilitator:
      "Casey D. Cobb, University of Connecticut; Maria E. Hyler, Learning Policy Institute; Cathy Yun, Learning Policy Institute",
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

export default function CapacityBuildingSchedule() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Resilience-Focused Capacity-Building Workshops" />

      <SectionWrapper>
        <SectionContent>
          As part of UCEA’s commitment to resilience, these workshops provide
          hands-on learning to strengthen leadership and equity in education.
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

      {/* Featured Workshops */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-6">
            Featured Workshop Sessions
          </h3>

          {workshops.map((s, index) => (
            <div key={index} className="mb-10 text-base md:text-lg text-gray-900">
              <p className="font-bold text-lg mb-1">{s.title}</p>

              {/* Date / time / room */}
              <p className="text-sm text-gray-600 italic mb-1">
                {s.datetime} • <span className="font-semibold">{s.room}</span>
              </p>

              <p className="italic mb-2">{s.description}</p>

              {/* Photos */}
              {Array.isArray(s.photo) ? (
                <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-3">
                  {s.photo.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={s.facilitator.split(";")[i]?.trim()}
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

              {/* Bios */}
              {Array.isArray(s.bio) ? (
                s.bio.map((b, i) => (
                  <p key={i} className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">
                      {s.facilitator.split(";")[i]?.trim()}:
                    </span>{" "}
                    {b}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{s.facilitator}:</span> {s.bio}
                </p>
              )}
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
