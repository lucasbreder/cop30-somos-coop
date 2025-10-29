"use client";
import { ods } from "@/data/ods";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useParams, useRouter } from "next/navigation";


export const Selector = () => {
  const params = useParams<{ lang: string }>();
  const router = useRouter()
  const locale = params.lang as keyof typeof ods;
  // Estado para rastrear o índice atualmente focado (central)
  const [activeIndex, setActiveIndex] = useState(
    Math.floor((ods[locale] ? ods[locale].length : ods['pt'].length) / 2 )
  );
  const data = ods[locale] || ods['pt'];
  const totalItems = data.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); 
  const [stepWidth, setStepWidth] = useState(0); 

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
   <div className="flex flex-col">
     <div className="flex justify-center items-center h-64 overflow-hidden w-full">
      {data.map((obj, index) => {

        const distance = Math.abs(activeIndex - index);

        const calculatedOpacity = Math.max(
          1 - (distance * REDUCTION_FACTOR),
          MIN_OPACITY
        );
        const calculatedScale = Math.max(
          MAX_SCALE - (distance * REDUCTION_FACTOR),
          0.6
        );

        return (
          <motion.div
          onClick={() => {
            router.push(`${locale}/ods/${obj.id}`)
          }}
            className="transition-all flex flex-col justify-center items-center text-center cursor-pointer -mx-2"
            style={{
              backgroundColor: `var(--color-ods${obj.id})`,
              opacity: calculatedOpacity,
              flexBasis: calculatedScale * 100,
              minHeight: calculatedScale * 100,
              zIndex: index === activeIndex ? 2 : 1
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            key={index}
          >
            {obj.id}
          </motion.div>
        );
      })}
    </div>
    <div 
        ref={trackRef} 
        className="w-9/12 m-auto h-5 rounded-2xl border border-gray-600 relative flex justify-start items-center mt-4"
    >
        <motion.div 
            drag="x" 
            dragConstraints={trackRef} 
            onDrag={handleDrag}  
            
            dragTransition={{
                power: 0, 
                timeConstant: 700,
                modifyTarget: handleDragTransition
            }}
            
            style={{ 
                x, // Usa o MotionValue
                width: `${thumbWidthPercent}%`,
            }}
            className="bg-gray-600 h-4 rounded-2xl cursor-grab" 
        />
    </div>
   </div>
  );
};