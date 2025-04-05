"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Sample donation data
const initialDonations = [
  { id: 1, name: "Amalia S.", amount: 33.1, date: "Mar 5, 2025", type: "regular" },
  { id: 2, name: "Ngozi A.", amount: 11.3, date: "Mar 5, 2025", type: "regular" },
  { id: 3, name: "Chioma O.", amount: 27.2, date: "Mar 2, 2025", type: "dedicated" },
  { id: 4, name: "Patrick M.", amount: 110.0, date: "Mar 2, 2025", type: "regular" },
  { id: 5, name: "Jennifer O.", amount: 22.2, date: "Feb 24, 2025", type: "regular" },
  { id: 6, name: "Mosope O.", amount: 6.0, date: "Feb 12, 2025", type: "dedicated" },
  { id: 7, name: "Dmitrii S.", amount: 20.0, date: "Feb 9, 2025", type: "one-time" },
  { id: 8, name: "YanjuFoundation", amount: 21.9, date: "Feb 6, 2025", type: "dedicated" },
]

export default function DonationList() {
  const [donations, setDonations] = useState(initialDonations)
  const [showNewDonation, setShowNewDonation] = useState(false)
  const [newDonation, setNewDonation] = useState<any>(null)

  // Simulate new donations coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNames = ["Michael T.", "Sophia L.", "James W.", "Emma R.", "Noah K."]
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)]
      const randomAmount = Number.parseFloat((Math.random() * 100 + 5).toFixed(2))
      const randomType = Math.random() > 0.7 ? "dedicated" : "regular"

      const donation = {
        id: Date.now(),
        name: randomName,
        amount: randomAmount,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        type: randomType,
      }

      setNewDonation(donation)
      setShowNewDonation(true)

      setTimeout(() => {
        setDonations((prev) => [donation, ...prev.slice(0, 7)])
        setShowNewDonation(false)
      }, 3000)
    }, 15000) // New donation every 15 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="max-h-[400px] overflow-y-auto">
        <AnimatePresence>
          {showNewDonation && newDonation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 border-l-4 border-green-500"
            >
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {newDonation.name} made a {newDonation.type} donation
                  </p>
                  <p className="text-sm text-gray-500">{newDonation.date}</p>
                </div>
                <p className="font-bold text-[#e0117f]">${newDonation.amount.toFixed(2)}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {donations.map((donation) => (
          <motion.div
            key={donation.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border-b last:border-b-0 border-gray-100"
          >
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">
                  {donation.name} made{" "}
                  {donation.type === "dedicated"
                    ? "a dedicated"
                    : donation.type === "one-time"
                      ? "a one-time"
                      : "their regular"}{" "}
                  donation
                </p>
                <p className="text-sm text-gray-500">{donation.date}</p>
              </div>
              <p className="font-bold text-[#e0117f]">${donation.amount.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

