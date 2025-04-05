"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface ConfettiProps {
  duration?: number
  pieces?: number
}

export default function Confetti({ duration = 6000, pieces = 200 }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight 

    // Confetti colors
    const colors = ["#e0117f", "#723fa3", "#fff6fa", "#fefefe"]

    // Create confetti pieces
    const confetti: {
      x: number
      y: number
      size: number
      color: string
      speed: number
      angle: number
      rotation: number
      rotationSpeed: number
    }[] = []

    for (let i = 0; i < pieces; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.2 - 0.1,
      })
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const piece of confetti) {
        ctx.save()
        ctx.translate(piece.x, piece.y)
        ctx.rotate(piece.rotation)

        ctx.fillStyle = piece.color
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size)

        ctx.restore()

        // Update position
        piece.y += piece.speed
        piece.x += Math.sin(piece.angle) * 2
        piece.rotation += piece.rotationSpeed

        // Reset if off screen
        if (piece.y > canvas.height + 20) {
          piece.y = -20
          piece.x = Math.random() * canvas.width
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Redirect after duration
    const timeout = setTimeout(() => {
      cancelAnimationFrame(animationFrame)
      router.push("/")
    }, duration)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timeout)
    }
  }, [duration, pieces, router])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="relative z-10 text-center p-8 rounded-2xl bg-white border border-[#e0117f]/20">
        <h2 className="text-3xl font-bold text-[#e0117f] mb-4 font-poppins">Thank You!</h2>
        <p className="text-xl text-gray-700 mb-6">
          Your donation will make a real difference in the lives of young girls.
        </p>
        <p className="text-gray-600">Redirecting you to the home page...</p>
      </div>
    </div>
  )
}

