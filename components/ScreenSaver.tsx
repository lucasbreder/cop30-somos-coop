"use client"
import { motion } from "motion/react"
import Image from "next/image";
import { AnimatedIcon } from "./AnimatedIcon";
import { AnimatedBrasilPath } from "./AnimatedBrasilPath";
import { AnimatedIntro } from "./AnimatedIntro";
import { AnimatedIntroLine } from "./AnimatedIntroLine";

export const ScreenSaver = () => {

  return (
   <motion.div
    initial={{opacity: 1}}
    exit={{opacity: 0, transition: {delay: .5, duration: .4}}}
    className="bg-[url(/bg/bg1.png)] bg-cover bg-no-repeat w-full h-full flex items-center justify-center absolute inset-0 z-999 overflow-hidden border">
          <div className="absolute top-5 left-5 w-4/6">
            <AnimatedIntroLine
                width="100%" 
                height={20}
                duration={.5}
                 />
          </div>
           <div className="absolute bottom-5 right-5 w-3/6">
            <AnimatedIntroLine
                width="100%"  
                height={20}
                duration={.5}
                fillIcons="var(--secondary)"
                fillDots="var(--tertiary)"
                 />
          </div>
          <div className="relative h-full -mb-100 -ml-100">
            <AnimatedBrasilPath
              width="100%" 
              height="80%"
              strokeColor="var(--color-quinquenary)" 
              strokeWidth={8} 
              duration={3} />
              <div className="absolute bottom-60 left-[-70%] w-10/12">
                <AnimatedIntro
                width="100%" 
                height={400}
                strokeWidth={8} 
                duration={3}
                delay={3}
                />
              </div>
            
             
            <motion.div
               initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} 
              className="h-7/12 w-full absolute -top-10 left-13">
                <div>
                  <Image sizes="80vw" priority className="object-contain" src="/intro/people.png" alt="" fill />
                </div>
                <div className="max-w-5/6 text-[35px] text-white font-light uppercase italic absolute top-[150px] -right-[85%]">
                  <motion.span 
                   initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 3.8, duration: .6}}} 
                  className="-mb-10 block">Conheça</motion.span>
                  <motion.span className="flex items-center">
                    <motion.span 
                     initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 3.5}}} 
                    className="text-[150px] font-black block tracking-[-20px] text-quinquenary">60</motion.span> 
                    <motion.span 
                    initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 4, duration: .6}}}
                    className="max-w-1/6 text-[51px] ml-8 leading-14">boas práticas</motion.span>
                  </motion.span>
                  <motion.span 
                   initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 4.4, duration: .6}}}
                  className="text-[42px] -mt-12 block leading-12">das cooperativas brasileiras</motion.span>
                  </div>
                  <motion.div
                     initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.5}}} 
                  >
                    <AnimatedIcon url="/icons/shine1.svg" delay={1} left={-20} />
                    <AnimatedIcon url="/icons/shine1.svg" delay={.5} top={38} left={-45} />
                    <AnimatedIcon url="/icons/shine1.svg" delay={.8} top={10} right={-1} />
                    <AnimatedIcon url="/icons/shine1.svg" delay={.3} bottom={-5} right={-10} />
                    <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={-5} left={40} delay={.3} />
                    <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={1} right={10} delay={.3} />
                    <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} bottom={20} left={-25} delay={.3} />
                    <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} bottom={-20} right={10} delay={.3} />
                  </motion.div>
            </motion.div>
          </div>
            
        </motion.div>
  )
}