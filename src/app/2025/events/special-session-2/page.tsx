"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl =
  "https://www.ucea.org/docs/OpeningResilience_combined111425.pdf";
const downloadText = "📄 Download Full PDF";

// ---------------- WORKSHOP DATA ---------------- //

const workshops = [
  {
    title:
      "Workshop 1—Intergenerational Leadership in Action: Practical Strategies for Equity and Community Collaboration",
    datetime: "Friday, November 21     8:00–9:10 a.m.",
    room: "San Juan 1",
    session: "Session 126",
    description: `
This interactive workshop explores intergenerational organizing as a pathway to educational equity and leadership resilience. Cofacilitated with a youth leader, we will draw on case studies of youth and family leadership to highlight the promise and challenges of building authentic, community-centered spaces. Grounded in a scholar–mother praxis—where the roles of caregiver and scholar are intertwined—we surface how intergenerational relationships shape leadership and justice work.

Participants will examine how adultism and deficit perspectives inhibit authentic partnerships and engage with hands-on tools, including a bridge-building activity and a family–community engagement project that can be adapted for practice or preparation courses. These activities invite reflection on positionality and provide strategies for transforming adult-centered practices into intergenerational coalitions. Attendees will leave with practical tools and frameworks to lead alongside youth, families, and communities in building resilience through collaboration.
`,
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Katherine_C._Rodela.png",
      "https://ucea.org/photos/UCEA1758662459_Rudolfo_Rudy_David_Rodela_Duncan.png",
    ],
    bio: [
      `Katherine C. Rodela is associate professor and department chair of Educational Leadership and Sport Management at Washington State University. As a third-generation Mexican American and first-generation college student, her research, teaching, and leadership center family, youth, and community voices as vital to advancing equity and justice in PK–20 education. Her scholarship draws on scholar–mother praxis, intertwining caregiving and scholarship to envision educational leadership as collaborative, justice-oriented, and grounded in community.`,
      `Rudolfo “Rudy” David Rodela Duncan is a ninth-grade student leader in Portland Public Schools. He created Lent Leopard Leaders, the district’s first elementary, youth-led leadership group, and now serves as cochair of Portland Public Schools’ Racial Equity and Social Justice Community Advisory Committee, where he is one of only three student representatives. Rudy comes from a multiracial family with a deep history of public service and social justice activism and identifies as Latino, Black, and Jewish. Outside of leadership, he enjoys playing saxophone, producing music, drawing, and competing in golf and lacrosse.`,
    ],
  },
  {
    title:
      "Workshop 2—Equity, Resilience, and Community Building Conversations",
    datetime: "Friday, November 21     2:40–3:50 p.m.",
    room: "Bahia 1",
    session: "Session 174",
    description: `
Attendees will gain a practical understanding of how culturally responsive leadership, race-conscious caring, and trauma-informed resilience shape inclusive school environments. The session explores real-world examples from Marquez Elementary in Chicago, such as inclusive scheduling, family engagement approaches, and data-informed coaching, and encourages reflection and collaborative problem-solving.

This prepares participants to apply concrete, research-informed leadership actions in their own contexts to foster resilience, affirm identity, and sustain an equitable school culture. They will participate in hands-on activities, including case study discussions and protocol role-plays, to identify structural changes and daily practices that can increase equity and resilience building. Concrete takeaways include two actionable strategies for increasing equity and building classroom and school-wide community, techniques for reflective practice and staff coaching, and tools for measuring both the short- and long-term impacts of equity-driven initiatives on student engagement and achievement.
`,
    photo: [
      "https://ucea.org/photos/UCEA1763348069_Dr._Ariel_Correa_-_headshot_-_July_2024.jpeg",
    ],
    bio: [
      `Ariel Correa, prior to leading Marquez Elementary School, was the Director of Education and Principal for Innovations Academy and Streamwood Behavioral Healthcare System (SBHS). While at SBHS, he focused on elevating teaching and learning through practices that relied on a trauma-informed care model to help SBHS evolve as a premier provider of academic, mental, and behavioral health services. Before joining SBHS, Correa was a principal and teacher with School District U-46 where he forged a proven track record in dual language programming and positive gains in scholar achievement.

Dr. Correa was previously with the Chicago Public Schools where he served as a principal and assistant principal of Cesar E. Chavez Multicultural Academic Center. He was also a Spanish teacher at both Lincoln Park High School in Chicago and Prairie Ridge High School in Crystal Lake. He earned his EdD in Urban School Leadership and holds a master’s in Education, both from University of Illinois at Chicago. He obtained his BA in Spanish Language and Literature from Northern Illinois University.`,
    ],
  },
  {
    title:
      "Workshop 3—Scholarship in Action: A Workshop on Building and Sustaining Research–Practitioner Partnerships",
    datetime: "Friday, November 21     4:00–5:10 p.m.",
    room: "San Juan 1",
    session: "Session 205",
    description: `
This capacity-building workshop will examine both the possibilities and challenges of forming strong partnerships between academic researchers and educational practitioners, especially when engaging with politically contested topics such as LGBTQ+ inclusion. Drawing on real-world examples and lessons learned from collaborative work with school districts and community organizations, we will explore strategies for initiating and sustaining partnerships that are grounded in trust, mutual benefit, and shared goals.

The workshop will also address common barriers—including institutional constraints, policy climates, and differing timelines and priorities—and offer practical tools for navigating these tensions. Participants will leave with a clearer understanding of how to approach partnership-building and how to frame their work in ways that resonate with practitioners while still maintaining scholarly rigor.
`,
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Mollie_McQuillan.png",
    ],
    bio: [
      `Mollie McQuillan is an associate professor at the University of Wisconsin–Madison's Department of Educational Leadership and Policy Analysis. Drawing on their background as a public school teacher, Dr. McQuillan investigates how educational policies, leaders, and organizational practices shape school climate and health, particularly for LGBTQ+ populations.`,
    ],
  },
  {
    title:
      "Workshop 4—Building Resilient Systems: Being Resilient Leaders",
    datetime: "Saturday, November 22     8:00–9:10 a.m.",
    room: "San Juan 8",
    session: "Session 231a",
    description: `
This workshop will focus on leaders’ resilience, well-being, and humanity, as they stand in the epicenter of community, bridging the expanse between the imperfect and vulnerable self and the public nature of skilled and effective leadership. Through a series of reflections and exercises, participants will gain and enhance strategies for supporting themselves and others, to do effective work, nurture relationships, and build more equitable systems.
`,
    photo: [
      "https://ucea.org/photos/UCEA1760318292_Radd_Headshot.jpg",
    ],
    bio: [
      `Sharon Radd is Professor of Organizational Leadership at St. Catherine University. Her research examines and re-envisions leader development toward more equitable, just, and humane leadership, organizations, and systems.`,
    ],
  },
  {
    title:
      "Workshop 5—Seizing the Moment: Policy Windows, Policy Change, and Building Resilient Education Systems",
    datetime: "Saturday, November 22     10:40–11:50 a.m.",
    room: "San Juan 1",
    session: "Session 249",
    description: `
Periods of crisis often expose both the vulnerabilities and the possibilities within education systems. These moments also open “policy windows”—unique opportunities to reimagine and reshape education policy in ways that can have lasting impact.

This interactive 70-minute workshop will explore the current landscape of education policy during times of disruption and uncertainty, and how leaders and advocates can leverage these moments for meaningful change. Facilitators will briefly frame the conversation with examples of how crises create space for reform, then guide participants through activities that encourage reflection and dialogue about coalition-building, partnership development, and sustaining shared values.

Together, participants will consider strategies for using the present policy window to pursue common goals and strengthen resilience in education systems, ensuring that equity, collaboration, and long-term vision remain at the center of reform efforts.
`,
    photo: [
      "https://ucea.org/photos/UCEA1758662459_Casey_D._Cobb.png",
      "https://ucea.org/photos/UCEA1758662458_Maria_E._Hyler.png",
      "https://ucea.org/photos/UCEA1758662458_Cathy_Yun.png",
    ],
    bio: [
      `Casey D. Cobb is the Raymond Neag Professor of Educational Policy at the Neag School of Education at the University of Connecticut. Dr. Cobb is a National Education Policy Center Fellow and a member of the Research Advisory Panel for the National Coalition on School Diversity. His current research interests include policies on school choice, accountability, and school reform, where he examines the implications for equity and educational opportunity.`,
      `Maria E. Hyler serves as the director of the Learning Policy Institute’s Washington, DC, office. She directs the Educator Preparation Laboratory (EdPrepLab) in partnership with Bank Street Graduate School of Education. EdPrepLab works to transform educator preparation through alignment of research, practice, and policy.`,
      `Cathy Yun is a senior researcher at the Learning Policy Institute and deputy director of the EdPrepLab network. Prior to joining LPI, she served as associate professor and department chair at California State University, Fresno, leading continuous improvement efforts in teacher preparation and partnering with local communities to promote policies that support children, families, and educators.`,
    ],
  },
];

// ---------------- PAGE COMPONENT ---------------- //

export default function ResilienceWorkshopsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Resilience-Focused Capacity-Building Workshops" />

      {/* PDF BUTTON */}
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

      {/* WORKSHOP LIST */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-6">
            Featured Workshop Sessions
          </h3>

          {workshops.map((s, index) => (
            <div key={index} className="mb-12 text-base md:text-lg text-gray-900">
              {/* Title */}
              <p className="font-bold text-lg mb-1 whitespace-pre-line">
                {s.title}
              </p>

              {/* Date/Room */}
              <p className="text-sm text-gray-600 italic mb-1">
                {s.datetime} &nbsp;&nbsp; • &nbsp;&nbsp;
                <span className="font-semibold">{s.room}</span>
              </p>

              {/* Session */}
              <p className="text-sm text-gray-600 mb-3">{s.session}</p>

              {/* Description */}
              <p className="italic mb-4 whitespace-pre-line">{s.description}</p>

              {/* Photos */}
              {Array.isArray(s.photo) ? (
                <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-3">
                  {s.photo.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="w-36 h-36 object-cover rounded shadow"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={s.photo}
                  className="w-36 h-36 object-cover rounded shadow mb-3"
                />
              )}

              {/* Bios */}
              {s.bio.map((bioText, i) => (
                <p key={i} className="text-sm text-gray-700 mb-3 whitespace-pre-line">
                  {bioText}
                </p>
              ))}
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
