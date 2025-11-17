"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import { CircleDot } from "lucide-react";

// ------------------------------
//   TYPE DEFINITIONS
// ------------------------------
type EventItem = {
  title: string;     // 顯示文字
  href?: string;     // 若有連結
  modal?: "tips";    // 若需要開 modal
};

type EventBlock = {
  time: string;      // "09:00 – 10:00"
  items: EventItem[]; // 同一時段的多個事件
};

type DaySchedule = {
  day: string;
  events: EventBlock[];
};

export default function SchedulePage() {
  const [showTipsInfo, setShowTipsInfo] = useState(false);

  // =========================
  //      UPDATED SCHEDULE
  // =========================
  const schedule: DaySchedule[] = [
    {
      day: "Monday, November 17, 2025",
      events: [
        {
          time: "09:00 – 17:00",
          items: [{ title: "UCEA Executive Committee Meeting" }],
        },
      ],
    },

    {
      day: "Tuesday, November 18, 2025",
      events: [
        {
          time: "09:00 – 17:00",
          items: [{ title: "UCEA Executive Committee Meeting" }],
        },
      ],
    },

    {
      day: "Wednesday, November 19, 2025",
      events: [
        {
          time: "09:00 – 12:00",
          items: [{ title: "UCEA Executive Committee Meeting" }],
        },
        {
          time: "14:00 – 18:00",
          items: [{ title: "Registration Desk open" }],
        },
        {
          time: "14:15 – 18:00",
          items: [
            { title: "Pre-Convention Workshops" },
            { title: "CSLEE Work Session" },
          ],
        },
        {
          time: "16:00 – 17:00",
          items: [
            {
              title:
                "Navigating Your First UCEA Convention: Tips and Tricks for New Attendees",
              modal: "tips",
            },
          ],
        },
        {
          time: "17:00 – 18:00",
          items: [{ title: "Graduate Student Summit (GSS) Opening General Session" }],
        },
        {
          time: "17:00 – 17:40",
          items: [{ title: "Julie Laible Memorial Session for New UCEA Jackson Scholars" }],
        },
        {
          time: "17:50 – 18:20",
          items: [{ title: "Jackson Scholars Network (JSN) Research Convocation" }],
        },
        {
          time: "18:30 – 19:30",
          items: [{ title: "Plenum & Graduate Student Reception" }],
        },
      ],
    },

    {
      day: "Thursday, November 20, 2025",
      events: [
        {
          time: "07:30 – 17:00",
          items: [{ title: "Registration Desk open" }],
        },
        {
          time: "07:15 – 08:00",
          items: [{ title: "Breakfast for GSS Participants and Jackson Scholars" }],
        },
        {
          time: "07:30 – 10:45",
          items: [{ title: "UCEA Plenary Session & Breakfast" }],
        },
        {
          time: "08:00 – 10:50",
          items: [
            { title: "Pre-Convention Workshops" },
            { title: "GSS Research Presentations" },
            { title: "JSN Research Symposium Sessions" },
          ],
        },
        {
          time: "11:00 – 12:15",
          items: [{ title: "Opening General Session",href: "/events/general-sessions", }],
        },
        {
          time: "12:30 – 14:00",
          items: [
            {
              title: "UCEA Awards Luncheon",
              href: "/events/awards-luncheon",
            },
            { title: "Open Lunch Time" },
          ],
        },
        {
          time: "14:15 – 15:30",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Programming" },
          ],
        },
        {
          time: "14:15 – 17:00",
          items: [{ title: "Researcher Development Program (RDP) Presentations" }],
        },
        {
          time: "15:45 – 18:30",
          items: [{ title: "Convention Sessions" }],
        },
        {
          time: "18:30 – 19:15",
          items: [{ title: "RANs & UCEA Partners Business Meetings" }],
        },
        {
          time: "19:30 – 20:30",
          items: [{ title: "Reception in Honor of Past UCEA Presidents" }],
        },
      ],
    },

    {
      day: "Friday, November 21, 2025",
      events: [
        {
          time: "07:30 – 17:00",
          items: [{ title: "Registration Desk open" }],
        },
        {
          time: "08:00 – 09:10",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Programming" },
            {
              title: "Resilience-Focused Capacity-Building Workshop 1",
              href: "/events/special-session-2",
            },
          ],
        },
        {
          time: "09:20 – 10:30",
          items: [
            { title: "General Session II",
              href: "/events/general-sessions",
            },
            
          ],
          
        },
        {
          time: "10:40 – 11:50",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Research Presentations" },
          ],
        },
        {
          time: "12:00 – 13:10",
          items: [
            { title: "Open Lunch Time" },
            { title: "GSS Programming" },
            { title: "RANs Business Meetings" },
          ],
        },
        {
          time: "13:20 – 14:30",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Research Presentations" },
          ],
        },
        {
          time: "14:40 – 15:50",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Research Presentations" },
            {
              title: "The Wallace Foundation Symposium",
              href: "/events/wallace-symposium",
            },
            {
              title: "Resilience-Focused Capacity-Building Workshop 2",
              href: "/events/special-session-2",
            },
          ],
        },
        {
          time: "16:00 – 17:10",
          items: [
            { title: "Convention Sessions" },
            { title: "GSS Programming" },
            { title: "GSS Research Presentations" },
            {
              title: "Developing the Communication & Engagement-Oriented Capacities Workshop 1",
              href: "/events/special-session-1",
            },
            {
              title: "Resilience-Focused Capacity-Building Workshop 3",
              href: "/events/special-session-2",
            },
          ],
        },
        {
          time: "17:30 – 18:30",
          items: [{ title: "General Session III: UCEA Presidential Address",
             href: "/events/general-sessions",
            }],
        },
        {
          time: "19:00 – 20:00",
          items: [{ title: "Barbara L. Jackson Scholars Recognition Ceremony" }],
        },
        {
          time: "20:00 – 21:00",
          items: [{ title: "Barbara L. Jackson Scholars Reception" }],
        },
      ],
    },

    {
      day: "Saturday, November 22, 2025",
      events: [
        {
          time: "07:30 – 12:00",
          items: [{ title: "Registration Desk open" }],
        },
        {
          time: "08:00 – 09:10",
          items: [
            { title: "Convention Sessions" },
            {
              title: "Resilience-Focused Capacity-Building Workshop 4",
              href: "/events/special-session-2",
            },
          ],
        },
        {
          time: "09:20 – 10:30",
          items: [
            {
              title:
                "Developing the Communication & Engagement-Oriented Capacities Workshops 2–7",
              href: "/events/special-session-1",
            },
          ],
        },
        {
          time: "10:40 – 11:50",
          items: [
            { title: "Convention Sessions" },
            { title: "UCEA Executive Committee Fireside Chat" },
            {
              title: "Resilience-Focused Capacity-Building Workshop 5",
              href: "/events/special-session-2",
            },
          ],
        },
        {
          time: "12:00 – 13:10",
          items: [
            { title: "Open Lunch Time" },
            { title: "RANs Business Meetings" },
          ],
        },
        {
          time: "13:20 – 14:30",
          items: [{ title: "Convention Sessions" }],
        },
        {
          time: "14:30 – 15:00",
          items: [{ title: "Afternoon Refreshments & Networking" }],
        },
        {
          time: "15:00 – 16:10",
          items: [{ title: "Convention Sessions" }],
        },
        {
          time: "16:20 – 17:30",
          items: [{ title: "Convention Sessions" }],
        },
        {
          time: "18:00 – 21:00",
          items: [
            {
              title: "UCEA Annual Banquet",
              href: "/events/banquet",
            },
          ],
        },
      ],
    },
  ];

  // =========================
  //        RENDER PAGE
  // =========================
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
                {day.events.map((block, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800">
                    <CircleDot className="mt-1 text-blue-600 min-w-[16px]" size={18} />

                    {/* TIME */}
                    <span className="min-w-[100px] sm:min-w-[120px] font-medium whitespace-nowrap">
                      {block.time} |
                    </span>

                    {/* MULTIPLE ITEMS */}
                    <div className="flex flex-col sm:flex-row flex-wrap ml-1 gap-x-2">
                      {block.items.map((item, i) => (
                        <span key={i} className="flex gap-1">
                          {/* LINKED ITEM */}
                          {item.href ? (
                            <a
                              href={item.href}
                              className="underline text-blue-600 hover:text-blue-800"
                            >
                              {item.title}
                            </a>
                          ) : item.modal === "tips" ? (
                            <button
                              onClick={() => setShowTipsInfo(true)}
                              className="underline text-blue-600 hover:text-blue-800"
                            >
                              {item.title}
                            </button>
                          ) : (
                            <span>{item.title}</span>
                          )}

                          {/* comma separator if multiple */}
                          {i < block.items.length - 1 && <span>,</span>}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>

      {/* =========================
          MODAL
      ========================= */}
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

            <p className="text-lg mb-3">
              Join us on{" "}
              <strong>Wednesday, November 19, 4:00–5:00 PM in Bahia 2</strong>.
            </p>

            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Learn about session types</li>
              <li>Learn about special events</li>
              <li>Meet the planning team</li>
              <li>Network with first-time attendees</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
