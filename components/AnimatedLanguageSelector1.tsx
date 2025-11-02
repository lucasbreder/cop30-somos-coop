import { motion, Transition } from 'motion/react';

export const AnimatedLanguageSelector1 = ({ delay = 0, width, height, strokeWidth = 5, duration = 2, strokeColor = "var(--secondary)"}: 
    {width:number | string, height:number | string, strokeWidth?: number, strokeColor?:string, duration?: number, delay?: number}) => {

      const transition:Transition = {
          duration: duration, 
          ease: "easeInOut",
            opacity: { 
              duration: 1,
              ease: "easeOut",
              delay: delay
            },
            pathLength: {
              duration: duration, 
              ease: "easeInOut",
              delay: delay
            }
      }
      const initial = {
        pathLength: 0,
        opacity: 0
      }
      const animate = {
        pathLength: 1,
        opacity: 1
      }
      const transitionIcon:Transition = {
          ease: "easeInOut",
            opacity: { 
              duration: 1,
              ease: "easeOut",
              delay: delay * 2
            },
            pathLength: {
              duration: duration, 
              ease: "easeInOut",
              delay: delay * 2
            }
      }
  
  return (
  <svg width={width} height={height} viewBox="0 0 435.27 478.46">
   <g>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke="var(--tertiary)" strokeWidth={strokeWidth} fill="transparent" d="M271.15,410.16v-78.08c0-16.64-13.54-30.18-30.18-30.18H86.48"/>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke={strokeColor} strokeWidth={strokeWidth} fill="transparent" d="M143.16,261.63h97.81c38.85,0,70.46,31.61,70.46,70.46v78.08"/>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke="var(--tertiary)" strokeWidth={strokeWidth} fill="transparent" d="M271.15,468.37v-88.63c0-27.46,22.26-49.73,49.73-49.73h27.36c14.85,0,26.89-12.04,26.89-26.89v-25"/>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke={strokeColor} strokeWidth={strokeWidth} fill="transparent" d="M415.41,96.77v207.81c0,36.28-29.41,65.7-65.7,65.7h-23.46c-8.18,0-14.82,6.63-14.82,14.82v91.48"/>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke="var(--quaternary)" strokeWidth={strokeWidth} fill="transparent" d="M291.22,410.16v-76.61c0-28.85-23.38-52.23-52.23-52.23H1.88"/>
      <motion.path transition={transition} initial={initial} animate={animate} strokeLinecap="round" stroke="var(--quaternary)" strokeWidth={strokeWidth} fill="transparent" d="M396.04,190.92v108.86c0,28.38-23.01,51.39-51.39,51.39h-26.02c-15.14,0-27.41,12.27-27.41,27.41v58.99"/>
      <motion.polygon transition={transitionIcon} initial={initial} animate={animate} fill="transparent" stroke={strokeColor} strokeWidth={4} points="411.84 1.88 410.93 33.42 433.39 25.83 413.62 79.11 413.04 45.31 390.99 53.18 411.84 1.88"/>
    </g>
  </svg>
    
  );
};
