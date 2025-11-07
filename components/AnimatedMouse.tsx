"use client"; // Se estiver no App Router
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedMouse = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center gap-5 absolute z-999 bottom-30">
      <div className="border border-dashed border-white p-6 rounded-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            scale: [1, 2, 1], // Escala de 1x para 1.05x e volta para 1x
            opacity: [0.8, 1, 0.8], // Opcional: Efeito de opacidade para um pulso mais suave
          }}
          // Configurações da transição
          transition={{
            duration: 2, // Duração de cada ciclo do pulso em segundos
            ease: "easeInOut", // Suavização para um movimento mais natural
            repeat: Infinity, // Repete a animação infinitamente
            repeatType: "loop",
            opacity: {
              delay: 2,
            },
          }}
          // Estilos para o elemento ser visível (exemplo)
          className="cursor-pointer text-white"
        >
          <div className="w-7 h-7">
            <Image fill src={"/icons/pointer.svg"} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedMouse;
