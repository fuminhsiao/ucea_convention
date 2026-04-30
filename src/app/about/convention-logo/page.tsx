"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/general/PageHeader2026";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

import heroImage from "@/assets/UCEA25_Horizontal.png";

const artistPhoto =
  "https://ucea.org/photos/UCEA1777561997_Morgan_Alexander_headshot.jpeg";

const verticalLogo =
  "https://ucea.org/photos/UCEA1777561997_UCEA_2nd_Concept_FINAL_Vertical.jpg";

export default function ConventionLogoPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Logo" />

      {/* Section 1: Horizontal Logo - hidden until 2026 horizontal logo is available */}
      {/*
      <SectionWrapper>
        <SectionContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3 flex">
              <Image
                src={horizontalLogo}
                alt="UCEA26 Horizontal Logo"
                className="rounded shadow-md"
              />
            </div>

            <div className="w-full md:w-1/3">
              <SectionTitle>Convention Logo</SectionTitle>
              <p className="leading-relaxed">
                Logo description coming soon.
              </p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>
      */}

      {/* Section 2: Artist Statement + Artist Image */}
      <SectionWrapper>
        <SectionContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <SectionTitle>Artist Statement</SectionTitle>

              <p className="leading-relaxed">
                I began this artwork with research about the history of
                Pittsburgh and its bridges. The Three Sisters Bridges stood out
                to me because they are named after three diverse historical
                figures who unified people through their educational leadership
                in society. Rachel Carson unified people through the
                environmentalist movement. Andy Warhol unified people through
                the world of art. Roberto Clemente unified people through the
                sport of baseball.
              </p>

              <p className="mt-4 leading-relaxed">
                The Three Sisters bridges are depicted merging into the city,
                symbolizing people unifying in both a literal and metaphorical
                sense for what they are passionate about. The outline of the
                city of Pittsburgh is at the central horizon line, symbolizing
                that the city is the center stage of unifying people into one
                community.
              </p>

              <p className="mt-4 leading-relaxed">
                The three figures are presented above the bridge that is named
                after them and the city itself to represent the large amount of
                impact these figures have on people and on the city of
                Pittsburgh itself. Without the efforts, leadership roles, and the
                education through practice of Rachel Carson, Andy Warhol, and
                Roberto Clemente; the environmentalist movement, the art world,
                the sport of baseball, the city of Pittsburgh, and the people of
                Pittsburgh would not be as educated and unified as it is today.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={artistPhoto}
                alt="Morgan Alexander"
                width={500}
                height={500}
                className="rounded shadow-md object-cover"
              />
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Section 3: Full Width Vertical Logo */}
      <SectionWrapper>
        <SectionTitle>Vertical Logo</SectionTitle>
        <SectionContent>
          <div className="w-full">
            <Image
              src={verticalLogo}
              alt="UCEA26 Vertical Logo"
              width={1200}
              height={1600}
              className="rounded shadow-md w-full h-auto"
              priority
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}