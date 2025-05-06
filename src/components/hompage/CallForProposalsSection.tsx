import Image from "next/image";
import Link from "next/link";
import callImage from "@/assets/CFP.webp"; // 請替換為實際圖檔路徑
import SectionWrapper from "../ui/general/SectionWrapper";
import SectionContent from "../ui/general/SectionContent";

export default function CallForProposalsSection() {
  return (
    <SectionWrapper className="bg-[#dbdadb]">
      <SectionContent>
      <div className="flex my-20 flex-col md:flex-row ">
        {/* 左側圖像 */}
        <div className="w-full md:w-6/12 relative mb-8 md:mb-0">
          <div className="relative w-full aspect-[5/4]">
            <Image
              src={callImage}
              alt="Call for Proposals"
              fill
              className="object-cover shadow-md"
              priority
            />
          </div>
        </div>

        {/* 右側文字方塊，透明背景部分重疊左圖 */}
        <div className="w-full md:-ml-32 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              2025 CALL FOR PROPOSALS
            </h2>
            <p className="text-base md:text-2xl text-gray-700 mb-4 leading-relaxed">
              UCEA’s 39th Annual Convention theme is{" "}
              <span className="italic text-[#3366CC]">
                “Fostering Leadership Resilience Through Collaboration and
                Community”
              </span>{" "}
              or{" "}
              <span className="italic text-[#3366CC]">
                “Fomentando la Resiliencia de Liderazgo a través de Colaboración
                y Comunidad.”
              </span>{" "}
              A variety of factors, both internal and external, have shaped our
              theme, call for proposals, and intentions for this year’s
              Convention.
            </p>
            <p className="text-base md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Proposals must be received by{" "}
              <span className="font-bold text-[#b22222]">
                Wednesday, May 14, 2025
              </span>
              . All proposals must be submitted electronically through All
              Academic by visiting the UCEA website (
              <a
                href="http://www.ucea.org"
                className="underline text-blue-700 hover:text-blue-900"
                target="_blank"
              >
                www.ucea.org
              </a>
              ). This site will officially open April 1, 2025.
            </p>
            <Link href="/cfp/2025">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      </SectionContent>
    </SectionWrapper>
  );
}
