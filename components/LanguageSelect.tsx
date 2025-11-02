import { languages } from "@/data/languages"
import { Params } from "@/types/Params";
import { motion } from "motion/react"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

export const LanguageSelect = () => {

    const pathname = usePathname()
    const params = useParams<Params>();
    const locale = params.lang;

    const [showSelect, setShowSelect] = useState(false)

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} exit={{opacity: 0}}  
        className="flex gap-15 justify-center items-center relative uppercase">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => (setShowSelect(!showSelect))}>
                   <svg className={`transition-all duration-300 ${showSelect ? "rotate-180" : "rotate-0"}`} width={20} height={20}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z"/>
                </svg>
                <div className="text-primary text-sm">( {locale} )</div>
             
            </div>
            <div className={`transition-discrete duration-300 flex flex-col gap-1 absolute -top-26 bg-quaternary rounded-full overflow-hidden ${showSelect ? "max-h-100 p-2 border-primary border" : "max-h-0"}`}>
                {languages.map((lang, index) => {
                    const pathnamePort = pathname.split('/');
                    pathnamePort.splice(1, 1, lang.code)
                return (
                    <div className="gap-15 items-center text-primary cursor-pointer" key={index}>
                        <Link onClick={() => {
                            setShowSelect(false)
                        }} href={pathnamePort.join('/')}>{lang.code}</Link>
                    </div>
                )
            })}
            </div>
        </motion.div>
    )
}