"use client"

import { cases } from "@/data/cases";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CaseContent } from "./CaseContent";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";
import Link from "next/link";

export const Case = () => {

  const params = useParams<Params>();
  const locale = params.lang as keyof typeof cases;

  const dataCase = cases[locale]?.find((cs) => {
    return cs.id === Number(params.id)
  })
  const dataOds = ods[locale]?.find((ods) => {
    return ods.id === dataCase?.mainOds
  })
  const dataOdsCases = cases[locale]?.filter((cs) => {
    return cs.mainOds === Number(dataCase?.mainOds)
  })
  const odsIds = dataOdsCases?.map((cs) => (cs.id)).sort((a, b) => a - b)
  const currentCasePosition = dataCase ? odsIds?.indexOf(dataCase.id) : null
  const nextId = typeof currentCasePosition === "number" ? odsIds?.[currentCasePosition + 1] : undefined

  const nextCase = cases[locale]?.find((cs) => {
    return cs.id === nextId
  })
  console.log(nextCase)
     if(dataCase && odsIds) {
  return (
        <div className="flex items-center justify-center h-full">
         
        <div className="flex gap-30 w-10/12 h-9/12 rounded-2xl p-10 relative" style={{
            backgroundColor: `var(--color-ods${dataCase.mainOds})`
        }}>
           <div className="absolute -top-10 -right-10">
            <Link href={`/${locale}/ods/${dataCase.mainOds}`}>
              <Image src="/icons/close.svg" alt="" width={40} height={40}/>
            </Link>
          </div>
           
           {nextCase && <div className="absolute bottom-0 -right-60">
            <Link className="w-full h-full text-primary flex items-center text-sm" href={`/${locale}/case/${nextCase.id}`}>
              <Image src="/icons/next.svg" alt="" width={40} height={40}/> <span className="w-1/2 leading-4 border-l pl-2 ml-2 h-4 border-primary">Conheça o próximo case</span>
            </Link>
          </div>}
         <div className="basis-1/2">
           <header className="flex gap-6">
            {dataOds?.seal && <div className="w-40 h-40 border-20 -ml-10  border-white relative">
              <Image sizes="80vw" fill src={dataOds.seal} alt={dataCase.title || dataCase.markdownTitle || ''} />
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
  return (
    <div className="flex items-center justify-center h-full">Nada Encontrado</div>
  )
}