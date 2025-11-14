"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const pdfUrl = "https://www.ucea.org/docs/WallaceHalfPage111325.pdf";
const downloadText = "📄 Download Full PDF";

// --- Session Info ---
const wallaceSession = {
  day: "Friday, November 21, 2025",
  events: ["2:40 – 3:50 p.m. | UCEA–Wallace Foundation Symposium on Educational Leadership"],
};

const symposium = {
  title: "UCEA–Wallace Foundation Symposium on Educational Leadership: Relationships Matter",
  subtitle: "Improving Principal Preparation Through Equity-Focused District Partnerships",
  description: `
How can districts and leadership preparation programs partner to develop sustainable, equity-centered pipelines? 
How are these partnerships shaping district and preparation program improvement?

This symposium features the work of school districts and UCEA-member university partners who are part of the Equity Centered Pipeline Initiative (ECPI). 
Launched by The Wallace Foundation, ECPI partners eight large school districts and local university preparation programs. Their collective goal is to co-develop comprehensive, aligned pipelines that produce principals who advance educational equity.

Our conversation will explore how districts and preparation programs are working to recruit, prepare, develop, and support the next generation of school principals. As ECPI nears its conclusion, we’ll use this symposium to reflect on lessons learned with colleagues who were deeply involved in these challenging but rewarding pipeline design efforts.
  `,
  location: "Sheraton Puerto Rico Resort & Casino: Miramar 4",
};

// --- Facilitator ---
const facilitator = {
  name: "Rotunda Floyd-Cooper",
  affiliation: "The Wallace Foundation",
  photo: "https://ucea.org/photos/UCEA1763088006_Rotunda_Floyd-Cooper.png",
  bio: "Rotunda Floyd-Cooper, EdD, leads The Wallace Foundation education leadership unit and the interdisciplinary education leadership strategy team and oversees the ECPI.",
};

// --- Panelists ---
const panelists = [
  {
    name: "Sharene Dixon",
    affiliation: "San Antonio Independent School District",
    photo: "https://ucea.org/photos/UCEA1763088006_Sharene_Dixon.jpg",
    bio: "Dr. Sharene L. Dixon, Instructional Superintendent of Teaching, Learning, and Leadership at San Antonio ISD and Lecturer in the USLC graduate program at UTSA, is an accomplished instructional leader with over 25 years of experience. She empowers school leaders; drives equity-centered improvement; and advances teaching, learning, and student success districtwide.",
  },
  {
    name: "Juan Manuel Niño",
    affiliation: "University of Texas at San Antonio",
    photo: "https://ucea.org/photos/UCEA1763088006_Juan_Manuel_Nio.png",
    bio: "Juan Manuel Niño, PhD, is a professor of Educational Leadership and Policy Studies at the University of Texas at San Antonio. His public educator experience includes secondary science teacher, ESL teacher, athletic coach, campus, and district leader. His primary research focuses on school leadership for school improvement.",
  },
  {
    name: "Rebecca Thessin",
    affiliation: "George Washington University",
    photo: "https://ucea.org/photos/UCEA1763088006_Rebecca_Thessin.jpg",
    bio: "Rebecca A. Thessin is an associate professor of Educational Administration at the George Washington University Graduate School of Education and Human Development. She is principal investigator for GWU on The Wallace Foundation’s ECPI.",
  },
  {
    name: "Shannon Waite",
    affiliation: "Howard University",
    photo: "https://ucea.org/photos/UCEA1763088006_Shannon_Waite.jpg",
    bio: "Shannon R. Waite, EdD, is an assistant professor in the Department of Educational Leadership and Policy Studies in the School of Education at Howard University. Dr. Waite is the principal investigator leading her department’s partnership with DC Public Schools’ ECPI funded by The Wallace Foundation.",
  },
  {
    name: "Tynika Young-Aleibar",
    affiliation: "DC Public Schools",
    photo: "https://ucea.org/photos/UCEA1763088006_Tynika_Young-Aleibar.png",
    bio: "Dr. Young-Aleibar has been a teacher and school leader in DCPS and is project director for the Equity-Centered Pipeline Initiative for DCPS.",
  },
];

export default function WallaceSymposiumPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="UCEA–Wallace Foundation Symposium" />

      {/* Intro + PDF */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
            {wallaceSession.day}
          </h3>
          <ul className="space-y-2 mb-10">
            {wallaceSession.events.map((event, idx) => {
              const [time, content] = event.split(" | ");
              return (
                <li
                  key={idx}
                  className="text-base md:text-lg text-gray-800 pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-600 before:-translate-x-4"
                >
                  <span className="font-medium">{time} | </span>
                  {content}
                </li>
              );
            })}
          </ul>

          <p className="text-lg font-medium mb-2 italic">{symposium.subtitle}</p>
          <p className="text-sm text-gray-600 mb-1">Session Location</p>
          <p className="text-sm text-gray-600 mb-6 font-semibold">{symposium.location}</p>

          <p className="whitespace-pre-line leading-relaxed mb-8 text-gray-800">
            {symposium.description}
          </p>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
          >
            {downloadText}
          </a>
        </SectionContent>
      </SectionWrapper>

      {/* Facilitator */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl font-semibold text-[#00334e] mb-4">Facilitator</h3>
          <div className="flex gap-6 items-start mb-10">
            <img
              src={facilitator.photo}
              alt={facilitator.name}
              className="w-32 h-32 rounded object-cover shadow"
            />
            <div>
              <p className="font-bold">{facilitator.name}</p>
              <p className="text-sm text-gray-700 mb-2">{facilitator.affiliation}</p>
              <p className="text-sm text-gray-700">{facilitator.bio}</p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Panelists */}
      <SectionWrapper>
        <SectionContent>
          <h3 className="text-xl font-semibold text-[#00334e] mb-6">Panelists</h3>
          <ul className="space-y-10">
            {panelists.map((p, i) => (
              <li key={i} className="flex gap-6 items-start">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-32 h-32 rounded object-cover shadow"
                />
                <div>
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-gray-700 mb-2">{p.affiliation}</p>
                  <p className="text-sm text-gray-700">{p.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
