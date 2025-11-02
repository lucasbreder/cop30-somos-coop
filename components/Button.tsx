import Link from "next/link"

export const Button = ({label, url,ods}:{label:string, url:string, ods:number}) => {

    const color = `var(--color-ods${ods})`

    return (
         <Link style={{
            color: color,
            borderColor: color
        }} className="pointer-cursor border uppercase py-1 px-4 rounded-full w-full text-center text-2xl flex gap-2 items-center justify-center" href={url}>
           {label}
             <svg width={30} height={30} viewBox="0 0 640 640">
              <path fill={color} d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg>
           
        </Link>
    )
}