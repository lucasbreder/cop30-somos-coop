"use client";
import { CaseInfo } from "./CaseInfo";
import { CaseCompany, Case as CaseData } from "@/types/Case";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";
import { interfaceData } from "@/data/interface";
import { useParams } from "next/navigation";
import { Params } from "@/types/Params";
import QRCode from "react-qr-code";
import { CaseQRCode } from "./CaseQRCode";

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
          <CaseQRCode />
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
        <div className="lg:hidden">
          {data.gallery && <Gallery gallery={data.gallery} />}
        </div>
       
      </div>
    </div>
  );
};
