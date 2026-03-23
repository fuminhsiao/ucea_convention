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
                      href="https://www.ucea.org/docs/2025_UCEA_Paper_Presenter_Instructions_10.31.25.pdf"
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
                          November 10th
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
                            NO LATER than November 10th
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
                      href="https://www.ucea.org/docs/2025_UCEA_Roundtable_Presenter_Instructions_10.31.25.pdf"
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
                          November 10th
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
                          NO LATER than November 10th
                        </span>
                        . Upload your paper by replacing the proposal in All
                        Academic.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
  title: "Practice-Based Presenter Instructions",
  content: (
    <>
      <SectionTitle>Practice-Based Presenter Tips</SectionTitle>

      <a
        href="https://www.ucea.org/docs/2025_UCEA_PracticeBased_Presenter_Instructions.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-6 inline-block"
      >
        Download Full Practice-Based Presenter Instructions (PDF)
      </a>

      <p className="italic text-gray-700 mb-2">
        Sessions at Sheraton Puerto Rico Resort and Casino
      </p>

      <p>
        Please consider the following guidelines as you prepare remarks for your
        practice-based presentation at Convention. Better communication of your
        ideas means more attendees will engage with your work. Staying within
        time limits ensures space for questions and discussion.
      </p>

      <p className="mt-3">
        <strong>
          Prepare for a{" "}
          <span className="text-blue-800 font-semibold">12-minute MAX</span>{" "}
          practice-based presentation.
        </strong>{" "}
        Use this time to highlight innovations, effective strategies, or tools.
        Your goal is to spark interest and engagement.
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>Include PowerPoint slides — we suggest <strong>5–10</strong></li>
        <li>Use simple, clear, readable visuals</li>
        <li>Make your presentation accessible to a diverse audience</li>
        <li>Bring your own laptop — VGA adapters are provided</li>
        <li>Bring a backup copy on a flash drive</li>
        <li>Watch timecards from the facilitator to end on time</li>
      </ul>

      <p className="mt-4 font-semibold">
        We encourage you to include the following points in your presentation:
      </p>

      <ul className="list-disc pl-6">
        <li>
          Explain the innovation/strategy/tool and its importance to
          practitioners and/or researchers
        </li>
        <li>Situate your work in existing scholarship</li>
        <li>
          Discuss uses and implications for researchers, practitioners, and
          instructors
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">Additional considerations:</h3>
      <ul className="list-disc pl-6">
        <li>
          Arrive <strong>5–10 minutes early</strong> to test technology
        </li>
        <li>
          Ensure laptop adapter remains attached to podium after your session
        </li>
      </ul>
    </>
  ),
}


              // ===== FACILITATOR TAB =====
              
            ]}
          />
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
