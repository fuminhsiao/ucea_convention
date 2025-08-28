"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import { CircleDot } from "lucide-react"; // icon

const schedule = [
  {
    day: "Wednesday, November 19, 2025",
    events: [
      "14:45 – 18:00 | Pre-Convention Workshops, CSLEE Work Session",
      "17:00 – 17:30 | Jackson Scholars Network Research Convocation",
      "17:00 – 18:00 | Graduate Student Summit Opening General Session",
      "17:40 – 18:20 | Julie Laible Memorial Session for New UCEA Jackson Scholars",
      "18:30 – 19:30 | Plenum & Graduate Student Reception",
    ],
  },
  {
    day: "Thursday, November 20, 2025",
    events: [
      "07:15 – 08:00 | Breakfast for GSS Participant and Jackson Scholars",
      "07:30 – 10:45 | UCEA Plenary Session & Breakfast",
      "08:00 – 10:50 | Pre-Convention Workshops, GSS Research Presentations, JSN Research & Feedback Sessions",
      "11:00 – 12:15 | Opening General Session",
      "12:30 – 15:30 | UCEA Awards Luncheon or Open Lunch Time",
      "14:15 – 15:30 | Research Presentations, GSS Programming",
      "15:45 – 17:00 | Research Presentations, GSS Research Presentations",
      "17:15 – 18:30 | Research Presentations, GSS Research Presentations",
      "18:30 – 19:15 | Research Action Networks (RANs) & UCEA Partners Business Meetings",
      "19:30 – 20:30 | Reception in Honor of Past UCEA Presidents",
    ],
  },
  {
    day: "Friday, November 21, 2025",
    events: [
      "08:00 – 09:10 | Research Presentations, GSS Research Presentations",
      "09:20 – 10:30 | General Session II",
      "10:40 – 11:50 | Research Presentations, GSS Research Presentations",
      "12:00 – 13:10 | Open Lunch Time, Research Action Networks (RANs) Business Meetings",
      "13:20 – 14:30 | Research Presentations, GSS Research Presentations",
      "14:40 – 15:50 | Research Presentations, GSS Programming, The Wallace Foundation Symposium",
      "16:00 – 17:10 | Research Presentations, GSS Research Presentations",
      "17:30 – 18:30 | General Session III: UCEA Presidential Address",
      "19:00 – 20:00 | Barbara L. Jackson Scholars Recognition Ceremony",
      "20:00 – 21:00 | Barbara L. Jackson Scholars Reception",
    ],
  },
  {
    day: "Saturday, November 22, 2025",
    events: [
      "08:00 – 09:10 | Research Presentations",
      "09:20 – 10:30 | Community-Oriented Capacity Building Sessions",
      "10:40 – 11:50 | Research Presentations",
      "12:00 – 13:10 | Open Lunch Time, Research Action Networks (RANs) Business Meetings",
      "13:20 – 14:30 | Research Presentations",
      "14:30 – 15:00 | Afternoon Refreshments & Networking",
      "15:00 – 16:10 | Research Presentations",
      "16:20 – 17:30 | Research Presentations",
      "TBA | UCEA Annual Banquet",
    ],
  },
];

export default function SchedulePage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Schedule-At-A-Glance" />

      <SectionWrapper>
        <SectionContent>
          {schedule.map((day, index) => (
            <div key={index} className="mb-10">
              <h3 className="font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
                {day.day}
              </h3>
              <ul className="space-y-2">
                {day.events.map((event, idx) => {
                  const targetText =
                    "Community-Oriented Capacity Building Sessions";
                  const [time, content] = event.split(" | ");

                  return (
                    <li key={idx} className="flex items-start gap-2 text-gray-800">
                      <CircleDot className="mt-1 text-blue-600 min-w-[16px]" size={18} />
                      <div className="flex flex-wrap text-gray-800">
                        <span className="min-w-[85px] sm:min-w-[105px] font-medium whitespace-nowrap flex-shrink-0">
                          {time} |
                        </span>
                        {content === targetText ? (
                          <a
                            href="/events/special-session-1"
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                          >
                            {content}
                          </a>
                        ) : (
                          <span className="ml-1">{content}</span>
                        )}
                      </div>
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
