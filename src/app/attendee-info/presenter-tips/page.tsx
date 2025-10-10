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
              // ===== PAPER TAB =====
              {
                title: "Paper Presenter Instructions",
                content: (
                  <>
                    <SectionTitle>Paper Presenter Tips</SectionTitle>
                    <a
                      href="https://www.ucea.org/docs/2025_UCEA_Paper_Presenter_Instructions_10.9.25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mb-6 inline-block"
                    >
                      Download Full Paper Presenter Instructions (PDF)
                    </a>

                    <p className="italic text-gray-700 mb-2">
                      Sessions at Sheraton Puerto Rico
                    </p>

                    <p>
                      <strong>
                        Upload your paper in All Academic by{" "}
                        <span className="text-blue-800 font-semibold">
                          November 1st
                        </span>
                      </strong>
                    </p>

                    <p>
                      Please consider the following guidelines as you prepare
                      remarks for your in-person presentation at Convention.
                      Better communication of your ideas means more attendees
                      will engage with your work. Importantly, staying within
                      the time suggestions is respectful of other authors and
                      maximizes questions and discussion in the session.
                    </p>

                    <p>
                      <strong>
                        Prepare for a{" "}
                        <span className="text-blue-800 font-semibold">
                          12-minute MAX
                        </span>{" "}
                        in-person presentation on your paper.
                      </strong>{" "}
                      Given this time constraint, your task within this session
                      is to provide the highlights of your paper. A major
                      objective is to whet the appetite of the listener to read
                      your paper.
                    </p>

                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        PowerPoint slides should be included in your 12-minute
                        presentation—we suggest{" "}
                        <span className="text-blue-800 font-semibold">
                          5–10 slides
                        </span>{" "}
                        for the presentation.
                      </li>
                      <li>Visual aids should be simple, clear, and readable.</li>
                      <li>
                        Consider ways to make your presentation accessible to a
                        diverse audience.
                      </li>
                      <li>
                        VGA adapters will be provided, but you must bring your
                        own laptop.
                      </li>
                      <li>
                        Bring a backup copy of your presentation on a flash
                        drive.
                      </li>
                      <li>
                        Monitor the timecards displayed by your session
                        facilitator to conclude when appropriate.
                      </li>
                    </ul>

                    <p className="mt-4 font-semibold">
                      We encourage you to include the following points in your
                      presentation:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        Explain the problem you investigated and its relation to
                        existing research.
                      </li>
                      <li>
                        Briefly indicate your methods but prioritize findings
                        and implications (not literature review).
                      </li>
                      <li>
                        State specifically what is different and/or interesting
                        about your approach.
                      </li>
                      <li>
                        Discuss the implications of your work for researchers,
                        practitioners, and instructors.
                      </li>
                    </ul>

                    <p className="mt-2">
                      <strong className="text-blue-800">
                        Do not just read your paper!
                      </strong>
                      <br />
                      This approach does little to generate interest on the part
                      of the audience, and it is an ineffective way to
                      communicate ideas.
                    </p>

                    <h3 className="mt-6 font-semibold">
                      Additional information to consider for your in-person
                      presentation:
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Show up{" "}
                        <span className="text-blue-800 font-semibold">
                          5–10 minutes
                        </span>{" "}
                        prior to your presentation to test your technology.
                      </li>
                      <li>
                        <strong>
                          Upload your paper summary in All Academic{" "}
                          <span className="text-blue-800 font-semibold">
                            NO LATER than November 1st
                          </span>
                          .
                        </strong>{" "}
                        Upload your paper by replacing the proposal in All
                        Academic.
                      </li>
                      <li>
                        Before leaving your session, make sure the laptop
                        adapter provided remains attached to the podium.
                      </li>
                    </ul>
                  </>
                ),
              },

              // ===== ROUNDTABLE TAB =====
              {
                title: "Roundtable Presenter Instructions",
                content: (
                  <>
                    <SectionTitle>Roundtable Presenter Tips</SectionTitle>
                    <a
                      href="https://www.ucea.org/docs/2025_UCEA_Roundtable_Presenter_Instructions_10.9.25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mb-6 inline-block"
                    >
                      Download Full Roundtable Presenter Instructions (PDF)
                    </a>

                    <p className="italic text-gray-700 mb-2">
                      Sessions at Sheraton Puerto Rico
                    </p>

                    <p>
                      <strong>
                        Upload your paper on All Academic by{" "}
                        <span className="text-blue-800 font-semibold">
                          November 1
                        </span>
                      </strong>
                    </p>

                    <p>
                      Please consider the following guidelines as you prepare
                      remarks for your roundtable presentation at Convention.
                      Better communication of your ideas means more attendees
                      will engage with your work. Importantly, staying within
                      the time suggestions is respectful of other authors and
                      maximizes opportunities for discussion around your work
                      beyond Convention.
                    </p>

                    <h3 className="font-semibold mt-4">
                      Before You Get to Convention
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Contact other presenters in your session to decide which
                        of you will serve as your timekeeper.
                      </li>
                    </ul>

                    <p className="mt-2">
                      <strong>
                        Prepare for a{" "}
                        <span className="text-blue-800 font-semibold">
                          12-minute MAX
                        </span>{" "}
                        presentation on your paper.
                      </strong>{" "}
                      Given this time constraint, your task within this session
                      is to provide the highlights of your paper. A major
                      objective is to whet the appetite of the listener to read
                      your paper.
                    </p>

                    <ul className="list-disc pl-6 mt-2">
                      <li>Visual aids should be simple, clear, and readable.</li>
                      <li>
                        Consider ways to make your presentation accessible to a
                        diverse audience.
                      </li>
                      <li>
                        Bring your laptop with you to your presentation if you
                        are including slides.
                      </li>
                    </ul>

                    <p className="mt-4 font-semibold">
                      We encourage you to include the following points in your
                      presentation:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        Explain the problem you investigated and its relation to
                        existing research.
                      </li>
                      <li>
                        Briefly indicate your methods, but prioritize findings
                        and implications (not literature review).
                      </li>
                      <li>
                        State specifically what is different and/or interesting
                        about your approach.
                      </li>
                      <li>
                        Discuss the implications of your work for researchers,
                        practitioners, and instructors.
                      </li>
                    </ul>

                    <p className="mt-2">
                      <strong className="text-blue-800">
                        Do not just read your paper!
                      </strong>
                      <br />
                      This approach does little to generate interest on the part
                      of the audience, and it is an ineffective way to
                      communicate ideas.
                    </p>

                    <h3 className="mt-6 font-semibold">
                      Additional Information
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Upload your paper summary to All Academic{" "}
                        <span className="text-blue-800 font-semibold">
                          NO LATER than November 1
                        </span>
                        . Upload your paper by replacing the proposal in All
                        Academic.
                      </li>
                    </ul>
                  </>
                ),
              },

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
