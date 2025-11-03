"use client"
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { cases } from "@/data/cases";
import { CaseTechnicalSheet } from "./CaseTechnicalSheet";
import { Map } from "./Map";
import { useState } from "react";
import { Case as CaseData } from "@/types/Case"
import { CaseList } from "./CaseList";
import { AnimatedOds } from "./AnimatedOds";
import { Title } from "./Title";

export const Ods = () => {
   const params = useParams<Params>();
   const locale = params.lang as keyof typeof ods;
   const dataOds = ods[locale]?.find((ods) => {
      return ods.id === Number(params.id)
   })
   const dataCases = cases[locale]?.filter((cs) => {
      return cs.mainOds === Number(params.id)
   })
   const [activeCase, setActiveCase] = useState<CaseData>()

    return (
       <div className="flex fhd:flex-nowrap fhdv:flex-wrap fhd:justify-between fhdv:justify-center h-full relative fhd:mt-39 fhdv:mt-80" style={{
         color: `var(--color-ods${dataOds?.id})`
       }}>
         <div className="w-8/12 fhd:-bottom-30 fhdv:bottom-30 fhd:left-[-24%] fhdv:left-[-15%] absolute">
            <AnimatedOds width="100%" height={450} />
         </div>
        <div className="fhd:min-w-3/12 fhdv:basis-1/2">
          {dataOds && <div className="flex flex-col gap-5">
               {dataOds.cta && <div className="text-5xl uppercase font-bold">{dataOds.cta}</div>}
               {!dataOds.cta && <div className="text-5xl uppercase font-light">
               Este é o <span className="font-extrabold">Brasil</span> que <span className="font-extrabold">Coopera</span>
               </div>}
               <div className="relative w-50 h-10">
                  <Image sizes="80vw" src="/logo/ods-logo2.svg" fill alt=""/>
               </div>
               {dataOds.seal && <div className="w-35 h-35 relative" style={{
                  backgroundColor: `var(--color-ods${dataOds?.id})`
               }}><Image sizes="80vw" src={dataOds.seal} alt={dataOds.name} fill /></div>}
            </div>}
            <div className="w-6/12 mt-10 ml-5 mb-2">
             <Title className="mb-2 fhd:text-xl fhdv:text-2xl" title="Cases" titleLine="center" color={`var(--color-ods${dataOds?.id})`} tag="h2" />
            </div>
           
            {dataCases && dataCases.length > 0 && <div className="py-5 px-3 rounded-2xl w-7/12 border" style={{
                  borderColor: `var(--color-ods${dataOds?.id})`
               }}>
               {dataCases.map((cs, index) => {
               return (
                  <CaseList activeCase={activeCase} setActiveCase={setActiveCase} key={index} data={cs}/>
               )
            })}
            </div>}
        </div>
        <div className="min-w-6/12 -mr-5 -ml-20 mix-blend-multiply fhdv:order-3 fhd:order-0 fhd:mt-0 fhdv:-mt-100">
         <Map setActiveCase={setActiveCase} activeCase={activeCase} currentCases={dataCases} />
        </div>
        <div className="fhd:min-w-4/12 fhdv:basis-1/2 relative">
            {dataCases && dataCases.map((cs, index) => {
               return (
                  <CaseTechnicalSheet activeCase={activeCase} key={index} data={cs}/>
               )
            })}
        </div>
       </div>
    )
}