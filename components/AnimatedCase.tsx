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
    <motion.path
    initial={initial}
        animate={animate}
        transition={transition}
         d="m 98.36,1.82 h 219.91 c 37.42,0 67.75,30.33 67.75,67.75 v 194.29 c 0,14.42 11.69,26.12 26.12,26.12 h 167.14"
         id="path383" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="M 579.27,329.09 H 410.7 c -35.24,0 -63.81,-28.57 -63.81,-63.81 V 70.02 c 0,-16.06 -13.02,-29.09 -29.09,-29.09 H 98.36"
         id="path385" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="M 515.76,310.28 H 415.37 c -27.56,0 -49.91,-22.34 -49.91,-49.91 V 70.3 c 0,-27.05 -21.93,-48.99 -48.99,-48.99 h -58.31"
         id="path387" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="m 85.66,41.23 c 0,0 -38.73,-0.77 -50.96,25.69 -8.4,18.17 -22.63,15.72 -27.33,11.66 0,0 -7.85,-4.96 -4.88,-14.85 0.74,-2.47 2.04,-4.76 3.95,-6.5 2.59,-2.36 7.01,-4.48 13.07,-0.59"
         id="path389" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="m 76.5,57.6 c 0,0 -18.43,0.76 -28.97,16.89 0,0 -5.86,13.34 -14.47,15.77"
         id="path391" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="m 593.99,289.88 c 0,0 54.92,0.85 54.29,-39.43 -0.72,-46.16 -40.57,-37.24 -40.57,-37.24 0,0 -32.27,4.03 -31.68,37.59 0.62,34.95 35.16,20.69 36.57,1.09"
         id="path393" />
      <motion.path
      initial={initial}
        animate={animate}
        transition={transition}
         d="m 605.88,266.33 c 0,0 -13.34,-17.63 1.45,-27.67 l 14.8,-10.05 c 0,0 6.46,14.14 2.08,25.56 -4.37,11.42 -10.85,11.29 -18.33,12.16 z"
          />
  </svg>
  );
};
