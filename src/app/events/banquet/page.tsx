"use client";

import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionContent from "@/components/ui/general/SectionContent";

// Hero image
import Bella from "@/assets/Bella Vista.jpg";

export default function AnnualBanquetPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <PageHeader imageSrc={Bella} altText="Bella Vista Terrace at Sheraton Puerto Rico" />
      <PageTitle title="2025 UCEA Annual Banquet: San Juan Nights" />

      <SectionWrapper>
        <SectionContent>
          {/* Event Details */}
          <div className="text-gray-800 mb-6">
            <p>
              <strong>Saturday, November 22</strong>
            </p>
            <p>6:00 PM – 9:00 PM</p>
            <p>
              <strong>Bella Vista Terrace / Level 4</strong> <br />
              Sheraton Puerto Rico Resort and Casino
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-800 mb-6">
            Join us for a <strong>San Juan Nights</strong> celebration as we bring the vibrant heart
            of Puerto Rico to life—with delicious Puerto Rican cuisine, live entertainment, and
            tropical delights. The Annual Banquet will be poolside at the Bella Vista Terrace on
            Level 4 of the Sheraton Puerto Rico Resort and Casino.
          </p>

          <p className="text-base text-gray-800 mb-4">
            Tickets are <strong>$80/person</strong> for faculty and <strong>$60</strong> for graduate
            students, post-docs, and practitioners. All guests are <strong>$80</strong>.
          </p>

          {/* Registration Button */}
          <div className="mt-8 mb-10">
            <a
              href="https://members.ucea.org/members/evr/reg_main.php?orgcode=UCEA&evid=58610465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              🎟️ Register for the Banquet
            </a>
          </div>

          {/* Images */}
          <div className="flex flex-col md:flex-row gap-6  items-center">

            <img
              src="https://ucea.org/photos/UCEA1760929412_Pool_1.jpeg"
              alt="2024 UCEA Banquet"
              className="w-full md:w-1/2 rounded-lg shadow-md border"
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
