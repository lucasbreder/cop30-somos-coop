import Link from "next/link"

export const Button = ({label, url,ods}:{label:string, url:string, ods:number}) => {

    const color = `var(--color-ods${ods})`

    return (
        <div className="border uppercase py-1 px-4 rounded-full w-full text-center text-2xl" style={{
            color: color,
            borderColor: color
        }}>
            <Link href={url}>{label}</Link>
        </div>
    )
}