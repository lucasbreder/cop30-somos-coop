import { motion, Transition } from 'motion/react';

export const AnimatedLanguageSelector = ({ width, height, strokeWidth = 5, duration = 2, strokeColor = "var(--secondary)", delay = 0}: 
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
              delay: delay * 2
            },
            pathLength: {
              duration: duration, 
              ease: "easeInOut",
              delay: delay * 2
            }
        }
  
  return (
  <svg width={width} height={height} viewBox="0 0 191.05 608.27">
    <g>
      <motion.path strokeWidth={strokeWidth} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="var(--tertiary)" fill='transparent' d="M189.35,516.24v-205.76c0-35.01-28.38-63.39-63.39-63.39h-63.22c-13.5,0-24.44-10.94-24.44-24.44V66.28"/>
      <motion.path strokeWidth={strokeWidth} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="var(--quaternary)" fill='transparent' d="M1.7,66.28v157.73c0,32.97,26.73,59.7,59.7,59.7h64.13c15.03,0,27.22,12.18,27.22,27.21v205.33"/>
      <motion.path strokeWidth={strokeWidth} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke={strokeColor} fill='transparent' d="M19.3,125.7v93.93c0,25.79,20.91,46.7,46.7,46.7h59.28c25.31,0,45.83,20.52,45.83,45.83v54.56"/>
      <g>
        <motion.path strokeWidth={4} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transitionIcon}
        
        stroke="var(--quaternary)" fill='transparent' d="M152.47,528.13s.72,36.24-24.04,47.68c-17,7.86-14.71,21.18-10.91,25.57,0,0,4.64,7.34,13.9,4.56,2.31-.7,4.46-1.91,6.08-3.69,2.21-2.43,4.2-6.56.56-12.23"/>
        <motion.path strokeWidth={4} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transitionIcon} stroke="var(--quaternary)" fill='transparent' d="M137.15,536.69s-.71,17.24-15.81,27.11c0,0-12.48,5.48-14.76,13.54"/>
      </g>
      <g>
        <motion.path strokeWidth={4} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transitionIcon}
        stroke="var(--tertiary)" fill='transparent' d="M38.39,52.5S37.6,1.12,75.28,1.71c43.19.67,34.84,37.96,34.84,37.96,0,0-3.77,30.19-35.18,29.64-32.7-.58-19.35-32.9-1.02-34.22"/>
        <motion.path strokeWidth={4} strokeLinecap="round"
        initial={initial}
        animate={animate}
        transition={transitionIcon}
        stroke="var(--tertiary)" fill='transparent' d="M60.43,41.38s16.49,12.48,25.89-1.36l9.4-13.84s-13.23-6.04-23.91-1.95c-10.68,4.09-10.56,10.15-11.38,17.15Z"/>
      </g>
    </g>
  </svg>
    
  );
};
