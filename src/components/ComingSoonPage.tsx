"use client";

import Link from "next/link";

interface ComingSoonPageProps {
  title?: string;
  message?: string;
  linkUrl: string;
  linkText?: string;
}

export default function ComingSoonPage({
  title = "Coming Soon",
  message = "This page is not yet available. Please check back later.",
  linkUrl,
  linkText = "View Previous Page",
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#004a78] to-white">
      {/* Gradient background with spacing for NAV visibility */}
      <div className="h-24 w-full" />
      <div className="flex flex-col justify-center items-center text-center px-6 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-opacity-80 px-4 py-2 rounded-md">
          {title}
        </h1>
        <p className="text-lg text-gray-700 mb-6  bg-opacity-70 px-4 py-2 rounded-md">
          {message}
        </p>
        {linkUrl && (
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="px-6 py-3 bg-[#004a78] text-white rounded-lg hover:bg-[#0067a3] transition cursor-pointer">
              {linkText}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}