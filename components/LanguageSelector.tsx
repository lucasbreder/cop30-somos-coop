import { languages } from "@/data/languages"

export const LanguageSelector = () => {
    return (
        <div className="flex gap-15 justify-center">
            {languages.map(lang => {
                return (
                    <div className="flex flex-col gap-15 items-center" key={lang.code}>
                        <div className="rounded-full w-30 h-30 border border-white"></div>
                        <div>{lang.name}</div>
                    </div>
                )
            })}
        </div>
    )
}