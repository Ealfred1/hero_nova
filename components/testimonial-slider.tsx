"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Amina K.",
    role: "Student, 14",
    quote:
      "HerNova Foundation has changed my life. I used to miss school during my period, but now I have access to sanitary pads and knowledge about menstrual health. I haven't missed a single day of school in the past year!",
    image: "/placeholder.svg?height=100&width=100&text=Amina",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Teacher",
    quote:
      "The impact of HerNova's programs on my students has been remarkable. Girls who used to miss classes regularly are now attending consistently. Their confidence has improved, and they're performing better academically.",
    image: "/placeholder.svg?height=100&width=100&text=Sarah",
  },
  {
    id: 3,
    name: "Grace O.",
    role: "Student, 16",
    quote:
      "The scholarship from HerNova has given me hope for the future. I was about to drop out because my family couldn't afford the fees, but now I can continue my education and pursue my dream of becoming a doctor.",
    image: "/placeholder.svg?height=100&width=100&text=Grace",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#e0117f]/20">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4 text-[#e0117f]">
                  <Quote className="w-10 h-10 opacity-50" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">{testimonials[current].quote}</p>
                <div>
                  <h4 className="text-xl font-bold text-[#723fa3] font-poppins">{testimonials[current].name}</h4>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#723fa3] hover:bg-[#723fa3] hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-[#e0117f] w-6" : "bg-[#e0117f]/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#723fa3] hover:bg-[#723fa3] hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

