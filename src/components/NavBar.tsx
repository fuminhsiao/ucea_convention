"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoDefault from "@/assets/ucea-logoW.png";
import logoLarge from "@/assets/ucea-logoB.png";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from "@/components/ui/nav/NavDropdown";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const navStructure = [
  {
    label: "ABOUT",
    items: [
      { label: "Dates & Locations", href: "/about/dates-locations" },
      { label: "Theme", href: "/about/theme" },
      { label: "Key Dates", href: "/about/key-dates" },
      { label: "Planning Committee", href: "/about/planning-committee" },
      { label: "Convention Logo", href: "/about/convention-logo" },
      { label: "FAQ", href: "/about/faq" },
    ],
  },
  {
    label: "CALL FOR PROPOSALS",
    items: [
      { label: "Call for Proposals", href: "/cfp/2025" },
      { label: "Session Types", href: "/cfp/session-types" },
      { label: "Submission Guidelines", href: "/cfp/submission-details" },
      { label: "How to Submit a Strong Proposal", href: "/cfp/strong-proposal" },
      { label: "Proposal Reviews", href: "/cfp/proposal-reviews" },
    ],
  },
  {
    label: "ATTENDEE INFO",
    items: [
      { label: "Hotel", href: "/attendee-info/hotel" },
      { label: "Registration", href: "/attendee-info/registration" },
      { label: "Schedule at a Glance", href: "/attendee-info/schedule" },
      { label: "Convention Program", href: "/attendee-info/program" },
      { label: "Presenter Tips", href: "/attendee-info/presenter-tips" },
      { label: "Facilitator Tips", href: "/attendee-info/facilitator-tips" },
    ],
  },
  {
    label: "EVENTS",
    items: [
      { label: "General Sessions", href: "/events/general-sessions" },
      { label: "Awards Luncheon", href: "/events/awards-luncheon" },
      { label: "Annual Banquet", href: "/events/banquet" },
      { label: "UCEA-Wallace Symposium", href: "/events/wallace-symposium" },
    ],
  },
  {
    label: "SPONSORS",
    items: [
      { label: "Become a Sponsor", href: "/sponsors/become-a-sponsor" },
      { label: "Sponsors", href: "/sponsors/sponsors" },
      { label: "Become an Exhibitor", href: "/sponsors/become-an-exhibitor" },
      { label: "Exhibitors", href: "/sponsors/exhibitors" },
    ],
  },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out md:py-7"
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, #042d46, rgba(4, 45, 70, 0))"
          : "transparent",
      }}
    >
      <div className="xl:w-[85%] mx-auto flex justify-between items-center py-4 md:py-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src={scrolled ? logoDefault : logoLarge}
            alt="UCEA Logo"
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition-all duration-500 ease-in-out ${scrolled ? "h-20" : "h-24"} w-auto`}
          />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 uppercase font-medium cursor-pointer transition-all duration-500 ease-in-out">
            {navStructure.map(({ label, items }) => (
              <NavDropdown
                key={label}
                label={label}
                menu={label.toLowerCase().replace(/ /g, "-")}
                scrolled={scrolled}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                items={items}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#042d46] md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 uppercase font-semibold text-white">
              {navStructure.map(({ label, items }) => (
                <li key={label} className="w-full text-center">
                  <button
                    onClick={() =>
                      setActiveMobileDropdown(
                        activeMobileDropdown === label ? null : label
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 py-2 text-xl focus:outline-none"
                  >
                    {label}
                    {activeMobileDropdown === label ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === label && (
                      <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {items.map((sub) => (
                          <li key={sub.href} className="py-1">
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-white text-lg"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
