import type { ReactNode } from "react";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type SessionTypeBlock = {
  title: string;
  accordions: AccordionItem[];
};

export const sessionTypesData: SessionTypeBlock[] = [
  {
    title: "SIGNATURE CONVENTION SESSIONS",
    accordions: [
      {
        title: "Bridge Presentations",
        content: (
          <>
            <p>
              Bridge presentation sessions are intended to bring together scholars,
              practitioners, students, families, and other community members to
              share with the audience the collaboration or partnership they have
              formed and the work they do together.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Bridge presentation proposals should include the following
                elements:
              </li>
              <li>
                the goals of the collaboration/partnership and the nature of the
                work partners do together
              </li>
              <li>how the collaborating partners are interdependent</li>
              <li>
                activities and/or discussions that will occur broken down by time
                segments
              </li>
              <li>materials that will be shared or used</li>
              <li>references that inform the work</li>
            </ul>
          </>
        ),
      },
      {
        title: "Bridge Conversations",
        content: (
          <>
            <p>
              Bridge conversation sessions are designed to stimulate informal,
              critical conversations with audience members on topics related to
              the conference theme of creating unity through building
              interdependence as a bridge to freedom. Sessions are organized
              around a series of provocative questions on a critical topic and
              generative discussions on how to address the topic through building
              bridges.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Bridge conversation proposals should include the following
                elements:
              </li>
              <li>the critical topic and the session’s objectives</li>
              <li>
                the set of provocative questions on the critical topic
              </li>
              <li>
                activities and/or discussions that will occur broken down by time
                segments
              </li>
              <li>materials that will be shared or used</li>
              <li>references that inform the work</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "GENERAL CONVENTION SESSIONS",
    accordions: [
      {
        title: "Paper Sessions",
        content: (
          <>
            <p>
              Paper sessions are intended for in-depth reporting on
              current/completed research and results, for analyzing educational
              policy or practice issues, or for presenting theoretical/conceptual
              work that informs educational leadership. A set of topically aligned
              paper submissions will be assembled into a single session, giving
              each author or writing team roughly 10–12 minutes to present their
              research and share findings using a slide deck and relevant
              handouts.
            </p>

            <p className="mt-4 font-semibold">
              For research reports and policy analyses, the proposal summary
              should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>statement of purpose</li>
              <li>review of related literature</li>
              <li>theoretical/conceptual perspectives</li>
              <li>methods and data sources</li>
              <li>findings</li>
              <li>conclusions/implications</li>
              <li>references</li>
            </ul>

            <p className="mt-4">
              Research does not necessarily need to have been completed but
              should be far enough along to report preliminary findings.
            </p>

            <p className="mt-4 font-semibold">
              For conceptual papers, the proposal summary should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>statement of purpose</li>
              <li>review of related literature</li>
              <li>
                connections to previous frameworks or research that contribute to
                the development of a new/revised framework
              </li>
              <li>implications for leadership research, practice, or policy</li>
              <li>references</li>
            </ul>
          </>
        ),
      },
      {
        title: "Ignite Sessions",
        content: (
          <>
            <p>
              Ignite sessions are designed to foster informal, lively discussions
              through 5-minute presentations that spark interest and awareness of
              multiple yet related topics, while encouraging further reflection
              and action from presenters and audience members. Ignite sessions are
              an ideal way to present innovations, effective strategies and tools,
              problems of practice, collaborations, etc.
            </p>
            <p className="mt-4">
              The proposal summary should be for a 5-minute presentation. A set
              of four to five topically aligned submissions will be assembled into
              a single session.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Ignite proposals should include the following elements:</li>
              <li>
                an introduction that situates the innovation, effective
                strategies/tools, problems of practice, or collaborations within
                existing scholarship
              </li>
              <li>
                a detailed explanation of the innovation/strategy/tool/problems of
                practice/collaborations
              </li>
              <li>uses/implications</li>
              <li>references that inform the work</li>
            </ul>
          </>
        ),
      },
      {
        title: "Innovative and Experiential Learning Sessions",
        content: (
          <>
            <p>
              These sessions are designed to provide innovative and hands-on
              learning experiences for our community members. Facilitators may use
              a variety of media, including film and web-based projects, to
              engage attendees in highly interactive experiences. Sessions may
              resemble professional development workshops, practice showcases in
              which facilitators demonstrate innovative leadership practices, or
              more innovative formats.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Innovative and experiential learning session proposals should
                include the following elements:
              </li>
              <li>the session’s purpose and learning objectives</li>
              <li>targeted audience/community</li>
              <li>
                innovative, highly engaging activities and/or discussions that
                will occur broken down in time segments
              </li>
              <li>materials that will be shared or used</li>
              <li>references that inform the work</li>
            </ul>
          </>
        ),
      },
      {
        title: "Roundtable Conversations",
        content: (
          <>
            <p>
              These submissions place individuals at a roundtable with other
              topically aligned roundtable submissions and conference attendees
              interested in the roundtable topics. Roundtable discussions move
              away from the use of slide decks to allow for more informal and
              extended discussions among a small group of individuals and are
              excellent venues for giving and receiving targeted feedback.
            </p>

            <p className="mt-4 font-semibold">
              For research reports and policy analyses, the proposal summary
              should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>statement of purpose</li>
              <li>review of related literature</li>
              <li>theoretical/conceptual perspectives</li>
              <li>methods and data sources</li>
              <li>findings</li>
              <li>conclusions/implications</li>
              <li>references</li>
            </ul>

            <p className="mt-4">
              Research does not necessarily need to have been completed but
              should be far enough along to report preliminary findings.
            </p>

            <p className="mt-4 font-semibold">
              For conceptual papers, the proposal summary should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>a statement of purpose</li>
              <li>a review of related literature</li>
              <li>
                connections to previous frameworks or research that contribute to
                the development of a new/revised framework
              </li>
              <li>implications for leadership research, practice, or policy</li>
              <li>references</li>
            </ul>
          </>
        ),
      },
      {
        title: "Symposia",
        content: (
          <>
            <p>
              A symposium brings together a group of contributors who examine a
              specific policy, research area, or practice issue from multiple
              perspectives. The symposium should explore complex questions at the
              intersection of leadership, research, practice, and/or policy. The
              symposium should also contribute significantly to the knowledge
              base, generate new ideas, and allow for dialogue and discussion.
              Symposium participants are expected to chair the session and
              facilitate discussion.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Symposium proposals should include the following elements:</li>
              <li>
                an introduction that situates a specific policy, area of
                research, or practice issue in existing scholarship
              </li>
              <li>
                a list of contributors and the specific perspectives they bring
              </li>
              <li>
                discussions that will occur broken down into time segments
              </li>
              <li>references that inform the work</li>
            </ul>
          </>
        ),
      },
    ],
  },
];