"use client"
import { motion } from "motion/react"
import { useState, useEffect, useCallback, ReactNode } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { ScreenSaver } from "./ScreenSaver"
import { ScreenSaverTranstion } from "./ScreenSaverTransition"
import { AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Params } from "@/types/Params"

export const Intro = ({children, isHome = false} :{children?:ReactNode, isHome?:boolean}) => {

  const [showIntro, setShowIntro] = useState(true)
  const [timer, setTimer] = useState(0)
   const params = useParams<Params>();
   const locale = params.lang;

   const showContent = useCallback((timer:NodeJS.Timeout) => {
      setShowIntro(false);
      setTimer(0);
      clearInterval(timer)
   },[])
   
   

  useEffect(() => {

      let timer:NodeJS.Timeout;

      function startInterval() {  
        timer = setInterval(() => setShowIntro(true), 60000);
      }

      const countdown = setInterval(() => {
        setTimer(prev => prev+1);
      },1000)


     const handleActivity = () => {
        showContent(timer)
        startInterval()
      };

      window.addEventListener('mousemove', handleActivity);
      window.addEventListener('keydown', handleActivity);
      window.addEventListener('click', handleActivity);

       return () => {
        clearTimeout(timer)
        clearTimeout(countdown)
       };

  }, [showContent]);

  return (
    <div className={`${isHome ? "bg-[url(/bg/bg1.png)]" : "bg-[url(/bg/bg2.png)]"} h-full px-20 overflow-hidden`}>
       {!showIntro && <ScreenSaverTranstion/>}
        {showIntro &&  
          <AnimatePresence>
            <ScreenSaver />
          </AnimatePresence>}
    {!isHome && 
    <header className="py-10">
     <Link href={locale ? "/"+locale : "/"}> <Image src="/logo/coop-logo1.svg" alt="" width={120} height={120} /></Link>
    
    </header>
      
    }
    <div className={`w-full h-full flex items-center justify-center z-50 relative`}>
        {!showIntro && 
        <AnimatePresence>
          <motion.div className="w-full h-full" 
            initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}} 
            exit={{opacity: 0}}>
            {children}
            {isHome && <LanguageSelector />}
          </motion.div>
        </AnimatePresence>}
        <AnimatePresence>
          <motion.div className="absolute bottom-7 left-1/2" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} exit={{opacity: 0}}>{timer}</motion.div>
        </AnimatePresence>
    </div>
        </div>
  )
}