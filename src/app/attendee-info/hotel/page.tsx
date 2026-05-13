"use client";

import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader";

const westinImages = [
  {
    src: "https://ucea.org/photos/UCEA1778684144_Westin_exterior.jpeg",
    alt: "Westin Pittsburgh exterior",
  },
  {
    src: "https://ucea.org/photos/UCEA1778684144_Westin_Lobby.jpeg",
    alt: "Westin Pittsburgh lobby",
  },
  {
    src: "https://ucea.org/photos/UCEA1778684145_Westin_guest_room.jpeg",
    alt: "Westin Pittsburgh guest room",
  },
];

export default function HotelTravelPage() {
  return (
    <div className="w-full">
      <PageHeader
        imageSrc="https://ucea.org/photos/UCEA1778684144_Westin_exterior.jpeg"
        altText="Westin Pittsburgh"
      />

      <PageTitle title="HOTEL & TRAVEL" />

      {/* Headquarter Hotel */}
      <SectionWrapper>
        <SectionTitle>Headquarter Hotel</SectionTitle>

        

        <SectionContent>
          <p>Guest Room Rates:</p>

          <ul className="list-disc pl-6 mt-2">
            <li>
              Run of House (room type selected based upon availability at
              check-in): $192.00 + tax
            </li>
            <li>
              Rooms available at group rate from November 14 through November
              23
            </li>
          </ul>

          <p className="mt-6">
  The 2026 UCEA Annual Convention host hotel is the{" "}
  <a
    href="https://www.marriott.com/en-us/hotels/pitwi-the-westin-pittsburgh/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 underline hover:text-blue-900 transition-colors duration-300"
  >
    Westin Pittsburgh
  </a>
  . We encourage you to make your reservation early as rooms sell
  quickly. All reservations must be made by{" "}
  <b>Friday, October 23, 2026</b>, to receive rates listed above.
</p>

          <div className="mt-6">
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1767992361406&key=GRP&app=resvlink&_branch_match_id=1143931472301135378&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5mbmlpZGxmaGJgZladmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1zRlF%2BbioAs%2Bb4PGAAAAA%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              Reserve Your Room
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Hotel Photos */}
      <SectionWrapper>
        <SectionTitle>Hotel Photos</SectionTitle>

        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {westinImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-lg shadow-md bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Additional sections hidden until information is available */}
      {/*
      <SectionWrapper>
        <SectionTitle>Additional Hotels</SectionTitle>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Dining & Local Attractions</SectionTitle>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Location & Transportation</SectionTitle>
      </SectionWrapper>
      */}
    </div>
  );
}