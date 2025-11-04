"use client";

import { cases } from "@/data/cases";
import { ods } from "@/data/ods";
import { Params } from "@/types/Params";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CaseContent } from "./CaseContent";
import { Gallery } from "./Gallery";
import { OdsList } from "./OdsList";
import Link from "next/link";
import { AnimatedCase } from "./AnimatedCase";
import { Title } from "./Title";
import { AnimatedCase2 } from "./AnimatedCase2";

export const Case = ({ hasBakground = true }: { hasBakground?: boolean }) => {
  const params = useParams<Params>();
  const locale = params.lang as keyof typeof cases;

  const dataCase = cases[locale]?.find((cs) => {
    return cs.id === Number(params.id);
  });
  const dataOds = ods[locale]?.find((ods) => {
    return ods.id === dataCase?.mainOds;
  });
  const dataOdsCases = cases[locale]?.filter((cs) => {
    return cs.mainOds === Number(dataCase?.mainOds);
  });
  const odsIds = dataOdsCases?.map((cs) => cs.id).sort((a, b) => a - b);
  const currentCasePosition = dataCase ? odsIds?.indexOf(dataCase.id) : null;
  const nextId =
    typeof currentCasePosition === "number"
      ? odsIds?.[currentCasePosition + 1]
      : undefined;

  const nextCase = cases[locale]?.find((cs) => {
    return cs.id === nextId;
  });
  if (dataCase && odsIds) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="hidden xl:block fhdv:portrait:block w-8/12 -top-30 fhdv:portrait:-top-35 fhdv:portrait:left-165 fhdv:portrait:scale-x-[-1]  xl:-top-48 2xl:-top-40 left-20 absolute">
          <AnimatedCase width="100%" height={300} />
        </div>
        <div className="hidden fhdv:portrait:block absolute -bottom-40 left-20 fhdv:portrait:scale-x-[-1]">
          <AnimatedCase2 width="100%" height={300} />
        </div>
        <div
          className="flex gap-10 fhd:flex-row fhdv:portrait:flex-col lg:mt-8 fhd:mt-0 fhdv:portrait:mt-20 h-8/12 sm:h-8/12 xs:h-9/12 lg:h-8/12 fhdv:portrait:h-[71%] rounded-2xl px-3 py-8 lg:px-10 lg:py-10 relative w-11/12 fhd:w-10/12 top-8 sm:top-0"
          style={{
            backgroundColor: hasBakground
              ? `var(--color-ods${dataCase.mainOds})`
              : "transparent",
            borderColor: !hasBakground
              ? `var(--color-ods${dataCase.mainOds})`
              : "transparent",
            borderWidth: !hasBakground ? 2 : 0,
            borderStyle: "solid",
            color: !hasBakground
              ? `var(--color-ods${dataCase.mainOds}) !important`
              : "white",
          }}
        >
          <div
            className="absolute -top-10  fhdv:portrait:-top-15 left-0"
            style={{
              color: `var(--color-ods${dataCase.mainOds})`,
            }}
          >
            <Title
              className="mb-2 fhd:text-xl fhdv:portrait:text-2xl"
              title={`CASE - ${dataCase.title}`}
              titleLine="left"
              color={`var(--color-ods${dataOds?.id})`}
              tag="h2"
            />
          </div>
          <div className="absolute -top-14 right-0 lg:-right-5 flex gap-2 z-9999">
            <Link href={`/${locale}/ods/${dataCase.mainOds}`}>
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
                  Conheça o próximo case
                </span>
              </Link>
            </div>
          )}
          <div className="fhd:basis-1/2 fhdv:portrait:basis-auto fhdv:portrait:h-220">
            <header className="flex gap-6 items-center">
              {dataOds?.seal && (
                <div className="w-20 h-20 border-4 fhd:w-40 fhd:h-40 fhdv:portrait:w-60 fhdv:portrait:h-60 fhd:border-20 fhdv:portrait:border-20 -ml-3 lg:-ml-10  border-white relative">
                  <Image
                    sizes="80vw"
                    fill
                    src={dataOds.seal}
                    alt={dataCase.title || dataCase.markdownTitle || ""}
                  />
                </div>
              )}
              <div className="max-w-1/2 font-light text-3xl fhd:text-6xl fhdv:portrait:text-6xl text-white">
                {dataCase.title}
              </div>
            </header>
            {dataCase && <CaseContent data={dataCase} />}
            <OdsList
              classNameList="2xl:w-16 2xl:h-16"
              classNameContainer="justify-center"
              showBorder={false}
              odsNumbers={dataCase.asideOds}
              showTitle={true}
            />
          </div>
          <div className="hidden lg:block w-full fhd:h-full basis-1/2 fhdv:portrait:basis-1/2">
            {dataCase.gallery && <Gallery gallery={dataCase.gallery} />}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-full">
      Nada Encontrado
    </div>
  );
};
