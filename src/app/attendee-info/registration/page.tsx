"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

export default function RegistrationPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Registration Information" />

      <SectionWrapper>
        <SectionContent>
          <p>
            Register early to secure your spot at the 2025 UCEA Annual Convention and take advantage of discounted rates. 
          </p><br/>
          <p>
            Register by clicking on the <b>Member Login</b> button in the <a href="https://www.ucea.org/" target="_blank" className="text-blue-700 underline">ucea homepage</a> upper right corner. If you are unable to log in to your member profile page, please email
            <a href="mailto:info@ucea.org" className="text-blue-700 underline"> info@ucea.org</a>.
          </p><br/>
          <p>All attendees must register for the Convention. This includes the following:</p>
          <ul className="list-disc pl-6">
            <li>Session Presenters</li>
            <li>Session Facilitators</li>
            <li>General Attendees</li>
            <li>Graduate Students attending the Graduate Student Summit (complimentary registration to the GSS when registering for Convention) or the Jackson Scholars Research Symposium</li>
          </ul><br/>
          <p>
            <a href="https://www.ucea.org/member_directory.php" target="_blank" className="text-blue-700 underline">Click here</a> to see if your institution is a UCEA member.
          </p><br/>
          <p>
            <a
              href="https://members.ucea.org/members/evr/reg_event.php?orgcode=UCEA&evid=55440597"
              target="_blank"
              rel="noopener noreferrer"
               className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Register for UCEA25
            </a>
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>UCEA 2025 Annual Convention Refund Policy</SectionTitle>
        <SectionContent>
          <p>
            We understand that circumstances may arise which prevent you from attending the Annual Convention. To support our attendees and maintain the integrity of our event planning, we have established the following refund policy. The tables below outline the terms and conditions for registration cancellations and refunds to ensure transparency and fairness for all participants. We encourage all registrants to review this information carefully before completing their registration.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border text-left text-sm">
              <thead className="bg-gray-200 font-semibold">
                <tr>
                  <th className="border px-4 py-2 bg-gray-300 text-center" colSpan={5}>GENERAL REGISTRATION</th>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Timeframe</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Refund</th>
                  <th className="border px-4 py-2">Processing Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Early Cancellation</td>
                  <td className="border px-4 py-2">Up to 4 weeks before Convention</td>
                  <td className="border px-4 py-2">Before September 3</td>
                  <td className="border px-4 py-2">Full refund</td>
                  <td className="border px-4 py-2">$25.00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Delayed Cancellation</td>
                  <td className="border px-4 py-2">2–4 weeks before Convention</td>
                  <td className="border px-4 py-2">September 4 through October 15</td>
                  <td className="border px-4 py-2">50% refund</td>
                  <td className="border px-4 py-2">$25.00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Late Cancellation</td>
                  <td className="border px-4 py-2">Within 2 weeks of Convention</td>
                  <td className="border px-4 py-2">After November 3</td>
                  <td className="border px-4 py-2">0% refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">No Show</td>
                  <td className="border px-4 py-2">At time of Convention</td>
                  <td className="border px-4 py-2">November 20</td>
                  <td className="border px-4 py-2">0% refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 bg-gray-300 text-center" colSpan={5}>SPECIAL EVENTS</th>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Awards Luncheon</td>
                  <td className="border px-4 py-2">More than one week before event</td>
                  <td className="border px-4 py-2">Before November 13</td>
                  <td className="border px-4 py-2">Full refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Awards Luncheon</td>
                  <td className="border px-4 py-2">Less than one week before event</td>
                  <td className="border px-4 py-2">After November 13</td>
                  <td className="border px-4 py-2">0% refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Annual Banquet</td>
                  <td className="border px-4 py-2">More than one week before event</td>
                  <td className="border px-4 py-2">Before November 13</td>
                  <td className="border px-4 py-2">Full refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Annual Banquet</td>
                  <td className="border px-4 py-2">Less than one week before event</td>
                  <td className="border px-4 py-2">After November 13</td>
                  <td className="border px-4 py-2">0% refund</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionTitle className="mt-8">Additional Considerations</SectionTitle>
          <ul className="list-disc pl-6 mt-2">
            <li><b>Documentation:</b> All refund requests must be submitted in writing to <a href="mailto:convention@ucea.org" className="text-blue-700 underline">convention@ucea.org</a>.</li>
            <li><b>Processing Time:</b> Full refunds will be processed within 2–3 business days. Partial refunds will be processed after the Convention. Refunds will be credited to the original payment method.</li>
            <li><b>Transferability:</b> Registrations may be transferred to another individual, provided written notice is received at least two weeks before the event.</li>
            <li><b>Medical or Extenuating Circumstances:</b> Refunds may be considered on a case-by-case basis in the event of a medical emergency or other extenuating circumstances. Supporting documentation may be required.</li>
            <li><b>Specific Event Rules:</b> This policy applies to all UCEA events unless otherwise stated in individual event details.</li>
          </ul>

          <p className="mt-4">
            <b>Contact Information</b><br />
            For any questions regarding the refund policy, please contact the Project and Event Manager at <a href="mailto:convention@ucea.org" className="text-blue-700 underline">convention@ucea.org</a>.
          </p>

          <p className="mt-2">
            <b>Questions</b><br />
            For questions or if you need assistance with registration, please email us.
          </p>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
