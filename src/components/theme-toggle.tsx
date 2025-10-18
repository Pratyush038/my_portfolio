"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative overflow-hidden group"
      >
        <motion.div
          className="relative"
          whileHover={{
            boxShadow: "0 0 20px rgba(var(--primary), 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </motion.div>

        {/* Gradient glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(var(--primary), 0.2) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Enhanced gradient glow */}
        <motion.div
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center,
              oklch(from var(--primary) calc(l + 0.12) c h) 0%,
              oklch(from var(--primary) calc(l + 0.06) c h) 40%,
              oklch(from var(--accent) calc(l + 0.03) c h) 70%,
              transparent 90%)`,
            filter: "blur(10px)",
            zIndex: -1,
          }}
          whileHover={{
            opacity: 0.6,
            scale: 1.2,
          }}
        />
      </Button>
    </motion.div>
  )
}
