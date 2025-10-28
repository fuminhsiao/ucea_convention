"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import { CircleDot } from "lucide-react";

export default function SchedulePage() {
  const [showTipsInfo, setShowTipsInfo] = useState(false);

  const schedule = [
    {
      day: "Wednesday, November 19, 2025",
      events: [
        "14:45 – 18:00 | Pre-Convention Workshops, CSLEE Work Session",
        "16:00 – 17:00 | Tips and Tricks for New Attendees (More Info)",
        "17:00 – 17:30 | Jackson Scholars Network Research Convocation",
        "17:00 – 18:00 | Graduate Student Summit Opening General Session",
        "17:40 – 18:20 | Julie Laible Memorial Session for New UCEA Jackson Scholars",
        "18:30 – 19:30 | Plenum & Graduate Student Reception",
      ],
    },
    {
      day: "Thursday, November 20, 2025",
      events: [
        "07:15 – 08:00 | Breakfast for GSS Participants and Jackson Scholars",
        "07:30 – 10:45 | UCEA Plenary Session & Breakfast",
        "08:00 – 10:50 | Pre-Convention Workshops, GSS Research Presentations, JSN Research & Feedback Sessions",
        "11:00 – 12:15 | Opening General Session",
        "12:30 – 15:30 | UCEA Awards Luncheon (More Info) or Open Lunch Time",
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
        "18:00 – 21:00 | UCEA Annual Banquet (More Info)",
      ],
    },
  ];

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
                  const [time, contentRaw] = event.split(" | ");
                  const content = contentRaw?.trim();

                  // Define event link conditions
                  const isTips = content.includes("Tips and Tricks for New Attendees");
                  const isAwards = content.includes("UCEA Awards Luncheon");
                  const isBanquet = content.includes("UCEA Annual Banquet");
                  const isCapacity = content.includes(
                    "Community-Oriented Capacity Building Sessions"
                  );
                  const isGeneralSession = content.toLowerCase().includes("general session");

                  return (
                    <li key={idx} className="flex items-start gap-2 text-gray-800">
                      <CircleDot className="mt-1 text-blue-600 min-w-[16px]" size={18} />
                      <div className="flex flex-wrap text-gray-800">
                        <span className="min-w-[90px] sm:min-w-[110px] font-medium whitespace-nowrap flex-shrink-0">
                          {time} |
                        </span>

                        {/* Conditional linking */}
                        {isTips ? (
                          <button
                            onClick={() => setShowTipsInfo(true)}
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                          >
                            Tips and Tricks for New Attendees (More Info)
                          </button>
                        ) : isAwards ? (
                          <a
                            href="/events/awards-luncheon"
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                          >
                            UCEA Awards Luncheon (More Info)
                          </a>
                        ) : isBanquet ? (
                          <a
                            href="/events/banquet"
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                          >
                            UCEA Annual Banquet (More Info)
                          </a>
                        ) : isCapacity ? (
                          <a
                            href="/events/special-session-1"
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                          >
                            {content}
                          </a>
                        ) : isGeneralSession ? (
                          <a
                            href="/events/general-sessions/"
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

      {/* Modal for Tips and Tricks Info */}
      {showTipsInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl p-8 relative mx-4 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowTipsInfo(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#00334e]">
              Tips and Tricks for New Attendees
            </h2>
            <p className="text-lg mb-2">
              We are excited to welcome those who are attending the UCEA Convention
              for the first time! Join us for a special session on{" "}
              <strong>Wednesday, November 19 from 4:00–5:00 PM in Bahia 2</strong> for
              everyone who is a first-time attendee to the UCEA Convention.
            </p>
            <p className="text-lg mb-2">
              This session will be used to help you:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1 mb-3">
              <li>
                Learn about the various types of sessions that will occur during the convention
              </li>
              <li>Learn about special convention events that you should join</li>
              <li>
                Meet members of this year's convention planning team and executive committee
              </li>
              <li>
                Engage in networking activities with other first-time conference attendees
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
