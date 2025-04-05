"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Donate", href: "/donate" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-[#e0117f]/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg border border-[#e0117f]/10 p-1">
              <Image src="/logo.png" alt="HerNova Logo" width={48} height={48} className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-poppins font-bold text-xl md:text-2xl ${isScrolled ? "text-[#723fa3]" : "text-[#e0117f]"}`}
              >
                HerNova
              </span>
              <span className={`text-xs ${isScrolled ? "text-[#e0117f]" : "text-[#723fa3]"}`}>FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative font-medium text-base hover:text-[#e0117f] transition-colors ${
                      pathname === link.href
                        ? isScrolled
                          ? "text-[#e0117f]"
                          : "text-[#e0117f] font-bold"
                        : isScrolled
                          ? "text-gray-700"
                          : "text-gray-700"
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#e0117f] rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full px-6">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="text-[#e0117f]" /> : <Menu className="text-[#e0117f]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#e0117f]/10"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block py-2 font-medium text-lg ${
                        pathname === link.href ? "text-[#e0117f]" : "text-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button
                  asChild
                  className="w-full bg-[#e0117f] hover:bg-[#e0117f]/90 text-white rounded-full py-3 text-lg"
                >
                  <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

