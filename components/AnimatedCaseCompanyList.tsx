import { motion, Transition } from "motion/react";

export const AnimatedCaseCompanyList = ({
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
    <svg width={width} height={height} viewBox="0 0 331.69 470">
      <g id="Camada_1-2" data-name="Camada 1">
        <g>
          <motion.path
            stroke="var(--septinary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M251,569.78V86.43c0-15.25-12.36-27.61-27.61-27.61h-43.48"
          />
          <motion.path
            stroke="var(--primary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M153.33,26.12h73.15c31.55,0,57.22,25.67,57.22,57.22v521.8"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M267.78,503.19V83.17c0-22.17-17.98-40.15-40.15-40.15H62.41"
          />
          <motion.path
            stroke="var(--primary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M141.42,17.06c-.25-4.78-4.05-8.75-8.81-9.22-1.58-.16-3.09.07-4.45.59-.1.04-.2,0-.25-.09-2.18-4.06-6.47-6.81-11.4-6.81s-9.37,2.86-11.51,7.03c-.05.1-.16.14-.26.09-1.74-.78-3.73-1.08-5.84-.68-4.23.8-7.49,4.37-7.91,8.65-.57,5.85,4.02,10.78,9.76,10.78l31.68-.04c5.22-.42,9.29-4.91,9-10.3Z"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M22.35,49.58l-8.49,14.6c-3.66-2.09-6.83-5.16-9.08-9.09-2.2-3.83-3.25-8.01-3.26-12.12l16.82.05c.03,1.24.36,2.48,1.02,3.63.74,1.28,1.78,2.27,2.99,2.93Z"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M38.53,21.77l-8.42,14.48c-2.33-1.43-5.34-1.58-7.88-.12-.01,0-.02,0-.03.02l-8.33-14.53c7.93-4.55,17.32-4.18,24.66.15Z"
          />
          <motion.path
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            initial={initial}
            animate={animate}
            transition={transition}
            d="M50.59,43.12c-.08,8.42-4.49,16.56-12.33,21.05l-8.4-14.64s.02-.01.03-.02c2.41-1.38,3.79-3.86,3.88-6.44l16.82.05Z"
          />
        </g>
      </g>
    </svg>
  );
};
