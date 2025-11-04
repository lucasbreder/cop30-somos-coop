"use client";
import { useRef, useState } from "react";
import { CaseInfo } from "./CaseInfo";
import { Case as CaseData } from "@/types/Case";
import { motion, useMotionValue } from "motion/react";
import { Gallery } from "./Gallery";
import { useScrollContent } from "@/hooks/useScrollContent";

export const CaseContent = ({ data }: { data: CaseData }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentScrollHeight, setContentScrollHeight] = useState(0);

  useScrollContent({
    contentRef,
    data,
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  return (
    <div className="w-full max-h-7/12 lg:max-h-6/12 xl:max-h-7/12 2xl:max-h-8/12 fhd:max-h-7/12 flex relative mt-10">
      <div
        ref={contentRef}
        className="overflow-y-scroll w-10/12 md:w-11/12 xl:w-11/12 fhdv:portrait:w-[96%]  pb-10 border border-white/60 p-10 fhdv:portrait:p-5 rounded-2xl overflow-hidden no-scrollbar"
      >
        <div className="">
          <CaseInfo title="Contexto" text={data.context} />
          <CaseInfo title="Desafios" text={data.challenge} />
          <CaseInfo title="Desenvolvimento" text={data.development} />
          <CaseInfo title="Desenvolvimento" text={data.development} />
          <CaseInfo title="Desenvolvimento" text={data.development} />
        </div>
        <div className="lg:hidden">
          {data.gallery && <Gallery gallery={data.gallery} />}
        </div>
      </div>
      {contentScrollHeight > 0 && (
        <div
          ref={trackRef}
          className="absolute top-0 bottom-0 right-0 w-4 m-auto h-full rounded-2xl border border-white flex flex-col justify-start items-center opacity-60"
        >
          <motion.div
            ref={thumbRef}
            drag="y"
            dragTransition={{
              power: 0,
              timeConstant: 700,
            }}
            dragConstraints={trackRef}
            style={{ y }}
            className="bg-white h-15 w-3 rounded-2xl cursor-grab mt-0.5"
          />
        </div>
      )}
    </div>
  );
};
