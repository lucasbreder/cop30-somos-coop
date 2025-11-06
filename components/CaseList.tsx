"use client";
import { useRef, useState } from "react";
import { Case as CaseData } from "@/types/Case";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useScrollContent } from "@/hooks/useScrollContent";
import { Objective } from "@/types/Objective";

export const CaseList = ({
  data,
  activeCase,
  dataOds,
  setActiveCase,
}: {
  data: CaseData[];
  activeCase?: CaseData;
  dataOds?: Objective;
  setActiveCase?: (arg: CaseData) => void;
}) => {
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
    <div className="relative z-99 max-h-[20%] sm:max-h-[30%] md:max-h-[35%] lg:max-h-[20%] w-full lg:w-full fhd:w-4/6 fhdv:portrait:w-3/6">
      <div
        ref={contentRef}
        className="py-5 px-3 rounded-2xl w-full border h-full fhdv:portrait:h-3/6 overflow-y-scroll no-scrollbar"
        style={{
          borderColor: dataOds && `var(--color-ods${dataOds?.id})`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex mb-2 items-start gap-2 cursor-pointer transition-all duration-500 text-sm ${activeCase?.id === item.id ? "font-bold" : "font-normal"}`}
            onClick={() => {
              if (setActiveCase) setActiveCase(item);
            }}
          >
            <Image
              className="mt-2"
              src="/icons/eye.svg"
              alt=""
              width={15}
              height={10}
            />
            <span>
              {item.title} ({item.state})
            </span>
          </div>
        ))}
      </div>
      {contentScrollHeight > 240 && (
        <div
          ref={trackRef}
          className="absolute top-0 bottom-auto -right-7 w-4 m-auto h-full fhdv:portrait:h-3/6 rounded-2xl border border-red flex flex-col justify-start items-center opacity-60"
        >
          <motion.div
            ref={thumbRef}
            drag="y"
            dragTransition={{
              power: 0,
              timeConstant: 700,
            }}
            dragConstraints={trackRef}
            style={{
              y,
              backgroundColor: dataOds && `var(--color-ods${dataOds.id})`,
            }}
            className="bg-inherit h-15 w-3 rounded-2xl cursor-grab mt-0.5"
          />
        </div>
      )}
    </div>
  );
};
