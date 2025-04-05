"use client"

import { useEffect, useRef } from "react"

interface LineBackgroundProps {
  color: string
  lineCount?: number
}

export default function LineBackground({ color, lineCount = 25 }: LineBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Parse color to RGB
    const parseColor = (color: string) => {
      const hex = color.replace("#", "")
      return {
        r: Number.parseInt(hex.substring(0, 2), 16),
        g: Number.parseInt(hex.substring(2, 4), 16),
        b: Number.parseInt(hex.substring(4, 6), 16),
      }
    }

    const colorRGB = parseColor(color)

    // Create lines
    class Line {
      x1: number
      y1: number
      x2: number
      y2: number
      angle: number
      length: number
      speed: number
      opacity: number
      width: number

      constructor() {
        this.angle = Math.random() * Math.PI * 2
        this.length = Math.random() * 200 + 100
        this.x1 = Math.random() * canvas.width
        this.y1 = Math.random() * canvas.height
        this.x2 = this.x1 + Math.cos(this.angle) * this.length
        this.y2 = this.y1 + Math.sin(this.angle) * this.length
        this.speed = Math.random() * 0.5 + 0.1
        this.opacity = Math.random() * 0.1 + 0.05
        this.width = Math.random() * 1 + 0.5
      }

      update() {
        this.x1 += Math.cos(this.angle) * this.speed
        this.y1 += Math.sin(this.angle) * this.speed
        this.x2 += Math.cos(this.angle) * this.speed
        this.y2 += Math.sin(this.angle) * this.speed

        // Reset if off screen
        if (
          (this.x1 < -this.length && this.x2 < -this.length) ||
          (this.x1 > canvas.width + this.length && this.x2 > canvas.width + this.length) ||
          (this.y1 < -this.length && this.y2 < -this.length) ||
          (this.y1 > canvas.height + this.length && this.y2 > canvas.height + this.length)
        ) {
          this.angle = Math.random() * Math.PI * 2
          this.length = Math.random() * 200 + 100

          // Determine which edge to start from
          const edge = Math.floor(Math.random() * 4)

          if (edge === 0) {
            // Top
            this.x1 = Math.random() * canvas.width
            this.y1 = -this.length
          } else if (edge === 1) {
            // Right
            this.x1 = canvas.width + this.length
            this.y1 = Math.random() * canvas.height
          } else if (edge === 2) {
            // Bottom
            this.x1 = Math.random() * canvas.width
            this.y1 = canvas.height + this.length
          } else {
            // Left
            this.x1 = -this.length
            this.y1 = Math.random() * canvas.height
          }

          this.x2 = this.x1 + Math.cos(this.angle) * this.length
          this.y2 = this.y1 + Math.sin(this.angle) * this.length
        }
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.strokeStyle = `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${this.opacity})`
        ctx.lineWidth = this.width
        ctx.stroke()
      }
    }

    const lines: Line[] = []
    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const line of lines) {
        line.update()
        line.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [color, lineCount])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
}

