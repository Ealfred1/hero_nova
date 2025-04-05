"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface ImpactCounterProps {
  raised: number
  goal: number
  girlsHelped: number
  schoolsReached: number
}

export default function ImpactCounter({ raised, goal, girlsHelped, schoolsReached }: ImpactCounterProps) {
  const [currentRaised, setCurrentRaised] = useState(0)
  const [currentGirls, setCurrentGirls] = useState(0)
  const [currentSchools, setCurrentSchools] = useState(0)
  const [progressValue, setProgressValue] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const raisedInterval = raised / (duration / 16)
    const girlsInterval = girlsHelped / (duration / 16)
    const schoolsInterval = schoolsReached / (duration / 16)
    const progressInterval = ((raised / goal) * 100) / (duration / 16)

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed < duration) {
        const progress = elapsed / duration
        setCurrentRaised(Math.min(raised * progress, raised))
        setCurrentGirls(Math.min(Math.floor(girlsHelped * progress), girlsHelped))
        setCurrentSchools(Math.min(Math.floor(schoolsReached * progress), schoolsReached))
        setProgressValue(Math.min((raised / goal) * 100 * progress, (raised / goal) * 100))

        requestAnimationFrame(animate)
      } else {
        setCurrentRaised(raised)
        setCurrentGirls(girlsHelped)
        setCurrentSchools(schoolsReached)
        setProgressValue((raised / goal) * 100)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, raised, goal, girlsHelped, schoolsReached])

  return (
    <div ref={ref} className="bg-white rounded-xl border border-[#e0117f]/10 p-8 mb-8">
      <h3 className="text-2xl font-bold text-[#e0117f] mb-4 font-poppins">Our Impact</h3>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium text-[#723fa3]">
            ${currentRaised.toLocaleString(undefined, { maximumFractionDigits: 0 })} raised
          </span>
          <span className="text-gray-600">${goal.toLocaleString()} goal</span>
        </div>
        <Progress value={progressValue} className="h-3 mb-2" />
        <p className="text-gray-600 text-sm">We're {Math.round(progressValue)}% of the way to our goal!</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#e0117f]/5 rounded-xl p-4 text-center"
        >
          <h4 className="text-3xl font-bold text-[#e0117f] mb-1">{currentGirls.toLocaleString()}+</h4>
          <p className="text-gray-600 text-sm">Girls Helped</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#723fa3]/5 rounded-xl p-4 text-center"
        >
          <h4 className="text-3xl font-bold text-[#723fa3] mb-1">{currentSchools.toLocaleString()}+</h4>
          <p className="text-gray-600 text-sm">Schools Reached</p>
        </motion.div>
      </div>
    </div>
  )
}

