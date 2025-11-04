"use client"
import { screenSaverTranstion } from "@/data/screen-saver-transtion"
import { motion } from "motion/react"
import Image from "next/image"

export const ScreenSaverTransition = () => {

  const styleByIndex = (index:number) => {
    switch (index) {
      case 0:
        return 'border-x-50 border-y-30 bg-tertiary'
      case 1:
        return '-my-1! -z-1 border-x-50 border- border-y-30 left-70 bg-secondary'
       case 2:
        return 'border-x-80 border-y-40 bg-quaternary'
      default:
        return 'border-x-60 border-y-30 bg-tertiary'
    }
  }

  return (
   <motion.div
   initial={{left: '-240%'}}
   animate={{left: '100%',  transition: {
                duration: 3,
              }}}
   className="fixed z-9999 h-full">
        <div className="flex flex-col h-full">
          {screenSaverTranstion.groups.map((group, index) => (
             <div className={`flex w-fit h-full gap-2 border-white rounded-full px-40 relative ${styleByIndex(index)}`} key={index}>
              {group.map((image, indexGroup) => (
                <div className="relative min-w-100 fhd:min-w-100 lg:min-w-60 h-full" key={indexGroup}>
                  <Image sizes="80vw" className="object-cover rounded-[50px] py-2" src={image} alt="" fill />
                </div>
              ))}
             </div>
          ))}
        </div>
        </motion.div>
  )
}