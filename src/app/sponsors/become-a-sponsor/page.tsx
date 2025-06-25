"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

export default function SponsorshipPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Become a Sponsor" />

      <SectionWrapper>
        <SectionContent>
          <p>
            Each year, the UCEA Convention is attended by top educational leadership research and policy scholars from institutions across the nation and internationally. As a non-profit organization, UCEA relies on the generous support of members like you to deliver a successful Annual Convention, Graduate Student Summit, and Jackson Scholars Research Symposium.
          </p>
         

          <p className="mt-4">
            Sponsorship for the UCEA Convention offers a premier opportunity to showcase your institution. Sponsors are recognized prominently in the lead-up to and throughout the Convention.
          </p>
           <div className="mt-6">
            <a
      target="_blank"
      href="https://www.ucea.org/docs/UCEA_Convention_2025_CFP_031925.pdf"
      className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
    >Sponsor UCEA25</a>
            
          </div>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>General/Non-Restricted Sponsorship Opportunities</SectionTitle>
        <SectionContent>
          <p>(Funds can be used as needed by UCEA)</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Platinum Sponsor – $10,000 & up</li>
            <li>Gold Sponsor – $5,000–$9,999</li>
            <li>Silver Sponsor – $2,500–$4,999</li>
            <li>Bronze Sponsor – $1,000–$2,499</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Individual/Targeted Sponsorship Opportunities</SectionTitle>
        <SectionContent>
          <p>(Funds are directed to specific programs. Individual opportunities may be combined to reach General Sponsorship benefit levels.)</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Social Events/Receptions</li>
            <li>Jackson Scholars Network</li>
            <li>Graduate Students</li>
            <li>Graduate Student Summit</li>
            <li>Keynote Speakers</li>
            <li>Special Events</li>
            <li>Mobile App</li>
            <li>Program Ads</li>
            <li>Branding on Promotional Item</li>
          </ul>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Sponsor Benefits</SectionTitle>
        <SectionContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Benefit Area</th>
                  <th className="border px-4 py-2">Platinum Sponsor</th>
                  <th className="border px-4 py-2">Gold Sponsor</th>
                  <th className="border px-4 py-2">Silver Sponsor</th>
                  <th className="border px-4 py-2">Bronze Sponsor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Events</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Four complimentary annual banquet tickets</li>
                      <li>Four complimentary awards luncheon tickets</li>
                      <li>Two complimentary faculty registrations</li>
                      <li>One complimentary table in the exhibit area for displaying materials</li>
                    </ul>
                  </td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Two complimentary annual banquet tickets</li>
                      <li>One complimentary full-page ad in the convention program (Deadline: Oct 1)</li>
                    </ul>
                  </td>
                  <td className="border px-4 py-2">NA</td>
                  <td className="border px-4 py-2">NA</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Recognitions</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>One complimentary full-page ad in the convention program (Deadline: Oct 1)</li>
                      <li>At the Opening Session and all General Sessions (oral and on session slides)</li>
                      <li>Banner ad on the convention mobile app</li>
                      <li>On UCEA social media platforms</li>
                      <li>On the sponsor page in the convention program</li>
                      <li>In the UCEA Review (post-convention)</li>
                      <li>On signage at registration</li>
                      <li>On the UCEA website (by sponsorship level)</li>
                    </ul>
                  </td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>At the Opening Session and all General Sessions (oral and on session slides)</li>
                      <li>Banner ad on the convention mobile app</li>
                      <li>On UCEA social media platforms</li>
                      <li>On the sponsor page in the convention program</li>
                      <li>In the UCEA Review (post-convention)</li>
                      <li>On signage at registration</li>
                      <li>On the UCEA website (by sponsorship level)</li>
                      <li>At the UCEA slideshow during general sessions</li>
                    </ul>
                  </td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Banner ad on the convention mobile app</li>
                      <li>On UCEA social media platforms</li>
                      <li>On the sponsor page in the convention program</li>
                      <li>In the UCEA Review (post-convention)</li>
                      <li>On signage at registration</li>
                      <li>On the UCEA website (by sponsorship level)</li>
                      <li>At the UCEA slideshow during general sessions</li>
                    </ul>
                  </td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>On the sponsor page in the convention program</li>
                      <li>In the UCEA Review (post-convention)</li>
                      <li>On signage at registration</li>
                      <li>On the UCEA website (by sponsorship level)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionContent>
      </SectionWrapper>

      
    </div>
  );
}
