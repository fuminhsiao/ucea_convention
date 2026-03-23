"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/UCEALOGOW.png";
import FooterColumn from "./ui/footer/FooterColumn";

const Footer = () => {
  const pathname = usePathname();
  const isArchive2025 = pathname?.startsWith("/2025");

  return (
    <footer
      className={`text-white w-full mt-auto font-sans ${
        isArchive2025 ? "bg-[#004A78]" : "bg-[#111111]"
      }`}
    >
      {/* Top Section */}
      <div className="w-full border-b border-gray-500">
        <div className="w-[85%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center justify-start w-full">
            <Link href="https://www.ucea.org/" target="_blank">
              <div className="relative h-20 w-80">
                <Image src={logo} alt="UCEA Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          <div className="flex space-x-6 text-white text-2xl">
            <FaFacebookF className="hover:text-blue-300" />
            <FaLinkedinIn className="hover:text-blue-300" />
            <FaXTwitter className="hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-[85%] mx-auto py-20 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">

        {/* ABOUT */}
        <FooterColumn
          title="About"
          links={
            isArchive2025
              ? [
                  { label: "Dates & Locations", href: "/2025/about/dates-locations" },
                  { label: "Theme", href: "/2025/about/theme" },
                  { label: "Key Dates", href: "/2025/about/key-dates" },
                  { label: "Planning Committee", href: "/2025/about/planning-committee" },
                ]
              : [
                  { label: "Dates & Locations", href: "/about/dates-locations" },
                  { label: "Planning Committee", href: "/about/planning-committee" },
                ]
          }
        />

        {/* CFP */}
        <FooterColumn
          title="Call for Proposals"
          links={
            isArchive2025
              ? [
                  { label: "Call for Proposals", href: "/2025/cfp/2025" },
                  { label: "Session Types", href: "/2025/cfp/session-types" },
                  { label: "Submission Guidelines", href: "/2025/cfp/submission-details" },
                  { label: "Proposal Reviews", href: "/2025/cfp/proposal-reviews" },
                ]
              : [
                  { label: "Call for Proposals", href: "/cfp/2026" },
                  { label: "Session Types", href: "/cfp/session-types" },
                  { label: "Submission Guidelines", href: "/cfp/submission-details" },
                ]
          }
        />

        {/* 下面這些只在 2025 顯示 */}
        {isArchive2025 && (
          <>
            <FooterColumn
              title="Attendee Information"
              links={[
                { label: "Hotel", href: "/2025/attendee-info/hotel" },
                { label: "Registration", href: "/2025/attendee-info/registration" },
              ]}
            />

            <FooterColumn
              title="Events"
              links={[
                { label: "General Sessions", href: "/2025/events/general-sessions" },
                { label: "Awards Luncheon", href: "/2025/events/awards-luncheon" },
              ]}
            />

            <FooterColumn
              title="Sponsors & Exhibitors"
              links={[
                { label: "Sponsors", href: "/2025/sponsors-exhibitors/sponsors" },
              ]}
            />
          </>
        )}
      </div>

      {/* Bottom */}
      <div className="w-full border-t border-gray-500">
        <div className="w-[85%] mx-auto py-10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>
            {isArchive2025
              ? "©2025 UCEA All Rights Reserved."
              : "©2026 UCEA All Rights Reserved."}
          </div>

          <div className="flex space-x-3">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;