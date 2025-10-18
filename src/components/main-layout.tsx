import { Navigation } from "@/components/navigation"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

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
          squares={[120, 120]}
          className="w-full h-full opacity-20 dark:opacity-15"
          squaresClassName="stroke-primary/20 dark:stroke-primary/25 transition-colors duration-700 ease-out"
        />
      </div>
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}
