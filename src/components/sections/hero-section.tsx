import { Typewriter } from "@/components/typewriter"
import { motion } from "framer-motion"

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
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(var(--primary), 0.6)",
      transition: {
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
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
            Hi, I'm{" "}
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
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.span
                className="relative"
                whileHover={{
                  textShadow: "0 0 8px rgba(var(--primary), 0.8)",
                }}
              >
                View My Work
              </motion.span>
              {/* Gradient glow effect */}
              <motion.div
                className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.15) c h) 0%,
                    oklch(from var(--primary) calc(l + 0.08) c h) 30%,
                    oklch(from var(--accent) calc(l + 0.05) c h) 60%,
                    transparent 80%)`,
                  filter: "blur(12px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.7,
                  scale: 1.15,
                }}
              />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/14Id8hKx7uu2xMpE6vaQ4_vWLsiCxLXli/view?usp=sharing"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                }}
              >
                Download Resume
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Enhanced gradient glow effect for primary button */}
              <motion.div
                className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.2) c h) 0%,
                    oklch(from var(--primary) calc(l + 0.12) c h) 25%,
                    oklch(from var(--accent) calc(l + 0.08) c h) 50%,
                    transparent 75%)`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.8,
                  scale: 1.2,
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
