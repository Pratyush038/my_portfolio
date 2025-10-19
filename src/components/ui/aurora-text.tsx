"use client"

import React, { memo } from "react"
import { useTheme } from "next-themes"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors,
    speed = 1,
  }: AuroraTextProps) => {
    const { theme } = useTheme()

    // Theme-aware default colors
    const defaultColors = theme === "dark"
      ? ["#DC2626", "#EF4444", "#F87171", "#FFFFFF"] // Red and white for dark theme
      : ["#DC2626", "#EF4444", "#F87171", "#000000"] // Red and black for light theme

    const gradientColors = colors || defaultColors
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${gradientColors.join(", ")}, ${
        gradientColors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    }

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
