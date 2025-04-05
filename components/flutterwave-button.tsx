"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface FlutterwaveButtonProps {
  amount: string
  email: string
  name: string
  phone: string
  isMonthly: boolean
  isProcessing: boolean
  onSuccess: () => void
}

export default function FlutterwaveButton({
  amount,
  email,
  name,
  phone,
  isMonthly,
  isProcessing,
  onSuccess,
}: FlutterwaveButtonProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Simulate API call to Flutterwave
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      onSuccess()

      toast({
        title: "Payment Successful",
        description: `Thank you for your ${isMonthly ? "monthly" : "one-time"} donation of $${amount}`,
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isProcessing || isLoading || !amount || !email || !name}
      className="w-full bg-gradient-to-r from-[#e0117f] to-[#723fa3] hover:opacity-90 rounded-lg py-6 text-lg font-medium"
    >
      {isLoading || isProcessing ? "Processing..." : isMonthly ? "Donate Monthly" : "Donate Now"}
    </Button>
  )
}

