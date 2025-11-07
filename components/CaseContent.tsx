"use client";
import { CaseInfo } from "./CaseInfo";
import { CaseCompany, Case as CaseData } from "@/types/Case";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";
import { interfaceData } from "@/data/interface";
import { useParams } from "next/navigation";
import { Params } from "@/types/Params";
import QRCode from "react-qr-code";

export const CaseContent = ({ data }: { data: CaseData | CaseCompany }) => {
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof data;
  return (
    <div className="w-full flex relative">
      <div
        className="h-full overflow-y-scroll md:w-11/12 xl:w-[96%] 
        fhdv:portrait:w-[96%] no-scrollbar"
      >
        <div className="overflow-hidden h-full">
          <CaseInfo
            title={interfaceData[locale]["context"].value}
            text={data.context}
          />
          {data.objectives && (
            <CaseInfo
              title={interfaceData[locale]["objectives"].value}
              text={data.objectives}
            />
          )}
          {data.development && (
            <CaseInfo
              title={interfaceData[locale]["development"].value}
              text={data.development}
            />
          )}
          {data.result && (
            <CaseInfo
              title={interfaceData[locale]["result"].value}
              text={data.result}
            />
          )}
           <div className="flex gap-5 items-center">
            <div className="border-r pr-6 border-white">
              <QRCode size={70} bgColor="transparent" fgColor="currentColor" value="https://somoscooperativismo.coop.br/cop30/cases" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-light leading-5 flex-1">
                {interfaceData[locale]['more'].value}
              <span className="font-bold block">somoscooperativismo.coop.br/cop30/cases</span></div>
            </div>
        </div>
        </div>
        <div className="lg:hidden">
          {data.gallery && <Gallery gallery={data.gallery} />}
        </div>
        <div className="lg:hidden">
          {"mainOds" in data && "asideOds" in data && (
            <OdsList
              classNameList="2xl:w-16 2xl:h-16"
              classNameContainer="justify-center"
              showBorder={false}
              odsNumbers={[...data.asideOds, data.mainOds]}
              showTitle={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};
