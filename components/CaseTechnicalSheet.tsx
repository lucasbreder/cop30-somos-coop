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
         <div className={`w-10/12 h-4/6 z-20 rounded-2xl p-10 absolute transition-all duration-700 ease-in-out left-0 ${activeCase?.id === data.id ? 'bottom-30' : '-bottom-full'}`} style={{
            backgroundColor: `var(--color-ods${data.mainOds})`
        }}>
          <div className="absolute -top-10 left-0 uppercase text-2xl text-center w-full" style={{
            color: `var(--color-ods${data.mainOds})`
        }}>Ficha Técnica do Case</div>
           <div ref={contentRef} className="h-full overflow-y-hidden pb-20">
            <div className=" h-40 w-full mb-5 rounded-2xl relative overflow-hidden">
                {data.thumbnail && <Image className="object-cover" src={data.thumbnail} alt={data.title} fill />}
            </div>
            <CaseInfo title="Nome da Cooperativa" text={data.cooperName} />
            <CaseInfo title="Ramo" text={data.branch} />
            {/* <CaseInfo title="Categorias" text={data.categories[0]} /> */}
            <CaseInfo title="Resumo" text={data.excerpt} />
            <OdsList odsNumbers={data.asideOds} />
           </div>
           <div className="absolute -bottom-15 w-full left-0">
            <Button label="Conhecer o case" url={`/${locale}/case/${data.id}`} ods={data.mainOds}/>
           </div>
        {contentScrollHeight > 596 && <div 
        ref={trackRef} 
        className="absolute bottom-0 -right-8 w-4 m-auto h-[80%] rounded-2xl border border-gray-600 flex flex-col justify-start items-center mt-4"
    >
       <motion.div 
            drag="y" 
            dragTransition={{
                power: 0, 
                timeConstant: 700,
            }}
            dragConstraints={trackRef} 
            style={{y}}
            className="bg-gray-600 h-15 w-3 rounded-2xl cursor-grab my-0.5" 
        />
    </div>}
        
       </div>
    )
}