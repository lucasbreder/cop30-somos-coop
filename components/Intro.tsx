"use client"
import { motion } from "motion/react"
import { useState, useEffect, useCallback, ReactNode } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { ScreenSaver } from "./ScreenSaver"
import { ScreenSaverTranstion } from "./ScreenSaverTransition"
import { AnimatePresence } from "motion/react"
import Image from "next/image"

export const Intro = ({children, isHome = false} :{children?:ReactNode, isHome?:boolean}) => {

  const [showIntro, setShowIntro] = useState(true)
  const [timer, setTimer] = useState(0)

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
    <div className={isHome ? "bg-[url(/bg/bg1.png)]" : "bg-[url(/bg/bg2.png)]"}>
       {!showIntro && <ScreenSaverTranstion/>}
    {!isHome && 
    <div className="px-20 pt-10">
      <Image src="/logo/coop-logo1.svg" alt="" width={120} height={120} />
    
    </div>
      
    }
    <div className={`w-full h-full flex items-center justify-center z-50 relative`}>
        {showIntro &&  
          <AnimatePresence>
            <ScreenSaver />
          </AnimatePresence>}
       
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