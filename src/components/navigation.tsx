"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from '@/hooks/use-active-section'
import { AuroraText } from '@/components/ui/aurora-text'
import { useSound } from '@/hooks/use-sound'

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
  const { isMuted, toggleMute } = useSound()

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
            {navigation.map((item) => (
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
            <motion.button
              onClick={toggleMute}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
