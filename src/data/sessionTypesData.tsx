import { JSX } from "react";

export interface AccordionItem {
  title: string;
  content: JSX.Element;
}

export interface AccordionBlockType {
  title: string;
  accordions: AccordionItem[];
}

export const sessionTypesData: AccordionBlockType[] = [

  {
    title: "INDIVIDUAL",
    accordions: [
      {
        title: "Papers",
        content: (
          <>
            <p>
              Paper submissions are intended for in-depth reporting of current/completed research and results, analyzing educational policy issues, or presenting theoretical/conceptual work that informs educational leadership.
            </p>
            <p>
              A set of topically aligned paper submissions is usually assembled into one session so that each author or writing team has roughly 10–12 minutes to present research and share findings using PPT and relevant handouts.
            </p>
            <ul>
              <li>
                <em>For research reports and policy analyses</em>:
                <ul>
                  <li>(a) statement of purpose</li>
                  <li>(b) review of related literature</li>
                  <li>(c) theoretical/conceptual perspectives</li>
                  <li>(d) methods and data sources</li>
                  <li>(e) findings</li>
                  <li>(f) conclusions/implications</li>
                  <li>(g) references</li>
                </ul>
              </li>
              <li>
                <em>For conceptual papers</em>:
                <ul>
                  <li>(a) statement of purpose</li>
                  <li>(b) review of related literature</li>
                  <li>(c) connections to previous frameworks or research</li>
                  <li>(d) implications for leadership research, practice, or policy</li>
                  <li>(e) references</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Practice-Based Presentation",
        content: (
          <>
            <p>
              These submissions are intended to present innovations, effective strategies, or created tools/materials that might be of value to practitioners or researchers within our community.
            </p>
            <p>
              A set of topically aligned practice-based presentation submissions is typically assembled into one session so that each contributor has roughly 10–12 minutes to present using PPT and share relevant handouts.
            </p>
            <ul>
              <li>
                <em>Practice-based presentations</em> should include:
                <ul>
                  <li>(a) introduction that situates the work in existing scholarship</li>
                  <li>(b) innovation/strategy/tool</li>
                  <li>(c) uses/implications</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Ignite Session",
        content: (
          <>
            <p>
              These sessions are intended to present innovations, effective strategies, tools, problems of practice, collaborations, etc. Presentations are no more than 5 minutes long.
            </p>
            <p>
              View a 2-minute video on ignite presentations:{" "}
              <a href="https://bit.ly/2RVkQ63" target="_blank" rel="noopener noreferrer">
                https://bit.ly/2RVkQ63
              </a>
            </p>
            <ul>
              <li>
                <em>Ignite sessions</em> should include:
                <ul>
                  <li>(a) introduction that situates work in scholarship</li>
                  <li>(b) explanation of the innovation/strategy/tool</li>
                  <li>(c) uses/implications</li>
                  <li>(d) references</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Individual Roundtable",
        content: (
          <>
            <p>
              These submissions place individuals at a roundtable with topically aligned submissions and attendees for informal, extended discussions—excellent for targeted feedback.
            </p>
            <ul>
              <li>
                <em>For research reports and policy analyses</em>:
                <ul>
                  <li>(a) statement of purpose</li>
                  <li>(b) review of related literature</li>
                  <li>(c) theoretical/conceptual perspectives</li>
                  <li>(d) methods and data sources</li>
                  <li>(e) findings</li>
                  <li>(f) conclusions/implications</li>
                  <li>(g) references</li>
                </ul>
              </li>
              <li>
                <em>For conceptual papers</em>:
                <ul>
                  <li>(a) statement of purpose</li>
                  <li>(b) review of related literature</li>
                  <li>(c) connections to frameworks or research</li>
                  <li>(d) implications for leadership research, practice, or policy</li>
                  <li>(e) references</li>
                </ul>
              </li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    title: "INDIVIDUAL/GROUP SUBMISSIONS",
    accordions: [
      {
        title: "Community-Building Sessions",
        content: (
          <>
            <p>
              These sessions are intended to be carefully designed and facilitated by one or several individuals to engage a group of Convention attendees in community-building activities. These sessions are designed to cultivate belonging and connection, shared values, and collective engagement. They may be topically or affinity oriented, and PPTs may be used as appropriate.
            </p>
            <ul>
              <li>
                Community-building sessions should include the following elements:
                <ul>
                  <li>(a) targeted audience/community (topical or affinity)</li>
                  <li>(b) session’s community-building objectives</li>
                  <li>(c) activities and/or discussions that will occur broken down in time segments</li>
                  <li>(d) materials that will be shared or utilized</li>
                  <li>(e) references that inform the work</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Terrace Talks",
        content: (
          <>
            <p>
              These sessions occur on a small outdoor terrace, providing opportunities to take in the natural atmosphere. They are intended for structured networking or targeted mentoring and are designed to strengthen community through shared values and connection. No PPT is used in these sessions.
            </p>
            <ul>
              <li>
                Terrace talks should include the following elements:
                <ul>
                  <li>(a) targeted audience/community for networking or mentoring</li>
                  <li>(b) session’s networking or mentoring objectives</li>
                  <li>(c) activities and/or discussions that will occur broken down in time segments</li>
                  <li>(d) materials that will be shared or used</li>
                  <li>(e) references that inform the work</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Workshop/Development Sessions",
        content: (
          <>
            <p>
            These sessions, which are new this year, are intended to provide a learning or development experience that is 
relevant to some members of our community. Among other things, this session format is particularly relevant for 
capacity-building sessions related to one of the convention’s focal areas—cultivating effective communication 
and advocacy practices that (a) help educators gain more benefit from our work, (b) enhance communication to 
the broader public to better understand our work and its impact on education, and (c) address unjust and 
harmful policies and practices in education. This session type may include the use of PPT for aspects of the 
session; however, the session is intended to be hands on and highly interactive for those who attend.           </p>
            <ul>
              <li>
              Workshop/development sessions should include the following elements:
                <ul>
                  <li>(a) targeted audience/community for development</li>
                  <li>(b) session’s learning/development objectives</li>
                  <li>(c) activities and/or discussions that will occur broken down in time segments</li>
                  <li>(d) materials that will be shared or used</li>
                  <li>(e) references that inform the work</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "GROUP SUBMISSIONS",
    accordions: [
      {
        title: "Symposium",
        content: (
          <>
            <p>
              A symposium brings together a collection of individual contributors who examine, from several perspectives, a specific policy, area of research, or practice issue. These sessions are appropriate for researchers, practitioners, and those in policy positions. These sessions are expected to surface knowledge, generate new ideas, and/or allow for dialogue and discussion.
            </p>
            <ul>
              <li>
                A symposium should include the following elements:
                <ul className="list-disc list-inside mt-2">
                  <li>(a) introduction that situates a specific policy, area of research, or practice issue in existing scholarship</li>
                  <li>(b) a list of contributors and the specific perspectives they bring</li>
                  <li>(c) discussions that will occur broken down in time segments</li>
                  <li>(d) references that inform the work</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Innovative Technology Sessions",
        content: (
          <>
            <p>
              These sessions are intended to utilize innovative presentation/interaction strategies such as web-based projects, films, and the use of technology to increase interaction and participation.
            </p>
            <ul>
              <li>
                Innovative technology sessions should include the following elements:
                <ul className="list-disc list-inside mt-2">
                  <li>(a) introduction that situates innovations, effective strategies or tools, problems of practice, collaborations in existing scholarship</li>
                  <li>(b) innovation/strategy/tool</li>
                  <li>(c) uses/implications</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "International Community-Building Session",
        content: (
          <>
            <p>
              These sessions, regardless of format, require participants from two or more countries. They must focus on critical issues of leadership practice, development, or research from multiple international perspectives.
            </p>
            <ul>
              <li>
                International community-building sessions should include the following elements:
                <ul className="list-disc list-inside mt-2">
                  <li>(a) a list of scholars from at least two or more countries engaged in leadership practice, development, or research</li>
                  <li>(b) a well-defined critical issue of leadership practice, development, or research</li>
                  <li>(c) a clear statement of the session’s community-building objectives goals</li>
                  <li>(d) a detailed outline of how time will be allocated, including format, discussions, or interactive components</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
      {
        title: "Pre-Convention Work Sessions and Workshops",
        content: (
          <>
            <p>
              These sessions, which provide 2-hour or 3-hour blocks, are intended for scholars of similar interest. They support collaborative projects or offer workshops for professional development, especially those related to UCEA’s core mission.
            </p>
            <ul>
              <li>
                Pre-Convention work sessions and workshops should include the following elements:
                <ul className="list-disc list-inside mt-2">
                  <li>(a) a list of participating scholars working on projects related to UCEA’s core mission or faculty members seeking professional development</li>
                  <li>(b) a clear statement of the session’s goals, whether focused on scholarly collaboration, advancing a research project, or providing professional learning opportunities</li>
                  <li>(c) a detailed outline of how time will be allocated, including presentations, discussions, or interactive components</li>
                  <li>(d) expected outcomes or contributions to research, practice, or faculty development</li>
                </ul>
              </li>
            </ul>
          </>
        )
      }
    ]
  }




]