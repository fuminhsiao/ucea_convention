"use client";

import PageTitle from "@/components/ui/general/PageTitle";
import SectionWrapper from "@/components/ui/general/SectionWrapper";
import SectionTitle from "@/components/ui/general/SectionTitle";
import SectionContent from "@/components/ui/general/SectionContent";
import PageHeader from "@/components/ui/general/PageHeader";
import LocationMapSection from "@/components/hotel/LocationMapSection";
import Hotel from "@/assets/Hotel.jpg"

export default function HotelTravelPage() {
    const hotelName = "Sheraton Puerto Rico Resort & Casino";
    const hotelStreet = "200 Convention Boulevard, San Juan, Puerto Rico, 00907";
    const hotelTel = "+1 787-993-3500";

    const transportOptions = [
        {
            title: "Luis Munoz Marin International Airport",
            content: (
                <p>
                    Distance From Property: 7.0 Miles<br />
                    Phone Number: +1 787-253-2329<br />
                    <a href="https://www.aeropuertosju.com/">Visit Website</a><br />
                </p>
            ),
        },
        {
            title: "Isla Grande Airport",
            content: (
                <p>
                    Distance From Property: 1.0 Miles<br />
                    Phone Number: +1 787-741-3809
                </p>
            ),
        },
        {
            title: "Other Transportation",
            content: (
                <p>
                    On-Property:<br/>
                    Private Car Service:<br/>
                    Limousine/Van Service<br/>
                    <br/>
                    Onsite Car Rental Company:<br/>
                    Avis<br/><br/>
                    Nearby:<br/>
                    Bus Station:<br/>
                    <a href="http://ati.pr/">Terminal Central Covadonga</a>
                </p>
            ),
        },
    ];

    const mapCenter = { lat: 18.451, lng: -66.088 };
    const mapZoom = 15;

    return (
        <div className="w-full">
            <PageHeader showOverlay imageSrc={Hotel} altText="Custom Convention Banner" />
            <PageTitle title="HOTEL & TRAVEL" />

            <SectionWrapper>
                <SectionContent>
                    UCEA has arranged for premium hotel accommodations at the Sheraton Puerto Rico Resort & Casino, the host site for the 2025 Annual Convention. While final room rates are still being negotiated, attendees can expect competitive pricing with flexible cancellation and modification policies.

                    <br /><br />

                    Reservations should be made exclusively through our official booking partner to ensure access to discounted rates and secure accommodations. Booking through the official system also helps UCEA demonstrate the Convention’s economic impact on the host city, which is essential for securing future benefits for our attendees.

                    <br /><br />

                    Please note: Discounted Convention rates will <strong>not</strong> be available if you contact the hotel directly.
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
