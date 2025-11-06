"use client";
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import { Title } from "./Title";
import { AnimatePresence, motion } from "motion/react";
import { CaseCreditList } from "./CaseCreditList";
import { casesCompany } from "@/data/cases-company";
import Image from "next/image";
import { interfaceData } from "@/data/interface";

export const CreditCases = () => {
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof ods;
  const company = params.company as string;
  const dataCases = casesCompany[locale]?.filter((cs) => {
    return cs.company === company;
  });

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
        style={{
          color: `var(--${company}-primary)`,
        }}
      >
        <div
          className="relative flex flex-col"
          style={{ height: "calc(100% - 40px)" }}
        >
          <div>{interfaceData[locale]["company-cases-title"].value}</div>
          <div className="relative w-10 h-10">
            <Image src={`/logo/${company}.svg`} alt="" fill />
          </div>
          <div>
            <Title
              title=""
              titleLine="center"
              color={`var(--${company}-primary)`}
              tag="h2"
            />
          </div>

          {dataCases && dataCases.length > 0 && (
            <CaseCreditList data={dataCases} dataCompany={{ name: company }} />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
