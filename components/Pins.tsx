"use client"
import { motion } from "motion/react"
import { statesPosition } from "@/data/statesPosition"
import { Case } from "@/types/Case"
import { faLocationDot, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MapCaseProps } from "@/types/MapCaseProps"

export const Pins = ({activeCase, currentCases, setActiveCase}:MapCaseProps) => {

   const states = currentCases?.map((item) => (item.state))

  return (
    <div>
      {
        states && states.map((key, index) => {
          return (
            <motion.div
            onClick={() => {
            const cs = currentCases?.find((cs) => cs.state === key)
              if(cs) setActiveCase(cs)
            }}
            initial={{
              top: `-100%`,
              left: `${statesPosition[key as keyof typeof statesPosition].x}%`
            }}

            animate={{
              top: `${statesPosition[key as keyof typeof statesPosition].y}%`,
              left: `${statesPosition[key as keyof typeof statesPosition].x}%`
            }}

            transition={{
              ease: [0, 0.71, 0.2, 1.01],
              duration: 1.2,
              delay: index * 0.5,
            }}
            
            className="absolute :hover-translateY[10px] cursor-pointer" key={index}>
              <FontAwesomeIcon size="5x" icon={activeCase && activeCase.state === key ? faLocationDot : faLocationPin}/>
            </motion.div>
          )
        })
      }
    </div>
  )
}