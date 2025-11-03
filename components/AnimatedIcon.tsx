import { VariantLabels } from 'motion';
import { motion, TargetAndTransition } from 'motion/react';
import Image from 'next/image';

export const AnimatedIcon = ({ url, width = 70, height = 70, duration = 2, animation = 'blink', delay, left, top, bottom, right}: 
    {url: string, duration?: number, 
      color?:string, 
      width?:number, 
      height?:number, 
      animation?: 'blink' | 'rotate' | 'show', 
      delay?:number, 
      left?:number,
      top?: number,
      right?:number, 
      bottom?: number}) => {

  const getInitialAnimation = ((anim:'blink' | 'rotate' | 'show'):boolean | TargetAndTransition | VariantLabels | undefined => {
    switch (anim) {
      case 'blink':
        return {
        opacity: 1,
        transition: {
          delay: delay || 0,
          duration: duration || 1.3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
          }
        }
      case 'show':
        return {opacity: 1,  
          transition: {
            delay: delay || 0,
          }}
      case 'rotate':
        return {
        opacity: 1,
        rotate: '360deg',
        transition: {
          delay: delay || 0,
          opacity: { 
            duration: 1,
            ease: "easeOut" 
          },
          rotate: {
            delay: 1,
            duration: duration || 2,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }
        }
        }
    }
  
    })

  return (
    <motion.div
    className='absolute'
    style={{
      position: 'absolute',
      top: top ? `${top}%` : "auto",
      left: left ? `${left}%` : "auto",
      right: right ? `${right}%` : "auto",
      bottom: bottom ? `${bottom}%` : "auto",
    }}
      initial={{opacity: 0}}
      animate={getInitialAnimation(animation)}
      exit={{
        opacity: 0
      }}
    >
      <Image src={url} alt='' width={width} height={height} />
    </motion.div>
  );
};