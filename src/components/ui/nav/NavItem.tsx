"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
  scrolled: boolean;
}

export default function NavItem({ href, label, scrolled }: NavItemProps) {
  return (
    <li className="relative group">
      <div className="flex flex-col items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`text-white transition-all cursor-pointer duration-500 ease-in-out ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          <Link href={href}>{label}</Link>
        </motion.button>
      </div>
    </li>
  );
}
