import { motion, Transition } from "motion/react";

export const AnimatedLanguageSelector3 = ({
  width,
  height,
  strokeWidth = 5,
  duration = 2,
  strokeColor = "var(--secondary)",
  delay = 0,
}: {
  width: number | string;
  height: number | string;
  strokeWidth?: number;
  strokeColor?: string;
  duration?: number;
  delay?: number;
}) => {
  const transition: Transition = {
    ease: "easeInOut",
    opacity: {
      duration: 1,
      ease: "easeOut",
      delay: delay,
    },
    pathLength: {
      duration: duration,
      ease: "easeInOut",
      delay: delay,
    },
  };
  const initial = {
    pathLength: 0,
    opacity: 0,
  };
  const animate = {
    pathLength: 1,
    opacity: 1,
  };
  const transitionIcon: Transition = {
    ease: "easeInOut",
    opacity: {
      duration: 1,
      ease: "easeOut",
      delay: delay * 2,
    },
    pathLength: {
      duration: duration,
      ease: "easeInOut",
      delay: delay * 2,
    },
  };

  return (
    <svg width={width} height={height} viewBox="0 0 528.42 534.49">
      <g id="Camada_1-2" data-name="Camada 1">
        <g>
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--tertiary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M313.38,455.31v-90.14c0-19.21-15.63-34.85-34.85-34.85H100.18"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M165.61,283.82h112.92c44.86,0,81.35,36.49,81.35,81.35v90.14"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--tertiary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M313.38,522.51v-102.33c0-31.71,25.7-57.41,57.41-57.41h31.59c17.15,0,31.05-13.9,31.05-31.05v-28.86"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M479.92,93.5v239.92c0,41.89-33.96,75.85-75.85,75.85h-27.09c-9.45,0-17.1,7.66-17.1,17.1v105.62"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--septinary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M336.55,455.31v-88.45c0-33.3-27-60.3-60.3-60.3H2.5"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--septinary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M457.56,202.19v125.68c0,32.77-26.56,59.33-59.33,59.33h-30.04c-17.48,0-31.65,14.17-31.65,31.65v68.1"
          />
          <g>
            <g>
              <motion.path
                initial={initial}
                animate={animate}
                transition={transition}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill="transparent"
                d="M493.64,41.18c0-7.57-6.15-13.71-13.71-13.71-6.71,0-12.3,5.3-12.3,11.77,0,13.92,24.88,4.91,24.88,20.19,0,6.12-6.17,10.34-12.58,10.34-7.58,0-13.72-6.14-13.72-13.72"
              />
              <line x1="479.92" y1="27.47" x2="479.92" y2="20.17" />
              <line x1="479.92" y1="76.83" x2="479.92" y2="69.77" />
            </g>
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fill="transparent"
              d="M438.46,66.02c-2.28-5.38-3.54-11.3-3.54-17.52,0-24.85,20.15-45,45-45s45,20.15,45,45-20.15,45-45,45"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
