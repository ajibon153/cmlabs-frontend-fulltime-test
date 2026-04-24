"use client"

import Image from "next/image"
import { useState } from "react"

type ImageWithSkeletonProps = {
    src: string
    alt: string
    className?: string
    sizes?: string
    priority?: boolean
}

export default function ImageWithSkeleton({
    src,
    alt,
    className = "",
    sizes = "(max-width: 768px) 100vw, 50vw",
    priority = false,
}: ImageWithSkeletonProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    return (
        <div className="relative w-full overflow-hidden rounded">
            {!isLoaded && !hasError && (
                <div className="h-72 w-full rounded bg-gray-200 animate-pulse" />
            )}

            {hasError ? (
                <div className="flex h-72 w-full items-center justify-center rounded bg-gray-100 text-sm text-gray-500">
                    Image unavailable
                </div>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={600}
                    sizes={sizes}
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                    className={`${className} transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                />
            )}
        </div>
    )
}
