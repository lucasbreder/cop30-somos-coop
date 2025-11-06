import { CaseCompany } from "@/types/Case";
import { Content } from "@/types/Content";
import { casesEs } from "./cases-es";
import { casesEn } from "./cases-en";
import { casesCompanyPt } from "./cases-company-pt";

export const casesCompany: Content<CaseCompany> = {
  pt: casesCompanyPt,
  es: casesEs,
  en: casesEn,
};
