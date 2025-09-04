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

const sessions = [
  {
    title: "Invisibilized but Not Erased",
    description:
      "Leverage invisibility as a quiet but powerful resistance in authoritarian climates.",
    facilitator: "Daniel D. Liou, Arizona State University",
  },
  {
    title: "Public Engagement Through Blogs & Social Media",
    description:
      "Build an online platform, craft compelling stories, and extend your research impact.",
    facilitator: "Julian Vasquez Heilig, Western Michigan University",
  },
  {
    title: "Communicating Across Worldviews",
    description:
      "Explore lessons from *I Never Thought of It That Way* to build bridges through conversation.",
    facilitator: "Martin Scanlan, Boston College",
  },
  {
    title: "Writing Op-Eds & Media Communication",
    description:
      "Learn how to pitch, draft, and deliver your message through mainstream media.",
    facilitator: "David DeMatthews, University of Texas at Austin",
  },
  {
    title: "Scholarship in Action for Practitioners",
    description:
      "Translate your research into practitioner-friendly formats (e.g., *Education Week*, *Kappan*).",
    facilitator: "Ann M. Ishimaru & Decoteau J. Irby",
  },
];

export default function CapacityBuildingSchedule() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Capacity-Building for Communication & Engagement" />
<SectionWrapper>
  <SectionContent>
    This year’s convention is being designed as a space for the presentation of research and also for participant learning and capacity-building. In the UCEA call for proposals, the convention planning team communicated our intention to offer convention experiences that build communication and advocacy skills. To deliver on this intention, we have converted one of the four conference general sessions into a small set of six invited capacity building sessions—all focused on a range of communication-oriented capacity building issues. These sessions are intended to be instructive, interactive, and hands-on with a goal of building a specific communication capacity.  We hope you will join one of the following sessions on Saturday morning!
  </SectionContent>
</SectionWrapper>
      <SectionWrapper>
        <SectionContent>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
              {sessionDate.day}
            </h3>
            <ul className="space-y-2">
              {sessionDate.events.map((event, idx) => {
                const [time, content] = event.split(" | ");
                return (
                  <li
                    key={idx}
                    className="text-base md:text-lg text-gray-800 pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-600 before:-translate-x-4"
                  >
                    <span className="font-medium">{time} | </span>
                    <a
                      href="https://www.ucea.org/docs/UCEA_Convention_Capacity_Building_for_Communication_082525.pdf"
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
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4">
            Featured Workshop Sessions
          </h3>
          <ul className="space-y-6">
            {sessions.map((s, index) => (
              <li key={index} className="text-base md:text-lg text-gray-900">
                <p className="font-bold">{s.title}</p>
                <p className="italic">{s.description}</p>
                <p className="text-sm text-gray-700 mt-1">Facilitator: {s.facilitator}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="https://www.ucea.org/docs/UCEA_Convention_Capacity_Building_for_Communication_082525.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              📄 Download Full PDF
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
