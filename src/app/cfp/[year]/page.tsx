import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/general/PageHeader";
import { CFP_BY_YEAR } from "@/data/cfps";
import type { CFPData } from "@/data/types";
import CFPView from "@/components/cfp/CFPView";
import PageTitle from "@/components/ui/general/PageTitle";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(CFP_BY_YEAR).map((year) => ({ year }));
}

export default async function CFPYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  const cfp: CFPData | undefined = CFP_BY_YEAR[year];
  if (!cfp) return notFound();

  return (
    <>
      <PageHeader />
      <PageTitle
        title="CALL FOR PROPOSALS"
        subtitle="Proposal Submissions are closed for the 2025 Annual Convention."
      />
      <CFPView data={cfp} year={year} />
    </>
  );
}