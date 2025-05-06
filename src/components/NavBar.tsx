"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoDefault from "@/assets/ucea-logoW.png";
import logoLarge from "@/assets/ucea-logoB.png";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "@/components/ui/nav/NavItem";
import NavDropdown from "@/components/ui/nav/NavDropdown";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // 展開/收合小箭頭

const mobileMenuItems = [
  { label: "ABOUT", href: "/about" },
  {
    label: "ATTENDEE INFO",
    submenu: [
      { href: "/registration", label: "Registration" },
      { href: "/hotel", label: "Hotel" },
    ],
  },
  {
    label: "SESSIONS",
    submenu: [
      { href: "/cfp/2025", label: "Call for Proposals" },
    ],
  },
  {
    label: "EVENTS",
    submenu: [
      { href: "/awards-luncheon", label: "Awards Luncheon" },
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
        <div className="flex items-center transition-all duration-500 ease-in-out">
          <Link href="/">
            <Image
              src={scrolled ? logoDefault : logoLarge}
              alt="UCEA Logo"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`transition-all duration-500 ease-in-out ${scrolled ? "h-20" : "h-24"} w-auto`}
            />
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 uppercase font-medium cursor-pointer transition-all duration-500 ease-in-out">
            <NavItem href="/about" label="ABOUT" scrolled={scrolled} />
            {[
              {
                label: "ATTENDEE INFO",
                menu: "attendee",
                items: [
                  { href: "/registration", label: "Registration" },
                  { href: "/hotel", label: "Hotel" },
                ],
              },
              {
                label: "SESSIONS",
                menu: "sessions",
                items: [{ href: "/cfp/2025", label: "Call for Proposals" }],
              },
              {
                label: "EVENTS",
                menu: "events",
                items: [{ href: "/awards_luncheon", label: "Awards Luncheon" }],
              },
            ].map(({ label, menu, items }) => (
              <NavDropdown
                key={menu}
                label={label}
                menu={menu}
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
              {mobileMenuItems.map((item) => (
                <li key={item.label} className="w-full text-center">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileDropdown(
                            activeMobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-center gap-2 py-2 text-xl focus:outline-none"
                      >
                        {item.label}
                        {activeMobileDropdown === item.label ? (
                          <FaChevronUp className="w-4 h-4" />
                        ) : (
                          <FaChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      <AnimatePresence>
                        {activeMobileDropdown === item.label && (
                          <motion.ul
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {item.submenu.map((sub) => (
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
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xl"
                    >
                      {item.label}
                    </Link>
                  )}
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
