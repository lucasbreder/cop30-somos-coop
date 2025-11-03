"use client"
import { motion } from "motion/react"
import { useState, useEffect, useCallback, ReactNode } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { ScreenSaver } from "./ScreenSaver"
import { ScreenSaverTransition } from "./ScreenSaverTransition"
import { AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Params } from "@/types/Params"
import { AnimatedLanguageSelector } from "./AnimatedLanguageSelector"
import { AnimatedLanguageSelector1 } from "./AnimatedLanguageSelector1"
import { NavItem } from "./NavItem"
import { LanguageSelect } from "./LanguageSelect"

export const Intro = ({children, isHome = false} :{children?:ReactNode, isHome?:boolean}) => {

  const [showIntro, setShowIntro] = useState(true)
   const params = useParams<Params>();
   const locale = params.lang;

   const showContent = useCallback((timer:NodeJS.Timeout) => {
      setShowIntro(false);
      clearInterval(timer)
   },[])
   
   

  useEffect(() => {

      let timer:NodeJS.Timeout;

      function startInterval() {  
        timer = setInterval(() => setShowIntro(true), 60000);
      }

     const handleActivity = () => {
        showContent(timer)
        startInterval()
      };

      // window.addEventListener('mousemove', handleActivity);
      window.addEventListener('keydown', handleActivity);
      window.addEventListener('click', handleActivity);

       return () => {
        clearTimeout(timer)
       };

  }, [showContent]);

  return (
    <div className={`${isHome ? "bg-[url(/bg/bg1.png)]" : "bg-[url(/bg/bg2.png)]"} h-full fhd:px-20 fhdv:px-10 overflow-hidden bg-cover bg-no-repeat`}>
        
          <AnimatePresence>
              {showIntro &&<ScreenSaver />}
          </AnimatePresence>
       {!showIntro && <ScreenSaverTransition/>}
      
    {!isHome && 
    <header className=" flex justify-between py-10 px-20 absolute top-0 left-0 w-full">
     <Link href={"/"} className="fhd:m-0 fhdv:mx-auto fhd:w-30 fhdv:w-60 fhd:h-30 fhdv:h-60 relative"> <Image src="/logo/coop-logo1.svg" alt="" fill /></Link>
    </header>
      
    }
    <div className={`w-full h-full flex items-center justify-center z-50 relative`}>
        {!showIntro && 
        <AnimatePresence>
          <motion.div className="w-full h-full" 
            initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}} 
            exit={{opacity: 0}}>
            {children}
            {isHome && <div className="fhd:h-138 fhdv:h-170 absolute left-0 fhdv:top-20 fh:-top-20">
              <AnimatedLanguageSelector width="100%" height="100%" delay={2} />
            </div>}
            {isHome && <div className="absolute right-0 -bottom-10">
              <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} 
            exit={{opacity: 0}} className="absolute z-10 fhd:-bottom-4 fhdv:-bottom-40 fhd:left-30 fhdv:left-45 w-full fhd:h-2/4 fhdv:w-3/4 h-full">
                <Image sizes="80vw" priority className="object-contain" src="/intro/people.png" alt="" fill />
              </motion.div>
              <div className="relative fhd:h-112 fhdv:h-160 fhdv:-top-20">
                <AnimatedLanguageSelector1 width="100%" height="100%" delay={1} />
              </div>
              </div>}
            {isHome && <LanguageSelector />}
          </motion.div>
        </AnimatePresence>}
    </div>
    {!isHome && <footer className="absolute bottom-0 left-0 px-20 fhd:py-10 fhdv:py-20 w-full flex justify-between">
          <NavItem icon="/icons/back.svg" label="Voltar" />
          <LanguageSelect/>
    </footer>}
    </div>
  )
}