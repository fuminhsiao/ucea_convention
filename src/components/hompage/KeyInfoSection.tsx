import Image from "next/image";
import Link from "next/link";
import callImage from "@/assets/CFP.webp"; // 圖片依然可用

import SectionWrapper from "../ui/general/SectionWrapper";
import SectionContent from "../ui/general/SectionContent";

// ====== 📦 REGISTER BLOCK CONTENT ======
const REGISTER_CONTENT = {
  imageAlt: "UCEA Convention Registration",
  heading: "Register for the 2025 UCEA Convention",
  paragraph1:
    "Don’t miss your chance to join educational leaders, scholars, and students from across the world at the 2025 UCEA Annual Convention in San Juan, Puerto Rico.",
  paragraph2:
    "Early registration offers significant savings and ensures access to all Convention events, workshops, and networking opportunities. Join us for four days of critical conversations, research sharing, and community building.",
  paragraph3:
    "Early registration ends September 3, 2025. Secure your spot today and be part of this vibrant annual gathering!",
  paragraph3Highlight: "Early registration ends September 3, 2025",
  buttonText: "REGISTER NOW",
  buttonLink: "/attendee-info/registration/",
};

// ====== 🗂 CFP ARCHIVE (hidden from UI, for future use) ======


export default function KeyInfoSection() {
  return (
    <SectionWrapper className="bg-[#dbdadb]">
      <SectionContent>
        <div className="flex my-20 flex-col md:flex-row">
          {/* 左圖區塊 */}
          <div className="w-full md:w-6/12 relative mb-8 md:mb-0">
            <div className="relative w-full aspect-[5/4]">
              <Image
                src={callImage}
                alt={REGISTER_CONTENT.imageAlt}
                fill
                className="object-cover shadow-md"
                priority
              />
            </div>
          </div>

          {/* 右側文字區塊 */}
          <div className="w-full md:-ml-32 relative z-10">
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
                {REGISTER_CONTENT.heading}
              </h2>

              <p className="text-base md:text-2xl text-gray-700 mb-4 leading-relaxed">
                {REGISTER_CONTENT.paragraph1}
              </p>

              <p className="text-base md:text-2xl text-gray-700 mb-4 leading-relaxed">
                {REGISTER_CONTENT.paragraph2}
              </p>

              <p className="text-base md:text-2xl text-gray-700 mb-6 leading-relaxed">
                <span className="font-bold text-[#b22222]">
                  {REGISTER_CONTENT.paragraph3Highlight}
                </span>
                {" "}{REGISTER_CONTENT.paragraph3.replace(REGISTER_CONTENT.paragraph3Highlight, "")}
              </p>

              <Link href={REGISTER_CONTENT.buttonLink}>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition cursor-pointer ">
                  {REGISTER_CONTENT.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
}
