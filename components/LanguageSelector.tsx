import { languages } from "@/data/languages";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const LanguageSelector = ({
  creditCompany,
}: {
  creditCompany?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
      className="flex gap-10 lg:gap-20 fhd:gap-28 fhdv:portrait:gap-26 justify-center w-full h-full items-center"
    >
      {languages.map((lang, index) => {
        return (
          <div
            className="flex flex-col gap-15 items-center text-white"
            key={index}
          >
            <div className="rounded-full fhd:w-30 fhd:h-30 fhdv:portrait:w-30 fhdv:portrait:h-30 w-20 h-20 relative">
              <Link
                href={
                  creditCompany
                    ? `/${lang.code}/credito/${creditCompany}`
                    : `/${lang.code}`
                }
              >
                <Image sizes="80vw" src={lang.flag} alt={lang.code} fill />
              </Link>
            </div>
            <div>
              <Link
                href={
                  creditCompany
                    ? `/${lang.code}/credito/${creditCompany}`
                    : `/${lang.code}`
                }
              >
                {lang.name}
              </Link>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
