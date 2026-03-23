"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import Link from "next/link";

export default function ProposalReviewPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle
        title="PROPOSAL REVIEW"
        subtitle="Guidance for reviewers of UCEA Convention proposals"
      />
      <SectionWrapper>
        <SectionContent>
          <p className="mb-6">
            Thank you for being a UCEA Annual Convention reviewer!
          </p>
          <p className="mb-6">
            The success of the Annual Convention is a function of many variables. One of the most important is the quality of sessions and papers presented at our convention. Reviewers are vital to maintaining this quality from year to year. Please take a look at this set of tips and guidelines for completing timely and substantive reviews.
          </p>
          <p className="mb-6">
            Please be sure to review the <strong>Reviewer Tips</strong> and{" "}
            <strong>Reviewer Criteria for Submissions</strong> documents{" "}
            <em>before</em> you begin your reviews.
          </p>

          <ul className="space-y-3 text-lg">
            <li>
              <Link
                href="https://members.ucea.org/members/form.php?orgcode=UCEA&fid=8670991"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a78] underline hover:text-[#0067a3] transition"
              >
                UCEA Proposal Reviewer Volunteer Form
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ucea.org/docs/UCEAProposal_Review_Instructions_sc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a78] underline hover:text-[#0067a3] transition"
              >
                Proposal Review Instructions
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ucea.org/docs/ReviewerCriteriaforSubmissions_sc_0518.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a78] underline hover:text-[#0067a3] transition"
              >
                Reviewer Criteria
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ucea.org/docs/2025ReviewerTips0517.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a78] underline hover:text-[#0067a3] transition"
              >
                Reviewer Tips
              </Link>
            </li>
          </ul>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
