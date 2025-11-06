"use client";
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { cases } from "@/data/cases";
import { CaseTechnicalSheet } from "./CaseTechnicalSheet";
import { Map } from "./Map";
import { useState } from "react";
import { Case as CaseData } from "@/types/Case";
import { CaseList } from "./CaseList";
import { AnimatedOds } from "./AnimatedOds";
import { Title } from "./Title";
import { AnimatePresence, motion } from "motion/react";
import { interfaceData } from "@/data/interface";

export const Ods = () => {
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof ods;
  const dataOds = ods[locale]?.find((ods) => {
    return ods.id === Number(params.id);
  });
  const dataCases = cases[locale]?.filter((cs) => {
    return (
      cs.mainOds === Number(params.id) ||
      cs.asideOds.includes(Number(params.id))
    );
  });
  const [activeCase, setActiveCase] = useState<CaseData | undefined>();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
        className="flex px-10 fhd:flex-nowrap fhdv:portrait:flex-wrap fhd:justify-between fhdv:portrait:justify-center h-full relative mt-30 fhd:mt-39 fhdv:portrait:mt-80"
        style={{
          color: `var(--color-ods${dataOds?.id})`,
        }}
      >
        <div className="hidden 2xl:block fhdv:portrait:block w-8/12 -bottom-45 2xl:-bottom-40 fhd:-bottom-10! fhdv:portrait:bottom-60 left-[-24%] fhd:left-[-24%] fhdv:portrait:left-[-15%] absolute">
          <AnimatedOds width="100%" height={430} />
        </div>
        <div
          className={`${activeCase ? "opacity-0" : "opacity-100"} transtion-all duration-200 flex flex-col min-w-full lg:min-w-auto 
        items-center lg:items-start fhd:min-w-3/12 fhdv:portrait:basis-1/2 lg:opacity-100 fhdv:portrait:opacity-100`}
        >
          {dataOds && (
            <div className="flex flex-col gap-5">
              {dataOds.cta && (
                <div className="text-5xl uppercase font-bold">
                  {dataOds.cta}
                </div>
              )}
              {!dataOds.cta && (
                <div className="text-2xl xl:text-3xl 2xl:text-4xl fhd:text-5xl fhdv:portrait:text-5xl uppercase font-light text-center lg:text-left">
                  {interfaceData[locale]["map-title"].array?.[0]}{" "}
                  <span className="font-extrabold">
                    {interfaceData[locale]["map-title"].array?.[1]}
                  </span>{" "}
                  {interfaceData[locale]["map-title"].array?.[2]}{" "}
                  <span className="font-extrabold">
                    {interfaceData[locale]["map-title"].array?.[3]}
                  </span>
                </div>
              )}
              <div className="relative w-50 h-10 mx-auto lg:mx-0">
                <Image
                  sizes="80vw"
                  src={interfaceData[locale]["map-ods-logo"].value}
                  fill
                  alt=""
                />
              </div>
              {dataOds.seal && (
                <div
                  className="w-25 h-25 fhdv:portrait:w-35 fhdv:portrait:h-35 relative mx-auto lg:mx-0"
                  style={{
                    backgroundColor: `var(--color-ods${dataOds?.id})`,
                  }}
                >
                  <Image
                    sizes="80vw"
                    src={dataOds.seal}
                    alt={dataOds.name}
                    fill
                  />
                </div>
              )}
            </div>
          )}
          <div className="w-6/12 2xl:w-4/12 mt-5 ml-5 mb-2">
            <Title
              className="mb-2 fhd:text-xl fhdv:portrait:text-2xl"
              title="Cases"
              titleLine="center"
              color={`var(--color-ods${dataOds?.id})`}
              tag="h2"
            />
          </div>

          {dataCases && dataCases.length > 0 && (
            <CaseList
              activeCase={activeCase}
              setActiveCase={setActiveCase}
              data={dataCases}
              dataOds={dataOds}
            />
          )}
        </div>
        <div className="hidden -ml-45 -mr-45 2xl:mr-0 -mt-40 2xl:mt-10 2xl:-ml-10  basis-1/3 lg:block min-w-fit fhd:min-w-6/12 fhd:-mr-5 fhd:-ml-20 mix-blend-multiply fhdv:portrait:order-3 fhd:order-0 fhd:mt-0 fhdv:portrait:-mt-280">
          <Map
            className="scale-60 2xl:scale-100 fhd:scale-100 fhdv:portrait:scale-100"
            setActiveCase={setActiveCase}
            activeCase={activeCase}
            currentCases={dataCases}
            dataOds={dataOds}
          />
        </div>
        <div className="2xl:min-w-[32%] lg:min-w-[38%] -mt-40 lg:-mt-60 fhdv:portrait:mt-0 fhd:mt-0 basis-1/3 fhd:min-w-4/12 fhdv:portrait:basis-1/2 relative">
          {dataCases &&
            dataCases.map((cs, index) => {
              return (
                <CaseTechnicalSheet
                  activeCase={activeCase}
                  dataOds={dataOds}
                  setActiveCase={setActiveCase}
                  key={index}
                  data={cs}
                />
              );
            })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
