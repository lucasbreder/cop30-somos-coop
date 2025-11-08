"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CaseInfo } from "./CaseInfo";
import { Case, Case as CaseData } from "@/types/Case";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { Button } from "./Button";
import { OdsList } from "./OdsList";
import { useParams } from "next/navigation";
import { Params } from "@/types/Params";
import { Title } from "./Title";
import { CaseInfoList } from "./CaseInfoList";
import { useScrollContent } from "@/hooks/useScrollContent";
import { images } from "@/data/images";
import { Objective } from "@/types/Objective";
import { interfaceData } from "@/data/interface";

export const CaseTechnicalSheet = ({
  data,
  activeCase,
  setActiveCase,
  dataOds,
  hasBakground = true,
}: {
  data: CaseData;
  activeCase?: CaseData;
  hasBakground?: boolean;
  dataOds?: Objective;
  setActiveCase: Dispatch<SetStateAction<Case | undefined>>;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentScrollHeight, setContentScrollHeight] = useState(0);
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof dataOds;
  const imagesData = images.find((img) => {
    return img.id === data.id;
  });

  useScrollContent({
    contentRef,
    data,
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  return (
    <div
      className={`flex flex-col md:ml-2 fhd:ml-0 fhdv:portrait:ml-0 gap-1 w-10/12 h-[56%] lg:h-[45%] fhd:h-4/6 fhdv:portrait:h-3/12 z-999 fixed lg:absolute fhdv:portrait:absolute transition-all duration-700 ease-in-out left-5 fhd:left-auto fhdv:portrait:left-auto ${activeCase?.id === data.id ? "bottom-[30%] lg:bottom-[35%] fhd:bottom-100 fhdv:portrait:bottom-auto fhd:right-auto fhdv:portrait:right-10" : "-bottom-full fhdv:portrait:bottom-auto fhdv:portrait:-right-[150%] fhd:right-auto"}`}
    >
      <div
        className="uppercase text-2xl text-center w-full"
        style={{
          color: `var(--color-ods${dataOds?.id})`,
        }}
      >
        <div
          className="absolute z-999 top-10 -right-10 md:hidden fhdv:portrait:hidden"
          onClick={() => {
            setActiveCase(undefined);
          }}
        >
          <Image src="/icons/close.svg" alt="" width={35} height={35} />
        </div>
        <Title
          className="text-xl fhd:portrait:text-2xl fhd:text-2xl fhd:indent-10 fhdv:portrait:indent-2 fhdv:portrait:w-10/12 mx-auto"
          title={interfaceData[locale]["technical-sheet-title"].value}
          titleLine="left"
          color={`var(--color-ods${dataOds?.id})`}
          tag="h2"
        />
      </div>
      <div
        className="h-full rounded-2xl px-6 py-8"
        style={{
          backgroundColor: hasBakground
            ? `var(--color-ods${dataOds?.id})`
            : "transparent",
          borderColor: !hasBakground
            ? `var(--color-ods${dataOds?.id})`
            : "transparent",
          borderWidth: !hasBakground ? 2 : 0,
          borderStyle: "solid",
          color: !hasBakground
            ? `var(--color-ods${dataOds?.id}) !important`
            : "white",
        }}
      >
        <div
          ref={contentRef}
          className="w-full h-full overflow-hidden overflow-y-auto no-scrollbar"
        >
          {imagesData && imagesData.gallery?.length > 0 && (
            <div className="h-40 w-full mb-5 relative">
              <Image
                sizes="80vw"
                className="object-cover rounded-2xl"
                src={imagesData.gallery[0]}
                alt={data.title}
                fill
              />
            </div>
          )}

          <CaseInfo
            title={interfaceData[locale]["cooper-name"].value}
            text={data.cooperName}
          />
          <CaseInfo
            title={interfaceData[locale]["branch"].value}
            text={data.branch}
          />
          <CaseInfoList
            title={interfaceData[locale]["categories"].value}
            text={data.categories}
          />
          <CaseInfo
            title={interfaceData[locale]["excerpt"].value}
            text={data.excerpt}
          />
          <OdsList odsNumbers={data.asideOds} justIcons={true}/>
        </div>
      </div>
      <div className="w-full left-0 flex gap-2 mt-5 relative">
        {dataOds && (
          <Button
            label={interfaceData[locale]["go-case-button"].value}
            url={`/${locale}/case/${data.id}?currentOds=${dataOds.id}`}
            ods={dataOds?.id}
          />
        )}
      </div>
      {contentScrollHeight > 0 && (
        <div
          ref={trackRef}
          className="absolute bottom-0 -right-8 w-4 m-auto h-[80%] rounded-2xl border border-primary flex flex-col justify-start items-center mt-4"
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
            className="bg-gray-400 h-15 w-3 rounded-2xl cursor-grab my-0.5"
          />
        </div>
      )}
    </div>
  );
};
