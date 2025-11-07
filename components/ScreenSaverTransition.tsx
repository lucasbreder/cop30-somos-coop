"use client";
import { screenSaverTranstion } from "@/data/screen-saver-transtion";
import UseWindowWidth from "@/hooks/useWindowWidth";
import { motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const ScreenSaverTransition = () => {
  const styleByIndex = (index: number) => {
    switch (index) {
      case 0:
        return "border-x-50 border-y-30 bg-tertiary top-0";
      case 1:
        return "-z-1 border-x-50 border border-y-30 bg-secondary top-1/3";
      case 2:
        return "border-x-80 border-y-40 bg-quaternary top-2/3";
      default:
        return "border-x-60 border-y-30 bg-tertiary top-0";
    }
  };
  const windowWidth = UseWindowWidth();
  const initialStateByIndex = (index: number) => {
    switch (index) {
      case 0:
        return { left: windowWidth > 1200 ? "-150%" : "-300%" };
      case 1:
        return { right: windowWidth > 1200 ? "-150%" : "-300%" };
      case 2:
        return { left: windowWidth > 1200 ? "-150%" : "-300%" };
      default:
        return { left: windowWidth > 1200 ? "-150%" : "-300%" };
    }
  };

  const animationByIndex = (index: number) => {
    switch (index) {
      case 0:
        return { left: "100%" };
      case 1:
        return { right: "100%" };
      case 2:
        return { left: "100%" };
      default:
        return { left: "100%" };
    }
  };
  const pathname = usePathname();
  const images = pathname.includes("credito")
    ? screenSaverTranstion.groupsCredito
    : screenSaverTranstion.groupsOds;

  return (
    <motion.div className="fixed z-9999 h-full">
      <div className="flex flex-col h-full">
        {images.map((group, index) => (
          <motion.div
            initial={initialStateByIndex(index)}
            animate={animationByIndex(index)}
            transition={{
              duration: 5,
              ease: "easeInOut",
            }}
            className={`fixed flex w-fit h-1/3 gap-2 border-white rounded-full px-40 ${styleByIndex(index)}`}
            key={index}
          >
            {group.map((image, indexGroup) => (
              <div className="relative min-w-100 h-full" key={indexGroup}>
                <Image
                  sizes="80vw"
                  className="object-cover rounded-[50px] py-2"
                  src={image}
                  alt=""
                  fill
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
