import { motion } from 'motion/react';

export const AnimatedPath = ({ pathD, duration = 2, width, height, viewBox, strokeColor = "#4FA4F2", strokeWidth = 3, reverse = false }: 
    {pathD: string, duration?: number, width:number | string, height:number | string, viewBox: string, strokeColor?: string, strokeWidth?:number, reverse?: boolean}) => {
  // pathD é o valor do atributo 'd' do seu path SVG (ex: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <motion.path
        d={pathD}
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        autoReverse={reverse}
        fill="transparent" 
        strokeLinecap="round" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }} 
        transition={{
          duration: duration, 
          ease: "easeInOut",
          repeatType: reverse ? "reverse" : "mirror"
        }}
      />
    </svg>
  );
};
