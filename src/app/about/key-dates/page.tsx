"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

const schedule = [
  {
    day: "Wednesday, November 19, 2025",
    events: [
      "2:45 – 6:00 p.m. | Pre-Convention Workshops, CSLEE Work Session",
      "5:00 – 5:30 p.m. | Jackson Scholars Network Research Convocation",
      "5:00 – 6:00 p.m. | Graduate Student Summit Opening General Session",
      "5:40 – 6:20 p.m. | Julie Laible Memorial Session for New UCEA Jackson Scholars",
      "6:30 – 7:30 p.m. | Plenum & Graduate Student Reception",
    ],
  },
  {
    day: "Thursday, November 20, 2025",
    events: [
      "7:15 – 8:00 a.m. | Breakfast for GSS Participant and Jackson Scholars",
      "7:30 – 10:45 a.m. | UCEA Plenary Session & Breakfast",
      "8:00 – 10:50 a.m. | Pre-Convention Workshops, GSS Research Presentations, JSN Research & Feedback Sessions",
      "11:00 – 12:15 p.m. | Opening General Session",
      "12:30 – 3:30 p.m. | UCEA Awards Luncheon or Open Lunch Time",
      "2:15 – 3:30 p.m. | Research Presentations, GSS Programming",
      "3:45 – 5:00 p.m. | Research Presentations, GSS Research Presentations",
      "5:15 – 6:30 p.m. | Research Presentations, GSS Research Presentations",
      "6:30 – 7:15 p.m. | Research Action Networks (RANs) & UCEA Partners Business Meetings",
      "7:30 – 8:30 p.m. | Reception in Honor of Past UCEA Presidents",
    ],
  },
  {
    day: "Friday, November 21, 2025",
    events: [
      "8:00 – 9:10 a.m. | Research Presentations, GSS Research Presentations",
      "9:20 – 10:30 a.m. | General Session II",
      "10:40 – 11:50 a.m. | Research Presentations, GSS Research Presentations",
      "12:00 – 1:10 p.m. | Open Lunch Time, Research Action Networks (RANs) Business Meetings",
      "1:20 – 2:30 p.m. | Research Presentations, GSS Research Presentations",
      "2:40 – 3:50 p.m. | Research Presentations, GSS Programming, The Wallace Foundation Symposium",
      "4:00 – 5:10 p.m. | Research Presentations, GSS Research Presentations",
      "5:30 – 6:30 p.m. | General Session III: UCEA Presidential Address",
      "7:00 – 8:00 p.m. | Barbara L. Jackson Scholars Recognition Ceremony",
      "8:00 – 9:00 p.m. | Barbara L. Jackson Scholars Reception",
    ],
  },
  {
    day: "Saturday, November 22, 2025",
    events: [
      "8:00 – 9:10 a.m. | Research Presentations",
      "9:20 – 10:30 a.m. | Community-Oriented Capacity Building Sessions",
      "10:40 – 11:50 a.m. | Research Presentations",
      "12:00 – 1:10 p.m. | Open Lunch Time, Research Action Networks (RANs) Business Meetings",
      "1:20 – 2:30 p.m. | Research Presentations",
      "2:30 – 3:00 p.m. | Afternoon Refreshments & Networking",
      "3:00 – 4:10 p.m. | Research Presentations",
      "4:20 – 5:30 p.m. | Research Presentations",
      "TBA | UCEA Annual Banquet",
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Key Dates" />

      <SectionWrapper>
        <SectionContent>
          {schedule.map((day, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
                {day.day}
              </h3>
              <ul className="space-y-2">
                {day.events.map((event, idx) => {
                  const targetText = "Community-Oriented Capacity Building Sessions";
                  const [time, content] = event.split(" | ");

                  return (
                    <li
                      key={idx}
                      className="text-base md:text-lg text-gray-800 pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-600 before:-translate-x-4"
                    >
                      <span className="font-medium">{time} | </span>
                      {content === targetText ? (
                        <a
                          href="https://www.ucea.org/docs/UCEA_Convention_Capacity_Building_for_Communication_082525.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-600 hover:text-blue-800"
                        >
                          {targetText}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
