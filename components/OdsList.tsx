"use client"
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";

export const OdsList = ({odsNumbers, showTitle = false}:{odsNumbers:number[], showTitle?:boolean}) => {
   const params = useParams<Params>();
   const locale = params.lang as keyof typeof ods || 'pt';

    return (
      <div className="flex fhd:flex-row fhdv:flex-row-reverse gap-2 mt-5 text-white">
         {showTitle && <div className="flex-1 fhdv:pl-4 fhdv:ml-3 fhd:border-r fhdv:border-l border-white w-fit flex items-center">ODS relacionadas a esse case</div>}
         {odsNumbers.map((o,index) => {
             const dataOds = ods[locale]?.find((ods) => {
                  return ods.id === o
               })
            return (
            <div className="fhd:w-12 fhdv:w-16 fhd:h-12 fhdv:h-16 relative border-4 border-white" key={index}>
               {dataOds?.seal && <Image sizes="80vw" src={dataOds.seal} alt={dataOds.name} fill />}
            </div>
         )
         })}
      </div>
    )
}