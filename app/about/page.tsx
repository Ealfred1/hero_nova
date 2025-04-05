"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, BookOpen, Users, Target, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LineBackground from "@/components/line-background"

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-white text-[#e0117f] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <LineBackground color="e0117f" lineCount={30} />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">About HerNova Foundation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering young girls with knowledge and resources to thrive in a world full of possibilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#fff6fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#723fa3] mb-6 font-poppins">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At HerNova Foundation, our mission is to empower young girls with the knowledge and resources they
                  need to thrive. We envision a world where every girl can dream, achieve, and break barriers.
                </p>
                <p className="text-lg text-gray-700">
                  Through our programs, we focus on menstrual health education and the distribution of sanitary pads to
                  underprivileged girls, aiming to improve their health outcomes and school attendance.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#723fa3] mb-6 font-poppins">Our Vision</h2>
                <p className="text-lg text-gray-700">
                  We envision a world where every girl has access to education, healthcare, and the opportunity to reach
                  her full potential, regardless of her background or circumstances.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#e0117f]/10">
                <Image
                  src="/images/team-with-children.jpeg"
                  alt="HerNova team with children"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#723fa3] mb-4 font-poppins">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and shape our approach to empowering young girls.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#723fa3] mb-3 font-poppins">Compassion</h3>
              <p className="text-gray-600">
                We approach our work with empathy and understanding, recognizing the unique challenges faced by young
                girls in different communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#723fa3] mb-3 font-poppins">Impact</h3>
              <p className="text-gray-600">
                We are committed to creating measurable, sustainable change in the lives of the girls we serve, focusing
                on long-term outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#e0117f]/10 p-8"
            >
              <div className="w-16 h-16 bg-[#e0117f]/5 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#723fa3] mb-3 font-poppins">Inclusivity</h3>
              <p className="text-gray-600">
                We believe in creating opportunities for all girls, regardless of their background, ethnicity, religion,
                or socioeconomic status.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
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
              Learn about the initiatives we've developed to support girls' education, health, and well-being.
            </p>
          </motion.div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="education" className="text-lg py-3">
                Menstrual Health Education
              </TabsTrigger>
              <TabsTrigger value="distribution" className="text-lg py-3">
                Sanitary Pad Distribution
              </TabsTrigger>
              <TabsTrigger value="scholarship" className="text-lg py-3">
                Scholarship Programs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-[#e0117f] mb-4 font-poppins">Menstrual Health Education</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Our comprehensive menstrual health education program aims to break the stigma around menstruation
                    and provide girls with accurate information about their bodies.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Through workshops, interactive sessions, and educational materials, we teach girls about:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Menstrual hygiene management</li>
                    <li>Reproductive health basics</li>
                    <li>Debunking myths and misconceptions</li>
                    <li>Building confidence and self-esteem</li>
                  </ul>
                  <Button asChild className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-6">
                    <Link href="/donate" className="flex items-center gap-2">
                      Support This Program <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e0117f]/10">
                  <Image
                    src="/images/classroom-presentation.jpeg"
                    alt="Menstrual Health Education"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="distribution" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-[#e0117f] mb-4 font-poppins">Sanitary Pad Distribution</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Many girls miss school during their periods due to lack of access to sanitary products. Our
                    distribution program addresses this critical need.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">Through this initiative, we:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Distribute free sanitary pads to girls in underserved communities</li>
                    <li>Provide reusable pad options for sustainable menstrual management</li>
                    <li>Partner with schools to ensure consistent access</li>
                    <li>Track improvements in school attendance</li>
                  </ul>
                  <Button asChild className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-6">
                    <Link href="/donate" className="flex items-center gap-2">
                      Support This Program <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e0117f]/10">
                  <Image
                    src="/images/pad-distribution.jpeg"
                    alt="Sanitary Pad Distribution"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scholarship" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-[#e0117f] mb-4 font-poppins">Scholarship Programs</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We believe that financial constraints should never prevent a talented girl from pursuing her
                    education. Our scholarship program supports girls from underprivileged backgrounds.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">The scholarship covers:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>School fees and tuition</li>
                    <li>Educational materials and supplies</li>
                    <li>Uniform and transportation costs</li>
                    <li>Mentorship and career guidance</li>
                  </ul>
                  <Button asChild className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-6">
                    <Link href="/donate" className="flex items-center gap-2">
                      Support This Program <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e0117f]/10">
                  <Image
                    src="/images/student-interaction.jpeg"
                    alt="Scholarship Programs"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white">
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
              See how our programs have made a difference in the lives of young girls.
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
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">5,000+</h3>
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
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">120+</h3>
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
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">25,000+</h3>
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
                <Award className="w-8 h-8 text-[#e0117f]" />
              </div>
              <h3 className="text-5xl font-bold text-[#723fa3] mb-2 font-poppins">95%</h3>
              <p className="text-gray-600">Improved School Attendance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#fff6fa]">
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
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in nonprofit management, Sarah founded HerNova with a vision to transform girls' education.",
                image: "/images/team-members.jpeg",
              },
              {
                name: "Michael Chen",
                role: "Operations Director",
                bio: "Michael oversees the day-to-day operations, ensuring our programs run efficiently and effectively across all locations.",
                image: "/images/classroom-presentation3.jpeg",
              },
              {
                name: "Amina Patel",
                role: "Program Manager",
                bio: "Amina develops and implements our educational programs, working closely with schools and community partners.",
                image: "/images/classroom-presentation.jpeg",
              },
              {
                name: "David Okafor",
                role: "Outreach Coordinator",
                bio: "David builds relationships with communities, schools, and other organizations to expand our reach and impact.",
                image: "/images/student-interaction.jpeg",
              },
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#e0117f] mb-1 font-poppins">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
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
                Your support can help us reach more girls and create a lasting impact on their lives. Together, we can
                build a brighter future.
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
    </div>
  )
}

