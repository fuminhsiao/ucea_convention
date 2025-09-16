"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const sessionDate = {
  day: "Saturday, November 22, 2025",
  events: [
    "9:20 – 10:30 a.m. | Capacity-Building for Communication & Engagement",
  ],
};

const pdfUrl =
  "https://www.ucea.org/docs/UCEA_Convention_Capacity_Building_for_Communication_090925.pdf";
const downloadText = "📄 Download Full PDF";

const sessions = [
  {
    title:
      "Invisibilized but Not Erased: Leveraging Invisibility as a Strategic Power for Educational Justice Engagement",
    description:
      "This interactive session supports P–12 and higher education leaders in navigating social justice issues amid authoritarian political climates. Participants will explore how to leverage invisibility as quiet resistance to affirm students’ rights.",
    facilitator: "Daniel D. Liou, Arizona State University",
    photo: "https://ucea.org/photos/UCEA1757085462_Daniel_D._Liou.png",
    bio: "Daniel D. Liou is an associate professor of education leadership at Arizona State University. As a community-based researcher and former school board president, Daniel’s scholarship explores the sociological manifestations of expectations in the organization of classrooms, schools, and society, contextualizing educational practices in relational, curricular and institutional terms.",
  },
  {
    title:
      "Strengthening Your Public Communication and Engagement Skills to Educate, Communicate About, and Challenge Issues of Inequity Through Blogs and Social Media",
    description:
      "Learn how to use blogs, podcasts, and social media to educate and advocate around equity. This hands-on session explores platform building, crafting attention-getting stories, and strategies for public impact.",
    facilitator: "Julian Vasquez Heilig, Western Michigan University",
    photo: "https://ucea.org/photos/UCEA1757085461_Julian_Vasquez_Heilig.jpg",
    bio: "Julian Vasquez Heilig serves as a Professor of Educational Leadership, Research, and Technology at Western Michigan University. He launched and has utilized the website 'Cloaking Inequity' over the last decade to educate, communicate about, and challenge issues of educational inequity—with over 1.5 million views and readership in more than 200 countries.",
  },
  {
    title:
      "Strengthening Communication and Engagement Skills When Perspectives and Worldviews Collide: Lessons and Approaches From the Book I Never Thought of it That Way by Mónica Guzmán",
    description:
      "This interactive session draws on Guzmán’s book to help participants build communication skills across difference. Through hands-on engagement, participants will gain insights and confidence to navigate divided perspectives constructively.",
    facilitator: "Martin Scanlan, Boston College",
    photo: "https://ucea.org/photos/UCEA1757085462_Martin_Scanlan.jpg",
    bio: "Martin Scanlan is a professor in the Department of Educational Leadership and Higher Education in the Lynch School of Education at Boston College. His work focuses on organizing schools to welcome all students, particularly those from culturally and linguistically diverse backgrounds and students with special needs.",
  },
  {
    title:
      "Strengthening Your Public Communication and Engagement Skills to Educate, Communicate, and Challenge Issues of Inequity—Writing Op Eds and Engaging With the Media",
    description:
      "Explore how to write op-eds and communicate with media to share research and challenge injustice. This session includes practical guidance on outlet selection, editorial relationships, and preparing for interviews.",
    facilitator: "David DeMatthews, University of Texas at Austin",
    photo: "https://ucea.org/photos/UCEA1757085461_David_DeMatthews.jpg",
    bio: "David DeMatthews is the W.K. Kellogg Endowed Professor in the Department of Educational Leadership and Policy at The University of Texas at Austin. His research focuses on district and school leadership, particularly in relation to student inclusion and equity, as well as superintendent/principal stress and turnover.",
  },
  {
    title:
      "Scholarship in Action: Crafting Research Conversations With Practitioners",
    description:
      "Learn how to write for practitioner-focused publications and engage non-academic audiences. This workshop features strategies for translating academic work into formats accessible to educators and policymakers.",
    facilitator: "Ann M. Ishimaru & Decoteau J. Irby",
    photo: [
      "https://ucea.org/photos/UCEA1757085461_Ann_M._Ishimaru.jpg",
      "https://ucea.org/photos/UCEA1757085461_Decoteau_J._Irby.jpg",
    ],
    bio: [
      "Ann M. Ishimaru is the Killinger Endowed Chair and Professor at the University of Washington College of Education. She directs the Just Educational Leadership Institute and focuses on community-engaged research to build equitable collaborations with families and communities.",
      "Decoteau J. Irby is a professor at the University of Illinois Chicago and leads the Brothers Teaching Initiative. His work advances equity in education for Black and Brown youth through leadership, scholarship, and practitioner partnerships.",
    ],
  },
  {
    title: "Fighting Back—Responding to Crisis and Slander on Social Media",
    description:
      "This session offers strategies for navigating disinformation and online attacks while fostering resilience and community trust. Based on real experiences, it equips leaders to respond effectively without compromising core values.",
    facilitator: "Rosa Rivera-McCutchen, CUNY Hunter College",
    photo: "https://ucea.org/photos/UCEA1757085462_Rosa_Rivera-McCutchen.png",
    bio: "Rosa Rivera-McCutchen is a Professor of Administration & Supervision at CUNY Hunter College. Her research centers urban school leaders who enact 'radical care' by foregrounding antiracism and equity. She draws on her own experiences in NYC public schools as both student and educator.",
  },
];

export default function CapacityBuildingSchedule() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Capacity-Building for Communication & Engagement" />
      <SectionWrapper>
        <SectionContent>
          In the UCEA Call for Proposals, the Convention planning team
          communicated our intention to offer Convention experiences that build
          communication and advocacy skills. To deliver on this intention, we
          have converted one of this year&apos;s four general into a small set of
          capacity-building sessions. These sessions are intended to be
          instructive, interactive, and hands-on with a goal of building a
          specific communication capacity. These sessions will occur on
          Saturday, November 22 from 9:20-10:30 am. Each session will be located
          in a separate room. All UCEA convention participants will have the
          ability to select one of these sessions to join on Saturday morning.
          Please mark your calendars now and join us on Saturday morning!
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
            {sessionDate.day}
          </h3>
          <ul className="space-y-2 mb-10">
            {sessionDate.events.map((event, idx) => {
              const [time, content] = event.split(" | ");
              return (
                <li
                  key={idx}
                  className="text-base md:text-lg text-gray-800 pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-600 before:-translate-x-4"
                >
                  <span className="font-medium">{time} | </span>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>

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
                        alt={s.facilitator.split(" & ")[i]}
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
                        {s.facilitator.split(" & ")[i]}:
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
