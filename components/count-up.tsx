"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  start?: number
  decimals?: number
}

export default function CountUp({ end, duration = 2, start = 0, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(progress * (end - start) + start)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration, isInView, hasAnimated])

  return (
    <span ref={countRef}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  )
}

