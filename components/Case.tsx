"use client"
import { CaseInfo } from "./SubTitleCase"
import { Case as CaseData } from "@/types/Case"

export const Case = ({data, activeCase, setActiveCase}: {data: CaseData, activeCase?:CaseData, setActiveCase: (arg:CaseData) => void }) => {

    return (
       <div>
        <div className={`cursor-pointer transition-all duration-500 text-sm ${activeCase?.id === data.id ? 'font-bold' : 'font-normal'}`} onClick={() => {
            setActiveCase(data)
        }}>{data.title} ({data.state})</div>
         <div className={`z-20 rounded-2xl p-10 absolute transition-all duration-500 right-20 w-1/3 ${activeCase?.id === data.id ? 'bottom-30' : '-bottom-full'}`} style={{
            backgroundColor: `var(--color-ods${data.mainOds})`
        }}>
           
           <CaseInfo title="Nome da Cooperativa" text={data.cooperName} />
           <CaseInfo title="Ramo" text={data.branch} />
           {/* <CaseInfo title="Categorias" text={data.categories[0]} /> */}
           <CaseInfo title="Categorias" text={data.excerpt} />
        </div>
       </div>
    )
}