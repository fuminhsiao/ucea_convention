"use client";

import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";
import PageTitle from "@/components/ui/general/PageTitle";

export default function SponsorTermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#bdbdbd] to-white pt-50">
      <PageTitle
        title="Sponsorship Terms and Conditions"
        subtitle="Updated March 9, 2026"
      />
      <SectionWrapper>
        <SectionContent>
          <p>
            The following Terms and Conditions govern this contract (“Contract”)
            between the University Council for Educational Administration
            (“UCEA”) Convention (“Convention”) and the Sponsor.
          </p>
          <ol className="list-decimal pl-6 space-y-6 mt-4">
            <li>
              <strong>Acceptance.</strong> Acceptance of this contract by UCEA
              is effective when UCEA receives a Sponsor&apos;s registration
              form. UCEA reserves the absolute right to decline or reject any
              proposed Sponsor whose products or services do not conform to
              UCEA’s published criteria or mission of the Association.
            </li>

            <li>
              <strong>Dates, Location, and Times.</strong> The Convention will
              be held in Pittsburgh, PA on November 18-21. While UCEA will use
              reasonable efforts to maintain the location, dates, and times,
              UCEA reserves the right to change any of these at any time and for
              any reason whatsoever without liability.
              <ul className="list-disc list-inside pl-6 mt-2">
                <li>
                  UCEA will annually set due dates for materials due from the
                  Sponsor such as their logo, program announcement, and
                  complimentary registrants. It is the responsibility of the
                  Sponsor to meet these due dates. If the due dates are not met,
                  UCEA is under no obligation to provide the amenities, and no
                  refund will be warranted.
                </li>
              </ul>
            </li>

            <li>
              <strong>Promotional Materials and Marketing Activities.</strong>{" "}
              Exhibitor agrees that the use and distribution of promotional
              materials at or around the Convention area, in exhibit areas or in
              hotel areas immediately prior to and during Convention, including,
              but not limited to flyers, circulars, and souvenirs, is subject to
              approval by UCEA and must be distributed within the limits of the
              Exhibitor’s table space.
            </li>

            <li>
              <strong>Endorsements by UCEA.</strong> Unless expressly indicated
              otherwise, UCEA does not endorse or assume responsibility for any
              Sponsor and their products and services. Mere participation in
              Convention does not imply such endorsement. As such, Sponsor
              understands and agrees that they may not advertise or otherwise
              represent that UCEA endorses its products and services unless such
              endorsement does in fact exist. An endorsement by UCEA will only
              exist if there is writing explicitly indicating endorsement,
              signed by both parties.
            </li>

            <li>
              <strong>Right to cancel sponsorship.</strong> Sponsor understands
              and agrees that their attendance and participation must comply
              with all provisions of this Contract. If UCEA determines Sponsor
              is in breach of this Contract, UCEA may terminate this Contract
              and without a refund or liability to UCEA.
            </li>

            <li>
              <strong>Cancellation.</strong> Sponsorship is non-refundable and
              non-transferable.
            </li>

            <li>
              <strong>Compliance with All Applicable Rules and Laws.</strong> In
              addition to the provisions of this Contract, Sponsor agrees to
              abide by all applicable rules, regulations, and state and local
              laws that may be applicable, including rules of Convention
              facility, health, fire, and safety regulations.
            </li>

            <li>
              <strong>Severability.</strong> If any provision or provisions of
              this Contract are held to be invalid, illegal, or unenforceable,
              the validity, legality, and enforceability of the remaining
              provisions shall not in any way be affected or impaired thereby.
            </li>

            <li>
              <strong>Mediation.</strong> The parties shall attempt in good
              faith to resolve any dispute arising out of or relating to the
              application/contract by mediation. The mediator will be selected
              by the parties by mutual agreement. In the event the parties
              cannot agree on a mediator, each party will name a mediation or
              alternative dispute resolution company and will instruct the
              representatives of the chosen companies to jointly recommend a
              neutral third party to act as mediator. In the event that the
              dispute remains unresolved after 90 days after appointment of a
              mediator, the parties shall submit the dispute to arbitration.
            </li>

            <li>
              <strong>Outstanding debts.</strong> All outstanding debts owed to
              UCEA must be paid prior to participation in Convention. If such
              debts remain unpaid at the time of UCEA, UCEA reserves the right
              to exclude Sponsor from Convention without liability. Failure of
              UCEA to exercise rights under this provision will not waive UCEA’s
              right to full collection.
            </li>

            <li>
              <strong>Choice of Law.</strong> This Terms will be construed under
              the laws of the State of Michigan.
            </li>

            <li>
              <strong>Indemnification; Limitations of Liability.</strong>{" "}
              Sponsor assumes full responsibility for the acts, omissions, and
              conduct of its representatives, agents and contractors and agrees
              to indemnify, hold harmless and defend UCEA, its officers and
              directors, employees, and agents from and against any and all
              claims, losses, damages, governmental fines or penalties, and
              costs or expenses, including court costs, interest and attorney
              fees of any kind whatsoever arising from such actors or omissions,
              and conduct, except to the extent that such claims, losses or
              damages are the direct result of UCEA’s gross negligence or
              intentional acts. In any event, UCEA’s liability to Sponsor under
              this contract shall be limited to and not exceed the amount of
              table fees paid by Sponsor.
            </li>
          </ol>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
