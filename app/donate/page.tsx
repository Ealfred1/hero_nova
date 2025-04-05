"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DonationList from "@/components/donation-list"
import LineBackground from "@/components/line-background"
import ImpactCounter from "@/components/impact-counter"

export default function DonatePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-white text-[#e0117f] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <LineBackground color="e0117f" lineCount={15} />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">Make a Difference Today</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your donation helps us empower young girls with the knowledge and resources they need to thrive.
              </p>
              <Button
                asChild
                className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white py-6 px-10 rounded-full text-lg font-medium"
              >
                <Link href="/payment-confirmation">Donate Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-[#fff6fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Impact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#723fa3] mb-6 font-poppins">Your Impact</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Your donation directly supports our programs that provide menstrual health education and sanitary
                  products to young girls, helping them stay in school and reach their full potential.
                </p>

                <ImpactCounter raised={41590} goal={60000} girlsHelped={5000} schoolsReached={120} />

                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-[#e0117f]/10 p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e0117f]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-[#e0117f]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#723fa3] mb-2 font-poppins">$25 provides</h4>
                      <p className="text-gray-600">
                        A month's supply of sanitary pads for one girl, ensuring she doesn't miss school during her
                        period.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#e0117f]/10 p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e0117f]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-[#e0117f]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#723fa3] mb-2 font-poppins">$100 provides</h4>
                      <p className="text-gray-600">
                        Educational materials for a classroom of 30 girls, teaching them about menstrual health and
                        hygiene.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#e0117f]/10 p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e0117f]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-[#e0117f]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#723fa3] mb-2 font-poppins">$500 provides</h4>
                      <p className="text-gray-600">
                        A scholarship for one girl for a year, covering school fees, supplies, and transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#723fa3] mb-4 font-poppins">Recent Donations</h3>
                <DonationList />
              </div>
            </motion.div>

            {/* Right Column - Bank Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#e0117f]/20 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#e0117f] p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold font-poppins">Donate to HerNova</h2>
                    </div>
                    <p className="text-white/90">
                      Your donation can help a girl stay in school, maintain her dignity, and build a brighter future.
                    </p>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#723fa3] mb-6 font-poppins">Bank Transfer Details</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex flex-col p-4 bg-[#fff6fa] rounded-lg">
                        <span className="font-medium text-gray-700 mb-1">Account Number:</span>
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

                      <div className="flex flex-col p-4 bg-[#fff6fa] rounded-lg">
                        <span className="font-medium text-gray-700 mb-1">Account Name:</span>
                        <span className="font-bold text-[#723fa3]">Fagha Debo</span>
                      </div>

                      <div className="flex flex-col p-4 bg-[#fff6fa] rounded-lg">
                        <span className="font-medium text-gray-700 mb-1">Bank:</span>
                        <span className="font-bold text-[#723fa3]">Wema Bank</span>
                      </div>
                    </div>

                    <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg mb-8">
                      <p className="text-yellow-800">
                        <strong>Important:</strong> Please include "HerNova Donation" as the reference for your
                        transfer.
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-[#e0117f] hover:bg-[#e0117f]/90 text-white py-6 rounded-lg text-lg font-medium"
                    >
                      <Link href="/payment-confirmation">I Have Made The Payment</Link>
                    </Button>

                    <p className="mt-4 text-center text-gray-500 text-sm">
                      Click the button above once you've completed your bank transfer.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-white border border-[#e0117f]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#723fa3] mb-4 font-poppins">Other Ways to Donate</h3>
                <p className="text-gray-600 mb-4">
                  If you prefer to donate in person or have any questions about making a donation, please contact us:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: donations@hernova.org</li>
                  <li>Phone: +234 123 456 7890</li>
                  <li>Visit: 123 Empowerment Street, Lagos, Nigeria</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Impact Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your donations are changing lives and creating opportunities for young girls.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina, 14",
                story:
                  "Before HerNova came to my school, I used to miss classes every month during my period. Now, I have access to sanitary pads and education about menstrual health. I haven't missed a single day of school in the past year!",
              },
              {
                name: "Grace, 16",
                story:
                  "The scholarship from HerNova has changed my life. I was about to drop out because my family couldn't afford the fees, but now I can continue my education and pursue my dream of becoming a doctor.",
              },
              {
                name: "Fatima, 15",
                story:
                  "The menstrual health workshops taught me so much about my body. I used to believe myths about periods, but now I understand what's happening and how to take care of myself. I've even taught my younger sisters!",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#e0117f]/10 rounded-xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${story.name}`}
                    alt={story.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#e0117f] mb-3 font-poppins">{story.name}</h3>
                  <p className="text-gray-700">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e0117f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Join Our Mission</h2>
              <p className="text-xl mb-8 text-white/90">
                Beyond financial contributions, there are many ways you can support our mission to empower young girls.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-lg py-6"
                >
                  <Link href="#">Volunteer With Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-lg py-6"
                >
                  <Link href="#">Become a Partner</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-lg py-6"
                >
                  <Link href="#">Spread the Word</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

