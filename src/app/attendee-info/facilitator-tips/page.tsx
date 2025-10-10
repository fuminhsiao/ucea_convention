"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import TabbedSwitch from "@/components/ui/general/TabbedSwitch";
import SectionTitle from "@/components/ui/general/SectionTitle";

export default function PresenterTipsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Presenter Tips" />

      <SectionWrapper>
        <SectionContent>
          <TabbedSwitch
            tabs={[
             
              // ===== FACILITATOR TAB =====
              {
                title: "Facilitator Role",
                content: (
                  <>
                    <SectionTitle>Facilitator Role</SectionTitle>
                    <a
                      href="https://www.ucea.org/docs/UCEA.Facilitator_Role_Instructions_10.9.25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mb-6 inline-block"
                    >
                      Download Full Facilitator Role Instructions (PDF)
                    </a>

                    <p className="italic text-gray-700 mb-2">Sessions</p>

                    <p>
                      Thank you for agreeing to serve as facilitator for the{" "}
                      <strong>UCEA Annual Convention</strong>! We are excited to
                      have you join us and thankful to have your expertise in
                      leading the sessions. Please review the role and
                      responsibilities of facilitators below.
                    </p>

                    <h3 className="mt-6 font-semibold uppercase text-[#00334e]">
                      Before the Convention
                    </h3>
                    <p className="mt-1">
                      Please reach out to session presenters in advance and come
                      prepared to:
                    </p>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Run the session smoothly and efficiently.</li>
                      <li>
                        Facilitate a robust conversation by reviewing papers
                        beforehand.
                      </li>
                      <li>Make sure all presenters are part of the discussion.</li>
                    </ul>

                    <p className="mt-2">
                      In <strong>All Academic</strong>, you can confirm which
                      sessions you are facilitating and read the paper summaries
                      for each session. If it is a paper or practice-based
                      session, we strongly encourage you to reach out to the
                      authors and review the above guidelines with them as well
                      as establish talking points for the session.
                    </p>

                    <h3 className="mt-6 font-semibold uppercase text-[#00334e]">
                      At the Convention
                    </h3>
                    <p>Show up to the session 5–10 minutes before it begins.</p>
                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        Make sure the laptop adapter is at the podium and
                        remains there at the end of the session (visit the
                        registration desk for help if needed).
                      </li>
                      <li>
                        Identify presenters in advance and introduce yourself.
                      </li>
                      <li>
                        Remind each presenter of the time limits that apply and
                        describe the timecards you will use to alert them during
                        presentations.
                      </li>
                    </ul>

                    <p className="mt-2">
                      At the start of the session, introduce yourself to the
                      audience, announce the session title, and provide a brief
                      overview of the session purpose.
                    </p>

                    <ul className="list-disc pl-6 mt-1">
                      <li>
                        Briefly introduce the speakers at the beginning and
                        announce paper titles before each presentation.
                      </li>
                      <li>
                        For Ignite Sessions, announce authors’ names before each
                        presentation rather than at the beginning of the
                        session.
                      </li>
                    </ul>

                    <p className="mt-4">
                      During the presentations, monitor time limits strictly so
                      that there’s enough time for each presentation and
                      discussion.
                    </p>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Paper presentations are 12 minutes.</li>
                      <li>Ignite presentations are 5 minutes.</li>
                    </ul>

                    <h3 className="mt-6 font-semibold text-[#00334e]">
                      Facilitator Guidance
                    </h3>
                    <ol className="list-decimal pl-6 mt-1 space-y-1">
                      <li>
                        <strong>Assume the role of “thought catalyst.”</strong>{" "}
                        Prepare some questions that address each paper to
                        provoke discussion among the session’s presenters and
                        audience.
                      </li>
                      <li>
                        <strong>Field questions from the audience.</strong> Once
                        presentations are complete, the remainder of the time
                        can be used for discussion.
                      </li>
                      <li>
                        <strong>Conduct the session in a collegial manner.</strong>{" "}
                        Use first names when addressing participants and the
                        audience to encourage participation.
                      </li>
                    </ol>

                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                      <p className="font-semibold text-yellow-800">
                        IMPORTANT NOTE:
                      </p>
                      <p className="text-gray-800">
                        For the safety and security of Convention attendees,
                        please make sure all presenters have their name badges.
                        If a presenter does not have a name badge, please inform
                        the staff at UCEA Registration.
                      </p>
                    </div>

                    <p className="mt-4">
                      Please connect with your session attendees and do your
                      part in ensuring that the Convention is a high-quality,
                      engaging experience for all.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
