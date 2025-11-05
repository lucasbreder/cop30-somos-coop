import { Case } from "@/types/Case";
import { Content } from "@/types/Content";
import { casesPt } from "./cases-pt";
import { casesEs } from "./cases-es";
import { casesEn } from "./cases-en";

export const cases: Content<Case> = {
  pt: casesPt,
  es: casesEs,
  en: casesEn,
};
