"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoDefault from "@/assets/ucea-logoW.png";
import logoLarge from "@/assets/ucea-logo2026.png";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from "@/components/ui/nav/NavDropdown";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

type NavItem = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  items: NavItem[];
  visible?: boolean;
};

type ConventionNavConfig = {
  mode: "archive2025" | "current2026";
  homeHref: string;
  registerHref?: string;
  showRegisterButton?: boolean;
  desktopScrolledBg: string;
  mobileMenuBg: string;
  registerHoverBg: string;
  hamburgerColor: string;
  navStructure: NavGroup[];
};

const navConfig2025: ConventionNavConfig = {
  mode: "archive2025",
  homeHref: "/2025",
  registerHref: "/2025/attendee-info/registration",
  showRegisterButton: true,
  desktopScrolledBg: "linear-gradient(to bottom, #042d46, rgba(4, 45, 70, 0))",
  mobileMenuBg: "#042d46",
  registerHoverBg: "#3366cc",
  hamburgerColor: "text-white",
  navStructure: [
    {
      label: "ABOUT",
      visible: true,
      items: [
        { label: "Dates & Locations", href: "/2025/about/dates-locations" },
        { label: "Theme", href: "/2025/about/theme" },
        { label: "Key Dates", href: "/2025/about/key-dates" },
        {
          label: "Planning Committee",
          href: "/2025/about/planning-committee",
        },
        { label: "Convention Logo", href: "/2025/about/convention-logo" },
        { label: "FAQ", href: "/2025/about/faq" },
      ],
    },
    {
      label: "CFP",
      visible: true,
      items: [
        { label: "Call for Proposals", href: "/2025/cfp/2025" },
        { label: "Session Types", href: "/2025/cfp/session-types" },
        {
          label: "Submission Guidelines",
          href: "/2025/cfp/submission-details",
        },
        {
          label: "How to Submit a Strong Proposal",
          href: "/2025/cfp/strong-proposal",
        },
        { label: "Proposal Reviews", href: "/2025/cfp/proposal-reviews" },
      ],
    },
    {
      label: "ATTENDEE INFO",
      visible: true,
      items: [
        { label: "Hotel & Travel", href: "/2025/attendee-info/hotel" },
        { label: "Registration", href: "/2025/attendee-info/registration" },
        {
          label: "Schedule at a Glance",
          href: "/2025/attendee-info/schedule",
        },
        { label: "Program", href: "/2025/attendee-info/program" },
        { label: "Mobile App", href: "/2025/attendee-info/mobile-app" },
        {
          label: "INTL Graduate Students",
          href: "/2025/attendee-info/international-attendee",
        },
        {
          label: "Presenter Tips",
          href: "/2025/attendee-info/presenter-tips",
        },
        {
          label: "Facilitator Tips",
          href: "/2025/attendee-info/facilitator-tips",
        },
        {
          label: "Puerto Rico Tours",
          href: "/2025/attendee-info/puerto-rico-tours",
        },
      ],
    },
    {
      label: "EVENTS",
      visible: true,
      items: [
        { label: "General Sessions", href: "/2025/events/general-sessions" },
        { label: "Awards Luncheon", href: "/2025/events/awards-luncheon" },
        { label: "Annual Banquet", href: "/2025/events/banquet" },
        { label: "Graduate Students", href: "/2025/events/graduate-student" },
        {
          label: "UCEA-Wallace Symposium",
          href: "/2025/events/wallace-symposium",
        },
        {
          label: "Capacity-Building for Communication & Engagement",
          href: "/2025/events/special-session-1",
        },
        {
          label: "Resilience-Focused Capacity-Building Workshops",
          href: "/2025/events/special-session-2",
        },
        {
          label: "Policy and Politics in PR",
          href: "/2025/events/special-session-3",
        },
        {
          label: "Get to Know Program Centers",
          href: "/2025/events/special-session-4",
        },
        {
          label: "International Summit",
          href: "/2025/events/international-summit",
        },
      ],
    },
    {
      label: "SPONSOR/EXHIBIT",
      visible: true,
      items: [
        {
          label: "Become a Sponsor",
          href: "/2025/sponsors-exhibitors/become-a-sponsor",
        },
        { label: "Sponsors", href: "/2025/sponsors-exhibitors/sponsors" },
        {
          label: "Become an Exhibitor",
          href: "/2025/sponsors-exhibitors/become-an-exhibitor",
        },
        { label: "Exhibitors", href: "/2025/sponsors-exhibitors/exhibitors" },
      ],
    },
  ],
};

const navConfig2026: ConventionNavConfig = {
  mode: "current2026",
  homeHref: "/",
  registerHref: "#",
  showRegisterButton: true,
  desktopScrolledBg:
    "linear-gradient(to bottom, #505050, rgba(90, 20, 49, 0.02))",
  mobileMenuBg: "#3366cc",
  registerHoverBg: "#3366cc",
  hamburgerColor: "text-white",
  navStructure: [
    {
      label: "ABOUT",
      visible: true,
      items: [
        { label: "Dates & Locations", href: "/about/dates-locations" },
        { label: "Planning Committee", href: "/about/planning-committee" },
        { label: "Convention Logo", href: "/about/convention-logo" },
      ],
    },
    {
      label: "CFP",
      visible: true,
      items: [
        { label: "Call for Proposals", href: "/cfp/2026" },
        { label: "Session Types", href: "/cfp/session-types" },
        {
          label: "Submission Guidelines",
          href: "/cfp/submission-details",
        },
      ],
    },
    {
      label: "ATTENDEE INFO",
      visible: true,
      items: [
        { label: "Hotel & Travel", href: "/attendee-info/hotel" },
       // { label: "Registration", href: "/attendee-info/registration" },
       //{ label: "Program", href: "/attendee-info/program" },
       //{ label: "Schedule at a Glance", href: "/attendee-info/schedule" },
        //{ label: "Mobile App", href: "/attendee-info/mobile-app" },
        //{
          //label: "INTL Graduate Students",
          //href: "/attendee-info/international-attendee",
        //},
        //{ label: "Presenter Tips", href: "/attendee-info/presenter-tips" },
        //{ label: "Facilitator Tips", href: "/attendee-info/facilitator-tips" },
      ],
    },
    {
      label: "EVENTS",
      visible: false,
      items: [
        { label: "General Sessions", href: "/events/general-sessions" },
        { label: "Awards Luncheon", href: "/events/awards-luncheon" },
        { label: "Annual Banquet", href: "/events/banquet" },
      ],
    },
    {
      label: "SPONSOR/EXHIBIT",
      visible: true,
      items: [
        {
          label: "Become a Sponsor",
          href: "/sponsors-exhibitors/become-a-sponsor",
        },
      ],
    },
  ],
};

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const isArchive2025 = pathname?.startsWith("/2025");

  const currentConfig = useMemo(() => {
    return isArchive2025 ? navConfig2025 : navConfig2026;
  }, [isArchive2025]);

  const visibleNavGroups = useMemo(() => {
    return currentConfig.navStructure.filter(
      (group) => group.visible !== false,
    );
  }, [currentConfig]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(null);
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-in-out md:py-7"
      style={{
        background: scrolled ? currentConfig.desktopScrolledBg : "transparent",
      }}
    >
      <div className="xl:w-[85%] mx-auto flex justify-between items-center py-4 md:py-6">
        <Link href={currentConfig.homeHref}>
          <Image
            src={scrolled ? logoDefault : logoLarge}
            alt="UCEA Convention Logo"
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition-all duration-500 ease-in-out ${
              scrolled ? "h-20" : "h-24"
            } w-auto`}
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${currentConfig.hamburgerColor} text-3xl focus:outline-none`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex justify-end space-x-6 font-medium cursor-pointer transition-all duration-500 ease-in-out">
            {visibleNavGroups.map(({ label, items }) => (
              <NavDropdown
                key={`${currentConfig.mode}-${label}`}
                label={label}
                menu={`${currentConfig.mode}-${label
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                scrolled={scrolled}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                items={items}
              />
            ))}
          </ul>

          {currentConfig.showRegisterButton && currentConfig.registerHref && (
            <Link href={currentConfig.registerHref}>
              <button
                className={`ml-4 px-5 py-2 text-white font-semibold rounded-md border-2 border-white transition cursor-pointer ${
                  scrolled
                    ? ""
                    : "[text-shadow:_0_0_3px_rgba(0,0,0,1)] [box-shadow:_0_0_3px_rgba(0,0,0,1)]"
                }`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    currentConfig.registerHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                REGISTER
              </button>
            </Link>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: currentConfig.mobileMenuBg }}
          >
            <ul className="flex flex-col items-center space-y-6 py-6 uppercase font-semibold text-white">
              {visibleNavGroups.map(({ label, items }) => (
                <li
                  key={`${currentConfig.mode}-${label}`}
                  className="w-full text-center"
                >
                  <button
                    onClick={() =>
                      setActiveMobileDropdown(
                        activeMobileDropdown === label ? null : label,
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

              {currentConfig.showRegisterButton &&
                currentConfig.registerHref && (
                  <li className="pt-2">
                    <Link
                      href={currentConfig.registerHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-block px-5 py-2 border-2 border-white rounded-md text-white"
                    >
                      REGISTER
                    </Link>
                  </li>
                )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
