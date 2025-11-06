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
        <div className="relative flex flex-col h-full pb-8">
          <div className="basis-1/4 fhdv:portrait:basis-auto">
            <div className="text-xl lg:text-3xl fhdv:portrait:text-6xl uppercase font-extrabold text-center mt-5 fhdv:portrait:mt-25 ">
              {interfaceData[locale]["company-cases-title"].value}
            </div>
            <div className="relative w-40 h-10 mx-auto my-3 fhdv:portrait:w-100 fhdv:portrait:h-40">
              <Image src={`/logo/${company}.svg`} alt="" fill />
            </div>
            <div>
              <Title
                className="w-9/12 mx-auto lg:max-w-6/12 fhdv:portrait:max-w-full fhdv:portrait:w-full"
                title=""
                titleLine="center"
                color={`var(--${company}-primary)`}
                tag="h2"
              />
            </div>
          </div>

          <div className="grow overflow-hidden xl:w-6/12 xl:mx-auto">
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
