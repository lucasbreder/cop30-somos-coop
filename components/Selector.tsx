"use client";
import { objectives } from "@/data/objectives";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export const Selector = () => {
  // Estado para rastrear o índice atualmente focado (central)
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(objectives.length / 2)
  );

  const data = objectives;

  
  const totalItems = data.length;
  
  // 1. Refs e MotionValue
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); 
  
  // 2. NOVOS ESTADOS para armazenar dimensões e posições de snap
  const [stepWidth, setStepWidth] = useState(0); 

  // Constantes de Controle da Animação
  const MAX_SCALE = 1.8;
  const MIN_OPACITY = 0.1;
  const REDUCTION_FACTOR = 0.1;
  const thumbWidthPercent = 100 / totalItems;

  // ----------------------------------------------------
  // EFEITO DE CÁLCULO DE DIMENSÕES E SNAP (Roda após a renderização)
  // ----------------------------------------------------
  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.offsetWidth;
    const thumbWidth = (trackWidth * thumbWidthPercent) / 100;
    
    // Largura total que o marcador pode se mover
    const maxDragDistance = trackWidth - thumbWidth;
    
    // Largura do "passo" (distância entre o centro de um item e o próximo)
    const newStepWidth = maxDragDistance / (totalItems - 1);
    
    // 3. Atualiza os estados com os valores calculados
    setStepWidth(newStepWidth);

    // 4. Sincroniza a posição inicial do marcador com o activeIndex
    // Usa o useMotionValue.set para animar suavemente
    x.set(activeIndex * newStepWidth);
    
  // Dependências: Re-executa se o activeIndex mudar ou se a largura mudar (simulando resize)
  }, [activeIndex, totalItems, thumbWidthPercent, x]); 

  
  // ----------------------------------------------------
  // LÓGICA DE ARRASTO (FUNÇÕES)
  // ----------------------------------------------------
  const handleDrag = () => {
    if (stepWidth === 0) return;

    const currentX = x.get();
    
    // Mapeia a posição X atual para o índice mais próximo
    const newIndex = Math.round(currentX / stepWidth);

    if (newIndex !== activeIndex) {
      // Garante que o índice não saia dos limites do array
      const safeIndex = Math.max(0, Math.min(totalItems - 1, newIndex));
      setActiveIndex(safeIndex);
    }
  };
  
  const handleDragTransition = (target: number) => {
    if (stepWidth === 0) return 0;
    
    // 5. Calcula o índice mais próximo do ponto alvo onde o arrasto parou
    const nearestIndex = Math.round(target / stepWidth);
    
    // Retorna a posição X exata para o centro desse índice (o snap!)
    return nearestIndex * stepWidth;
  };


  return (
   <div className="flex flex-col">
     <div className="flex justify-center items-center h-64 overflow-hidden">
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
            className="transition-all flex flex-col justify-center items-center text-center cursor-pointer -mx-2"
            style={{
              backgroundColor: obj.color,
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
            key={obj.id}
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