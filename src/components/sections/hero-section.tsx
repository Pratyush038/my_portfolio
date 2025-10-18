import { Typewriter } from "@/components/typewriter"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/ui/border-beam"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const buttonVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.02
    },
    tap: { 
      scale: 0.98 
    }
  }
  
  const buttonTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25
  }

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Hi! I'm{" "}
            <span className="text-primary">
              <Typewriter
                sequence={[
                  "Pratyush",
                  1000,
                  "a Developer",
                  1000,
                  "a Designer",
                  1000,
                  "a Creator",
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Welcome to my portfolio! I'm passionate about creating beautiful, functional,
            and user-centered digital experiences. Explore my work and let's build something amazing together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background/70 backdrop-blur-md px-8 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:bg-background/80 hover:border-primary/60 dark:border-border/80 dark:bg-background/60 dark:hover:bg-background/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={{ opacity: 1, x: 0 }}
              transition={buttonTransition}
            >
              <span className="relative z-20">View My Work</span>
              <BorderBeam size={100} duration={8} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/14Id8hKx7uu2xMpE6vaQ4_vWLsiCxLXli/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary/60 bg-primary/40 backdrop-blur-md px-8 py-3 text-sm font-medium shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all hover:bg-primary/50 hover:border-primary dark:bg-primary/35 dark:border-primary/70 dark:hover:bg-primary/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={{ opacity: 1, x: 0 }}
              transition={buttonTransition}
            >
              <span className="relative z-20">Download Resume</span>
              <BorderBeam size={100} duration={8} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
