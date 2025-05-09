"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import TabbedSwitch from "@/components/ui/general/TabbedSwitch";

export default function CFP2025SubmissionDetailsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="SUBMISSION DETAILS" />

      <SectionWrapper>
        <SectionTitle>SUBMISSION GUIDELINES</SectionTitle>
        <SectionContent>
          <p>
            <strong>Proposals should not exceed 3 single-spaced pages</strong> (about 1,500 words or 6,000 characters) using 12-point font (Times New Roman). Reviewers are not required to read beyond the third page. References are <strong>required</strong> and <strong>must not exceed 1 single-spaced page</strong> (about 400 words or 2,200 characters). <strong><em>Proposals MUST NOT include names of session organizers or presenters.</em></strong> By submitting a proposal, an individual is entering a professional agreement to:
          </p>
          <ul className="list-disc list-inside mt-2 pl-4">
            <li>Review proposals for the Convention;</li>
            <li>Attend and deliver the content described in the proposal;</li>
            <li>Share a summary of your work with session attendees and make papers available if requested;</li>
            <li>Register for the Convention</li>
          </ul>
          <p>
            Furthermore, as a professional courtesy, lead authors should email their paper summary to the session facilitator and other session participants or upload to All Academic by <strong>November 1, 2025.</strong> Ignite presenters are expected to email a two-page summary of the talking points they will be sharing at the convention with the session facilitator prior to the <strong>November 1</strong> deadline.
          </p>
        </SectionContent>
      </SectionWrapper>
      

      <SectionWrapper>
        <SectionTitle>PROPOSAL SUBMISSION DEADLINE</SectionTitle>
        <SectionContent>
          Proposals must be received by <strong>Wednesday, May 14, 2025, by 11:59 PM EDT</strong>. No deadline extension will be provided this year. All proposals must be submitted electronically through All Academic by visiting the UCEA website (<a href="http://www.ucea.org" className="text-blue-600 underline">http://www.ucea.org</a>). This site will officially open in mid-March 2025.
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
          <TabbedSwitch
            tabs={[
              {
                title: "Member Institution",
                content: (
                  <>
                    <p>Instructions to access All Academic if you are at a Member Institution</p>
                    <p>You will need to have a username and password to access the website. If you registered for the Convention last year, you have login credentials.</p>
                    <p>If you have login credentials:</p>
                    <ul className="list-disc pl-6">
                      <li>Click the Member Login button on the top right of this page to sign in (If you cannot remember your password, use the Forgot Password link).</li>
                      <li>After you sign in, click the yellow All Academic button. All Academic will open in a separate tab in your browser.</li>
                      <li>Follow directions to submit your proposal.</li>
                    </ul>
                    <p>If you do not have login credentials:</p>
                    <ul className="list-disc pl-6">
                      <li>Email us at <a href="mailto:info@ucea.org" className="text-blue-600 underline">info@ucea.org</a></li>
                      <li>Include your full name, email address, institution, and whether you are faculty, graduate student or other.</li>
                      <li>We will create your profile and send your login credentials. That email may go to your spam/junk folder.</li>
                      <li>Once you have login credentials and signed in, click the yellow All Academic button and follow directions to submit your proposal.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Non-Member Institution",
                content: (
                  <>
                    <p>Instructions to access All Academic if you are at a NON-Member Institution</p>
                    <p>You will need to have a username and password to access the website. If you registered for the Convention last year, you have login credentials.</p>
                    <p>If you have login credentials:</p>
                    <ul className="list-disc pl-6">
                      <li>Click the Member Login button on the top right of this page to sign in (If you cannot remember your password, use the Forgot Password link).</li>
                      <li>After you sign in, click the yellow All Academic button. All Academic will open in a separate tab.</li>
                      <li>Follow directions to submit your proposal.</li>
                    </ul>
                    <p>If you do not have login credentials:</p>
                    <ul className="list-disc pl-6">
                      <li>Click the UCEA Non-Member Login below.</li>
                      <li>Complete a profile form.</li>
                      <li>At the bottom of the form create a username and password. Use your email address as your username.</li>
                      <li>Click on the continue button to access the portal.</li>
                      <li>Click the yellow All-Academic Login button and follow directions to submit your proposal.</li>
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
        <SectionTitle>REVIEW OF UCEA CONVENTION PROPOSALS</SectionTitle>
        <SectionContent>
          <p>
            All proposals will be subject to anonymous, peer review by three reviewers. Proposals <strong>MUST NOT</strong> include names of session organizers or presenters. Reviewers are not required to read proposals that are not anonymous.
          </p>
          <p>
            Primary submitters and authors of submitted proposals agree to serve as proposal reviewers. Only faculty review proposals for the Annual Convention. UCEA encourages all submitters to invite any faculty co-authors to participate as volunteer reviewers. The deadline for completed proposal reviews is <strong>May 30, 2025</strong>. Be sure to add <em>uceaconvention@gmail.com</em> to Safe Senders in your email settings.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PARTICIPATION LIMITS</SectionTitle>
        <SectionContent>
          In an effort to promote broad participation in the annual convention, an individual may appear as first author on no more than two proposals. In addition, an individual may appear on the program no more than four times in the role of presenter or participant. This limit does not include service as facilitator or participation in invited sessions or any session connected with UCEA headquarters, committees, or publications.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>PARTICIPANT REGISTRATION AND ATTENDANCE REQUIREMENT</SectionTitle>
        <SectionContent>
          All presenting authors of accepted papers and all participants in accepted sessions (including session facilitators) are required to register for, pay in full, attend the annual Convention, and to be present at the scheduled sessions. Submission is a commitment to do so.
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>GRADUATE STUDENT SUMMIT</SectionTitle>
        <SectionContent>
          Successfully launched at the 2012 Convention in Denver, the Graduate Student Summit will be an important part of the 2025 Convention in San Juan, PR. All graduate students are invited to submit proposals. Further details regarding the Graduate Student Summit call for proposals can be found on the Graduate Student portion of the UCEA website:{" "}
          <a href="https://www.ucea.org/gss_summit.php" className="text-blue-600 underline">
            https://www.ucea.org/gss_summit.php
          </a>.
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
