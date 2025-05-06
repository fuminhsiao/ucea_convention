import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/UCEALOGOW.png";

const Footer = () => {
  return (
    <footer className="bg-[#004A78] text-white w-full mt-auto font-sans">
      {/* Top Section */}
      <div className="w-[85%] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo */}
        <div className="flex items-center justify-start w-full">
          <Link
            href="https://www.ucea.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-20 w-80">
              <Image
                src={logo}
                alt="UCEA Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Right: Social Media */}
        <div className="flex space-x-6 text-white text-2xl">
          <Link
            href="https://www.facebook.com/ucea.leadershipmatters"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-300 transition-colors duration-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ucea-headquarters-0b528453/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-blue-300 transition-colors duration-200" />
          </Link>
          <Link
            href="https://x.com/UCEA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-blue-300 transition-colors duration-200" />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-500">
        <div className="w-[85%] mx-auto py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-left mt-2 md:mt-0">©2025 UCEA All Rights Reserved.</div>
          <div className="flex space-x-3">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms_and_conditions" className="hover:underline">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
