"use client";
import { ods } from "@/data/ods";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSelector } from "./AnimatedSelector";
import { AnimatedSelector1 } from "./AnimatedSelector1";
import useWindowWidth from "@/hooks/useWindowWidth";

export const Selector = () => {
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const locale = params.lang as keyof typeof ods;
  // Estado para rastrear o índice atualmente focado (central)
  const [activeIndex, setActiveIndex] = useState(
    Math.floor((ods[locale] ? ods[locale].length : ods["pt"].length) / 2)
  );
  const data = ods[locale] || ods["pt"];
  const totalItems = data.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [stepWidth, setStepWidth] = useState(0);
  const windowWidth = useWindowWidth();

  const MAX_SCALE = 1.8;
  const MIN_OPACITY = 0.1;
  const REDUCTION_FACTOR = 0.1;
  const thumbWidthPercent = 100 / totalItems;

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.offsetWidth;
    const thumbWidth = (trackWidth * thumbWidthPercent) / 100;

    const maxDragDistance = trackWidth - thumbWidth;
    const newStepWidth = maxDragDistance / (totalItems - 1);
    setStepWidth(newStepWidth);
    x.set(activeIndex * newStepWidth);
  }, [activeIndex, totalItems, thumbWidthPercent, x]);

  const handleDrag = () => {
    if (stepWidth === 0) return;

    const currentX = x.get();
    const newIndex = Math.round(currentX / stepWidth);

    if (newIndex !== activeIndex) {
      const safeIndex = Math.max(0, Math.min(totalItems - 1, newIndex));
      setActiveIndex(safeIndex);
    }
  };

  const handleDragTransition = (target: number) => {
    if (stepWidth === 0) return 0;
    const nearestIndex = Math.round(target / stepWidth);
    return nearestIndex * stepWidth;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center w-full h-full absolute top-1/2 left-1/2 -translate-1/2 overflow-visible"
    >
      <div className="hidden md:block w-10/12 h-40 fhd:h-50 fhdv:portrait:h-80 absolute bottom-20 fhdv:portrait:bottom-40 -left-[40%] md:-left-[45%] fhd:-left-[45%] fhdv:portrait:-left-[50%]">
        <AnimatedSelector width="100%" height="100%" />
      </div>
      <div className="hidden md:block w-10/12 h-90 fhd:h-112 fhdv:portrait:h-150 absolute -top-15 fhd:-top-10 md:-top-30 fhdv:portrait:-top-40 -right-[38%] fhd:-right-[43%] fhdv:portrait:-right-[30%]">
        <AnimatedSelector1 width="100%" height="100%" />
      </div>
      <div className="mb-10 mt-20 fhd:mb-20 uppercase font-light text-xl 2xl:text-3xl fhd:text-4xl fhdv:portrait:text-4xl text-center w-12/12 xl:w-5/12 md:w-8/12 lg:w-6/12 fhd:w-7/12 fhdv:portrait:w-8/12 mx-auto tracking-widest text-primary">
        Escolha um{" "}
        <span className="font-extrabold">
          objetivo de desenvolvimento sustentável
        </span>
      </div>
      <div className="flex justify-center items-center mb-10 w-full">
        {data.map((obj, index) => {
          const distance = Math.abs(activeIndex - index);

          const calculatedOpacity = Math.max(
            1 - distance * REDUCTION_FACTOR,
            MIN_OPACITY
          );
          const calculatedScale = Math.max(
            MAX_SCALE - distance * REDUCTION_FACTOR,
            0.6
          );

          return (
            <motion.div
              onClick={() => {
                router.push(`${locale}/ods/${obj.id}`);
              }}
              className={`transition-all duration-500 flex flex-col justify-center items-center text-center cursor-pointer -mx-10 lg:-mx-10 fhd:-mx-12 relative hover:scale-120`}
              style={{
                backgroundColor: `var(--color-ods${obj.id})`,
                opacity: calculatedOpacity,
                flexBasis:
                  windowWidth < 1500
                    ? calculatedScale * 90
                    : calculatedScale * 120,
                minHeight:
                  windowWidth < 1500
                    ? calculatedScale * 90 - 10
                    : calculatedScale * 120 - 10,
                zIndex:
                  index === activeIndex
                    ? 999
                    : index > activeIndex
                      ? -index
                      : index,
                pointerEvents: index === activeIndex ? "all" : "none",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              key={index}
            >
              <Image
                sizes="80vw"
                className={`p-1 transition-all duration-500 ${index === activeIndex ? "shadow-2xl" : ""}`}
                src={obj.seal}
                alt={obj.name}
                fill
              />
            </motion.div>
          );
        })}
      </div>
      <div
        ref={trackRef}
        className="w-9/12 mx-auto rounded-2xl border border-primary relative flex justify-start items-center mt-4"
      >
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          onDrag={handleDrag}
          dragTransition={{
            power: 0,
            timeConstant: 700,
            modifyTarget: handleDragTransition,
          }}
          style={{
            x, // Usa o MotionValue
            width:
              windowWidth > 1200
                ? `${thumbWidthPercent}%`
                : `${thumbWidthPercent + 2}%`,
          }}
          className="bg-gray-400 h-4 rounded-2xl cursor-grab"
        />
      </div>
      <div className="w-40 h-40 fhd:w-50 fhd:h-50 relative mx-auto mt-6 fhd:mt-10">
        <Link href={locale ? "/" + locale : "/"}>
          {" "}
          <Image src="/logo/ods-logo1.svg" alt="" fill />
        </Link>
      </div>
    </motion.div>
  );
};
