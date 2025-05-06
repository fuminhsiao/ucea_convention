import "./globals.css";
import NavBar from "@/components/NavBar";
import { Playfair_Display } from "next/font/google";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer";
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
