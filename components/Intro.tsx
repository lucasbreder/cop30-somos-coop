"use client";
import { motion } from "motion/react";
import { useState, useEffect, useCallback, ReactNode } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ScreenSaver } from "./ScreenSaver";
import { ScreenSaverTransition } from "./ScreenSaverTransition";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedLanguageSelector } from "./AnimatedLanguageSelector";
import { AnimatedLanguageSelector1 } from "./AnimatedLanguageSelector1";
import { NavItem } from "./NavItem";
import { LanguageSelect } from "./LanguageSelect";
import { interfaceData } from "@/data/interface";
import { useParams, usePathname } from "next/navigation";
import { Params } from "@/types/Params";
import { CreditCompany } from "@/types/CreditCompany";
import { AnimatedLanguageSelector2 } from "./AnimatedLanguageSelector2";
import { AnimatedLanguageSelector3 } from "./AnimatedLanguageSelector3";

export const Intro = ({
  children,
  creditCompany,
  isHome = false,
}: {
  creditCompany?: CreditCompany;
  children?: ReactNode;
  isHome?: boolean;
}) => {
  const [showIntro, setShowIntro] = useState(true);
  const params = useParams<Params>();
  const locale = (params.lang as string) || "pt";
  const pathname = usePathname();

  const showContent = useCallback((timer: NodeJS.Timeout) => {
    setShowIntro(false);
    clearInterval(timer);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    function startInterval() {
      timer = setInterval(() => setShowIntro(true), 120000);
    }

    const handleActivity = () => {
      showContent(timer);
      startInterval();
    };

    // window.addEventListener('mousemove', handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    return () => {
      clearTimeout(timer);
    };
  }, [showContent]);

  return (
    <div
      style={{
        backgroundColor: creditCompany
          ? `var(--${creditCompany}-primary)`
          : "transparent",
      }}
      className={`
      w-full
      h-full
      overflow-hidden 
     `}
    >
      <div
        style={{
          width: `calc(100% - ${!isHome && pathname !== `/credito/${creditCompany}` ? "40px" : "0px"})`,
          height: `calc(100% - ${!isHome && pathname !== `/credito/${creditCompany}` ? "24px" : "0px"})`,
        }}
        className={`
          ${!isHome && pathname !== `/credito/${creditCompany}` ? "mx-5 my-3 rounded-3xl" : ""}
          px-3
          lg:px-20 
          fhd:px-20
           bg-cover
            bg-no-repeat
          fhdv:portrait:px-10  ${
            isHome || pathname === `/credito/${creditCompany}`
              ? "bg-[url(/bg/bg1.png)]"
              : "bg-[url(/bg/bg2.png)]"
          } `}
      >
        <AnimatePresence>
          {showIntro && !creditCompany && (
            <ScreenSaver
              colorMap1="var(--secondary)"
              colorMap2="var(--quaternary)"
              colorMap3="var(--tertiary)"
              colorCurve1="var(--tertiary)"
              colorCurve2="var(--quaternary)"
              colorCurve3="var(--secondary)"
              colorBg="var(--primary)"
            />
          )}
          {showIntro && creditCompany === "cresol" && (
            <ScreenSaver
              colorBg="var(--cresol-primary)"
              colorMap1="var(--quaternary)"
              colorMap2="var(--secondary)"
              colorMap3="var(--tertiary)"
              colorCurve1="var(--tertiary)"
              colorCurve2="var(--quaternary)"
              colorCurve3="var(--secondary)"
              colorLine1="var(--tertiary)"
              colorLine2="var(--secondary)"
              image="/intro/intro-cresol.png"
              icon1="/icons/shine2.svg"
              icon2="/icons/plus3.svg"
              title="cresol"
            />
          )}
          {showIntro && creditCompany === "sicoob" && (
            <ScreenSaver
              colorBg="var(--sicoob-primary)"
              colorMap1="var(--primary)"
              colorMap2="var(--septinary)"
              colorMap3="var(--tertiary)"
              colorCurve1="var(--tertiary)"
              colorCurve2="var(--septinary)"
              colorCurve3="var(--primary)"
              colorLine1="var(--tertiary)"
              colorLine2="var(--quaternary)"
              image="/intro/intro-sicoob.png"
              icon1="/icons/shine3.svg"
              icon2="/icons/plus4.svg"
              title="sicoob"
            />
          )}
          {showIntro && creditCompany === "sicredi" && (
            <ScreenSaver
              colorBg="var(--sicredi-primary)"
              colorMap1="var(--primary)"
              colorMap2="var(--quaternary)"
              colorMap3="var(--septinary)"
              colorCurve1="var(--quaternary)"
              colorCurve2="var(--septinary)"
              colorCurve3="var(--primary)"
              colorLine1="var(--quaternary)"
              colorLine2="var(--primary)"
              image="/intro/intro-sicredi.png"
              icon1="/icons/shine3.svg"
              icon2="/icons/plus4.svg"
              title="sicredi"
            />
          )}
        </AnimatePresence>
        {!showIntro && <ScreenSaverTransition />}

        {!isHome && !creditCompany && (
          <header className="flex justify-between px-10 lg:px-30 absolute top-0 left-0 w-full">
            <Link
              href={"/"}
              className="fhd:m-0 fhdv:portrait:mx-auto w-30 h-30 fhd:w-30 fhdv:portrait:w-60 fhd:h-30 fhdv:portrait:h-60 relative z-99"
            >
              {" "}
              <Image src="/logo/coop-logo1.svg" alt="" fill />
            </Link>
          </header>
        )}
        <div
          className={`w-full h-full flex items-center justify-center z-50 relative`}
        >
          {!showIntro && (
            <AnimatePresence>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 3 } }}
                exit={{ opacity: 0 }}
              >
                <div
                  style={{
                    height:
                      !isHome && pathname !== `/credito/${creditCompany}`
                        ? "calc(100% - 100px)"
                        : "auto",
                  }}
                >
                  {children}
                </div>
                {(isHome || pathname === `/credito/${creditCompany}`) && (
                  <div className="absolute h-100 left-0 fhd:h-138 fhdv:portrait:h-170 fhdv:portrait:top-20 -top-40 xl:top-10 xl:left-14 fhd:left-0">
                    {!creditCompany ? (
                      <AnimatedLanguageSelector
                        width="100%"
                        height="100%"
                        delay={2}
                      />
                    ) : (
                      <AnimatedLanguageSelector2
                        width="100%"
                        height="100%"
                        delay={2}
                      />
                    )}
                  </div>
                )}
                {(isHome || pathname === `/credito/${creditCompany}`) && (
                  <div className="absolute right-10 fhd:-bottom-10 -bottom-25">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 2 } }}
                      exit={{ opacity: 0 }}
                      className="absolute z-10 
                      fhd:-bottom-4 
                      fhdv:portrait:-bottom-15 
                      left-30 bottom-5 xl:left-20 fhdv:portrait:left-45 w-2/3 fhd:w-full fhd:h-3/4 xl:w-3/4 fhdv:portrait:w-3/4 h-full"
                    >
                      <Image
                        sizes="80vw"
                        priority
                        className="object-contain"
                        src={
                          creditCompany
                            ? `/intro/intro-${creditCompany}.png`
                            : "/intro/people.png"
                        }
                        alt=""
                        fill
                      />
                    </motion.div>
                    <div className="relative h-80 fhd:h-112 fhdv:portrait:h-160 fhdv:portrait:-top-40 xl:-top-40">
                      {!creditCompany ? (
                        <AnimatedLanguageSelector1
                          width="100%"
                          height="100%"
                          delay={1}
                        />
                      ) : (
                        <AnimatedLanguageSelector3
                          width="100%"
                          height="100%"
                          delay={1}
                        />
                      )}
                    </div>
                  </div>
                )}
                {isHome && !creditCompany && <LanguageSelector />}
                {creditCompany && pathname === `/credito/${creditCompany}` && (
                  <LanguageSelector creditCompany={creditCompany} />
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        {!isHome && pathname !== `/credito/${creditCompany}` && (
          <footer
            className={`absolute bottom-0 ${creditCompany && "bottom-4"} left-0 px-10 py-5 fhd:py-6 fhdv:portrait:px-15 fhdv:portrait:py-10 w-full flex justify-between items-end`}
          >
            <NavItem
              icon="/icons/back.svg"
              label={interfaceData[locale]["back-button"].value}
            />

            {!isHome &&
              pathname !== `/credito/${creditCompany}` &&
              creditCompany && (
                <Link
                  href={"/"}
                  className="w-22 h-15 md:w-35 relative  fhdv:portrait:h-30 fhdv:portrait:w-55"
                >
                  <Image src="/logo/coop-logo1.svg" alt="" fill />
                </Link>
              )}
            <LanguageSelect />
          </footer>
        )}
      </div>
    </div>
  );
};
