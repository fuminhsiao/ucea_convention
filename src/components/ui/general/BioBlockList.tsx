import BioBlock from "./BioBlock";

interface BioItem {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

interface BioBlockListProps {
  bios: BioItem[];
}

export default function BioBlockList({ bios }: BioBlockListProps) {
  return (
    <div className="w-full">
      {bios.map((bio, index) => (
        <BioBlock
          key={index}
          {...bio}
          reverse={index % 2 !== 0} // 偶數正常，奇數反轉
        />
      ))}
    </div>
  );
}
