"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExtraCurricularsSection } from "@/components/sections/extra-curriculars-section"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <section id="home">
              <HeroSection />
            </section>

            <section id="about" className="scroll-mt-16">
              <AboutSection />
            </section>

            <section id="experience" className="scroll-mt-16">
              <ExperienceSection />
            </section>

            <section id="projects" className="scroll-mt-16">
              <ProjectsSection />
            </section>

            <section id="extra-curriculars" className="scroll-mt-16">
              <ExtraCurricularsSection />
            </section>

            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </MainLayout>
  )
}
