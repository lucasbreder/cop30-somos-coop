"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useScrollContent } from "@/hooks/useScrollContent";
import { Company } from "@/types/Company";
import { CaseCompany } from "@/types/Case";
import { useParams, useRouter } from "next/navigation";
import { Params } from "@/types/Params";

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

  useScrollContent({
    contentRef,
    data,
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  return (
    <div className="basis-full relative">
      <div
        ref={contentRef}
        className="py-5 px-3 rounded-2xl w-full h-full border overflow-y-scroll no-scrollbar"
        style={{
          borderColor: dataCompany && `var(--${dataCompany?.name}-primary)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex mb-2 items-start gap-2 cursor-pointer transition-all duration-500 text-sm`}
            style={{
              color: dataCompany && `var(--${dataCompany?.name}-primary)`,
            }}
            onClick={() => {
              router.push(
                `/${locale}/credito/${dataCompany?.name}/case/${item.id}`
              );
            }}
          >
            <Image
              className="mt-2"
              src="/icons/eye.svg"
              alt=""
              width={15}
              height={10}
            />
            <span>{item.title}</span>
          </div>
        ))}
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
                backgroundColor:
                  dataCompany && `var(--${dataCompany?.name}-primary)`,
              }}
              className="bg-inherit h-15 w-3 rounded-2xl cursor-grab mt-0.5"
            />
          </div>
        )}
      </div>
    </div>
  );
};
