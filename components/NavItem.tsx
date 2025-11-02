import Image from "next/image"
import { useRouter } from "next/navigation"


export const NavItem = ({icon, label, url}: {icon?:string, label?:string, url?:string}) => {

    const router = useRouter()

    return (
       <div className="flex gap-3 cursor-pointer items-center" onClick={() => {
                if(url) router.push(url)
                if(!url) router.back()
            }}>
                {icon && <div className="w-8 h-8 relative"><Image sizes="80vw" src={icon} alt="Voltar" fill /></div>}
                <div className="uppercase font-light border-l border-primary pl-2">{label}</div>
            </div>
    )
}