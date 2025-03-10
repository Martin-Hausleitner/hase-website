"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { motion } from "motion/react"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import { type RefObject, useEffect, useId, useState } from "react"

interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ width: svgWidth, height: svgHeight })

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        const controlY = startY - curvature
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
        setPathD(d)
      }
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updatePath()
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    updatePath()

    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
      <path d={pathD} strokeWidth={pathWidth} stroke={`url(#${id})`} strokeOpacity="1" strokeLinecap="round" />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const photosRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const fanslyRef = useRef<HTMLDivElement>(null)
  const onlyfansRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10" ref={containerRef}>
      <div className="flex size-full max-h-[200px] max-w-lg items-center justify-between">
        {/* Left side icons */}
        <div className="flex flex-col space-y-4">
          <Circle ref={videoRef}>
            <Icons.MessageSquareText />
            <span className="absolute -bottom-5 text-xs">Chat</span>
          </Circle>
          <Circle ref={audioRef}>
            <Icons.Video />
            <span className="absolute -bottom-5 text-xs">Video</span>
          </Circle>
          <Circle ref={textRef}>
            <Icons.Camera />
            <span className="absolute -bottom-5 text-xs">Camera</span>
          </Circle>
          <Circle ref={photosRef}>
            <Icons.Mic />
            <span className="absolute -bottom-5 text-xs">Audio</span>
          </Circle>
        </div>
        
        {/* Center logo */}
        <Circle ref={logoRef} className="size-32">
          <Icons.logo />
        </Circle>
        
        {/* Right side logos */}
        <div className="flex flex-col space-y-8">
          <Circle ref={fanslyRef}>
            <Icons.fansly />
          </Circle>
          <Circle ref={onlyfansRef}>
            <Icons.onlyfans />
          </Circle>
        </div>
      </div>

      {/* Animated beams connecting to the center */}
      <AnimatedBeam containerRef={containerRef} fromRef={videoRef} toRef={logoRef} curvature={-30} />
      <AnimatedBeam containerRef={containerRef} fromRef={audioRef} toRef={logoRef} curvature={-15} />
      <AnimatedBeam containerRef={containerRef} fromRef={textRef} toRef={logoRef} curvature={15} />
      <AnimatedBeam containerRef={containerRef} fromRef={photosRef} toRef={logoRef} curvature={30} />
      <AnimatedBeam containerRef={containerRef} fromRef={fanslyRef} toRef={logoRef} curvature={-30} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={onlyfansRef} toRef={logoRef} curvature={30} reverse />
    </div>
  )
}

const Icons = {
  Camera: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  MessageSquareText: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M7 8h10"/>
      <path d="M7 12h4"/>
    </svg>
  ),
  Video: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z"/>
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  ),
  Mic: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" x2="12" y1="19" y2="22"/>
    </svg>
  ),
  FileText: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
      <path d="M10 9H8"/>
      <path d="M16 13H8"/>
      <path d="M16 17H8"/>
    </svg>
  ),
  Image: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  ),
  logo: () => (
    <svg width="50" height="50" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.87852 24.4715L0 26L1.52855 19.1214C0.553072 17.2973 0 15.2132 0 13C0 5.82029 5.82029 0 13 0C20.1796 0 26 5.82029 26 13C26 20.1796 20.1796 26 13 26C10.7867 26 8.70272 25.447 6.87852 24.4715ZM7.25497 21.7243L8.10456 22.1786C9.59722 22.9768 11.2651 23.4 13 23.4C18.7438 23.4 23.4 18.7438 23.4 13C23.4 7.25624 18.7438 2.6 13 2.6C7.25624 2.6 2.6 7.25624 2.6 13C2.6 14.7348 3.02314 16.4027 3.82134 17.8954L4.27565 18.745L3.42441 22.5755L7.25497 21.7243Z" fill="black"/>
      <path d="M7 11.2729C7 9.46532 8.47746 8 10.3 8C11.4161 8 12.4028 8.54952 13 9.39063C13.5972 8.54952 14.5839 8 15.7 8C17.5226 8 19 9.46532 19 11.2729C19 15.7359 12.9999 19 12.9999 19C12.9999 19 7 15.7359 7 11.2729Z" fill="black"/>
    </svg>
  ),
  fansly: () => (
    <svg height="20" viewBox="-.09 .15 800.05 657.84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m197.44.38c13.02.2 22.34.78 27.72 1.71 4.46.77 11.75 2.32 16.2 3.45 4.46 1.13 12.13 3.43 17.06 5.11s14.71 5.89 21.75 9.34 16.82 8.96 21.75 12.24 12.6 9.03 17.06 12.79 19.9 18.66 60.53 59.4l.01 7.67-61.85 61.79-7.65-.04-28.14-27.96c-18.84-18.71-30.12-29.26-34.12-31.89-3.28-2.16-9.23-5.46-13.22-7.35-3.99-1.88-10.9-4.4-15.35-5.59-4.46-1.19-11.94-2.48-16.63-2.87s-12.17-.4-16.63-.03-11.36 1.5-15.35 2.5c-3.99 1.01-10.51 3.23-14.5 4.94s-10.7 5.36-14.93 8.1c-4.22 2.74-10.98 8.29-15.03 12.34-4.04 4.04-9.6 10.8-12.34 15.02-2.75 4.22-6.39 10.93-8.11 14.92-1.71 3.98-3.94 10.5-4.95 14.49-1.01 3.98-2.13 10.89-2.51 15.34-.37 4.45-.36 11.93.03 16.62s1.68 12.17 2.88 16.62c1.19 4.45 3.71 11.36 5.59 15.34s5.19 9.93 7.34 13.21c2.75 4.19 15.24 17.32 79.97 82.25l140.72-140.49c77.4-77.27 143.99-143.08 147.97-146.24 3.99-3.16 10.9-8.18 15.35-11.14 4.46-2.97 11.75-7.33 16.2-9.68 4.46-2.36 12.32-6.01 17.48-8.12s13.99-5.17 19.62-6.79 15.22-3.85 21.32-4.94c9.69-1.73 13.82-1.98 32.84-1.98 19.01 0 23.14.25 32.84 1.98 6.1 1.09 15.69 3.31 21.32 4.94 5.63 1.62 14.46 4.68 19.62 6.79s13.03 5.79 17.48 8.17c4.46 2.38 11.36 6.47 15.35 9.09s10.9 7.68 15.35 11.25c4.46 3.57 12.34 10.87 17.52 16.21s11.75 12.78 14.59 16.53 7.18 9.89 9.65 13.64c2.46 3.75 7.3 12.57 10.75 19.6s7.8 17.39 9.66 23.01c1.86 5.63 4.35 14.64 5.53 20.03 1.19 5.39 2.56 13.06 3.05 17.05.49 3.98 1.14 12.04 1.43 17.9.3 6.03.1 15.83-.48 22.59-.55 6.56-1.78 15.96-2.73 20.88s-2.68 12.4-3.86 16.62-3.51 11.31-5.18 15.77c-1.67 4.45-4.68 11.55-6.7 15.77s-5.86 11.31-8.54 15.77c-2.68 4.45-7.44 11.55-10.57 15.77s-9.36 11.7-13.85 16.62-18.08 18.82-52.26 52.82l-8.53.01-29.73-29.61c-16.94-16.87-30.24-30.8-30.92-32.38-.67-1.57-.96-3.79-.65-5.11.36-1.56 9.55-11.45 27.54-29.62 17.65-17.83 28.51-29.49 31.34-33.67 2.38-3.52 5.68-9.08 7.33-12.36s4-9.13 5.23-13 2.81-10.39 3.52-14.49 1.28-10.62 1.28-14.49-.43-10-.94-13.64c-.51-3.63-1.89-9.87-3.05-13.85s-3.45-10.12-5.09-13.64c-1.63-3.52-5.02-9.46-7.51-13.21-2.5-3.75-7.18-9.52-10.4-12.81-3.22-3.3-8.54-8.02-11.82-10.49s-9.62-6.35-14.07-8.62c-4.46-2.27-11.36-5.11-15.35-6.3s-9.74-2.6-12.79-3.13-10.15-.95-15.78-.93-13.3.62-17.06 1.34c-3.75.72-9.7 2.27-13.22 3.45-3.52 1.17-8.89 3.39-11.94 4.92s-8.42 4.67-11.94 6.97c-4.73 3.1-16.23 13.97-81.91 79.31l101.08 101c92.7 92.62 101.08 101.23 101.08 103.77 0 1.52-.55 3.82-1.22 5.11s-56.42 57.41-123.88 124.71c-92.64 92.41-123.7 122.91-126.92 124.6-2.35 1.23-6.57 2.84-9.38 3.57s-7.42 1.32-10.23 1.31-6.84-.43-8.96-.92c-2.11-.49-5.95-1.87-8.53-3.07c-4.09-1.89-25.63-23.07-167.45-164.65-89.51-89.36-165.83-166.12-169.59-170.57s-9.26-11.74-12.21-16.19c-2.96-4.45-7.06-11.17-9.11-14.92s-5.21-10.08-7.03-14.06-4.61-11.08-6.21-15.77-3.83-12.17-4.95-16.62c-1.13-4.45-2.68-11.74-3.44-16.19-.82-4.79-1.57-15.4-1.83-26-.34-13.77-.12-20.36.96-28.55.77-5.86 2.39-15.06 3.6-20.46 1.21-5.39 3.71-14.21 5.56-19.6s5.67-14.6 8.48-20.46c2.82-5.86 6.89-13.53 9.05-17.05s7.22-10.8 11.23-16.19 11.91-14.41 17.55-20.05 14.67-13.53 20.06-17.54 12.69-9.06 16.2-11.22c3.52-2.16 11.19-6.23 17.06-9.05 5.86-2.81 15.07-6.63 20.47-8.48 5.39-1.85 14.22-4.35 19.62-5.57 5.39-1.21 13.84-2.78 18.76-3.47 6.49-.92 14.35-1.18 28.57-.96z" fill="#2699f7"/>
    </svg>
  ),
  onlyfans: () => (
    <svg width="20" height="20" viewBox="-20.62 0.53 820.42 555.49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M266.82.53c35 0 69.65 6.91 101.98 20.34s61.71 33.11 86.45 57.93c24.75 24.81 44.37 54.27 57.77 86.7a267.919 267.919 0 0 1 20.29 102.27c0 108.09-64.93 205.53-164.51 246.89s-214.2 18.5-290.41-57.93C2.18 380.3-20.62 265.36 20.62 165.5 61.87 65.64 159.04.53 266.82.53zm0 347.4c10.5.01 20.9-2.05 30.61-6.07s18.52-9.93 25.95-17.38 13.31-16.29 17.33-26.02a80.365 80.365 0 0 0 6.06-30.7c0-32.43-19.48-61.66-49.35-74.07s-64.26-5.55-87.12 17.38-29.7 57.41-17.33 87.37 41.53 49.49 73.86 49.49z" fill="#00aeef"/>
      <path d="M566.35 200.96c67.71 19.54 147.63 0 147.63 0-23.19 101.55-96.75 165.15-202.81 172.89a266.766 266.766 0 0 1-40.48 65.86 266.208 266.208 0 0 1-57.62 51.43c-21.6 14.24-45.15 25.25-69.92 32.68s-50.48 11.19-76.33 11.18l79.95-254.81C428.95 18.28 471.08.54 665.98.54H799.8c-22.38 98.88-99.54 174.41-233.44 200.42z" fill="#008ccf"/>
    </svg>
  )
}

