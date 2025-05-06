
// components/NavDropdown.tsx
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface NavDropdownProps {
  label: string;
  menu: string;
  items: { href: string; label: string }[];
  scrolled: boolean;
  dropdownOpen: string | null;
  setDropdownOpen: (key: string | null) => void;
}

export default function NavDropdown({
  label,
  menu,
  items,
  scrolled,
  dropdownOpen,
  setDropdownOpen,
}: NavDropdownProps) {
  return (
    <li className="relative group">
      <div
        onMouseEnter={() => setDropdownOpen(menu)}
        onMouseLeave={() => setDropdownOpen(null)}
        className="flex flex-col"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-1 transition-all cursor-pointer duration-500 ease-in-out  ${
            scrolled ? "text-white text-sm" : "text-[#000000] text-base"
          }`}
        >
          {label}
          <FontAwesomeIcon icon={faCaretDown} className="w-3 h-3 mt-0.5" />
        </motion.button>

        <AnimatePresence>
          {dropdownOpen === menu && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 top-full cursor-pointer mt-2 w-52 bg-[#f0f4ff] shadow-lg rounded border py-2 z-50"
            >
              {items.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-[#e0e7ff] hover:text-[#1e3a8a] transition-colors duration-200 uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}
