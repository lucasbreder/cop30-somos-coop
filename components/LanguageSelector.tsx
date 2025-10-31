import { languages } from "@/data/languages"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export const LanguageSelector = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} exit={{opacity: 0}}  
        className="flex gap-15 justify-center w-full h-full items-center">
            {languages.map((lang, index) => {
                return (
                    <div className="flex flex-col gap-15 items-center text-white" key={index}>
                        <div className="rounded-full w-30 h-30 relative">
                             <Link href={`/${lang.code}`}><Image src={lang.flag} alt={lang.code} fill /></Link>
                        </div>
                        <div>
                            <Link href={`/${lang.code}`}>{lang.name}</Link>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}