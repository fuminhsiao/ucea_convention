interface SectionContentProps {
  children: React.ReactNode;
  className?: string; // 通用方式支援任何自訂 class（包括背景色）
}

export default function SectionContent({ children, className = "" }: SectionContentProps) {
  return (
    <div
      className={`prose max-w-none text-2xl text-black [&_ul]:pl-5 [&_ul]:list-disc ${className}`}
    >
      {children}
    </div>
  );
}
