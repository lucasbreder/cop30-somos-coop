"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useScrollContent } from "@/hooks/useScrollContent";
import { Company } from "@/types/Company";
import { CaseCompany } from "@/types/Case";
import { useParams, useRouter } from "next/navigation";
import { Params } from "@/types/Params";
import useHasOverflow from "@/hooks/useHasOverflow";

export const CaseCreditList = ({
  data,
  dataCompany,
}: {
  data: CaseCompany[];
  dataCompany?: Company;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentScrollHeight, setContentScrollHeight] = useState(0);
  const router = useRouter();
  const params = useParams<Params>();
  const locale = params.lang as string;
  const hasOverflow = useHasOverflow(contentRef);

  useScrollContent({
    contentRef,
    data,
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  return (
    <div className={`relative ${hasOverflow ? "h-full" : "h-fit"} pr-7`}>
      <div
        ref={contentRef}
        className="py-5 px-3 hdv:portrait:py-8 fhdv:portrait:px-10 rounded-2xl fhdv:portrait:rounded-4xl w-full h-full fhdv:portrait:h-10/12 border overflow-y-scroll no-scrollbar"
        style={{
          borderColor: dataCompany && `var(--${dataCompany?.name}-primary)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex mb-2 fhdv:portrait:mb-8 items-start gap-2 fhdv:portrait:gap-6 cursor-pointer transition-all duration-500 text-sm lg:text-xl fhdv:portrait:text-3xl`}
            style={{
              color: dataCompany && `var(--${dataCompany?.name}-primary)`,
            }}
            onClick={() => {
              router.push(
                `/${locale}/credito/${dataCompany?.name}/case/${item.id}`
              );
            }}
          >
            <div className="min-w-4 min-h-4 fhdv:portrait:min-w-10 fhdv:portrait:min-h-10 mt-2 relative ">
              <Image src="/icons/eye.svg" alt="" fill />
            </div>
            <span>{item.title}</span>
          </div>
        ))}
        {hasOverflow && (
          <div
            ref={trackRef}
            className="absolute border top-0 bottom-auto right-0 w-4 fhdv:portrait:w-5 m-auto h-full fhdv:portrait:h-10/12 rounded-2xl flex flex-col justify-start items-center opacity-60"
            style={{
              color: dataCompany && `var(--${dataCompany?.name}-primary)`,
            }}
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
                backgroundColor:
                  dataCompany && `var(--${dataCompany?.name}-primary)`,
              }}
              className="bg-inherit h-15 w-3 fhdv:portrait:w-4 rounded-2xl cursor-grab mt-0.5"
            />
          </div>
        )}
      </div>
    </div>
  );
};
