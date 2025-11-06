import { motion, Transition } from "motion/react";

export const AnimatedOds = ({
  width,
  height,
  strokeWidth = 4,
  duration = 2,
  strokeColor = "var(--quinquenary)",
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
      delay: delay || 1 * 2,
    },
    pathLength: {
      duration: duration,
      ease: "easeInOut",
      delay: delay || 1 * 2,
    },
  };

  return (
    <svg width={width} height={height} viewBox="0 0 331.69 470">
      <g>
        <motion.path
          stroke="var(--tertiary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M291.89,427.06V100.52c0-17.73-14.38-32.11-32.11-32.11h-50.56"
        />
        <motion.path
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M178.32,30.37h85.07c36.69,0,66.54,29.85,66.54,66.54v371.26"
        />
        <motion.path
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M311.41,349.62V96.72c0-25.79-20.9-46.69-46.69-46.69H72.57"
        />
        <motion.path
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transitionIcon}
          d="M164.46,19.84c-.29-5.55-4.71-10.17-10.25-10.72-1.84-.18-3.59.08-5.18.69-.11.04-.23,0-.29-.11-2.54-4.72-7.52-7.93-13.25-7.93s-10.89,3.32-13.39,8.18c-.06.11-.19.16-.31.11-2.02-.9-4.34-1.26-6.79-.79-4.91.93-8.71,5.08-9.19,10.06-.66,6.81,4.67,12.54,11.35,12.54l36.84-.05c6.07-.49,10.8-5.71,10.47-11.98Z"
        />
        <g>
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transitionIcon}
            d="M26,57.66l-9.87,16.98c-4.26-2.44-7.95-6-10.56-10.57-2.56-4.46-3.78-9.31-3.79-14.09l19.56.06c.03,1.44.42,2.89,1.19,4.22.86,1.49,2.07,2.64,3.47,3.41Z"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transitionIcon}
            d="M44.8,25.31l-9.79,16.84c-2.7-1.67-6.21-1.84-9.17-.14-.01,0-.02.01-.03.02l-9.69-16.9c9.22-5.29,20.14-4.87,28.68.18Z"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transitionIcon}
            d="M58.83,50.14c-.09,9.79-5.23,19.26-14.34,24.48l-9.77-17.02s.03-.02.04-.02c2.81-1.61,4.41-4.48,4.51-7.49l19.56.06Z"
          />
        </g>
      </g>
    </svg>
  );
};
