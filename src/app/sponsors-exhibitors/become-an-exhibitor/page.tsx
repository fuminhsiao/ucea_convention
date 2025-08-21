"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import Exhibitor from "@/assets/Exhibitors.jpg"

export default function ExhibitorPage() {
  return (
    <div className="w-full">
      <PageHeader
        
        imageSrc={Exhibitor}
        altText="Custom Convention Banner"
      />
      <PageTitle title="Welcome Exhibitors" />

      <SectionWrapper>
        <SectionContent>
          <p>UCEA welcomes exhibitors to the 2025 Annual Convention held in San Juan, PR!</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Convention Location</SectionTitle>
        <SectionContent>
          <p>Sheraton Puerto Rico Resort and Casino</p>
          <p>200 Convention Blvd.</p>
          <p>San Juan, PR 00907</p>
          <p>787-993-3500</p>
          <p><a target="_blank"
              href="https://members.ucea.org/members/evr/reg_main.php?orgcode=UCEA&evid=55440597"  className="text-blue-600 underline">Website</a></p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Exhibit Hours</SectionTitle>
        <SectionContent>
          <p>Thursday, November 20: 12:00 PM – 5:00 PM (set-up begins at 10:00 AM)</p>
          <p>Friday, November 21: 9:00 AM – 5:00 PM</p>
          <p>Saturday, November 22: 9:00 AM – 1:00 PM</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Expected Attendance</SectionTitle>
        <SectionContent>
          <p>1000+</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Exhibit Space Location</SectionTitle>
        <SectionContent>
          <p>Exhibit tables will be set up on the 2nd Level near the meeting rooms to maximize traffic as attendees go to sessions.</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Exhibit Space Cost</SectionTitle>
        <SectionContent>
          <p>$400/table + 3% processing fee for credit card payments.</p>
          <p>Tables are skirted with two chairs – there are no booths</p>
          <p><span className="font-semibold">Note:</span> UCEA will not provide staffing for any booth and will not setup or take down any booth.</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Reserve Your Table</SectionTitle>
        <SectionContent>
          
          <ol className="list-decimal pl-6">
            <li>You will reserve your booth through the convention registration.</li>
            <li>Click the <span className="italic">Reserve Your Booth</span> button.</li>
            <li>Click the grey <span className="italic">Register for this event</span> button.</li>
            <li>Enter your email address. Click <span className="italic">Continue</span>.</li>
            <li>Fill out the <span className="italic">Contact Information</span> form. Click <span className="italic">Continue</span>.</li>
            <li>Select <span className="italic">Exhibitor</span> under <span className="italic">Registration Type Selection</span>.</li>
            <li>Select to agree to the <span className="italic">Appropriate Professional Conduct</span>. Click <span className="italic">Continue</span>.</li>
            <li>Review your information on the <span className="italic">Summary</span> page. Click <span className="italic">Complete this Registration</span>.</li>
            <li>Select your payment method. Click <span className="italic">Continue</span>.</li>
            <li>Enter your payment information. Click <span className="italic">Submit</span>.</li>
          </ol>
          <p className="mt-4"><span className="font-semibold">Note:</span> <a  className="text-blue-600 underline" href="mailto:convention@ucea.org?subject=UCEA24:%20Exhibitor%20Registration">Email</a> us if you would like to add a second table. We will send you a separate invoice for the second table if you choose to pay for the first table with a credit card.</p>
          <div className="mt-6">
            <a
              target="_blank"
              href="https://members.ucea.org/members/evr/reg_main.php?orgcode=UCEA&evid=55440597"
              className="border border-blue-600 text-blue-600 px-4 py-2 text-xl font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Reserve Your Booth
            </a>
          </div>
          <p className="mt-4">
            Enter <span className="font-semibold italic text-red-600">2025EXHIBITOR</span> in the Discount Code field to access the Exhibitor registration package.
          </p>
          
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Convention Registration</SectionTitle>
        <SectionContent>
          <p>You will receive two complimentary staff registrations with your table(s) purchase. Email us if the person who filled out the form will not be attending on-site and/or if you would like to add a second staff member. We will send you the necessary discount code and instructions.</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Internet</SectionTitle>
        <SectionContent>
          <p>Complimentary wireless internet will be available in all meeting spaces.</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Security</SectionTitle>
        <SectionContent>
          <p>UCEA and the hotel cannot guarantee the security of your items and will not be held responsible for any items on the tables.</p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Shipping Information</SectionTitle>
        <SectionContent>
          <p>Exhibitors are responsible for the shipping and receiving of all packages to the Sheraton Puerto Rico Resort and Casino. UCEA will not accept any packages.</p><br/>
          <p>Your Company Contact, Your Company Name</p>
          <p>Sheraton Puerto Rico Resort & Casino</p>
          <p>200 Convention Boulevard</p>
          <p>San Juan, Puerto Rico 00907</p>
          <p>CSM: Steven Marrero (787) 993 3524</p>
        </SectionContent>
      </SectionWrapper>
       <SectionWrapper>
              <SectionTitle>Terms and Conditions</SectionTitle>
              <SectionContent>
                <p className="mb-4">
                  Please review the full terms and conditions before proceeding with
                  sponsorship.
                </p>
                <a
                  href="/sponsors-exhibitors/exhibitors/terms-and-conditions"
                  className="inline-block border border-blue-600 text-blue-600 px-4 py-2 text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Go to Terms and Conditions
                </a>
              </SectionContent>
            </SectionWrapper>
    </div>
  );
}
