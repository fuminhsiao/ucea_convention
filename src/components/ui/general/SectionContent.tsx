interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContent({ children, className = "" }: SectionContentProps) {
  return (
    <div
      className={`prose max-w-none text-base md:text-xl text-black [&_ul]:pl-5 [&_ul]:list-disc ${className}`}
    >
      {children}
    </div>
  );
}
