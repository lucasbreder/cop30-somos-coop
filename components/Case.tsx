"use client"

import { cases } from "@/data/cases";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CaseContent } from "./CaseContent";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";

export const Case = () => {

  const params = useParams<Params>();
  const locale = params.lang as keyof typeof cases;

  const dataCase = cases[locale]?.find((cs) => {
    return cs.mainOds === Number(params.id)
  })
  const dataOds = ods[locale]?.find((ods) => {
        return ods.id === dataCase?.mainOds
     })

     if(dataCase) {
  return (
        <div className="flex items-center justify-center h-full">
        <div className="flex gap-30 w-10/12 h-5/6 rounded-2xl p-10" style={{
            backgroundColor: `var(--color-ods${dataCase.mainOds})`
        }}>
         <div className="basis-1/2">
           <header className="flex gap-6">
            {dataOds?.seal && <div className="w-40 h-40 border-20 -ml-10  border-white relative">
              <Image fill src={dataOds.seal} alt={dataCase.title || ''} />
            </div>}
            <div className="max-w-1/2 font-light text-6xl text-white">{dataCase.title}</div>
          </header>
          {dataCase && <CaseContent data={dataCase} />}
          <OdsList odsNumbers={dataCase.asideOds} showTitle={true} />
         </div>
        <div className="w-full h-full basis-1/2">
          {dataCase.gallery && <Gallery gallery={dataCase.gallery} />}
        </div>
      </div>
        </div>
  )
  }
}