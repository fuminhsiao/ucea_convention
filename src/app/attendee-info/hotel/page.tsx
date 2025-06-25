"use client";

import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader";
import LocationMapSection from "@/components/hotel/LocationMapSection";
import Hotel from "@/assets/Hotel.jpg";

export default function HotelTravelPage() {
  const hotelName = "Sheraton Puerto Rico Resort & Casino";
  const hotelStreet = "200 Convention Boulevard, San Juan, Puerto Rico, 00907";
  const hotelTel = "+1 787-993-3500";

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

  return (
    <div className="w-full">
      <PageHeader
        showOverlay
        imageSrc={Hotel}
        altText="Custom Convention Banner"
      />
      <PageTitle title="HOTEL & TRAVEL" />

      <SectionWrapper>
        <SectionTitle>Sheraton Puerto Rico Resort and Casino</SectionTitle>
        <SectionContent>
          <p>
            <b>Guest Room Rates:</b>
          </p>
          <ul className="list-disc pl-6">
            <li>
              Run of House (room type selected based upon availability at
              check-in): $199.00 + tax
            </li>
            <li>Single: $209.00 + tax</li>
            <li>Double: $214.00 + tax</li>
          </ul>
          <p className="mt-4">
            Rooms available at group rate from{" "}
            <b>November 13 through November 27</b>.
          </p>
          <p className="mt-6">
            The 2025 UCEA Annual Convention host hotel is the{" "}
            <b>Sheraton Puerto Rico Resort and Casino</b>. We encourage you to
            make your reservation early as rooms sell quickly. All reservations
            must be made by <b>Monday, October 24, 2025</b>, to receive the
            rates <b>listed above</b>.
          </p>
          <p className="mt-4">
            Reserve your room{" "}
            <a href="#" className="text-blue-700 underline">
              online
            </a>{" "}
            or by calling <b>1-866-932-7269</b>. Use code <b>AEC</b> when
            booking by phone.
          </p>
        </SectionContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Location & Transportation</SectionTitle>
        <LocationMapSection
          name={hotelName}
          street={hotelStreet}
          tel={hotelTel}
          transportOptions={transportOptions}
          mapCenter={mapCenter}
          mapZoom={mapZoom}
        />
      </SectionWrapper>
    </div>
  );
}
