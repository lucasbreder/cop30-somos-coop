"use client";

import { cases } from "@/data/cases";
import { Params } from "@/types/Params";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { CaseContent } from "./CaseContent";
import { Gallery } from "./Gallery";
import Link from "next/link";
import { AnimatedCase } from "./AnimatedCase";
import { Title } from "./Title";
import { AnimatedCase2 } from "./AnimatedCase2";
import { images } from "@/data/images";
import { useRef, useState } from "react";
import { useMotionValue, motion } from "motion/react";
import { useScrollContent } from "@/hooks/useScrollContent";
import { interfaceData } from "@/data/interface";
import { casesCompany } from "@/data/cases-company";

export const CaseCompany = ({
  hasBakground = true,
}: {
  hasBakground?: boolean;
}) => {
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof cases;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentScrollHeight, setContentScrollHeight] = useState(0);

  useScrollContent({
    contentRef,
    data: {},
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  console.log(params);
  const dataCase = casesCompany[locale]?.find((cs) => {
    return cs.id === Number(params.id);
  });

  const dataCompanyCases = casesCompany[locale]?.filter((cs) => {
    return cs.company === dataCase?.company;
  });
  const casesCompanyIds = dataCompanyCases
    ?.map((cs) => cs.id)
    .sort((a, b) => a - b);
  const currentCasePosition = dataCase
    ? casesCompanyIds?.indexOf(dataCase.id)
    : null;
  const nextId =
    typeof currentCasePosition === "number"
      ? casesCompanyIds?.[currentCasePosition + 1]
      : undefined;

  const nextCase = cases[locale]?.find((cs) => {
    return cs.id === nextId;
  });
  const imagesData = images.find((img) => {
    if (dataCase) return img.id === dataCase.id;
  });

  if (dataCase && casesCompanyIds) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="hidden xl:block fhdv:portrait:block w-8/12 -top-30 fhdv:portrait:-top-35 fhdv:portrait:left-165 fhdv:portrait:scale-x-[-1]  xl:-top-48 2xl:-top-40 left-20 absolute">
          <AnimatedCase width="100%" height={270} />
        </div>
        <div className="hidden fhdv:portrait:block absolute -bottom-40 left-20 fhdv:portrait:scale-x-[-1]">
          <AnimatedCase2 width="100%" height={300} />
        </div>
        <div
          className="
          flex 
          gap-10 
          fhd:flex-row 
          fhdv:portrait:flex-col 
          lg:mt-8 fhd:mt-0 
          fhdv:portrait:mt-20 
          h-8/12 
          sm:h-8/12 
          xs:h-9/12 
          lg:h-8/12 
          fhdv:portrait:h-[71%] 
          rounded-2xl
          px-3 
          py-8 
          lg:px-10 
          lg:py-10 
          relative 
          w-11/12 
          fhd:w-10/12 
          top-8 
          sm:top-0"
          style={{
            backgroundColor: hasBakground
              ? `var(--${dataCase.company}-primary)`
              : "transparent",
            borderColor: !hasBakground
              ? `var(--${dataCase.company}-primary)`
              : "transparent",
            borderWidth: !hasBakground ? 2 : 0,
            borderStyle: "solid",
            color: !hasBakground
              ? `var(--${dataCase.company}-primary) !important`
              : "white",
          }}
        >
          <div
            className="hidden fhd:block absolute -top-20 fhdv:portrait:-top-25 left-0"
            style={{
              color: `var(--${dataCase.company}-primary)`,
            }}
          >
            <Title
              className="fhd:text-xl fhdv:portrait:text-2xl max-w-4/6"
              title={`CASE - ${dataCase.title}`}
              titleLine="left"
              color={`var(--${dataCase.company}-primary)`}
              tag="h2"
            />
          </div>
          <div className="absolute -top-14 right-0 lg:-right-5 flex gap-2 z-9999">
            <Link href={`/${locale}/credito/${dataCase.company}`}>
              <Image src="/icons/close.svg" alt="" width={40} height={40} />
            </Link>
            {nextCase && (
              <Link
                className="block sm:hidden w-10 h-10 text-primary items-center text-sm"
                href={`/${locale}/case/${nextCase.id}`}
              >
                <Image
                  src="/icons/next.svg"
                  alt=""
                  width={40}
                  height={40}
                />{" "}
              </Link>
            )}
          </div>

          {nextCase && (
            <div className="hidden sm:block absolute -bottom-15 -right-18 fhd:bottom-0 fhd:-right-60 fhdv:portrait:right-1/2 fhdv:portrait:translate-x-4/6">
              <Link
                className="w-full h-full text-primary flex items-center text-sm"
                href={`/${locale}/case/${nextCase.id}`}
              >
                <Image src="/icons/next.svg" alt="" width={40} height={40} />{" "}
                <span className="w-1/2 leading-4 border-l pl-2 ml-2 h-4 border-primary">
                  {interfaceData[locale]["next-case"].value}
                </span>
              </Link>
            </div>
          )}
          <div className="flex flex-col w-full h-full fhdv:portrait:basis-auto lg:basis-full relative gap-4">
            <header className="flex gap-6 items-center">
              <div
                style={{
                  color: hasBakground
                    ? "#fff"
                    : `var(--${dataCase.company}-primary)`,
                }}
                className="max-w-8/12 font-light text-xl lg:text-lg 2xl:text-2xl fhd:text-3xl fhdv:portrait:text-5xl text-white overflow-hidden"
              >
                {dataCase.title}
              </div>
            </header>
            <div
              ref={contentRef}
              className="basis-10/12 relative flex flex-col overflow-y-scroll no-scrollbar w-10/12 md:w-full"
            >
              {dataCase && <CaseContent data={dataCase} />}
            </div>
            {contentScrollHeight > 0 && (
              <div
                ref={trackRef}
                className="absolute bottom-0 fhdv:portrait:top-50 fhdv:portrait:bottom-auto right-6 md:right-0 w-4 m-auto h-7/12 md:h-10/12 fhdv:portrait:h-1/2 rounded-2xl border border-white flex flex-col justify-start items-center opacity-60"
                style={{
                  borderColor: `var(--${dataCase.company}-primary)`,
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
                    backgroundColor: `var(--${dataCase.company}-primary)`,
                  }}
                  className="h-15 w-3 rounded-2xl cursor-grab mt-0.5"
                />
              </div>
            )}
            {imagesData && imagesData.gallery.length > 0 && (
              <div className="hidden fhdv:portrait:block w-full lg:basis-1/2 mt-15">
                <Gallery gallery={imagesData.gallery} />
              </div>
            )}
          </div>
          {imagesData && imagesData.gallery.length > 0 && (
            <div className="hidden lg:block fhdv:portrait:hidden w-full lg:basis-1/2">
              <Gallery gallery={imagesData.gallery} />
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-full">
      {interfaceData[locale]["not-found"].value}
    </div>
  );
};
