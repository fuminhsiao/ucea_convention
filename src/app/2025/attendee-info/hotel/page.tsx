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
          Private Car Service
          <br />
          Limousine/Van Service
          <br />
          <br />
          Onsite Car Rental Company:
          <br />
          Avis
          <br />
          <br />
          Nearby Bus Station:
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
    details: React.ReactNode;
  };

  const HotelBlock = ({ name, website, details }: HotelBlockProps) => (
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
      <ul className="list-disc pl-6 mt-2 text-base">{details}</ul>
    </div>
  );

  return (
    <div className="w-full">
      <PageHeader imageSrc={Hotel} altText="Custom Convention Banner" />
      <PageTitle title="HOTEL & TRAVEL" />

      {/* Headquarter Hotel */}
      <SectionWrapper>
        <SectionTitle>Headquarter Hotel</SectionTitle>
        <h3 className="font-bold text-3xl text-black">
          Sheraton Puerto Rico Resort and Casino
        </h3>
        <SectionContent>
          <p>Guest Room Rates:</p>
          <ul className="list-disc pl-6">
            <li>
              Run of House (room type selected based upon availability at
              check-in): $199.00 + tax
            </li>
            <li>Single: $209.00 + tax</li>
            <li>Double: $214.00 + tax</li>
          </ul>
          <p className="mt-4 text-red-500">
            Rooms are sold out on Tuesday, Wednesday, and Thursday nights.
            Rooms are still available for Monday, Friday, Saturday, and Sunday
            nights.
          </p>
          <p className="mt-6">
            The 2025 UCEA Annual Convention host hotel is the{" "}
            <a
              href="https://www.marriott.com/en-us/hotels/sjusi-sheraton-puerto-rico-resort-and-casino/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              Sheraton Puerto Rico Resort and Casino
            </a>
            . We encourage you to make your reservation early as rooms sell
            quickly. All reservations must be made by{" "}
            <b>Monday, October 24, 2025</b>, to receive the rates{" "}
            <b>listed above</b>.
          </p>
          <p className="mt-4">
            <a
              href="https://book.passkey.com/event/51030830/owner/5772432/home?utm_campaign=297253416"
              target="_blank"
              className="text-blue-700 underline"
            >
              Reserve your room
            </a>{" "}
            online or by calling <b>1-866-932-7269</b>. Use code <b>AEC</b>{" "}
            when booking by phone.
          </p>
          {/* Hotel Parking Section */}
<p className="mt-10 font-bold text-xl text-black">Hotel Parking</p>

<p className="mt-3 font-semibold">Guests Staying Overnight at the Sheraton</p>
<ul className="list-disc pl-6">
  <li>The parking rate is $20 per vehicle per day.</li>
</ul>

<p className="mt-4 font-semibold">Guests Not Staying Overnight at the Sheraton</p>
<ul className="list-disc pl-6">
  <li>
    Attendees will receive a discounted flat rate of{" "}
    <b>$14.00</b> for self-parking and <b>$28.00</b> for valet parking.
  </li>
  <li>
    Visit the UCEA registration desk to receive a parking label to place on the
    parking tickets of attendees who are not staying at the hotel.
  </li>
</ul>

        </SectionContent>
      </SectionWrapper>

      {/* Additional Hotels */}
      <SectionWrapper>
        <SectionTitle>Additional Hotels with Group Rates</SectionTitle>
        <SectionContent>
          <HotelBlock
            name="Hyatt House San Juan (Rooms are sold out on 11/20 & 11/21. Rooms are available on 11/18, 11/19, & 11/22)"
            website="https://www.hyatt.com/hyatt-house/en-US/sjuxs-hyatt-house-san-juan"
            details={
              <>
                <li>
                  King/Double: $209 (Total rate including taxes and fees
                  $271.09)
                </li>
                <li>
                  Rate includes complimentary daily Full American Breakfast
                  Buffet
                </li>
                <li>
                  Rooms available at group rate from November 18 through
                  November 23
                </li>
                <li>
                  Email Patricia Saldana at{" "}
                  <a
                    href="mailto:patricia.saldana@hyatt.com"
                    className="text-blue-700 underline"
                  >
                    patricia.saldana@hyatt.com
                  </a>{" "}
                  or Gabriela Baldaguez at{" "}
                  <a
                    href="mailto:gabriela.baldaguez@hyatt.com"
                    className="text-blue-700 underline"
                  >
                    gabriela.baldaguez@hyatt.com
                  </a>{" "}
                  if you want to extend your reservation up to 3 days pre and
                  post the dates above.
                </li>
                <li>Reservations must be made by Monday, October 20, 2025</li>
                <li>
                  <a
                    href="https://www.hyatt.com/en-US/hotel/puerto-rico/hyatt-house-san-juan/sjuxs?corp_id=G-UCEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    Reserve your room
                  </a>{" "}
                  online or call <b>1-787-977-5000</b>. Use code{" "}
                  <b className="text-blue-700">G-UCEA</b> in the Special Rates
                  section when booking online or by phone.
                </li>
              </>
            }
          />

          <HotelBlock
            name="Hyatt Place San Juan (Rooms are sold out on 11/20 & 11/21. Rooms are available on 11/18, 11/19, & 11/22)"
            website="https://www.hyatt.com/hyatt-place/en-US/sjuzs-hyatt-place-san-juan"
            details={
              <>
                <li>
                  King Double: $204 (Total rate including taxes and fees
                  $264.61)
                </li>
                <li>
                  Rate includes complimentary daily Full American Breakfast
                  Buffet
                </li>
                <li>
                  Rooms available at group rate from November 18 through
                  November 23
                </li>
                <li>
                  Email Patricia Saldana at{" "}
                  <a
                    href="mailto:patricia.saldana@hyatt.com"
                    className="text-blue-700 underline"
                  >
                    patricia.saldana@hyatt.com
                  </a>{" "}
                  or Gabriela Baldaguez at{" "}
                  <a
                    href="mailto:gabriela.baldaguez@hyatt.com"
                    className="text-blue-700 underline"
                  >
                    gabriela.baldaguez@hyatt.com
                  </a>{" "}
                  if you want to extend your reservation up to 3 days pre and
                  post the dates above.
                </li>
                <li>Reservations must be made by Monday, October 25, 2025</li>
                <li>
                  <a
                    href="https://www.hyatt.com/hyatt-place/en-US/sjuzs-hyatt-place-san-juan?corp_id=G-UCEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    Reserve your room
                  </a>{" "}
                  online or call <b>1-787-721-3000</b>. Use code{" "}
                  <b className="text-blue-700">G-UCEA</b> in the Special Rates
                  section when booking online or by phone.
                </li>
              </>
            }
          />

          <HotelBlock
            name="Aloft San Juan (Rooms are available from 11/18–11/23)"
            website="https://www.marriott.com/en-us/hotels/sjual-aloft-san-juan/overview/"
            details={
              <>
                <li>
                  King/Double: $214 (Total rate including destination fee and
                  taxes $259.34)
                </li>
                <li>
                  View the rate details when booking online to view destination
                  fee details.
                </li>
                <li>
                  Rooms available at group rate from November 18 through
                  November 23
                </li>
                <li>
                  Email Celian Velez Diaz at{" "}
                  <a
                    href="mailto:Celian.A.VelezDiaz@marriott.com"
                    className="text-blue-700 underline"
                  >
                    Celian.A.VelezDiaz@marriott.com
                  </a>{" "}
                  if you want to extend your reservation up to 3 days pre and
                  post the dates above.
                </li>
                <li>Reservations must be made by Saturday, October 18, 2025</li>
                <li>
                  <a
                    href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1755113494944&key=GRP&app=resvlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    Reserve your room
                  </a>{" "}
                  online or call <b>1-866-912-1011</b>. Use code{" "}
                  <b className="text-blue-700">UOBUOBA</b> in the Special Rates
                  section when booking online or by phone.
                </li>
                
              </>
            }
          />
        </SectionContent>
      </SectionWrapper>

      {/* Dining & Local Attractions */}
      <SectionWrapper>
        <SectionTitle>Dining & Local Attractions</SectionTitle>
        <SectionContent>
          <p>
            Discover Puerto Rico is the official place to go for dining options,
            local attractions, and to learn more about all that Puerto Rico has
            to offer.
          </p>
          <div className="mt-6">
            <a
              href="https://www.discoverpuertorico.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#3355aa] transition-colors duration-300"
            >
              Explore Discover Puerto Rico
            </a>
          </div>
        </SectionContent>
      </SectionWrapper>

      {/* Location Map */}
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
