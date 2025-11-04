import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import UseWindowWidth from "@/hooks/useWindowWidth";
import { useScrollContent } from "@/hooks/useScrollContent";

export const Gallery = ({ gallery }: { gallery: string[] }) => {
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Crie uma Ref para o contêiner das miniaturas
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 3;
  const itemWidthPercentage = 100 / itemsPerView;
  const useWindowWidth = UseWindowWidth();
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const [contentScrollHeight, setContentScrollHeight] = useState(0);

  // Função de rolagem que é chamada pelos botões
  const scrollToItem = useCallback((index: number) => {
    if (carouselRef.current) {
      // Tentamos encontrar o item pelo seu índice (usando querySelector)
      const itemElement = carouselRef.current.querySelector(
        `[data-index="${index}"]`
      );

      if (itemElement) {
        // Rola o item para o início da visualização
        itemElement.scrollIntoView({
          behavior: "smooth", // Adiciona a rolagem suave
          inline: "start", // Rola para o início da área visível (esquerda)
        });
      }
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < gallery.length - itemsPerView) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToItem(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToItem(newIndex);
    }
  };
  useScrollContent({
    contentRef: carouselRef,
    data: gallery,
    setContentScrollHeight,
    thumbRef,
    trackRef,
    y,
  });

  return (
    <div className="flex flex-col fhd:flex-col fhdv:portrait:flex-row relative fhd:gap-0 fhdv:portrait:gap-5 h-full  overflow-hidden fhdv:portrait:h-[400px] fhdv:portrait:-mt-15 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        key={activeImage}
        className="h-full xl:h-[380px] fhd:h-full fhdv:portrait:h-full hidden md:block w-full fhdv:portrait:min-w-3/4 lg:h-5/6 mb-5 relative transition-opacity duration-500 opacity-100 fhd:basis-auto fhdv:portrait:basis-2/3 min-w-[300px] 2xl:min-w-[600px]"
      >
        <Image objectFit="cover" sizes="80vw" src={activeImage} fill alt="" />
      </motion.div>

      {/* Carrossel de Miniaturas */}
      <div className="w-full relative flex-1 h-full">
        {gallery.length > 4 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`fhdv:portrait:hidden cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20  text-white p-2 rounded-full opacity-70 ${currentIndex === 0 ? "opacity-10! cursor-not-allowed!" : "hover:opacity-100"}`}
            >
              <Image
                className="rotate-180"
                src={"/icons/chevron-right-solid-full.svg"}
                alt=""
                width={35}
                height={35}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= gallery.length - itemsPerView}
              className={`fhdv:portrait:hidden cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full opacity-70 ${currentIndex >= gallery.length - itemsPerView ? "opacity-10! cursor-not-allowed!" : "hover:opacity-100"}`}
            >
              <Image
                src={"/icons/chevron-right-solid-full.svg"}
                alt=""
                width={35}
                height={35}
              />
            </button>
          </>
        )}
        <div
          ref={carouselRef}
          className="flex flex-1 flex-col md:flex-row fhd:flex-row fhdv:portrait:flex-col gap-4 fhd:overflow-x-scroll fhdv:portrait:overflow-y-scroll no-scrollbar h-full overflow-hidden"
        >
          {gallery.map((image, index) => (
            <div
              data-index={index}
              className="relative h-30 lg:h-20 2xl:h-30 fhd:h-30 fhdv:portrait:h-30 shrink-0 cursor-pointer w-full fhdv:portrait:w-full pointer-events-none md:pointer-events-auto"
              key={index}
              onClick={() => {
                setActiveImage(image);
                setCurrentIndex(index);
              }}
              style={{
                width:
                  useWindowWidth < 500 || useWindowWidth === 1080
                    ? useWindowWidth < 500
                      ? "100%"
                      : "80%"
                    : `calc(${itemWidthPercentage}% - 0.6666rem)`,
              }}
            >
              <Image
                sizes="80vw"
                className="object-cover"
                src={image}
                fill
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {contentScrollHeight > 0 && gallery.length > 3 && (
        <div
          ref={trackRef}
          className="hidden fhdv:portrait:flex absolute top-0 bottom-0 right-0 w-4 m-auto h-full rounded-2xl border border-white flex-col justify-start items-center opacity-60"
        >
          <motion.div
            ref={thumbRef}
            drag="y"
            dragTransition={{
              power: 0,
              timeConstant: 700,
            }}
            dragConstraints={trackRef}
            style={{ y }}
            className="bg-white h-15 w-3 rounded-2xl cursor-grab mt-0.5"
          />
        </div>
      )}
    </div>
  );
};
