import { Case } from "@/components/Case";
import { CaseCompany } from "@/components/CaseCompany";
import { Ods } from "@/components/Ods";
import { languages } from "@/data/languages";
import { ods } from "@/data/ods";

export async function generateStaticParams() {
  const paramsArray = [];

  for (const lang of languages) {
    const langObjects = ods[lang.code as keyof typeof ods] || [];

    for (const c of langObjects) {
      paramsArray.push({
        lang: lang.code,
        id: String(c.id),
      });
    }
  }

  return paramsArray;
}

export default function Page() {
  return (
    <div className="w-full h-full">
      <CaseCompany hasBakground={false} />
    </div>
  );
}
