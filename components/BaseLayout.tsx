"use client"
import { ReactNode } from "react"
import { Intro } from "./Intro"
import { usePathname } from "next/navigation"

export const BaseLayout = ({children} :{children?:ReactNode}) => {
    const pathname = usePathname()
    return (
        <Intro isHome={pathname === '/'}>
            {children}
        </Intro>
    )
}