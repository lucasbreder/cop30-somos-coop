"use client";
import { ods } from "@/data/ods";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSelector } from "./AnimatedSelector";
import { AnimatedSelector1 } from "./AnimatedSelector1";
import useWindowWidth from "@/hooks/useWindowWidth";

// --- FUNÇÃO AUXILIAR PARA COMPATIBILIDADE MOUSE/TOUCH ---
const getClientX = (event: TouchEvent & MouseEvent): number => {
  // Preferir touch se disponível
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientX;
  }
  // Fallback para mouse/drag (usamos o clientX, se não for 0)
  if (event.clientX !== undefined && event.clientX !== 0) {
    return event.clientX;
  }
  if (event.changedTouches && event.changedTouches.length > 0) {
    return event.changedTouches[0].clientX;
  }
  return 0;
};

export const Selector = () => {
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const locale = params.lang as keyof typeof ods;

  const data = useMemo(() => ods[locale] || ods["pt"], [locale]);
  const totalItems = data.length;

  const [activeIndex, setActiveIndex] = useState(Math.floor(totalItems / 2));

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [stepWidth, setStepWidth] = useState(0);
  const windowWidth = useWindowWidth();

  // ESTADOS PARA A LÓGICA DE SWIPE/TOUCH
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Limite de movimento mínimo (em pixels) para considerar um swipe válido
  const SWIPE_THRESHOLD = 50;

  // Constantes de estilo
  const MAX_SCALE = 1.8;
  const MIN_OPACITY = 0.1;
  const REDUCTION_FACTOR = 0.1;
  const thumbWidthPercent = 100 / totalItems;

  // Lógica de Framer Motion para a Thumb (não alterada)
  useEffect(() => {
    // ... (código useEffect Framer Motion inalterado)
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.offsetWidth;
    const thumbWidth = (trackWidth * thumbWidthPercent) / 100;

    const maxDragDistance = trackWidth - thumbWidth;
    const newStepWidth = maxDragDistance / (totalItems - 1);
    setStepWidth(newStepWidth);
    x.set(activeIndex * newStepWidth);
  }, [activeIndex, totalItems, thumbWidthPercent, x]);

  const handleDrag = () => {
    // ... (código handleDrag inalterado)
    if (stepWidth === 0) return;

    const currentX = x.get();
    const newIndex = Math.round(currentX / stepWidth);

    if (newIndex !== activeIndex) {
      const safeIndex = Math.max(0, Math.min(totalItems - 1, newIndex));
      setActiveIndex(safeIndex);
    }
  };

  const handleDragTransition = (target: number) => {
    // ... (código handleDragTransition inalterado)
    if (stepWidth === 0) return 0;
    const nearestIndex = Math.round(target / stepWidth);
    return nearestIndex * stepWidth;
  };

  // --- HANDLERS DA LÓGICA DE SWIPE/TOUCH ---

  const handleStart = useCallback((e: TouchEvent & MouseEvent) => {
    // ... (código handleStart inalterado)
    const clientX = getClientX(e);
    if (clientX === 0) return;

    setIsDragging(true);
    setStartX(clientX);

    if ("touches" in e) {
      e.preventDefault();
    }
  }, []);

  const handleMove = useCallback(
    (e: TouchEvent & MouseEvent) => {
      // ... (código handleMove inalterado)
      if (!isDragging) return;

      const currentX = getClientX(e);
      if (currentX === 0) return;

      if ("touches" in e) {
        e.preventDefault();
      }
    },
    [isDragging]
  );

  const handleEnd = useCallback(
    (e: TouchEvent & MouseEvent) => {
      if (!isDragging || !contentRef.current) return;

      setIsDragging(false);

      const endX = getClientX(e);
      // 1. Calcula o deslocamento total
      const dragDelta = endX - startX;

      // 2. Calcula a largura do slide (ou o item centralizado)
      // Usamos a largura do contêiner dividido pelo número de itens
      const containerWidth = contentRef.current.offsetWidth;
      // O valor do 'pixelPerSlide' deve representar o deslocamento necessário para pular 1 item.
      // Como a sua visualização é baseada no item central, um bom divisor é a largura do contêiner / total de itens.
      const pixelPerSlide = containerWidth / totalItems;

      // Se o delta for muito pequeno, tratamos como se não houvesse movimento
      if (Math.abs(dragDelta) < SWIPE_THRESHOLD) {
        // Nenhum movimento significativo, mantém o índice
        return;
      }

      // 3. Calcula o número de itens a pular
      // Arredondamos o resultado para o número inteiro mais próximo
      let slidesToSkip = Math.round(Math.abs(dragDelta) / pixelPerSlide);

      // Garante que pelo menos 1 item seja pulado se o SWIPE_THRESHOLD foi ultrapassado
      slidesToSkip = Math.max(1, slidesToSkip);

      let newIndex = activeIndex;

      if (dragDelta < 0) {
        // Deslocamento para a esquerda (delta negativo) = Mover para o PRÓXIMO(S) item(s) (índice aumenta)
        newIndex = activeIndex + slidesToSkip;
      } else if (dragDelta > 0) {
        // Deslocamento para a direita (delta positivo) = Mover para o ITEM(S) ANTERIOR(ES) (índice diminui)
        newIndex = activeIndex - slidesToSkip;
      }

      // 4. Aplica os guarda-chuvas (safeguards)
      newIndex = Math.min(totalItems - 1, newIndex);
      newIndex = Math.max(0, newIndex);

      // Garante que o índice final seja atualizado
      setActiveIndex(newIndex);
    },
    [activeIndex, isDragging, startX, totalItems]
  );

  // --- USEEFFECT PARA ADICIONAR LISTENERS DE SWIPE/TOUCH ---
  useEffect(() => {
    const container = contentRef.current;
    if (container) {
      // MOUSE
      container.addEventListener("mousedown", handleStart as EventListener);
      container.addEventListener("mousemove", handleMove as EventListener);
      container.addEventListener("mouseup", handleEnd as EventListener);

      // TOUCH
      container.addEventListener("touchstart", handleStart as EventListener);
      container.addEventListener("touchmove", handleMove as EventListener);
      container.addEventListener("touchend", handleEnd as EventListener);

      // --- CLEANUP (LIMPEZA) ---
      return () => {
        // MOUSE
        container.removeEventListener(
          "mousedown",
          handleStart as EventListener
        );
        container.removeEventListener("mousemove", handleMove as EventListener);
        container.removeEventListener("mouseup", handleEnd as EventListener);
        // TOUCH
        container.removeEventListener(
          "touchstart",
          handleStart as EventListener
        );
        container.removeEventListener("touchmove", handleMove as EventListener);
        container.removeEventListener("touchend", handleEnd as EventListener);
      };
    }
  }, [handleStart, handleMove, handleEnd]); // Dependências dos Handlers useCallback

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
      <div
        ref={contentRef}
        // cursor-grab adicionado para feedback visual do mouse
        className="flex justify-center items-center mb-10 w-full cursor-grab"
      >
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
              className={`select-none transition-all duration-500 flex flex-col justify-center items-center text-center cursor-pointer -mx-10 lg:-mx-10 fhd:-mx-12 relative hover:scale-120`}
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
                className={`select-none p-1 transition-all duration-500 ${index === activeIndex ? "shadow-2xl" : ""}`}
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
