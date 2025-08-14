"use client";

import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader";
import LocationMapSection from "@/components/hotel/LocationMapSection";
import Hotel from "@/assets/Hotel.jpg";

export default function HotelTravelPage() {
  const hotels = [
    {
      name: "Sheraton Puerto Rico Resort & Casino",
      street: "200 Convention Blvd, San Juan, 00907, Puerto Rico",
      tel: "+1 787-993-3500",
      lat: 18.45427,
      lng: -66.09032,
      isHeadquarter: true,
    },
    {
      name: "Hyatt House San Juan",
      street:
        "615 Ave Fernandez Juncos Distrito de Convenciones, San Juan, 00907, Puerto Rico",
      tel: "+1 787-977-5000",
      lat: 18.45596,
      lng: -66.08745,
    },
    {
      name: "Hyatt Place San Juan",
      street: "580 Av. Manuel Fernández Juncos, San Juan, 00907, Puerto Rico",
      tel: "+1 787-721-3000",
      lat: 18.45552,
      lng: -66.08823,
    },
    {
      name: "Aloft San Juan",
      street: "250 Convention Boulevard, San Juan, 00907, Puerto Rico",
      tel: "+1 866-912-1011",
      lat: 18.45507,
      lng: -66.09205,
    },
  ];

  const transportOptions = [
    {
      title: "Luis Munoz Marin International Airport",
      content: (
        <p>
          Distance From Property: 7.0 Miles
          <br />
          Phone Number: +1 787-253-2329
          <br />
          <a
            href="https://www.aeropuertosju.com/"
            className="text-blue-700 underline"
          >
            Visit Website
          </a>
          <br />
        </p>
      ),
    },
    {
      title: "Isla Grande Airport",
      content: (
        <p>
          Distance From Property: 1.0 Miles
          <br />
          Phone Number: +1 787-741-3809
        </p>
      ),
    },
    {
      title: "Other Transportation",
      content: (
        <p>
          On-Property:
          <br />
          Private Car Service:
          <br />
          Limousine/Van Service
          <br />
          <br />
          Onsite Car Rental Company:
          <br />
          Avis
          <br />
          <br />
          Nearby:
          <br />
          Bus Station:
          <br />
          <a href="http://ati.pr/" className="text-blue-700 underline">
            Terminal Central Covadonga
          </a>
        </p>
      ),
    },
  ];

  const mapCenter = { lat: 18.451, lng: -66.088 };
  const mapZoom = 15;

type HotelBlockProps = {
  name: string;
  website: string;
  reserveLink: string;
  phone: string;
  code: string;        // 代碼，例如 "G-UCEA"
  details: string[];
};

 const HotelBlock = ({
  name,
  website,
  reserveLink,
  phone,
  code,
  details,
}: HotelBlockProps) => (
  <div className="mt-8 first:mt-0">
    <h3 className="font-bold text-xl text-black">{name}</h3>
    <div className="text-base text-gray-700 mb-2">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        Visit Website
      </a>
    </div>
    <ul className="list-disc pl-6 mt-2 text-base">
      {details.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
      <li>
        <a
          href={reserveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Reserve your room
        </a>{" "}
        online or call <b>{phone}</b>. Use code{" "}
        <b className="text-blue-700">{code}</b> in the Special Rates section
        when booking online or when booking by phone.
      </li>
    </ul>
  </div>
);

  return (
    <div className="w-full">
      <PageHeader imageSrc={Hotel} altText="Custom Convention Banner" />
      <PageTitle title="HOTEL & TRAVEL" />

      <SectionWrapper>
        {" "}
        <SectionTitle>Headquarter Hotel</SectionTitle>
        <h3 className="font-bold text-3xl text-black">Sheraton Puerto Rico Resort and Casino</h3>{" "}
        <SectionContent>
          {" "}
          <p>
            {" "}
            Guest Room Rates:{" "}
          </p>{" "}
          <ul className="list-disc pl-6">
            {" "}
            <li>
              {" "}
              Run of House (room type selected based upon availability at
              check-in): $199.00 + tax{" "}
            </li>{" "}
            <li>Single: $209.00 + tax</li> <li>Double: $214.00 + tax</li>{" "}
          </ul>{" "}
          <p className="mt-4">
            {" "}
            Rooms available at group rate from{" "}
            <b>November 13 through November 27</b>.{" "}
          </p>{" "}
          <p className="mt-6">
            {" "}
            The 2025 UCEA Annual Convention host hotel is the{" "}
            <a
              href="https://www.marriott.com/en-us/hotels/sjusi-sheraton-puerto-rico-resort-and-casino/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              {" "}
              Sheraton Puerto Rico Resort and Casino{" "}
            </a>{" "}
            . We encourage you to make your reservation early as rooms sell
            quickly. All reservations must be made by{" "}
            <b>Monday, October 24, 2025</b>, to receive the rates{" "}
            <b>listed above</b>.{" "}
          </p>{" "}
          <p className="mt-4">
            {" "}
            {" "}
            <a
              href="https://book.passkey.com/event/51030830/owner/5772432/home?utm_campaign=297253416"
              target="_blank"
              className="text-blue-700 underline"
            >Reserve your room
              
              
            </a>{" "}
           online or by calling <b>1-866-932-7269</b>. Use code <b>AEC</b> when
            booking by phone.{" "}
          </p>{" "}
        </SectionContent>{" "}
      </SectionWrapper>

      <SectionWrapper>
  <SectionTitle>Additional Hotels with Group Rates</SectionTitle>
  <SectionContent>
    <HotelBlock
      name="Hyatt House San Juan"
      website="https://www.hyatt.com/hyatt-house/en-US/sjuxs-hyatt-house-san-juan"
      reserveLink="https://www.hyatt.com/en-US/hotel/puerto-rico/hyatt-house-san-juan/sjuxs?corp_id=G-UCEA"
      phone="1-787-977-5000"
      code="G-UCEA"
      details={[
        "King/Double: $209 (Total rate including taxes and fees $271.09)",
        "Rate includes complimentary daily Full American Breakfast Buffet",
        "Rooms available at group rate from November 18 through November 23",
        "Contact the hotel directly to add room nights if you want to extend your reservation up to 3 days pre and post the dates above.",
        "Reservations must be made by Monday, October 25, 2025",
      ]}
    />
    <HotelBlock
      name="Hyatt Place San Juan"
      website="https://www.hyatt.com/hyatt-place/en-US/sjuzs-hyatt-place-san-juan"
      reserveLink="https://www.hyatt.com/en-US/hotel/puerto-rico/hyatt-place-san-juan-city-center/sjuzs?corp_id=G-UCEA"
      phone="1-787-721-3000"
      code="G-UCEA"
      details={[
        "King Double: $204 (Total rate including taxes and fees $264.61)",
        "Rate includes complimentary daily Full American Breakfast Buffet",
        "Rooms available at group rate from November 18 through November 23",
        "Contact the hotel directly to add room nights if you want to extend your reservation up to 3 days pre and post the dates above.",
        "Reservations must be made by Monday, October 25, 2025",
      ]}
    />
    <HotelBlock
      name="Aloft San Juan"
      website="https://www.marriott.com/en-us/hotels/sjual-aloft-san-juan/overview/"
      reserveLink="https://www.marriott.com/event-reservations/reservation-link.mi?id=1755113494944&key=GRP&app=resvlink"
      phone="1-866-912-1011"
      code="UOBUOBA"
      details={[
        "King/Double: $214 (Total rate including destination fee and taxes $276.08)",
        "View the rate details when booking online to see view destination fee details.",
        "Rooms available at group rate from November 18 through November 23",
        "Reservations must be made by Friday, October 18, 2025",
      ]}
    />
  </SectionContent>
</SectionWrapper>


      <SectionWrapper>
        <SectionTitle>Location & Transportation</SectionTitle>
        <LocationMapSection
          hotels={hotels}
          transportOptions={transportOptions}
          mapCenter={mapCenter}
          mapZoom={mapZoom}
        />
      </SectionWrapper>
    </div>
  );
}
