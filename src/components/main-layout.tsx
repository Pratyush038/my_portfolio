import { Navigation } from "@/components/navigation"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioDock } from "@/components/portfolio-dock"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0">
        <InteractiveGridPattern
          width={30}
          height={30}
          squares={[218, 218]}
          className="w-full h-full opacity-20 dark:opacity-40"
          squaresClassName="stroke-primary/30 dark:stroke-primary/20 transition-colors duration-700 ease-out"
        />
      </div>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <PortfolioDock />
    </div>
  )
}
