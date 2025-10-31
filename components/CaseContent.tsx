"use client"
import { useEffect, useRef, useState } from "react";
import { CaseInfo } from "./CaseInfo"
import { Case as CaseData } from "@/types/Case"
import { motion, useMotionValue } from "motion/react"

export const CaseContent = ({data}: {data: CaseData}) => {

      const trackRef = useRef<HTMLDivElement>(null);
      const contentRef = useRef<HTMLDivElement>(null);
      const y = useMotionValue(0);
      const [contentScrollHeight, setContentScrollHeight] = useState(0);

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
         <div className={`w-full h-4/6 z-20 rounded-2xl p-10 transition-all duration-700 ease-in-out left-0 relative border border-white/20 mt-6`}>
           <div ref={contentRef} className="h-full overflow-y-hidden pb-10">
            <CaseInfo title="Contexto" text={data.context} />
            <CaseInfo title="Desafios" text={data.challenge} />
            <CaseInfo title="Desenvolvimento" text={data.development} />
            <CaseInfo title="Desenvolvimento" text={data.development} />
            <CaseInfo title="Desenvolvimento" text={data.development} />
            <CaseInfo title="Desenvolvimento" text={data.development} />
            <CaseInfo title="Desenvolvimento" text={data.development} />
           </div>
        {contentScrollHeight > 596 && <div 
        ref={trackRef} 
        className="absolute bottom-0 -right-8 w-4 m-auto h-full rounded-2xl border border-white flex flex-col justify-start items-center mt-4 opacity-20"
    >
       <motion.div 
            drag="y" 
            dragTransition={{
                power: 0, 
                timeConstant: 700,
            }}
            dragConstraints={trackRef} 
            style={{y}}
            className="bg-white h-15 w-3 rounded-2xl cursor-grab mt-0.5" 
        />
    </div>}
        
       </div>
    )
}