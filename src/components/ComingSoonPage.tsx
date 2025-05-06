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
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-6">{message}</p>
      <Link
        href={linkUrl}
        className="px-6 py-3 bg-[#004a78] text-white rounded-lg hover:bg-[#0067a3] transition"
      >
        {linkText}
      </Link>
    </div>
  );
}
