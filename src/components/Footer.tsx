import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/UCEALOGOW.png";
import FooterColumn from "./ui/footer/FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-[#004A78] text-white w-full mt-auto font-sans">
      {/* Top Section: Logo + Social */}
      <div className="w-full border-b border-gray-500">
        <div className="w-[85%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <div className="flex items-center justify-start w-full">
            <Link
              href="https://www.ucea.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-20 w-80">
                <Image src={logo} alt="UCEA Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <div className="flex space-x-6 text-white text-2xl">
            <Link href="https://www.facebook.com/ucea.leadershipmatters" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-300 transition-colors duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/ucea-headquarters-0b528453/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-300 transition-colors duration-200" />
            </Link>
            <Link href="https://x.com/UCEA" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-blue-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Section: Navigation Columns */}
      <div className="w-[85%] mx-auto py-20 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        <FooterColumn
          title="About"
          links={[
            { label: "Dates & Locations", href: "/about/dates-locations" },
            { label: "Theme", href: "/about/theme" },
            { label: "Key Dates", href: "/about/key-dates" },
            { label: "Planning Committee", href: "/about/planning-committee" },
            { label: "Convention Logo", href: "/about/convention-logo" },
            { label: "FAQ", href: "/about/faq" },
          ]}
        />

        <FooterColumn
  title="Call for Proposals"
  links={[
    { label: "Call for Proposals", href: "/cfp/2025" },
    { label: "Session Types", href: "/cfp/session-types" },
    { label: "Submission Guidelines", href: "/cfp/submission-details" },
    { label: "How to Submit a Strong Proposal", href: "/cfp/strong-proposal" },
    { label: "Proposal Reviews", href: "/cfp/proposal-reviews" },
  ]}
/>

        <FooterColumn
          title="Attendee Information"
          links={[
            { label: "Hotel", href: "/attendee-info/hotel" },
            { label: "Registration", href: "/attendee-info/registration" },
            { label: "Schedule at a Glance", href: "/attendee-info/schedule" },
            { label: "Convention Program", href: "/attendee-info/program" },
            { label: "Presenter Tips", href: "/attendee-info/presenter-tips" },
            { label: "Facilitator Tips", href: "/attendee-info/facilitator-tips" },
          ]}
        />

        <FooterColumn
          title="Convention Highlights"
          links={[
            { label: "General Sessions", href: "/events/general-sessions" },
            { label: "Awards Luncheon", href: "/events/awards-luncheon" },
            { label: "Annual Banquet", href: "/events/banquet" },
            { label: "UCEA-Wallace Symposium", href: "/events/wallace-symposium" },
          ]}
        />

        <FooterColumn
          title="Sponsors & Exhibitors"
          links={[
            { label: "Become a Sponsor", href: "/sponsors/become-a-sponsor" },
            { label: "Sponsors", href: "/sponsors/sponsors" },
            { label: "Become an Exhibitor", href: "/sponsors/become-an-exhibitor" },
            { label: "Exhibitors", href: "/sponsors/exhibitors" },
          ]}
        />

      </div>

      {/* Bottom Section: Copyright + Policies */}
      <div className="w-full border-t border-gray-500">
        <div className="w-[85%] mx-auto py-10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-left mt-2 md:mt-0">©2025 UCEA All Rights Reserved.</div>
          <div className="flex space-x-3">
            <Link href="/privacy-policy" className="hover:underline hover:text-blue-300">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:underline hover:text-blue-300">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
