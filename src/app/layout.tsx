import "./globals.css";
import NavBar from "@/components/NavBar";
import { Playfair_Display } from "next/font/google";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";
import Head from 'next/head';

<Head>
  <title>UCEA Convention 2025 | Official Website</title>
  <meta name="description" content="Official site for the UCEA 2025 Convention in San Juan, Puerto Rico. Registration, proposal deadlines, travel info, and more." />
  <meta name="keywords" content="UCEA, UCEA Convention, UCEA 2025, Educational Leadership, Puerto Rico" />
  <meta property="og:title" content="UCEA Convention 2025" />
  <meta property="og:description" content="Join us in San Juan, Puerto Rico for the UCEA 2025 Convention. Learn more on the official site." />
  <meta property="og:image" content="https://yourdomain.com/images/social-preview.jpg" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>

// 字體宣告
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "UCEA Convention",
  description: "Official site for UCEA's annual convention.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${mulish.variable}`}>
      <body className="bg-white text-gray-900">
        <NavBar />
        
          {children}
        <Footer />
      </body>
    </html>
  );
}
