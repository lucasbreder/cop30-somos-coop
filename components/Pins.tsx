"use client"

import { statesPosition } from "@/data/statesPosition"
import { Case } from "@/types/Case"
import { faLocationDot, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Pins = ({states, activeCase}:{states:string[],activeCase?:Case}) => {
  console.log(activeCase)
  return (
    <div>
      {
        states.map((key, index) => {
          return (
            <div className="absolute" style={{
              left: `${statesPosition[key as keyof typeof statesPosition].x}%`,
              top: `${statesPosition[key as keyof typeof statesPosition].y}%`
            }} key={index}><FontAwesomeIcon size="5x" icon={activeCase && activeCase.state === key ? faLocationDot : faLocationPin}/></div>
          )
        })
      }
    </div>
  )
}