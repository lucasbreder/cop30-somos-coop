import { motion, Transition } from "motion/react";

export const AnimatedIntro = ({
  duration = 2,
  width,
  height,
  strokeWidth = 3,
  color1 = "var(--tertiary)",
  color2 = "var(--quaternary)",
  color3 = "var(--secondary)",
  delay = 0,
}: {
  duration?: number;
  width: number | string;
  height: number | string;
  strokeColor?: string;
  strokeWidth?: number;
  delay?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}) => {
  const transtionPaths: Transition<SVGAElement> = {
    duration: duration,
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

  return (
    <svg width={width} height={height} viewBox="0 0 620.15 265.6">
      <motion.path
        id="wind"
        d="M 562.75977 3.0292969 L 553.89062 44.970703 L 562.75977 3.0292969 z M 551.51953 45.089844 C 546.48706 45.072207 541.96789 48.592193 540.90039 53.710938 C 539.68039 59.560932 543.43907 65.289767 549.28906 66.509766 C 555.13906 67.729764 560.86984 63.969135 562.08984 58.119141 C 563.30984 52.269146 559.54921 46.540311 553.69922 45.320312 C 552.96797 45.167813 552.23846 45.092363 551.51953 45.089844 z M 539.25 57.519531 L 495.84961 72.949219 L 539.25 57.519531 z M 563.33008 65.019531 L 601.10938 96.779297 L 563.33008 65.019531 z "
        stroke="var(--quaternary)"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: "360deg",
          transition: {
            opacity: {
              duration: 1,
              ease: "easeOut",
              delay: delay,
            },
            rotate: {
              delay: delay,
              duration: 2,
              ease: "linear",
              repeatType: "loop",
              repeat: Infinity,
            },
          },
        }}
      />
      <motion.path
        d="m 370.43,235.51 c -10.12,0 -18.21,-8.69 -17.21,-19.02 0.73,-7.55 6.49,-13.85 13.95,-15.26 3.71,-0.71 7.23,-0.17 10.3,1.2 0.18,0.08 0.38,0.01 0.47,-0.16 3.79,-7.37 11.62,-12.41 20.31,-12.41 8.69,0 16.25,4.86 20.1,12.02 0.08,0.17 0.27,0.23 0.44,0.17 2.4,-0.91 5.06,-1.32 7.85,-1.04 8.39,0.84 15.09,7.85 15.54,16.27 -0.19712,12.8932 -0.6422,15.13728 -15.87,18.16 l -425.35708202,0"
        id="line-cloud"
        fill="transparent"
        stroke={color1}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transtionPaths}
      />
      <motion.line
        x1="4"
        y1="206.78"
        x2="317.79001"
        y2="206.78"
        stroke={color3}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transtionPaths}
        id="line1"
      />
      <motion.path
        d="m 548.48,88.67 v 116.42 c 0,31.21 -25.3,56.51 -56.51,56.51 H 4"
        fill="transparent"
        stroke={color2}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transtionPaths}
        id="curve1"
      />
    </svg>
  );
};
