"use client"

import { CSSProperties, useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Line {
    id: string
    direction: "to top" | "to left"
    size: number
    duration: number
}

export const HeroImage = () => {
    const { ref, inView } = useInView({ threshold: .8, triggerOnce: true })
    const [lines, setLines] = useState<Line[]>([])

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const randomNumberBetween = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const removeLine = (id: string) => {
        setLines((prev) => prev.filter((line) => line.id !== id))
    }

    useEffect(() => {
        if (!inView) return

        const renderLine = (timeout: number) => {
            timeoutRef.current = setTimeout(() => {
                setLines((lines) => [
                    ...lines,
                    {
                        direction: Math.random() > 0.5 ? "to top" : "to left",
                        duration: randomNumberBetween(1300, 3500),
                        size: randomNumberBetween(10, 30),
                        id: Math.random().toString(36).substring(7),
                    },
                ])

                renderLine(randomNumberBetween(800, 2500))
            }, timeout)
        }

        renderLine(randomNumberBetween(800, 1300))

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [inView, setLines])

    return (
        <div ref={ref} className='[perspective:2000px]'>
            <div className={`${inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]"} relative mt-[128px] bg-hero-image rounded-lg  border border-white/10`}>
                <div className={`${inView && "animate-image-glow"} absolute opacity-0 top-0 left-0 hero-glow h-full w-full  blur-[120px]`} />
                <div className="absolute w-full h-full top-0 left-0 z-50 overflow-hidden">
                    {lines.map((line) => (
                        <span
                            key={line.id}
                            onAnimationEnd={() => removeLine(line.id)}
                            style={{
                                "--size": line.size,
                                "--direction": line.direction,
                                "--animation-duration": line.duration + "ms",
                            } as CSSProperties}
                            className={
                                `${line.direction === "to left" ?
                                    "animate-glow-line-horizontal w-[calc(var(--size)*1rem)] h-[1px] left-0" :
                                    "animate-glow-line-vertical h-[calc(var(--size)*1rem)] w-[1px] right-0"} 
                                bg-glow-lines block absolute top-0`
                            }
                        />
                    ))}
                </div>
                <svg width="100%" viewBox="0 0 1499 778" fill="none" className={`${inView && "[&_path]:animate-sketch-lines"} absolute top-0 left-0 h-full w-full [&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]`}>
                    <path pathLength="1" d="M1500 72L220 72"></path>
                    <path pathLength="1" d="M1500 128L220 128"></path>
                    <path pathLength="1" d="M1500 189L220 189"></path>
                    <path pathLength="1" d="M220 777L220 1"></path>
                    <path pathLength="1" d="M538 777L538 128"></path>
                </svg>
                <img
                    className={`${inView ? "opacity-100" : "opacity-0"} delay-[600ms] transition-opacity relative rounded-lg`}
                    src="/images/hero.webp"
                    alt="hero image"
                />
            </div>
        </div>
    )
}
