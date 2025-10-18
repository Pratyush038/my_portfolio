"use client"

import { useState, useEffect } from "react"

interface UseActiveSectionProps {
  sectionIds: string[]
  offset?: number
}

export function useActiveSection({ sectionIds, offset = 100 }: UseActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated after component mounts
    setIsHydrated(true)

    const handleScroll = () => {
      if (typeof window === "undefined") return

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

    // Set initial active section after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll()
    }, 0)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}
