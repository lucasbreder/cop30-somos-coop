import { Case } from "@/types/Case";
import { cases } from "./cases";

const casesSicoobId = [9, 55, 56, 25, 26, 14, 15, 30, 27, 54, 28, 29, 61, 31];
const casesSicoob = casesSicoobId.flatMap((id) => {
  const element = cases.en.find((c) => c.id === id)!;
  if (element)
    return {
      ...element,
      company: "sicoob",
    };
  return [];
});

const casesCresolId = [7, 42, 43, 62, 63, 64];
const casesCresol = casesCresolId.flatMap((id) => {
  const element = cases.en.find((c) => c.id === id)!;
  if (element)
    return {
      ...element,
      company: "cresol",
    };
  return [];
});

const casesSicrediId = [20, 57, 58, 59, 66, 67];
const casesSicredi = casesSicrediId.flatMap((id) => {
  const element = cases.en.find((c) => c.id === id)!;

  if (element)
    return {
      ...element,
      company: "sicredi",
    };
  return [];
});

export const casesCompanyEn: Case[] = [
  ...casesSicoob,
  ...casesCresol,
  ...casesSicredi,
];
