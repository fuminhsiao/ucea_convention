import Link from "next/link";
import SectionWrapper from "../ui/general/SectionWrapper";

interface InfoSectionProps {
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
  backgroundImageUrl: string;
  overlayColor?: string; // 新增
  textColor?: string; // 新增
}

export default function InfoSection({
  title,
  paragraphs,
  buttonText,
  buttonLink,
  backgroundImageUrl,
  overlayColor = "bg-black/60", // 預設深色
  textColor = "text-white", // 預設白字
}: InfoSectionProps) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 text-white"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-[#001f3f]/70 z-0" />
      <SectionWrapper>
        <div className={`relative z-10 ${overlayColor} backdrop-blur-sm p-8 md:p-12 max-w-4xl shadow-xl rounded-md ${textColor}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-base md:text-lg mb-4 leading-relaxed">
              {text}
            </p>
          ))}
          <Link href={buttonLink}>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md mt-4 hover:bg-gray-200 transition cursor-pointer">
              {buttonText}
            </button>
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
