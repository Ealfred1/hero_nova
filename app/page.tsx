"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Users, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "@/components/count-up"
import TestimonialSlider from "@/components/testimonial-slider"
import LineBackground from "@/components/line-background"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <LineBackground color="e0117f" lineCount={30} />
        </div>

        <div className="container relative z-20 mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-poppins text-5xl md:text-7xl font-bold text-[#e0117f] mb-6 leading-tight">
                Empowering <span className="text-[#723fa3]">Girls</span> to Shape the Future
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                At HerNova Foundation, we're dedicated to providing young girls with the knowledge and resources they
                need to thrive in a world full of possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-8 text-lg font-medium"
                >
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-[#e0117f]/20 text-[#e0117f] hover:bg-[#e0117f]/5 rounded-full px-8 text-lg font-medium"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden border border-[#e0117f]/10">
                <Image
                  src="/images/hero-image.jpeg"
                  alt="HerNova team with children"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-[#fff6fa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through your generous support, we've been able to make a significant difference in the lives of young
              girls around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8 text-center transform hover:translate-y-[-10px] transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">
                <CountUp end={5000} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Girls Supported</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8 text-center transform hover:translate-y-[-10px] transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">
                <CountUp end={120} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Schools Reached</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8 text-center transform hover:translate-y-[-10px] transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">
                <CountUp end={25000} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Sanitary Pads Distributed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8 text-center transform hover:translate-y-[-10px] transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">
                <CountUp end={95} duration={2.5} />%
              </h3>
              <p className="text-gray-600">Improved School Attendance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden border border-[#e0117f]/10">
                <Image
                  src="/images/classroom-presentation.jpeg"
                  alt="HerNova presentation in classroom"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-6 font-poppins">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At HerNova Foundation, our mission is to empower young girls with the knowledge and resources they need
                to thrive. We envision a world where every girl can dream, achieve, and break barriers.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Through our programs, we focus on menstrual health education and the distribution of sanitary pads to
                underprivileged girls, aiming to improve their health outcomes and school attendance.
              </p>
              <Button asChild size="lg" className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-8">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Our Work <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-[#fff6fa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We run various initiatives to support girls' education, health, and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border border-[#e0117f]/10 rounded-xl">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/images/classroom-presentation2.jpeg"
                    alt="Menstrual Health Education"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#e0117f] mb-3 font-poppins">Menstrual Health Education</h3>
                  <p className="text-gray-600 mb-4">
                    We provide comprehensive education on menstrual health and hygiene to young girls, helping them
                    understand their bodies and break the stigma around menstruation.
                  </p>
                  <Link href="/about" className="text-[#723fa3] font-medium flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border border-[#e0117f]/10 rounded-xl">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/images/pad-distribution.jpeg"
                    alt="Sanitary Pad Distribution"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#e0117f] mb-3 font-poppins">Sanitary Pad Distribution</h3>
                  <p className="text-gray-600 mb-4">
                    We distribute free sanitary pads to underprivileged girls to ensure they don't miss school during
                    their periods and can maintain proper hygiene.
                  </p>
                  <Link href="/about" className="text-[#723fa3] font-medium flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border border-[#e0117f]/10 rounded-xl">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="/images/student-interaction.jpeg"
                    alt="Scholarship Programs"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#e0117f] mb-3 font-poppins">Scholarship Programs</h3>
                  <p className="text-gray-600 mb-4">
                    We provide scholarships to talented girls from underprivileged backgrounds to help them continue
                    their education and achieve their dreams.
                  </p>
                  <Link href="/about" className="text-[#723fa3] font-medium flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the girls whose lives have been transformed through our programs.
            </p>
          </motion.div>

          <TestimonialSlider />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Join Us in Empowering Girls</h2>
              <p className="text-xl mb-8 text-white/90">
                Your donation can help a girl stay in school, maintain her dignity, and build a brighter future. Every
                contribution counts.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#e0117f] hover:bg-white/90 hover:text-[#e0117f] rounded-full px-10 py-6 text-lg font-medium"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#fff6fa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the impact of our work through these moments captured across our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/classroom-presentation.jpeg", alt: "Classroom presentation" },
              { src: "/images/classroom-presentation2.jpeg", alt: "Menstrual health education" },
              { src: "/images/classroom-presentation3.jpeg", alt: "Student engagement" },
              { src: "/images/team-with-children.jpeg", alt: "Team with children" },
              { src: "/images/team-members.jpeg", alt: "HerNova team members" },
              { src: "/images/classroom-students.jpeg", alt: "Students in classroom" },
              { src: "/images/pad-distribution.jpeg", alt: "Sanitary pad distribution" },
              { src: "/images/student-interaction.jpeg", alt: "Student interaction" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-[#e0117f]/10"
              >
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Our impact in action</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals behind HerNova Foundation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "/images/team-members.jpeg" },
              { name: "Michael Chen", role: "Operations Director", image: "/images/classroom-presentation3.jpeg" },
              { name: "Amina Patel", role: "Program Manager", image: "/images/classroom-presentation.jpeg" },
              { name: "David Okafor", role: "Outreach Coordinator", image: "/images/student-interaction.jpeg" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-[#e0117f]/10 overflow-hidden"
              >
                <div className="h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#e0117f] mb-1 font-poppins">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

