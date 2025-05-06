"use client";

import Accordion from "@/components/ui/general/Accordion";

interface AccordionBlockProps {
  title: string;
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function AccordionBlock({ title, items }: AccordionBlockProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 my-10">
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {word}
              <br />
            </span>
          ))}
        </h2>
      </div>
      <div className="w-full md:w-2/3">
        {items.map((item, i) => (
          <Accordion key={i} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
