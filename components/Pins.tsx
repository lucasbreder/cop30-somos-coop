"use client";
import { motion } from "motion/react";
import { statesPosition } from "@/data/statesPosition";
import { MapCaseProps } from "@/types/MapCaseProps";
import Pin from "./Pin";
import PinActive from "./PinActive";

export const Pins = ({
  activeCase,
  currentCases,
  setActiveCase,
  dataOds,
}: MapCaseProps) => {
  const states = currentCases?.map((item) => item.state);

  return (
    <div>
      {states &&
        states.map((key, index) => {
          return (
            <motion.div
              onClick={() => {
                const cs = currentCases?.find((cs) => cs.state === key);
                if (cs) setActiveCase(cs);
              }}
              initial={{
                opacity: 0,
                top: `-100%`,
                left: `${statesPosition[key as keyof typeof statesPosition].x}%`,
              }}
              animate={{
                opacity: 1,
                top: `${statesPosition[key as keyof typeof statesPosition].y}%`,
                left: `${statesPosition[key as keyof typeof statesPosition].x}%`,
              }}
              transition={{
                ease: [0, 0.71, 0.2, 1.01],
                duration: 1.2,
              }}
              className="absolute :hover-translateY[10px] cursor-pointer"
              key={index}
            >
              {currentCases && activeCase?.state !== key && (
                <Pin fillColor={`var(--color-ods${dataOds?.id})`} />
              )}
              {currentCases && activeCase?.state === key && (
                <PinActive fillColor={`var(--color-ods${dataOds?.id})`} />
              )}
            </motion.div>
          );
        })}
    </div>
  );
};
