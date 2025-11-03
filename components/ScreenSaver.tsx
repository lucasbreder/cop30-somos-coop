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
    className="bg-[url(/bg/bg1.png)] bg-cover bg-no-repeat w-full h-full flex items-center justify-center absolute inset-0 z-999 overflow-hidden">
       <div className="absolute bottom-40 portrait:bottom-90 left-0 portrait:left-[-15%] w-[25%] portrait:w-[50%]">
        <AnimatedIntro
              width="100%" 
              height={300}
              strokeWidth={8} 
              duration={3}
              delay={3}
              />
          </div>
          <div className="hidden fhd:block">
            <AnimatedIcon url="/icons/shine1.svg" delay={1} bottom={30} right={30} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.5} top={10} left={20} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.8} top={75} left={10} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.3} top={22} right={40} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={50} left={18} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={12} left={50} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={10} left={35} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} bottom={25} right={42} delay={.3} />
          </div>
           <div className="hidden fhd:hidden fhdv:block">
            <AnimatedIcon url="/icons/shine1.svg" delay={1} bottom={30} right={15} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.5} top={32} left={10} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.8} top={55} left={5} />
            <AnimatedIcon url="/icons/shine1.svg" delay={.3} top={36} right={10} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={65} left={18} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={32} left={50} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={75} right={22} delay={.3} />
            <AnimatedIcon url="/icons/plus1.svg" animation="show" width={40} height={40} top={32} right={22} delay={.3} />
          </div>
        <motion.div
          initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} 
          className="h-7/12 w-full absolute top-20 left-0">
            <div className="
            fhd:max-w-2/6
            fhdv:max-w-4/6
            fhd:text-[35px] 
            fhdv:text-[55px]
            text-white
            font-light
            uppercase italic absolute fhdv:top-[100px] fhd:top-[250px] fhdv:right-[10%] fhd:right-[5%]
            ">
              <motion.span 
                initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 3.8, duration: .6}}} 
              className="fhd:-mb-10 fhdv:-mb-15 block">Conheça</motion.span>
              <motion.span className="flex items-center">
                <motion.span 
                  initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 3.5}}} 
                className="fhd:text-[150px] fhdv:text-[220px] font-black block tracking-[-20px] text-quinquenary">60</motion.span> 
                <motion.span 
                initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 4, duration: .6}}}
                className="max-w-1/6 fhd:text-[51px] ml-8 fhdv:ml-12 fhd:leading-14 fhdv:text-[75px] fhdv:leading-22">boas práticas</motion.span>
              </motion.span>
              <motion.span 
                initial={{opacity: 0, translateX: -100}} animate={{opacity: 1, translateX: 0, transition: {delay: 4.4, duration: .6}}}
              className="fhd:text-[42px] fhd:-mt-12 fhdv:-mt-16 block fhd:leading-12 fhdv:text-[65px] fhdv:leading-16">das cooperativas brasileiras</motion.span>
              </div>
              <motion.div
                  initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.5}}} 
              >
              </motion.div>
        </motion.div>
          <div className="absolute top-5 fhdv:top-10 left-5 fhd:w-4/6 fhdv:w-full">
            <AnimatedIntroLine
                width="100%" 
                height={20}
                duration={.5}
                 />
          </div>
           <div className="absolute fhd:bottom-5 fhdv:bottom-10 fhd:right-5 fhdv:-right-20 fhd:w-3/6 fhdv:w-full">
            <AnimatedIntroLine
                width="100%"  
                height={20}
                duration={.5}
                fillIcons="var(--secondary)"
                fillDots="var(--tertiary)"
                 />
          </div>
          
          <div className="relative h-full w-full fhdv:w-9/12 fhdv:-ml-10 fhdv:-mb-300 fhd:mb-0">

           <div className="fhdv:w-full fhd:w-5/12  h-full absolute -bottom-60 portrait:bottom-60 left-[18%] portrait:left-10">
             <AnimatedBrasilPath
              width="100%" 
              height="100%"
              strokeColor="var(--color-quinquenary)" 
              strokeWidth={8} 
              duration={3} />
           </div>
              <div className="fhdv:w-full fhd:w-4/12 relative h-full top-0 portrait:-top-140 left-[25%] portrait:left-10">
                  <Image sizes="80vw" priority className="object-contain" src="/intro/people.png" alt="" fill />
                </div>
          </div>
            
        </motion.div>
  )
}