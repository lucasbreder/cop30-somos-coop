import { motion, Transition } from 'motion/react';

export const AnimatedSelector = ({ width, height, strokeWidth = 5, duration = 2, strokeColor = "var(--secondary)", delay = 0}: 
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
  
  return (
  <svg width={width} height={height} viewBox="0 0 412.82 235.57">
    <motion.path stroke="var(--tertiary)" strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M369.71,189.08v-110.85c0-19.4-15.72-35.12-35.12-35.12H1.5"/>
    <motion.path stroke={strokeColor} strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M1.5,1.5h337.03c40.13,0,72.79,32.65,72.79,72.79v159.78"/>
    <motion.path stroke="var(--primary)" strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M390.44,157.92v-83.84c0-28.21-22.87-51.08-51.08-51.08h-183.67"/>
    <motion.path stroke={strokeColor} strokeWidth={strokeWidth} fill="transparent" initial={initial} animate={animate} transition={transition} d="M129.09,7.13c8.76,0,28.08,15.87,28.08,15.87,0,0-19.31,15.87-28.08,15.87s-15.87-7.1-15.87-15.87,7.1-15.87,15.87-15.87Z"/>
  </svg>
    
  );
};
