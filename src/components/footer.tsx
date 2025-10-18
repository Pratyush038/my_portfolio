import { motion } from "framer-motion"

export function Footer() {
  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgba(var(--primary), 0.8)",
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <footer className="py-8 px-4 border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.p
            className="text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            Made with ❤️ by Pratyush
          </motion.p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.a
              href="mailto:pratyush.bidare@gmail.com"
              className="hover:text-primary transition-colors relative"
              variants={linkVariants}
              whileHover="hover"
            >
              Email
              {/* Gradient glow for footer link */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.06) c h) 0%,
                    oklch(from var(--primary) calc(l + 0.03) c h) 60%,
                    transparent 85%)`,
                  filter: "blur(4px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.4,
                  scale: 1.4,
                }}
              />
            </motion.a>
            <motion.a
              href="https://github.com/Pratyush038"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors relative"
              variants={linkVariants}
              whileHover="hover"
            >
              GitHub
              {/* Gradient glow for footer link */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.06) c h) 0%,
                    oklch(from var(--primary) calc(l + 0.03) c h) 60%,
                    transparent 85%)`,
                  filter: "blur(4px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.4,
                  scale: 1.4,
                }}
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pratyushbidare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors relative"
              variants={linkVariants}
              whileHover="hover"
            >
              LinkedIn
              {/* Gradient glow for footer link */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.06) c h) 0%,
                    oklch(from var(--primary) calc(l + 0.03) c h) 60%,
                    transparent 85%)`,
                  filter: "blur(4px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.4,
                  scale: 1.4,
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
