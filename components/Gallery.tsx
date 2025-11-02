import Image from "next/image"
import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion" 

export const Gallery = ({gallery}:{gallery:string[]}) => {

    const [activeImage, setActiveImage] = useState(gallery[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // 1. Crie uma Ref para o contêiner das miniaturas
    const carouselRef = useRef<HTMLDivElement>(null); 
    
    const itemsPerView = 3;
    const itemWidthPercentage = 100 / itemsPerView; 
    
    // Função de rolagem que é chamada pelos botões
    const scrollToItem = useCallback((index: number) => {
        if (carouselRef.current) {
            // Tentamos encontrar o item pelo seu índice (usando querySelector)
            const itemElement = carouselRef.current.querySelector(`[data-index="${index}"]`);
            
            if (itemElement) {
                // Rola o item para o início da visualização
                itemElement.scrollIntoView({
                    behavior: 'smooth', // Adiciona a rolagem suave
                    inline: 'start'     // Rola para o início da área visível (esquerda)
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

    return (
        <div className="flex flex-col h-full relative">
            <motion.div 
            initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .5}}} 
                key={activeImage} 
                className="w-full h-5/6 mb-5 relative transition-opacity duration-500 opacity-100"
            >
                <Image objectFit="cover" sizes="80vw" src={activeImage} fill alt="" />
            </motion.div>

            {/* Carrossel de Miniaturas */}
            <div className="w-full overflow-hidden relative">
              {gallery.length > 4 && <>
              <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    className={`cursor-pointer absolute left-1 top-8 z-20  text-white p-2 rounded-full opacity-70 ${currentIndex === 0 ? 'opacity-10! cursor-not-allowed!' : 'hover:opacity-100'}`}
                >
                    <Image className="rotate-180" src={"/icons/chevron-right-solid-full.svg"} alt="" width={35} height={35} />
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={currentIndex >= gallery.length - itemsPerView}
                    className={`cursor-pointer absolute right-1 top-8 z-20 text-white p-2 rounded-full opacity-70 ${currentIndex >= gallery.length - itemsPerView ? 'opacity-10! cursor-not-allowed!' : 'hover:opacity-100'}`}
                >
                <Image src={"/icons/chevron-right-solid-full.svg"} alt="" width={35} height={35} />
                </button>
              </>}
                <div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-scroll no-scrollbar" 
                >
                {gallery.map((image, index) => (
                    <div 
                        data-index={index} 
                        className="relative h-30 shrink-0 cursor-pointer" 
                        key={index} 
                        onClick={() => { setActiveImage(image); setCurrentIndex(index); }}
                        style={{ width: `calc(${itemWidthPercentage}% - 0.6666rem)` }}
                    >
                        <Image sizes="80vw" className="object-cover" src={image} fill alt="" />
                    </div>
                ))}
                </div>
            </div>
            
            {/* Botões de Navegação */}
           
        </div>
    )
}