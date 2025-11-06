import { motion, Transition } from "motion/react";

export const AnimatedCaseCompany = ({
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
      delay: delay * 2,
    },
    pathLength: {
      duration: duration,
      ease: "easeInOut",
      delay: delay * 2,
    },
  };

  return (
    <svg width={width} height={height} viewBox="0 0 712.97 289.98">
      <g>
        <motion.path
          stroke="var(--tertiary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M626.61,2h-192.16c-32.7,0-59.2,26.51-59.2,59.2v169.78c0,12.6-10.22,22.82-22.82,22.82H62.31"
        />
        <motion.path
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M62.31,287.98h291.37c30.79,0,55.76-24.96,55.76-55.76V61.6c0-14.04,11.38-25.42,25.42-25.42h191.76"
        />
        <motion.path
          stroke="var(--septinary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M117.81,271.55h231.78c24.09,0,43.61-19.53,43.61-43.61V61.84c0-23.64,19.17-42.81,42.81-42.81h50.96"
        />
        <motion.path
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M637.71,36.44s33.85-.67,44.53,22.45c7.34,15.88,19.78,13.74,23.88,10.19,0,0,6.86-4.34,4.26-12.98-.65-2.16-1.78-4.16-3.45-5.68-2.27-2.07-6.13-3.92-11.42-.52"
        />
        <motion.path
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M645.71,50.75s16.1.67,25.32,14.76c0,0,5.12,11.66,12.65,13.78"
        />
        <motion.path
          stroke="var(--tertiary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M49.45,253.72s-47.99.74-47.44-34.45c.63-40.34,35.45-32.54,35.45-32.54,0,0,28.2,3.52,27.68,32.85-.54,30.54-30.73,18.08-31.96.96"
        />
        <motion.path
          stroke="var(--tertiary)"
          strokeWidth={strokeWidth}
          fill="transparent"
          initial={initial}
          animate={animate}
          transition={transition}
          d="M39.06,233.14s11.66-15.4-1.27-24.18l-12.93-8.78s-5.64,12.36-1.82,22.33c3.82,9.98,9.48,9.87,16.02,10.63Z"
        />
      </g>
    </svg>
  );
};
