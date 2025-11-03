"use client"
import { useEffect, useRef, useState } from "react";
import { CaseInfo } from "./CaseInfo"
import { Case as CaseData } from "@/types/Case"
import { motion, useMotionValue } from "motion/react"
import Image from "next/image";
import { Button } from "./Button";
import { OdsList } from "./OdsList";
import { useParams } from "next/navigation";
import { Params } from "@/types/Params";
import { Title } from "./Title";
import { CaseInfoList } from "./CaseInfoLIst";

export const CaseTechnicalSheet = ({data, activeCase}: {data: CaseData, activeCase?:CaseData}) => {

      const trackRef = useRef<HTMLDivElement>(null);
      const contentRef = useRef<HTMLDivElement>(null);
      const y = useMotionValue(0);
      const [contentScrollHeight, setContentScrollHeight] = useState(0);
       const params = useParams<Params>();
      const locale = params.lang;

      useEffect(() => (
        y.on('change', (latest) => {
        if (trackRef.current && contentRef.current) {
          const trackHeight = trackRef.current.clientHeight;
          const contentHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
          const scrollableDist = contentHeight * (latest / trackHeight);
          contentRef.current.scrollTop = scrollableDist;
        }
      })
      ),[y])

      useEffect(() => {
        if (contentRef.current) {
          // Access ref.current safely after the component has mounted
          setContentScrollHeight(contentRef.current.scrollHeight);
        }
      }, [data]);

    return (
         <div className={`flex flex-col gap-1 w-10/12 fhd:h-4/6 fhdv:h-3/6 z-20 r absolute transition-all duration-700 ease-in-out fhd:left-0 ${activeCase?.id === data.id ? 'fhd:bottom-90 fhdz:bottom-auto fhd:right-auto fhdv:right-10' : 'fhd:-bottom-full fhdz:bottom-auto fhdv:-right-[150%] fhd:right-auto'}`}>
          <div className="uppercase text-2xl text-center w-full" style={{
            color: `var(--color-ods${data.mainOds})`
        }}>
          <Title className="text-2xl fhd:indent-10 fhdv:indent-2 fhdv:w-10/12 mx-auto" title="Ficha Técnica do Case" titleLine="left" color={`var(--color-ods${data?.mainOds})`} tag="h2" /></div>
           <div className="h-full rounded-2xl px-6 py-8" style={{
            backgroundColor: `var(--color-ods${data.mainOds})`
        }}>
          <div ref={contentRef} className="w-full h-full overflow-hidden pb-20">
            <div className=" h-40 w-full mb-5 relative">
                {data.thumbnail && <Image sizes="80vw" className="object-cover rounded-2xl" src={data.thumbnail} alt={data.title} fill />}
            </div>
            <CaseInfo title="Nome da Cooperativa" text={data.cooperName} />
            <CaseInfo title="Ramo" text={data.branch} />
            <CaseInfoList title="Categorias" text={data.categories} />
            <CaseInfo title="Resumo" text={data.excerpt} />
            <OdsList odsNumbers={data.asideOds} />
           </div>
           </div>
           <div className="w-full left-0 flex gap-2 mt-5">
            <Button label="Conhecer o case" url={`/${locale}/case/${data.id}`} ods={data.mainOds}/>
           </div>
        {contentScrollHeight > 602 && <div 
        ref={trackRef} 
        className="absolute bottom-0 -right-8 w-4 m-auto h-[80%] rounded-2xl border border-primary flex flex-col justify-start items-center mt-4"
    >
       <motion.div 
            drag="y" 
            dragTransition={{
                power: 0, 
                timeConstant: 700,
            }}
            dragConstraints={trackRef} 
            style={{y}}
            className="bg-gray-400 h-15 w-3 rounded-2xl cursor-grab my-0.5" 
        />
    </div>}
        
       </div>
    )
}