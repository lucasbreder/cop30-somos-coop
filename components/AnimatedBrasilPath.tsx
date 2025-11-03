import { motion } from 'motion/react';

export const AnimatedBrasilPath = ({ duration = 2, width, height, strokeColor = "#4FA4F2", strokeWidth = 3, reverse = false }: 
    {duration?: number, width:number | string, height:number | string, strokeColor?: string, strokeWidth?:number, reverse?: boolean}) => {
  // pathD é o valor do atributo 'd' do seu path SVG (ex: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

  return (
    <svg width={width} height={height} viewBox="0 0 723.77 1175.8599">
      <motion.path
        fill="transparent" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }} 
        transition={{
          duration: duration, 
          ease: "easeInOut",
          repeatType: reverse ? "reverse" : "mirror"
        }}
     d="M 235.99,1171.5226 V 871.48 c 0,-24.03 19.48,-43.51 43.51,-43.51 h 56.27 c 40.9273,0 43.88581,-30.20098 43.42249,-62.57526 -0.41154,-24.29723 -0.90036,-34.10044 3.03964,-43.21044 11.81,-27.38 66.13787,-47.5543 75.88787,-68.4243 9.75,-20.87 -14.61,-70.42 32.78,-91.46 47.39,-21.05 114.55,1.59 133.95,-83.16 19.41,-84.74 3.24,-104.56 37.05,-143.4 33.81,-38.85 75.42,-67.93 50.05,-117.72 -25.37,-49.79 -29.1,-20.78 -75.41,-50.28 C 590.23,138.25 601.37,165.33 528,134.14 454.64,102.94 441.97,84.74 423.56,46.4 405.15,8.06 409.07,30.64 395.55,50.77 382.03,70.89 355.57,60.42 324.22,62.59 292.87,64.76 271.69,99.5 268.12,53.74 264.55,7.98 263.44,-12.23 237.31,19.2 211.17,50.64 161.17,7.17 169.33,29.84 c 8.16,22.67 39.46,60.04 -2.87,65.6 C 124.13,101 137.42,64.54 112.75,72 88.08,79.46 81.39,58.69 74.61,83.13 c -6.78,24.44 -21.05,29.79 1.08,29.98 22.13,0.19 25.47,17.57 16.25,37.6 -9.22,20.02 1.17,32.95 -28.14,39.21 -29.32,6.26 -29.67,18.87 -48.21,35.5 -18.54,16.63 -12.96,53.87 3.41,59.37 16.37,5.5 46.22,-7.43 40.63,12.58 -5.6,20.01 12.17,35.84 39.04,18.61 26.87,-17.23 68.42,-37.63 68.04,7.97 -0.37,45.61 48.57,7.73 75.68,35.49 27.11,27.76 -2.06,46.5 29.89,53.2 31.95,6.7 30.66,37.85 27.54,52.93 -3.12,15.08 -15.78,46.95 11.9,58.54 27.69,11.59 41.85,30.06 50.33,52.14 8.48,22.08 -3.12,40.39 -12.38,56.61 -9.25,16.21 -50.71,36.65 -15.87,59.03"
     />
      <g
        transform="translate(248.34574,769.46296)">
        <motion.path
        fill="transparent" 
        strokeLinecap="round" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: duration, 
          ease: "easeInOut",
          repeatType: reverse ? "reverse" : "mirror"
        }}
        stroke="var(--tertiary)" 
        strokeWidth={strokeWidth} 
          d="m 147.38,4 v 15.18 c 0,31.3 -25.37,56.67 -56.67,56.67 H 29.83 C 15.56,75.85 4,87.42 4,101.68 v 298.80646"/>
      </g>
      <g
        transform="translate(213.85679,759.90555)">
        <motion.path
        fill="transparent"
        strokeLinecap="round" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: duration, 
          ease: "easeInOut",
          repeatType: reverse ? "reverse" : "mirror"
        }}
        stroke="var(--quaternary)" 
        strokeWidth={strokeWidth} 
          d="M 4,411.98163 V 110.76 C 4,77.53 30.94,50.59 64.17,50.59 h 60.01 c 12.81,0 23.2,-10.39 23.2,-23.2 V 4"
    />
      </g>
    </svg>
  );
};
