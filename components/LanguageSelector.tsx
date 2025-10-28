import { languages } from "@/data/languages"
import { motion } from "motion/react"
import Link from "next/link"

export const LanguageSelector = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} exit={{opacity: 0}}  className="flex gap-15 justify-center">
            {languages.map((lang, index) => {
                return (
                    <div className="flex flex-col gap-15 items-center" key={index}>
                        <div className="rounded-full w-30 h-30 border border-white"></div>
                        <div>
                            <Link href={`/${lang.code}`}>{lang.name}</Link>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}