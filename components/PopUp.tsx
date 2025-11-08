import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { ReactNode, RefObject, useEffect, useState } from "react";
import { motion } from "motion/react";

export const PopUp = ({contentRef, children}:{contentRef: RefObject<HTMLDivElement | null>, children: ReactNode}) => {

const [showPopup, setShowPopup] = useState(false);

  // NOVO useEffect PARA MONITORAR A ROLAGEM E EXIBIR O POPUP
  useEffect(() => {
    const contentElement = contentRef.current;

    if (contentElement) {
      const handleScroll = () => {
        const scrollHeight = contentElement.scrollHeight;
        const clientHeight = contentElement.clientHeight;
        const scrollTop = contentElement.scrollTop;
        const isScrolledToBottom =
          scrollTop + clientHeight >= scrollHeight;

        if (isScrolledToBottom) {
          setShowPopup(true);
        } else {
          setShowPopup(false);
        }
      };

      contentElement.addEventListener("scroll", handleScroll);
      return () => {
        contentElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
            <AnimatePresence>
    {showPopup &&  <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:.6}} exit={{opacity:0}} 
    className={`${!showPopup ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"} w-full h-full z-9 fixed top-0 left-0 leading-0 bg-black/40`}>
        <div className="absolute top-1/2 left-1/2 w-full bg-white rounded-2xl -translate-1/2 p-10 max-w-1/2 h-fit">
            <div className="absolute -top-10 -right-10 cursor-pointer" onClick={() => {
                setShowPopup(false)
            }}>
                 
                <Image className="bg-white rounded-full" src="/icons/close.svg" alt="" width={40} height={40} />
            </div>
            {children}
        </div>
    
    </motion.div> }
    </AnimatePresence>
  )


}