"use client"
import { useState, useEffect, useCallback } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { ScreenSaver } from "./ScreenSaver"

export const Intro = () => {

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
        timer = setInterval(() => setShowIntro(true), 10000);
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

  }, []);

  return (
    <div className="bg-blue-950 w-full h-full flex items-center justify-center absolute inset-0 z-50">
        {timer}
         {showIntro &&  
         <ScreenSaver />}
         <LanguageSelector />
    </div>
  )
}