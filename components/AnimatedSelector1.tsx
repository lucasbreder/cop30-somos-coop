import { motion, Transition } from 'motion/react';

export const AnimatedSelector1 = ({ width, height, strokeWidth = 5, duration = 2, strokeColor = "var(--secondary)", delay = 0}: 
    {width:number | string, height:number | string, strokeWidth?: number, strokeColor?:string, duration?: number, delay?:number}) => {


    const transition:Transition = {
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
          delay: delay || .5 * 2
        },
        pathLength: {
          duration: duration, 
          ease: "easeInOut",
          delay: delay || .5 * 2
        }
    }
  
  return (
  <svg width={width} height={height} viewBox="0 0 205.93 560.42">
    <motion.path stroke="var(--tertiary)" strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M1.94,420.38v-140.38c0-39.86,32.31-72.18,72.18-72.18h60.38c15.37,0,27.82-12.46,27.82-27.82V1.94"/>
    <motion.path stroke="var(--primary)" strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M203.99,1.94v179.59c0,37.54-30.43,67.98-67.98,67.98h-61.42c-17.11,0-30.99,13.87-30.99,30.99v233.79"/>
    <motion.path stroke={strokeColor} strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M183.96,69.6v106.95c0,29.36-23.81,53.17-53.17,53.17h-55.9c-28.82,0-52.19,23.37-52.19,52.19v62.13"/>
    <motion.path stroke="var(--primary)" strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transitionIcon} d="M27.89,542.58c0-8.78,15.9-28.12,15.9-28.12,0,0,15.9,19.34,15.9,28.12s-7.12,15.9-15.9,15.9-15.9-7.12-15.9-15.9Z"/>
  </svg>
    
  );
};