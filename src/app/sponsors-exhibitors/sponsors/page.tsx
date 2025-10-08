"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

// 🔹 定義 TypeScript 型別
interface SponsorItem {
  name: string;
  img: string;
  details?: string;
}

interface SponsorTier {
  tier: string;
  sponsors: SponsorItem[];
}

// 🔹 2025 贊助商資料
const sponsors2025: SponsorTier[] = [
  {
    tier: "Platinum",
    sponsors: [
      {
        name: "The Wallace Foundation",
        img: "https://ucea.org/photos/UCEA1759933732_Wallace_Logo.png",
      },
      {
        name: "Michigan State University",
        img: "https://ucea.org/photos/UCEA1759933731_MichiganStatelogo.png",
      },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      {
        name: "University of Georgia",
        details: "Endowed Chair Dr. Morrill M. Hall",
        img: "https://ucea.org/photos/UCEA1759933731_UGAlogo_Vertical_FC_MARCM_copy.jpg",
      },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      {
        name: "Texas State University",
        img: "https://ucea.org/photos/UCEA1759933731_Texas_State.png",
      },
      {
        name: "University of Connecticut",
        img: "https://ucea.org/photos/UCEA1759933731_NAEG.png",
      },
      {
        name: "Kennesaw State University",
        img: "https://ucea.org/photos/UCEA1759934931_Kennesaw.jpg",
      },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      {
        name: "Texas Christian University",
        img: "https://ucea.org/photos/UCEA1759933731_TCU_College_of_Education.png",
      },
      {
        name: "Miami University",
        img: "https://ucea.org/photos/UCEA1759933731_Miami_U_HS_C41230KW_K_Digital.png",
      },
      {
        name: "University of California, Berkeley",
        img: "https://ucea.org/photos/UCEA1759933737_Cal_Berkeley_logo.png",
      },
      {
        name: "Ohio State University",
        img: "https://ucea.org/photos/UCEA1759933730_OhioStateU.png",
      },
      {
        name: "Routledge: Taylor & Francis Group",
        img: "https://ucea.org/photos/UCEA1759933731_Routledge_blue.png",
      },
    ],
  },
];

const SponsorsPage = () => {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Sponsors" />

      {/* 2025 SPONSORS SECTION */}
      <SectionWrapper>
        <SectionTitle>2025 Sponsors</SectionTitle>
        <SectionContent>
          <p className="text-base text-gray-800 mb-4">
            Our list of <strong>2025 UCEA Convention Sponsors</strong> is
            continuously growing! We are grateful to the partners who have
            already committed to supporting <strong>#UCEA25</strong> in San
            Juan, Puerto Rico.
          </p>
          

          {/* 🔹 各贊助層級 */}
          {sponsors2025.map((tier) => (
            <div key={tier.tier} className="mb-10">
              <h3 className="text-xl font-semibold text-[#00334e] mb-4 border-l-4 border-blue-500 pl-4">
                {tier.tier}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-48 h-32 flex items-center justify-center mb-3">
                      <Image
                        src={sponsor.img}
                        alt={sponsor.name}
                        width={200}
                        height={120}
                        className="object-contain max-h-32"
                      />
                    </div>
                    <p className="font-medium text-gray-900">{sponsor.name}</p>
                    {sponsor.details && (
                      <p className="text-sm text-gray-600">{sponsor.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>

      
    </div>
  );
};

export default SponsorsPage;
