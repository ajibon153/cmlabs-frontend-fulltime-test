"use client"

import Image from "next/image"
import { useState } from "react"

type CardProps = {
    mealImg: string
    mealName: string
}

export default function Card(props: CardProps) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <article className="group relative overflow-hidden rounded-xl border p-0 hover:shadow hover:border-0 transition-shadow ease-in-out duration-150 w-full h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden={true} style={{ display: isLoading ? undefined : "none" }} />
            <Image
                fill
                src={props.mealImg}
                alt={props.mealName}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`rounded object-cover transition-opacity duration-500 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"}`}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 bg-gray-800/60 flex items-center justify-center transition-opacity duration-150 ease-in-out opacity-100 group-hover:opacity-0">
                <h3 className="text-white text-center text-lg px-3 truncate">{props.mealName}</h3>
            </div>
        </article>
    )
}
