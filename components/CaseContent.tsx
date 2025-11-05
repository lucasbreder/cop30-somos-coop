"use client";
import { CaseInfo } from "./CaseInfo";
import { Case as CaseData } from "@/types/Case";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";

export const CaseContent = ({ data }: { data: CaseData }) => {
  return (
    <div className="w-full flex relative">
      <div
        className="h-full overflow-y-scroll md:w-11/12 xl:w-[96%] 
        fhdv:portrait:w-[96%] pb-10 p-5 fhdv:portrait:p-5 rounded-2xl no-scrollbar"
      >
        <div className="overflow-hidden h-full">
          <CaseInfo title="Contexto" text={data.context} />
          {data.objectives && (
            <CaseInfo title="Objetivos" text={data.objectives} />
          )}
          {data.development && (
            <CaseInfo title="Desenvolvimento" text={data.development} />
          )}
          {data.result && <CaseInfo title="Resultado" text={data.result} />}
        </div>
        <div className="lg:hidden">
          {data.gallery && <Gallery gallery={data.gallery} />}
        </div>
        <div className="lg:hidden">
          <OdsList
            classNameList="2xl:w-16 2xl:h-16"
            classNameContainer="justify-center"
            showBorder={false}
            odsNumbers={data.asideOds}
            showTitle={true}
          />
        </div>
      </div>
    </div>
  );
};
