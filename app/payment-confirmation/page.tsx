"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Confetti from "@/components/confetti"

export default function PaymentConfirmationPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleConfirmPayment = () => {
    setShowConfetti(true)
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      {showConfetti && <Confetti />}

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#723fa3] mb-4 font-poppins">Confirm Your Donation</h1>
          <p className="text-lg text-gray-600">
            Thank you for your generosity! Please confirm when you've completed your bank transfer.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#e0117f]/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#e0117f] mb-6 font-poppins">Bank Transfer Details</h2>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#fff6fa] rounded-lg">
              <span className="font-medium text-gray-700">Account Number:</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#723fa3] text-xl" id="account-number">
                  0274330265
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-[#e0117f]/20 text-[#e0117f] hover:bg-[#e0117f]/5"
                  onClick={() => {
                    navigator.clipboard.writeText("0274330265")
                    alert("Account number copied to clipboard!")
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#fff6fa] rounded-lg">
              <span className="font-medium text-gray-700">Account Name:</span>
              <span className="font-bold text-[#723fa3]">Fagha Debo</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#fff6fa] rounded-lg">
              <span className="font-medium text-gray-700">Bank:</span>
              <span className="font-bold text-[#723fa3]">Wema Bank</span>
            </div>
          </div>

          <div className="mt-8 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              <strong>Important:</strong> Please include "HerNova Donation" as the reference for your transfer.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={handleConfirmPayment}
            className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white py-6 px-10 rounded-full text-lg font-medium"
          >
            I Have Made The Payment
          </Button>

          <p className="mt-4 text-gray-500 text-sm">Click the button above once you've completed your bank transfer.</p>
        </div>
      </div>
    </div>
  )
}

