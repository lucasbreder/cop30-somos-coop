"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedIcon } from "./AnimatedIcon";
import { AnimatedBrasilPath } from "./AnimatedBrasilPath";
import { AnimatedIntro } from "./AnimatedIntro";
import { AnimatedIntroLine } from "./AnimatedIntroLine";
import { interfaceData } from "@/data/interface";
import { useParams } from "next/navigation";
import { Params } from "@/types/Params";

export const ScreenSaver = ({
  image = "/intro/people.png",
  color1 = "var(--primary)",
  color2 = "var(--secondary)",
  color3 = "var(--tertiary)",
  color4 = "var(--quaternary)",
  color5 = "var(--quinquenary)",
  color6 = "var(--sextenary)",
  icon1 = "/icons/shine1.svg",
  icon2 = "/icons/plus1.svg",
  title = "default",
}: {
  image?: string;
  icon1?: string;
  icon2?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  color6?: string;
  title?: "default" | "cresol" | "sicredi" | "sicoob";
}) => {
  const params = useParams<Params>();
  const locale = params.lang || "pt";
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.4 } }}
      style={{
        backgroundColor: color1,
      }}
      className={`bg-[url("/bg/bg2.png")] bg-blend-multiply bg-cover bg-no-repeat w-full h-full flex items-center justify-center absolute inset-0 z-999 overflow-hidden`}
    >
      <div className="absolute -bottom-10 lg:bottom-0 fhd:bottom-20 fhdv:portrait:bottom-50 -left-20 md:-left-30 lg:-left-10 fhd:-left-20 fhdv:portrait:left-[-15%] w-[25%] portrait:w-[50%]">
        <AnimatedIntro
          width="100%"
          height={300}
          strokeWidth={8}
          duration={3}
          delay={3}
          color1={color4}
          color2={color6}
          color3={color2}
        />
      </div>
      <div>
        <AnimatedIcon
          url={icon1}
          className="w-6 md:w-12 h-6 md:h-12 fhd:w-20 fhd:h-20 fhdv:portrait:w-20! fhdv:portrait:h-20 fhdv:portrait:bottom-[25%] fhdv:portrait:right-[10%] bottom-[30%] right-[30%] border-amber-600"
          delay={1}
        />
        <AnimatedIcon
          url={icon1}
          className="w-6 md:w-12 h-6 md:h-12 fhd:w-20 fhd:h-20 fhdv:portrait:w-20 fhdv:portrait:h-20 fhdv:portrait:top-[35%] fhdv:portrait:left-[15%] top-[15%] left-[6%] lg:top-[10%] lg:left-[20%] border-red-600"
          delay={0.5}
        />
        <AnimatedIcon
          url={icon1}
          className="w-6 md:w-12 h-6 md:h-12 fhd:w-20 fhd:h-20 fhdv:portrait:w-20 fhdv:portrait:h-20 fhdv:portrait:top-[55%] fhdv:portrait:left-[3%]  xl:top-[30%] top-[70%] left-[10%] lg:top-[75%] lg:left-[10%] border-blue-600"
          delay={0.8}
        />
        <AnimatedIcon
          url={icon1}
          className="w-6 md:w-12 h-6 md:h-12 fhd:w-20 fhd:h-20 fhdv:portrait:w-20 fhdv:portrait:h-20 fhdv:portrait:top-[40%] fhdv:portrait:right-[15%] top-[38%] right-[25%] lg:top-[22%] lg:right-[40%] border-green-600"
          delay={0.3}
        />
        <AnimatedIcon
          url={icon2}
          animation="show"
          className="w-6 md:w-8 h-6 md:h-8 fhd:w-12 fhd:h-12 fhdv:portrait:w-12 fhdv:portrait:h-12  fhdv:portrait:top-[64%] fhdv:portrait:left-[10%] top-[42%] left-[18%] lg:top-[50%] lg:left-[18%] border-gray-600"
          delay={0.3}
        />
        <AnimatedIcon
          url={icon2}
          animation="show"
          className="w-6 md:w-8 h-6 md:h-8 fhd:w-12 fhd:h-12 fhdv:portrait:w-12 fhdv:portrait:h-12 fhdv:portrait:top-[36%] fhdv:portrait:left-[40%] top-[12%] left-[50%] lg:top-[12%] lg:left-[50%] border-orange-600"
          delay={0.3}
        />
        <AnimatedIcon
          url={icon2}
          animation="show"
          className="w-6 md:w-8 h-6 md:h-8 fhd:w-12 fhd:h-12 fhdv:portrait:w-12 fhdv:portrait:h-12 fhdv:portrait:top-[38%] fhdv:portrait:left-[65%] top-[17%] left-[75%] lg:top-[10%] lg:left-[35%] border-purple-600"
          delay={0.3}
        />
        <AnimatedIcon
          url={icon2}
          animation="show"
          className="w-6 md:w-8 h-6 md:h-8 fhd:w-12 fhd:h-12 fhdv:portrait:w-12 fhdv:portrait:h-12 fhdv:portrait:bottom-[18%] fhdv:portrait:right-[25%] bottom-[20%] right-[12%] lg:bottom-[25%] lg:right-[42%] border-pink-600"
          delay={0.3}
        />
      </div>

      {title === "default" && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }} // Garante que a escala inicial seja 1
          animate={{
            // Adicione a animação de pulsação aqui:
            scale: [1, 1.05, 1], // Inicia em 1, vai para 1.01 (aumenta 1%), e volta para 1
            transition: {
              // Configurações para o fade-in inicial:
              // Configurações para o pulsar (scale):
              scale: {
                duration: 4, // Duração de um ciclo de pulso (2 segundos)
                delay: 3,
                repeat: Infinity, // Repete indefinidamente
                repeatType: "reverse", // Alterna entre os valores [1, 1.01, 1]
                ease: "easeInOut",
              },
            },
          }}
          className="h-7/12 w-full absolute top-[15%] md:top-[15%] lg:top-[30%] fhd:top-20 -left-5 md:-left-25 fhd:left-0"
        >
          <motion.div
            className="
            xl:max-w-2/6
            max-w-4/6
            md:max-w-3/6
            lg:max-w-2/8
            fhdv:portrait:max-w-4/6
            text-[20px]
            xl:text-[25px] 
            2xl:text-[35px] 
            fhdv:portrait:text-[55px]
            text-white
            font-light
            uppercase italic absolute 
            fhdv:portrait:-top-[360px] fhd:top-[250px] 
            fhdv:portrait:right-[4%]
            right-5
            2xl:right-0
            xl:-right-10
            fhd:right-[2%]
            "
          >
            <motion.span
              initial={{ opacity: 0, translateX: -100 }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: { delay: 3.8, duration: 0.6 },
              }}
              className="-mb-5 2xl:-mb-10 fhdv:portrait:-mb-15 block"
            >
              {interfaceData[locale]["home-title"].array?.[0] || "Conheça"}
            </motion.span>
            <motion.span className="flex items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 3.5 } }}
                className="text-[100px] xl:text-[120px] 2xl:text-[150px] fhdv:portrait:text-[220px] font-black block tracking-[-20px] text-quinquenary"
              >
                {interfaceData[locale]["home-title"].array?.[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, translateX: -100 }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  transition: { delay: 4, duration: 0.6 },
                }}
                className="max-w-1/6 text-[25px] xl:text-[35px] 2xl:text-[51px] ml-8 fhdv:portrait:ml-12 leading-8 2xl:leading-14 fhdv:portrait:text-[75px] fhdv:portrait:leading-22"
              >
                {interfaceData[locale]["home-title"].array?.[2]}
              </motion.span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, translateX: -100 }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: { delay: 4.4, duration: 0.6 },
              }}
              className="text-[24px] 2xl:text-[42px] xl:text-[32px] -mt-8 xl:-mt-11 fhd:-mt-11 fhdv:portrait:-mt-16 block leading-8 xl:leading-10 2xl:leading-12 fhdv:portrait:text-[65px] fhdv:portrait:leading-16"
            >
              {interfaceData[locale]["home-title"].array?.[3]}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.5 } }}
          ></motion.div>
        </motion.div>
      )}

      {title === "cresol" ||
        title === "sicoob" ||
        (title === "sicredi" && (
          <div className="border teste">
            <div>{interfaceData[locale]["company-title"].array?.[0]}</div>
            <div>
              <Image width={100} src={`/logo/${title}-branca.svg`} alt="" />
            </div>
            <div>{interfaceData[locale]["company-title"].array?.[1]}</div>
          </div>
        ))}
      <div className="absolute top-5 fhdv:portrait:top-10 left-5 fhd:w-4/6 fhdv:portrait:w-full">
        <AnimatedIntroLine
          width="100%"
          height={20}
          duration={0.5}
          fillIcons={color3}
          fillDots={color2}
        />
      </div>
      <div className="absolute bottom-5 right-0 fhdv:portrait:bottom-10 fhd:right-5 fhdv:portrait:-right-20 md:w-5/6 lg:w-3/6 fhdv:portrait:w-full">
        <AnimatedIntroLine
          width="100%"
          height={20}
          duration={0.5}
          fillIcons={color2}
          fillDots={color3}
        />
      </div>

      <div className="relative h-full w-full fhdv:portrait:w-9/12 fhdv:portrait:-ml-10 fhdv:portrait:-mb-300 fhd:mb-0">
        <div
          className="w-[80%] 
           md:w-[65%] 
           fhdv:portrait:w-full fhd:w-5/12 h-full absolute -bottom-60 
           fhd:-bottom-60
           fhd:left-[18%] 
           md:left-[18%]
           lg:left-[5%]
           left-10
           fhdv:portrait:bottom-35
           fhdv:portrait:left-10
           xl:-bottom-[20%]
           lg:-bottom-[20%]"
        >
          <AnimatedBrasilPath
            width="100%"
            height="100%"
            strokeColor1={color6}
            strokeColor2={color3}
            strokeColor3={color4}
            strokeWidth={8}
            duration={3}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.5 } }}
          className="w-8/12 
              lg:w-[34%] 
              fhdv:portrait:w-full 
              fhd:w-[37%] 
              relative
              h-full
              top-26
              lg:top-0
              xl:top-0
              fhd:-top-6 
              fhdv:portrait:-top-100 left-[20%] lg:left-[24%] fhd:left-[24%] fhdv:portrait:left-10"
        >
          <Image
            sizes="80vw"
            priority
            className="object-contain"
            src={image}
            alt=""
            fill
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
