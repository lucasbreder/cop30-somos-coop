import { CaseCompany } from "@/types/Case";
import { Content } from "@/types/Content";
import { casesCompanyPt } from "./cases-company-pt";
import { casesCompanyEs } from "./cases-company-es";
import { casesCompanyEn } from "./cases-company-en";

export const casesCompany: Content<CaseCompany> = {
  pt: casesCompanyPt,
  es: casesCompanyEs,
  en: casesCompanyEn,
};
