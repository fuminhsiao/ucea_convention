"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

export default function GraduateStudentSummitPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Graduate Students" />

      <SectionWrapper>
        <SectionTitle>
          Graduate Student Summit / Jackson Scholars Research Symposium
        </SectionTitle>

        <SectionContent>
          <p className="leading-relaxed mb-6">
            Hello Jackson Scholars and Graduate Student Summit Participants! The UCEA Convention Planning Team along with UCEA Associate Directors for Graduate Student Development are excited to welcome you to this year’s UCEA Convention in San Juan in November. You should plan to arrive in San Juan by late afternoon{" "}
            <strong>Wednesday, November 20th</strong> so that you can participate in various activities that begin at 5pm on Wednesday. As the{" "}
            <a
              href="/attendee-info/schedule"
              className="text-blue-600 underline font-semibold"
            >
              Schedule-At-A-Glance
            </a>{" "}
            reveals, both the Graduate Student Summit and the Jackson Scholars Network have activities beginning on Wednesday evening followed by breakfast on Thursday, November 21. This year’s Graduate Student Summit will occur concurrently with the UCEA Convention rather than in a preconvention format. Thus, Graduate Student Summit sessions will be scheduled on Thursday through Saturday. Jackson Scholars programming will conclude with a Recognition Ceremony and Reception on Friday evening.
          </p>

          <p className="leading-relaxed mb-6">
            We also want to draw graduate student attention to several special sessions that will occur during the convention that are also noted on the{" "}
            <a
              href="/attendee-info/schedule"
              className="text-blue-600 underline font-semibold"
            >
              Schedule-At-A-Glance
            </a>
            . Throughout the program you will see a series of{" "}
            <a
              href="/events/general-sessions"
              className="text-blue-600 underline font-semibold"
            >
              General Sessions
            </a>
            . We will be promoting these General Sessions over the coming months. Each of these sessions would be ones that you should consider building into your UCEA Convention Schedule. On Thursday night, there is the{" "}
            <strong>Reception in Honor of Past UCEA Presidents</strong>. This event is free (no ticket required), and it is an excellent setting for networking with graduate students and faculty. On Saturday evening there is an{" "}
            <a
              href="/events/banquet"
              className="text-blue-600 underline font-semibold"
            >
              Annual Banquet
            </a>{" "}
            with a location and time yet to be determined. This is a ticketed event (for fee). Details about this event including location, time, cost, and the process for purchasing a ticket (separate from conference registration) will be shared in the next few weeks.
          </p>

          <p className="leading-relaxed mb-6">
            As we continue to advance our plans for the UCEA Convention we will continue to provide updates to this website. Please continue to check back for special updates!
          </p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
