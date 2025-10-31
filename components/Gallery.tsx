import Image from "next/image"
import { useState } from "react"

export const Gallery = ({gallery}:{gallery:string[]}) => {

    const [activeImage, setActiveImage] = useState(gallery[0])

    return (
        <div className="flex flex-col h-full">
            <div className="w-full h-4/6 bg-gray-300 mb-5 relative">
                <Image src={activeImage} fill alt="" />
            </div>
            <div className="flex gap-5">
                {gallery.map((image, index) => (
                <div className="relative h-40 bg-gray-300 flex-1/3" key={index} onClick={() => {
                    setActiveImage(image)
                }}>
                    <Image src={image} fill alt="" />
                </div>
            ))}
            </div>
        </div>
    )
}