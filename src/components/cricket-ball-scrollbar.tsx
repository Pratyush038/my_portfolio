"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Exp" },
  { id: "projects", label: "Projects" },
  { id: "extra-curriculars", label: "Extra" },
]

export function CricketBallScrollbar() {
  const ballRef = useRef<HTMLDivElement>(null)
  const ballImgRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [sectionOffsets, setSectionOffsets] = useState<{ id: string; label: string; pct: number; targetScrollY: number }[]>([])

  // Calculate section milestone positions matching exact header nav scroll positions
  const calculateSectionOffsets = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) return

    const offsets = SECTIONS.map((sec) => {
      const el = document.getElementById(sec.id)
      if (!el) return { id: sec.id, label: sec.label, pct: 0, targetScrollY: 0 }
      // Header offset is 64px (scroll-mt-16)
      const targetScrollY = sec.id === "home" ? 0 : Math.max(0, el.offsetTop - 64)
      const actualScrollY = Math.min(targetScrollY, docHeight)
      const pct = docHeight > 0 ? actualScrollY / docHeight : 0
      return { id: sec.id, label: sec.label, pct, targetScrollY: actualScrollY }
    })
    setSectionOffsets(offsets)
  }, [])

  const updateBallPosition = useCallback(() => {
    if (!ballRef.current || !trackRef.current) return
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0
    const trackHeight = trackRef.current.offsetHeight
    const ballSize = 28
    const maxY = trackHeight - ballSize
    
    ballRef.current.style.transform = `translateY(${progress * maxY}px)`
    if (ballImgRef.current) {
      ballImgRef.current.style.transform = `rotate(${progress * 1080}deg)`
    }
    setScrollPercent(Math.round(progress * 100))

    // Determine current active section (offset by 100px matching navigation hook)
    let current = SECTIONS[0].id
    for (const sec of SECTIONS) {
      const el = document.getElementById(sec.id)
      if (el) {
        const sectionTop = sec.id === "home" ? 0 : el.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          current = sec.id
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    calculateSectionOffsets()
    updateBallPosition()

    window.addEventListener("scroll", updateBallPosition, { passive: true })
    window.addEventListener("resize", () => {
      calculateSectionOffsets()
      updateBallPosition()
    }, { passive: true })

    // Observe document height changes (e.g. expanding projects, images loading)
    const resizeObserver = new ResizeObserver(() => {
      calculateSectionOffsets()
      updateBallPosition()
    })
    if (document.body) {
      resizeObserver.observe(document.body)
    }

    return () => {
      window.removeEventListener("scroll", updateBallPosition)
      resizeObserver.disconnect()
    }
  }, [calculateSectionOffsets, updateBallPosition])

  const scrollToPct = (targetScrollY: number) => {
    window.scrollTo({ top: targetScrollY, behavior: "smooth" })
  }

  // Dragging support
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    document.body.style.userSelect = "none"
    handlePointerMove(e)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
    if (!isDragging.current && e.type !== "pointerdown") return
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const relativeY = e.clientY - rect.top
    const ballSize = 28
    const usableHeight = rect.height - ballSize
    const progress = Math.min(Math.max(relativeY / usableHeight, 0), 1)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: progress * docHeight, behavior: "instant" as ScrollBehavior })
  }

  const handlePointerUp = () => {
    isDragging.current = false
    document.body.style.userSelect = ""
  }

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging.current) handlePointerMove(e)
    }
    const onPointerUp = () => handlePointerUp()

    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)
    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      onPointerDown={handlePointerDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 right-2 bottom-0 w-12 z-50 flex items-center justify-center cursor-pointer pointer-events-auto select-none"
      title="Scroll track"
    >
      {/* Pitch / Track rail */}
      <div className="relative w-1 h-[94vh] my-auto rounded-full bg-primary/10 dark:bg-primary/15 overflow-visible">
        {/* Filled active trail behind the ball */}
        <div
          className="absolute top-0 left-0 right-0 bg-primary/30 dark:bg-primary/40 rounded-full transition-all duration-75"
          style={{ height: `${scrollPercent}%` }}
        />

        {/* Section milestone notches / wicket markers along the rail */}
        {sectionOffsets.map((sec) => (
          <button
            key={sec.id}
            onClick={(e) => {
              e.stopPropagation()
              scrollToPct(sec.targetScrollY)
            }}
            className="group/node absolute -left-1.5 -translate-y-1/2 flex items-center justify-end"
            style={{ top: `${sec.pct * 100}%` }}
            title={`Go to ${sec.label}`}
          >
            {/* Notch dot */}
            <div
              className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                activeSection === sec.id
                  ? "bg-primary border-background scale-110 shadow-sm"
                  : "bg-background/90 border-primary/30 group-hover/node:border-primary group-hover/node:scale-105"
              }`}
            >
              <div className={`w-1 h-1 rounded-full ${activeSection === sec.id ? "bg-white" : "bg-primary/50"}`} />
            </div>

            {/* Hover section name badge on left */}
            <span
              className={`absolute right-5 px-2 py-0.5 text-[10px] font-mono font-medium rounded backdrop-blur-md shadow-md border pointer-events-none transition-all duration-200 whitespace-nowrap ${
                isHovered || activeSection === sec.id
                  ? "opacity-90 translate-x-0 bg-card/90 text-foreground border-border/60"
                  : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              {sec.label}
            </span>
          </button>
        ))}
      </div>

      {/* Cricket ball thumb */}
      <div
        ref={ballRef}
        className="absolute top-0 will-change-transform flex items-center justify-center select-none touch-none pointer-events-none"
        style={{ width: 28, height: 28 }}
      >
        {/* Glowing pulse ring on hover */}
        <div
          className={`absolute inset-0 rounded-full bg-primary/20 transition-all duration-300 ${
            isHovered ? "scale-125 opacity-100 animate-pulse" : "scale-100 opacity-0"
          }`}
        />

        {/* Rotating Ball Image */}
        <div ref={ballImgRef} className="w-[28px] h-[28px] flex items-center justify-center will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cricket-ball.png"
            alt=""
            width={28}
            height={28}
            className={`w-[28px] h-[28px] rounded-full object-cover select-none drop-shadow-md transition-transform duration-200 ${
              isHovered ? "scale-110 drop-shadow-[0_0_10px_oklch(0.55_0.22_25/0.7)]" : ""
            }`}
            draggable={false}
          />
        </div>

        {/* Live percentage tag beside the ball on hover (remains upright & horizontal) */}
        <div
          className={`absolute right-9 px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-primary text-primary-foreground shadow-md transition-all duration-200 pointer-events-none whitespace-nowrap ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
          }`}
        >
          {scrollPercent}%
        </div>
      </div>
    </div>
  )
}
