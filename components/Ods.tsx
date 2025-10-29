"use client"
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { cases } from "@/data/cases";
import { Case } from "./Case";
import { Map } from "./Map";
import { useState } from "react";
import { Case as CaseData } from "@/types/Case"

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
       <div className="flex justify-between p-20 overflow-hidden h-full relative" style={{
         color: `var(--color-ods${dataOds?.id})`
       }}>
        <div className="w-4/12">
          {dataOds && <div className="flex flex-col gap-5">
               {dataOds.cta && <div className="text-5xl uppercase font-bold w-8/12">{dataOds.cta}</div>}
               {!dataOds.cta && <div className="text-5xl uppercase font-bold w-8/12">
               Este é o <span className="font-extrabold">Brasil</span> que <span className="font-extrabold">Coopera</span>
               </div>}
               <div className="bg-gray-200 h-10"></div>
               {dataOds.seal && <div className="w-35 h-35 relative" style={{
                  backgroundColor: `var(--color-ods${dataOds?.id})`
               }}><Image src={dataOds.seal} alt={dataOds.name} fill /></div>}
            </div>}
            {dataCases && dataCases.length > 0 && <div className="py-2 px-3 border rounded-2xl mt-10 w-5/12" style={{
                  borderColor: `var(--color-ods${dataOds?.id})`
               }}>
               {dataCases.map((cs, index) => {
               return (
                  <Case activeCase={activeCase} setActiveCase={setActiveCase} key={index} data={cs}/>
               )
            })}
            </div>}
        </div>
        <div>
         <Map activeCase={activeCase} currentCases={dataCases} />
        </div>
        <div></div>
       </div>
    )
}