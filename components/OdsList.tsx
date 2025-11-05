"use client";
import { useParams } from "next/navigation";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import Link from "next/link";

export const OdsList = ({
  odsNumbers,
  showTitle = false,
  showBorder = true,
  classNameList,
  classNameContainer,
}: {
  odsNumbers: number[];
  showTitle?: boolean;
  showBorder?: boolean;
  classNameList?: string;
  classNameContainer?: string;
}) => {
  const params = useParams<Params>();
  const locale = (params.lang as keyof typeof ods) || "pt";

  return (
    <div
      className={`flex flex-col fhdv:portrait:justify-end items-center md:flex-row fhdv:portrait:flex-row-reverse gap-2 lg:gap-4 mt-5 text-white ${classNameContainer}`}
    >
      {showTitle && (
        <div className="hidden md:block text-sm pr-4 fhdv:portrait:pl-4 fhdv:portrait:ml-3 border-r fhdv:portrait:border-r-0 fhdv:portrait:border-l border-white py-4 text-right">
          ODS relacionadas a esse case
        </div>
      )}
      <div className="flex flex-wrap gap-2 lg:gap-4">
        {odsNumbers.map((o, index) => {
          const dataOds = ods[locale]?.find((ods) => {
            return ods.id === o;
          });
          return (
            <div
              className={`w-11 fhdv:portrait:w-16 h-11 fhdv:portrait:h-16 relative ${showBorder ? "border-4" : ""}  border-white ${classNameList}`}
              key={index}
            >
              {dataOds?.seal && (
                <Link href={`/${locale}/ods/${dataOds.id}`}>
                  <Image
                    sizes="80vw"
                    src={dataOds.seal}
                    alt={dataOds.name}
                    fill
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
