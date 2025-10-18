"use client"

import { useState, useEffect } from "react"

interface UseActiveSectionProps {
  sectionIds: string[]
  offset?: number
}

export function useActiveSection({ sectionIds, offset = 100 }: UseActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i]
        const element = document.getElementById(sectionId)

        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionTop = offsetTop
          const sectionBottom = offsetTop + offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }

      // If we're at the top of the page, set to first section
      if (scrollPosition < 100) {
        setActiveSection(sectionIds[0] || "")
      }
    }

    // Set initial active section
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
