"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/general/PageHeader2026";
import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";

const artistPhoto =
  "https://ucea.org/photos/UCEA1777561997_Morgan_Alexander_headshot.jpeg";

const horizontalLogo =
  "https://ucea.org/photos/UCEA1777913340_UCEA_Option_1_Version_1.jpg";

const verticalLogo =
  "https://ucea.org/photos/UCEA1777561997_UCEA_2nd_Concept_FINAL_Vertical.jpg";

export default function ConventionLogoPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <PageTitle title="Convention Logo" />

      {/* Section 1: Logo + Artist Information */}
      <SectionWrapper>
        <SectionContent>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Logo first */}
            <div className="w-full md:w-2/3 flex justify-center">
              <Image
                src={horizontalLogo}
                alt="UCEA26 Convention Logo"
                width={1200}
                height={700}
                className="rounded shadow-md w-full h-auto"
                priority
              />
            </div>

            {/* Artist headshot + information second */}
            <div className="w-full md:w-1/3">
              <div className="flex justify-center md:justify-start mb-5">
                <Image
                  src={artistPhoto}
                  alt="Morgan Alexander"
                  width={260}
                  height={260}
                  className="rounded shadow-md object-cover"
                />
              </div>

              <SectionTitle>Logo Artist</SectionTitle>

              <p className="leading-relaxed">
                <strong>Morgan Alexander</strong>
                <br />
                High School Student
                <br />
                Blackhawk High School
                <br />
                Beaver Falls, PA
              </p>
            </div>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Section 2: Logo Description */}
      <SectionWrapper>
        <SectionContent>
          <div className="max-w-4xl">
            <SectionTitle>Logo Description</SectionTitle>

            <p className="leading-relaxed">
              I began this artwork with research about the history of
              Pittsburgh and its bridges. The Three Sisters Bridges stood out to
              me because they are named after three diverse historical figures
              who unified people through their educational leadership in society.
              Rachel Carson unified people through the environmentalist
              movement. Andy Warhol unified people through the world of art.
              Roberto Clemente unified people through the sport of baseball.
            </p>

            <p className="mt-4 leading-relaxed">
              The Three Sisters bridges are depicted merging into the city,
              symbolizing people unifying in both a literal and metaphorical
              sense for what they are passionate about. The outline of the city
              of Pittsburgh is at the central horizon line, symbolizing that the
              city is the center stage of unifying people into one community.
            </p>

            <p className="mt-4 leading-relaxed">
              The three figures are presented above the bridge that is named
              after them and the city itself to represent the large amount of
              impact these figures have on people and on the city of Pittsburgh
              itself. Without the efforts, leadership roles, and the education
              through practice of Rachel Carson, Andy Warhol, and Roberto
              Clemente; the environmentalist movement, the art world, the sport
              of baseball, the city of Pittsburgh, and the people of Pittsburgh
              would not be as educated and unified as it is today.
            </p>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Section 3: Vertical Logo */}
      <SectionWrapper>
        <SectionTitle>Vertical Logo</SectionTitle>
        <SectionContent>
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src={verticalLogo}
              alt="UCEA26 Vertical Logo"
              width={1200}
              height={1600}
              className="rounded shadow-md w-full h-auto"
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
}