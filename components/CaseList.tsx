"use client";
import { useEffect, useRef } from "react";
import { Case as CaseData } from "@/types/Case";
import { useMotionValue } from "motion/react";
import Image from "next/image";

export const CaseList = ({
  data,
  activeCase,
  setActiveCase,
}: {
  data: CaseData;
  activeCase?: CaseData;
  setActiveCase: (arg: CaseData) => void;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  useEffect(
    () =>
      y.on("change", (latest) => {
        if (trackRef.current && contentRef.current) {
          const trackHeight = trackRef.current.clientHeight;
          const contentHeight =
            contentRef.current.scrollHeight - contentRef.current.clientHeight;
          const scrollableDist = contentHeight * (latest / trackHeight);
          contentRef.current.scrollTop = scrollableDist;
        }
      }),
    [y]
  );

  return (
    <div>
      <div
        className={`flex items-center gap-2 cursor-pointer transition-all duration-500 text-sm ${activeCase?.id === data.id ? "font-bold" : "font-normal"}`}
        onClick={() => {
          setActiveCase(data);
        }}
      >
        <Image src="/icons/eye.svg" alt="" width={15} height={10} />
        <span>
          {data.title} ({data.state})
        </span>
      </div>
    </div>
  );
};
