"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

export default function StrongProposalPage() {
    return (
        <div className="w-full">
            <PageHeader />
            <PageTitle title="How to Submit a Strong Proposal" />

            <SectionWrapper>
                <SectionContent>
                    <p><b>For individuals who are new to submitting a proposal to the UCEA convention, we recommend that you:</b></p>

                    <ol className="list-decimal pl-6"> 
                        <li><b>Carefully review all the following documents BEFORE beginning to craft your proposal.</b></li>
                        <li><b>Review the full &quot;call for proposals&quot;</b>&nbsp;which is linked above so you understand the key intensions of this year&#39;s conference and the kinds of session topics that are being invited.&nbsp; As you are writing your proposal you will want to consider how to describe the alignment of your session to one or more topical areas that have been identified in the call for&nbsp;proposals.&nbsp;&nbsp;</li>
                        <li><b>Click the &quot;Session Types&quot;&nbsp;</b>button above.&nbsp; You will see that there are a variety of types of sessions.&nbsp; For example, some sessions are specifically designed for the presentation of research. Other sessions are designed for the presentation of innovative practices or allow you and your team to conduct a session that is more developmental in nature. As you review the session types, you will gain insights about the length of time of these sessions and about how to write a proposal for these session types.&nbsp;&nbsp;</li>
                        <li><b>Review the &quot;submission guidelines&quot;&nbsp;</b>which is linked above.&nbsp;</li>
                        <li><b>Sessions that are presenting research (empirical, analysis of existing literature), which oftentimes are submitted as a paper session, symposium, or roundtable, r</b>equire the submission of a proposal that not exceed 3 single-spaced pages in length using 12-point font (Times New Roman) and with a reference list that does not exceed 1 single-spaced page. These submissions should include the following sections:
                            <ul >
                                <li>For research reports and policy analyses, the proposal summary should include the following elements: (a) statement of purpose, (b) review of related literature, (c) theoretical/conceptual perspectives, (d) methods and data sources, (e) findings, (f) conclusions/implications, and (g) references. Research does not necessarily need to have been completed but should be far enough along to report preliminary findings. &bull;</li>
                                <li>For conceptual papers, the proposal summary should include the following elements: (a) statement of purpose; (b) review of related literature; (c) connections to previous frameworks or research that contribute to the development of a new/revised framework; (d) implications for leadership research, practice, or policy; and (e) references.</li>
                            </ul>
                        </li>
                        <li><b>As an additional support for your submission, we are including two sample proposals so you can gain a better understanding of what a proposal would look like for: a) a paper session, and b) a symposium.</b></li>
                    </ol>
                </SectionContent>
            </SectionWrapper>

            

            <SectionWrapper>
                <SectionTitle>Example Proposals</SectionTitle>
                <SectionContent>
                    <p>We recommend reviewing the following examples to better understand formatting and structure:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-blue-700 underline">
                        <li>
                            <a
                                href="http://www.ucea.org/docs/Paper_Example.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Paper Session Example (PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://www.ucea.org/docs/Symposium_Example.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Symposium Example (PDF)
                            </a>
                        </li>
                    </ul>
                </SectionContent>
            </SectionWrapper>
        </div>
    );
}
