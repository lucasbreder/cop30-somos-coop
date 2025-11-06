import { motion, Transition } from "motion/react";

export const AnimatedLanguageSelector2 = ({
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
    <svg width={width} height={height} viewBox="0 0 192.65 573.24">
      <g id="Camada_1-2" data-name="Camada 1">
        <g>
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--tertiary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M190.15,456.44v-137.34c0-35.01-28.38-63.39-63.39-63.39h-63.22c-13.5,0-24.44-10.94-24.44-24.44V91.7c0-9.29,7.53-16.81,16.81-16.81h0"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke="var(--septinary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M2.5,109.33v123.28c0,32.97,26.73,59.7,59.7,59.7h64.13c15.03,0,27.22,12.18,27.22,27.22v193.5c0,6.53-5.3,11.83-11.83,11.83h0"
          />
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            d="M20.1,134.31v93.93c0,25.79,20.91,46.7,46.7,46.7h59.28c25.31,0,45.83,20.52,45.83,45.83v54.56"
          />
          <g>
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              stroke="var(--septinary)"
              strokeWidth={strokeWidth}
              fill="transparent"
              d="M135.23,524.85s-36.24-.72-47.68,24.04c-7.86,17-21.18,14.71-25.57,10.91,0,0-7.34-4.64-4.56-13.9.7-2.31,1.91-4.46,3.69-6.08,2.43-2.21,6.56-4.2,12.23-.56"
            />
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              stroke="var(--septinary)"
              strokeWidth={strokeWidth}
              fill="transparent"
              d="M126.66,540.17s-17.24.71-27.11,15.81c0,0-5.48,12.48-13.54,14.76"
            />
          </g>
          <g>
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              stroke="var(--tertiary)"
              strokeWidth={strokeWidth}
              fill="transparent"
              d="M55.91,74.88s51.38.79,50.8-36.89C106.04-5.2,68.75,3.15,68.75,3.15c0,0-30.19,3.77-29.64,35.18.58,32.7,32.9,19.35,34.22,1.02"
            />
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              stroke="var(--tertiary)"
              strokeWidth={strokeWidth}
              fill="transparent"
              d="M67.04,52.85s-12.48-16.49,1.36-25.89l13.84-9.4s6.04,13.23,1.95,23.91c-4.09,10.68-10.15,10.56-17.15,11.38Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
