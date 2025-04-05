"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  color1: string
  color2: string
}

export default function AnimatedBackground({ color1, color2 }: AnimatedBackgroundProps) {
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

    // Parse colors to RGB
    const parseColor = (color: string) => {
      const hex = color.replace("#", "")
      return {
        r: Number.parseInt(hex.substring(0, 2), 16),
        g: Number.parseInt(hex.substring(2, 4), 16),
        b: Number.parseInt(hex.substring(4, 6), 16),
      }
    }

    const color1RGB = parseColor(color1)
    const color2RGB = parseColor(color2)

    // Create gradient particles
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 15 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1

        // Interpolate between the two colors
        const ratio = Math.random()
        const r = Math.floor(color1RGB.r * ratio + color2RGB.r * (1 - ratio))
        const g = Math.floor(color1RGB.g * ratio + color2RGB.g * (1 - ratio))
        const b = Math.floor(color1RGB.b * ratio + color2RGB.b * (1 - ratio))

        this.color = `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.2 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [color1, color2])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" aria-hidden="true" />
}

