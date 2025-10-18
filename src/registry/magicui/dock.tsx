"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useRef, useState } from "react"

import { cn } from "@/lib/utils"

const dockVariants = cva(
  "mx-auto mt-8 flex h-16 w-max items-center justify-center gap-3 rounded-2xl border p-3 dark:border-zinc-800 dark:bg-zinc-900/80 backdrop-blur-md",
  {
    variants: {
      direction: {
        top: "fixed top-4 left-1/2 -translate-x-1/2",
        middle: "fixed bottom-4 left-1/2 -translate-x-1/2",
        bottom: "fixed bottom-4 left-1/2 -translate-x-1/2",
      },
    },
    defaultVariants: {
      direction: "bottom",
    },
  }
)

export interface DockProps extends VariantProps<typeof dockVariants> {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(({ children, className, direction, style }, ref) => {
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={cn(dockVariants({ direction }), className)}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={(e) => {
        mouseX.set(e.pageX)
        mouseY.set(e.pageY)
      }}
      onMouseLeave={() => {
        setHovered(false)
        mouseX.set(Infinity)
        mouseY.set(Infinity)
      }}
      animate={{ y: hovered ? -10 : 0, scale: hovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={style}
    >
      <DockContext.Provider value={{ mouseX, mouseY }}>
        {children}
      </DockContext.Provider>
    </motion.div>
  )
})
Dock.displayName = "Dock"

// Create context for mouse position
const DockContext = React.createContext<{ mouseX: MotionValue<number>; mouseY: MotionValue<number> } | null>(null)

export interface DockIconProps {
  children: React.ReactNode
  className?: string
}

const DockIcon = ({ children, className }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const context = React.useContext(DockContext)

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component")
  }

  const { mouseX, mouseY } = context
  const distance = useMotionValue(200) // Initialize to condensed state (48px)
  const widthTransform = useTransform(distance, [0, 80, 200], [64, 48, 48])
  const heightTransform = useTransform(distance, [0, 80, 200], [64, 48, 48])

  const width = useSpring(widthTransform, {
    stiffness: 300,
    damping: 30,
  })
  const height = useSpring(heightTransform, {
    stiffness: 300,
    damping: 30,
  })

  React.useEffect(() => {
    if (!ref.current) return

    const updateDistance = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseXValue = mouseX.get()
      const mouseYValue = mouseY.get()

      if (mouseXValue === Infinity || mouseYValue === Infinity) {
        distance.set(200) // Set to large value so icons stay at condensed size (48px)
        return
      }

      const deltaX = Math.abs(mouseXValue - centerX)
      const deltaY = Math.abs(mouseYValue - centerY)

      distance.set(Math.sqrt(deltaX ** 2 + deltaY ** 2))
    }

    updateDistance()
    const unsubscribeX = mouseX.on("change", updateDistance)
    const unsubscribeY = mouseY.on("change", updateDistance)
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseX, mouseY, distance])

  return (
    <motion.div
      ref={ref}
      style={{
        width,
        height,
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-zinc-100/90 dark:bg-zinc-800/90 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
DockIcon.displayName = "DockIcon"

export { Dock, DockIcon }
