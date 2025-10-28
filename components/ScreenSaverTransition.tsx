"use client"
import { motion } from "motion/react"

export const ScreenSaverTranstion = () => {

  return (
   <motion.div
   initial={{left: '-100%'}}
   animate={{left: '100%',  transition: {
                duration: 2,
              }}}
   className="bg-slate-400 fixed w-full h-full z-10">
        </motion.div>
  )
}