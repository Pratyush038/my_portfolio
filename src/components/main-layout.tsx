import { Navigation } from "@/components/navigation"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioDock } from "@/components/portfolio-dock"
import { CricketBallScrollbar } from "@/components/cricket-ball-scrollbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <HexagonPattern
          radius={36}
          gap={3}
          hexagons={[
            [2, 3],
            [5, 6],
            [9, 2],
            [12, 8],
            [15, 4],
            [18, 9],
            [22, 5],
            [25, 12],
            [28, 7],
            [32, 14],
            [35, 8],
          ]}
          className={cn(
            "w-full h-full opacity-80 stroke-neutral-900/15 dark:stroke-white/15 fill-neutral-900/5 dark:fill-white/5",
            "mask-[radial-gradient(ellipse_90%_90%_at_50%_40%,white_45%,transparent_100%)]",
            "inset-0 skew-y-3"
          )}
        />
      </div>
      <Navigation />
      <CricketBallScrollbar />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10 pb-12"
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
