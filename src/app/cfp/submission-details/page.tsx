"use client";

import PageHeader from "@/components/ui/general/PageHeader2026";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import TabbedSwitch from "@/components/ui/general/TabbedSwitch";

export default function CFP2026SubmissionDetailsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="SUBMISSION DETAILS" />

      <SectionWrapper>
        <SectionTitle>SUBMISSION GUIDELINES</SectionTitle>
        <SectionContent>
          <p>
            <strong>
              Submission length must not exceed three (3) single-spaced pages
            </strong>{" "}
            (approximately 1,500 words or 6,000 characters) using 12-point font
            (Times New Roman). References are required and{" "}
            <strong>must not exceed one (1) single-spaced page</strong>{" "}
            (approximately 400 words or 2,200 characters).{" "}
            <strong>
              <em>
                Proposals MUST NOT include names of session organizers or
                presenters.
              </em>
            </strong>
          </p>

          <p className="mt-4">
            By submitting a proposal, an individual enters into a professional
            agreement to:
          </p>
          <ul className="list-disc list-inside mt-2 pl-4">
            <li>Review proposals for the Convention;</li>
            <li>Attend the Convention;</li>
            <li>Deliver the content described in the proposal;</li>
            <li>
              Share a copy of the work with Convention attendees (for papers).
            </li>
          </ul>

          <p className="mt-4">
            Lead authors are required to upload an advance copy of their paper
            or a one-page summary of the paper into the All Academic System
            through the UCEA Convention site 3 weeks before the Convention (
            <strong>October 28, 2026</strong>).
          </p>

          <p className="mt-4">
            Ignite presenters are expected to upload a two-page summary of their
            talking points for the Convention by the{" "}
            <strong>October 28, 2026</strong> deadline.
          </p>

          <div className="flex justify-end mt-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ucea.org/docs/UCEA26Convention_SubmissionDetails_April17.pdf"
              className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              VIEW PDF
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PROPOSAL SUBMISSION DEADLINE</SectionTitle>
        <SectionContent>
          Proposals must be received by{" "}
          <strong>Sunday, May 3, 2026, 11:59 p.m. EST</strong>. All proposals
          must be submitted electronically at the link on the UCEA website.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>IMPORTANT DATES</SectionTitle>
        <SectionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>All Academic opens: March 9, 2026</li>
            <li>Proposal Submission Deadline: May 3, 2026, 11:59 p.m. (EST)</li>
            <li>Notification of Acceptance: June 22, 2026</li>
            <li>Early-Bird Registration Deadline: September 18, 2026</li>
            <li>Registration Deadline: October 16, 2026</li>
            <li>Conference Dates: November 18–21, 2026</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <TabbedSwitch
          tabs={[
            {
              title: "Member Institution",
              content: (
                <>
                  <p>
                    Instructions to access All Academic if you are at a Member
                    Institution.
                  </p>
                  <p className="mt-3">
                    You will need a username and password to access the site. If
                    you registered for the Convention previously, you may
                    already have login credentials.
                  </p>
                  <p className="mt-3">If you have login credentials:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      Click the Member Login button on the top right of the UCEA
                      website to sign in.
                    </li>
                    <li>
                      After signing in, click the All Academic button. All
                      Academic will open in a separate browser tab.
                    </li>
                    <li>Follow the directions to submit your proposal.</li>
                  </ul>
                  <p className="mt-3">
                    If you do not have login credentials:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      Email{" "}
                      <a
                        href="mailto:info@ucea.org"
                        className="text-blue-600 underline"
                      >
                        info@ucea.org
                      </a>
                      .
                    </li>
                    <li>
                      Include your full name, email address, institution, and
                      whether you are faculty, graduate student, or other.
                    </li>
                    <li>
                      UCEA will create your profile and send your login
                      credentials.
                    </li>
                    <li>
                      Once you receive login credentials and sign in, click the
                      All Academic button and follow the directions to submit
                      your proposal.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Non-Member Institution",
              content: (
                <>
                  <p>
                    Instructions to access All Academic if you are at a
                    non-member institution.
                  </p>
                  <p className="mt-3">
                    You will need a username and password to access the site. If
                    you registered previously, you may already have login
                    credentials.
                  </p>
                  <p className="mt-3">If you have login credentials:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      Click the Member Login button on the top right of the UCEA
                      website to sign in.
                    </li>
                    <li>
                      After signing in, click the All Academic button. All
                      Academic will open in a separate tab.
                    </li>
                    <li>Follow the directions to submit your proposal.</li>
                  </ul>
                  <p className="mt-3">
                    If you do not have login credentials:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Click the UCEA Non-Member Login below.</li>
                    <li>Complete a profile form.</li>
                    <li>
                      At the bottom of the form, create a username and password.
                      Use your email address as your username.
                    </li>
                    <li>Click continue to access the portal.</li>
                    <li>
                      Click the All Academic Login button and follow the
                      directions to submit your proposal.
                    </li>
                  </ul>
                  <a
                    className="inline-block mt-4 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
                    href="https://members.ucea.org/members/memberinfo/alt_entry1.php?org_id=UCEA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Non-Member Login
                  </a>
                </>
              ),
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PROPOSAL REVIEWERS</SectionTitle>
        <SectionContent>
          <p>
            UCEA invites all Convention attendees and participants to serve as
            reviewers for the 2026 Convention. By submitting a proposal, an
            individual enters into a professional agreement to review proposals
            for the Convention.
          </p>
          <p className="mt-4">
            An author’s failure to live up to this commitment may lead to the
            paper being removed from consideration. UCEA encourages submitters
            to invite their coauthors to participate in this important
            professional activity.
          </p>
          <p className="mt-4">
            Individuals can volunteer to serve as a reviewer on All Academic
            through the UCEA website.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>CRITERIA FOR REVIEW OF UCEA CONVENTION PROPOSALS</SectionTitle>
        <SectionContent>
          <p>
            All proposals will undergo blind peer review by{" "}
            <strong>two reviewers</strong>, conducted electronically. Proposals{" "}
            <strong>MUST NOT</strong> include names of session organizers or
            presenters. Proposals containing author names may be removed from
            consideration by the UCEA Convention Planning Committee. Primary
            authors of submitted proposals who are faculty agree to serve as
            proposal reviewers.
          </p>

          <p className="mt-4 font-semibold">
            Research paper proposals will be evaluated for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Relevance of the proposal to educational leadership and/or
              Convention theme
            </li>
            <li>Appropriateness of the theoretical/conceptual framework</li>
            <li>Appropriateness of the methods, including analytical strategies</li>
            <li>
              Anchoring of proposal content to relevant scholarly literature
            </li>
            <li>Quality of writing</li>
            <li>Audience appeal</li>
          </ul>

          <p className="mt-4 font-semibold">
            All other proposals will be evaluated for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Relevance of the proposal to educational leadership and/or
              conference theme
            </li>
            <li>Thoroughness and clarity of the proposal</li>
            <li>
              Consistency of proposal content and purpose with proposed format
            </li>
            <li>
              Anchoring of proposal content to relevant scholarly literature
            </li>
            <li>Audience appeal</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PARTICIPATION LIMITS</SectionTitle>
        <SectionContent>
          To promote broad participation in the annual Convention, an
          individual may appear as first author on no more than two proposals.
          In addition, an individual may appear on the program no more than
          four times in the role of presenter. The participation limit does not
          include service as chair or discussant, or participation in invited
          sessions or any session connected with UCEA headquarters, committees,
          or publications.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PARTICIPANT REGISTRATION AND ATTENDANCE REQUIREMENT</SectionTitle>
        <SectionContent>
          All presenting authors of accepted papers and all participants in
          accepted sessions (including session facilitators) are required to
          register for, pay in full, attend the annual Convention, and to be
          present at the scheduled sessions. Submission is a commitment to do
          so.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>GRADUATE STUDENT SUMMIT</SectionTitle>
        <SectionContent>
          Successfully launched at the 2012 Convention in Denver, the
          preconference event invites doctoral students to submit proposals.
          Further details on the Graduate Student Summit call for proposals are
          available in the Graduate Student section of the UCEA website:{" "}
          <a
            href="https://www.ucea.org/gss_summit.php"
            className="text-blue-600 underline"
          >
            https://www.ucea.org/gss_summit.php
          </a>
          .
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>QUESTIONS?</SectionTitle>
        <SectionContent>
          Contact the Convention Planning Committee at{" "}
          <a
            href="mailto:convention@ucea.org"
            className="text-blue-600 underline"
          >
            convention@ucea.org
          </a>
          .
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}