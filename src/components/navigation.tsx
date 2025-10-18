"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from '@/hooks/use-active-section'
import Image from "next/image"
import { AuroraText } from '@/components/ui/aurora-text'

const navigation = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Extra Curriculars", href: "#extra-curriculars", id: "extra-curriculars" },
]

export function Navigation() {
  const activeSection = useActiveSection({
    sectionIds: navigation.map(item => item.id),
    offset: 100
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated after component mounts
    setIsHydrated(true)

    // Only access window after hydration
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Set initial scroll state after hydration
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(var(--primary), 0.5)",
      transition: {
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  }

  return (
    <AnimatePresence>
      <motion.header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          isHydrated && isScrolled
            ? "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                
                <AuroraText className="font-bold text-xl hover:text-primary/80 transition-colors">
                  Pratyush
                </AuroraText>
              </Link>
            </motion.div>
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center space-x-6 text-sm font-medium"
            variants={containerVariants}
            initial="hidden"
            animate={isHydrated ? "visible" : "hidden"}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-red-500 font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <motion.span
                    className="relative z-10"
                    variants={buttonVariants}
                    whileHover={{
                      textShadow: "0 0 8px rgba(var(--primary), 0.8)",
                    }}
                  >
                    {item.name}
                  </motion.span>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-md"
                      layoutId="activeSection"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Gradient glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, 
                        oklch(from var(--primary) calc(l + 0.1) c h) 0%, 
                        oklch(from var(--primary) calc(l + 0.05) c h) 40%, 
                        transparent 70%)`,
                      filter: "blur(8px)",
                      zIndex: -1,
                    }}
                    whileHover={{
                      opacity: 0.6,
                      scale: 1.1,
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate={isHydrated ? "visible" : "hidden"}
          >
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
