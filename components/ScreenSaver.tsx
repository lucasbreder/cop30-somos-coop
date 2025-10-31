"use client"
import { motion } from "motion/react"

export const ScreenSaver = () => {

  return (
   <motion.div
    initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} 
    className="bg-[url(/bg/bg1.png)] w-full h-full flex items-center justify-center absolute inset-0 z-50">
          <motion.div
            className="bg-white h-20 w-20 rounded-full"
            animate={{
              scale: [2, 1, 2],
              transition: {
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity
              }
            }}
          />
        </motion.div>
  )
}