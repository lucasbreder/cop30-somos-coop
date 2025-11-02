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

      window.addEventListener('mousemove', handleActivity);
      window.addEventListener('keydown', handleActivity);
      window.addEventListener('click', handleActivity);

       return () => {
        clearTimeout(timer)
       };

  }, [showContent]);

  return (
    <div className={`${isHome ? "bg-[url(/bg/bg1.png)]" : "bg-[url(/bg/bg2.png)]"} h-full px-20 overflow-hidden bg-cover bg-no-repeat`}>
        
          <AnimatePresence>
              {showIntro &&<ScreenSaver />}
          </AnimatePresence>
       {!showIntro && <ScreenSaverTransition/>}
      
    {!isHome && 
    <header className=" flex justify-between py-10 px-20 absolute top-0 left-0 z-99">
     <Link href={"/"}> <Image src="/logo/coop-logo1.svg" alt="" width={120} height={120} /></Link>
    </header>
      
    }
    <div className={`w-full h-full flex items-center justify-center z-50 relative`}>
        {!showIntro && 
        <AnimatePresence>
          <motion.div className="w-full h-full" 
            initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}} 
            exit={{opacity: 0}}>
            {children}
            {isHome && <div className="absolute left-0 top-20"><AnimatedLanguageSelector width="100%" height={550} delay={2} /></div>}
            {isHome && <div className="absolute right-0 -bottom-10">
              <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} 
            exit={{opacity: 0}} className="absolute -bottom-4 left-16 w-full h-2/4">
                <Image sizes="80vw" priority className="object-contain" src="/intro/people.png" alt="" fill />
              </motion.div>
              <AnimatedLanguageSelector1 width="100%" height={450} delay={1} />
              </div>}
            {isHome && <LanguageSelector />}
          </motion.div>
        </AnimatePresence>}
    </div>
    {!isHome && <footer className="absolute bottom-0 left-0 px-20 py-10 z-99 w-full flex justify-between">
          <NavItem icon="/icons/back.svg" label="Voltar" />
          <LanguageSelect/>
    </footer>}
    </div>
  )
}