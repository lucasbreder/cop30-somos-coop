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
        className="w-9/12 h-full mx-auto my-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
        style={{
          color: `var(--${company}-primary)`,
        }}
      >
        <div className="relative flex flex-col h-full pb-4">
          <div className="basis-1/4">
            <div className="text-xl uppercase font-extrabold text-center mt-5">
              {interfaceData[locale]["company-cases-title"].value}
            </div>
            <div className="relative w-40 h-10 mx-auto my-3">
              <Image src={`/logo/${company}.svg`} alt="" fill />
            </div>
            <div>
              <Title
                className="w-9/12 mx-auto"
                title=""
                titleLine="center"
                color={`var(--${company}-primary)`}
                tag="h2"
              />
            </div>
          </div>

          <div className="grow overflow-hidden">
            {dataCases && dataCases.length > 0 && (
              <CaseCreditList
                data={dataCases}
                dataCompany={{ name: company }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
