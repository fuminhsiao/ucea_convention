"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/general/PageHeader";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

import heroImage from "@/assets/UCEA25_Horizontal.png";
import verticalLogo from "@/assets/UCEA25_Vertical.png";
import artistPhoto from "@/assets/Monica.jpg";
import horizontalLogo from "@/assets/UCEA25_Horizontal.png";

export default function ConventionLogoPage() {
  return (
    <div className="w-full">
      <PageHeader showOverlay imageSrc={heroImage} altText="UCEA25 Hero" />
      <PageTitle title="Convention Logo" />

      {/* Section 1: Vertical Logo Left + Text Right */}
      <SectionWrapper>
        <SectionContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex ">
              <Image
                src={verticalLogo}
                alt="UCEA25 Vertical Logo"
                
                className="rounded shadow-md"
              />
            </div>
            
            <div className="w-full md:w-1/2">
            <SectionTitle>Sonidos del Borinken</SectionTitle>
              <p className="leading-relaxed">
                <strong>
                  From the jíbaro playing plena to the singing of the coquí; from the echoes of the bomba drums to the roars of the wind and ocean in El Morro...
                </strong>{" "}
                these are all iconic sounds that define Puerto Rico. Finding the beauty and richness of our culture in not just the colorful environment and people, but in our music, our way of speaking, and our surroundings. Because even in the most silent nights with the sky covered in stars, the silence is uniquely... <em>boricua</em>.
              </p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Section 2: Text Left + Artist Image Right */}
      <SectionWrapper>
        
        <SectionContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <div className="w-full md:w-1/2">
            <SectionTitle>About the Artist</SectionTitle>
              <p className="leading-relaxed">
                <strong>Mónica Paola Rodríguez</strong> is a professional illustrator who grew up loving art and telling diverse stories. She earned her Bachelor Degree in Fine Arts at SCAD in Savannah, Georgia. From then on, she has been representing her Puerto Rican culture by freelancing, illustrating children&apos;s books and products for various clients. These include Scholastic Inc., Disney Publishing, McDonald&apos;s, and many more. Mónica is from and currently residing in San Juan, Puerto Rico.
              </p>
              <p className="mt-4">
                <a
                  href="https://www.monicandraw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit Artist Website
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={artistPhoto}
                alt="Mónica Paola Rodríguez"
                
                className="rounded shadow-md object-cover"
              />
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Section 3: Full Width Horizontal Logo */}
      <SectionWrapper>
        <SectionTitle>Horizontal Logo</SectionTitle>
        <SectionContent>
          <div className="w-full">
            <Image
              src={horizontalLogo}
              alt="UCEA25 Horizontal Logo"
              className="rounded shadow-md w-full h-auto"
              priority
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}
