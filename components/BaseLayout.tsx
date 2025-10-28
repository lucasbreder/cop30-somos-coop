import { ReactNode } from "react"
import { Intro } from "./Intro"

export const BaseLayout = ({children} :{children?:ReactNode}) => {
    return (
        <Intro>
            {children}
        </Intro>
    )
}