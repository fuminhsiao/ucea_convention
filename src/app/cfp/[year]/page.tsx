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

// ✅ 注意：params 為 Promise<{ year: string }>
export default async function CFPYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params; // ✅ 必須 await 解構

  const cfp: CFPData | undefined = CFP_BY_YEAR[year];
  if (!cfp) return notFound();

  return (
    <>
      <PageHeader />
      <PageTitle title="CALL FOR PROPOSALS"/>
      <CFPView data={cfp} year={year} />
    </>
  );
}
