import { ReactNode } from "react"
import { Intro } from "./Intro"

export const BaseLayout = ({children, className} :{children?:ReactNode[] | ReactNode, className?:string}) => {
    return (
        <Intro>
            {children}
        </Intro>
    )
}