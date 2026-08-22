import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { BorderBeam } from "@/components/ui/border-beam"

const projects = [
  {
    title: "Cricklytics",
    description: "AI Powered Player Classification & Workload based Injury Prediction for Optimal Team Selection",
    image: "/cricklytics.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Pratyush038/Cricklytics_PRB",
    demo: "https://drive.google.com/file/d/1wFQgx24JvbOAXXqqIFstk5IunoOz1eop/view?usp=sharing",
    link: "https://cricklytics-prb.vercel.app/"
  },
  {
    title: "PhishGuard",
    description: "A full-stack phishing detection system that leverages machine learning for accurate URL classification",
    image: "/phishguard.png",
    technologies: ["Next.js", "FastAPI", "Tailwind CSS"],
    github: "https://github.com/Pratyush038/PhishGuard",
    demo: "https://drive.google.com/file/d/1HSOUIdmBZNzJXW4gyfG6mLFbH_WljpTX/view?usp=sharing",
    link: "https://phish-guard-prb.vercel.app/"
  },
  {
    title: "ResQNet",
    description: "IoT-based Disaster Communication Network that establishes a resilient mesh topology for emergency communication when traditional infrastructure (cell towers, internet) fails",
    image: "/disaster-net.png",
    technologies: ["React", "TypeScript", "Mapbox GL", "LoRa", "BLE"],
    github: "https://github.com/Pratyush038/DisasterNetworkSimulator"
  },
  {
    title: "Multi Armed Bandit",
    description: "A simulation-based trading engine using Thompson Sampling to optimize stock selection by balancing risk and uncertainty through Bayesian updates and multi-run evaluation",
    image: "/mab.png",
    technologies: ["Python", "Streamlit", "yfinance"],
    github: "https://github.com/Pratyush038/Multi_Armed_Bandit",
    link: "https://mab-prb.streamlit.app/"
  },
  {
    title: "Compile-Time Dynamic Profiling",
    description: "An LLVM 17 compiler pass that automatically instruments C/C++ programs with per-function call counters at compile time. Injects lightweight atomic counters into every function entry and prints a ranked profiling report when the program exits — no source-code changes required.",
    image: "/llvm-profiler.png",
    technologies: ["C++", "LLVM 17", "Clang", "Compiler Passes"],
    github: "https://github.com/Pratyush038/LLVM"
  },
  {
    title: "FoodBridge AI",
    description: "AI-powered platform connecting surplus food providers with verified recipients to reduce waste and enable efficient, equitable distribution.",
    image: "/foodbridge.png",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Mapbox GL"],
    github: "https://github.com/Pratyush038/foodbridge-ai",
    link: "https://food-bridge-ai.vercel.app/"
  },
  {
    title: "Hardware Trojan Detection Framework",
    description: "An unsupervised graph anomaly detection framework for pre-silicon hardware Trojan detection using GraphSAGE and autoencoders on synthesized gate-level circuits",
    image: "/trojan-analysis.png",
    technologies: ["Python", "GraphSAGE", "PyTorch", "Yosys"],
    github: "https://github.com/Pratyush038/TROJAN-ANALYSIS"
  },
  {
    title: "MachInsight AI",
    description: "A federated learning framework for predictive maintenance of industrial pumps and motors, estimating Remaining Useful Life (RUL) using Temporal Convolutional Networks and Differential Privacy",
    image: "/machinsight-ai.png",
    technologies: ["Python", "Federated Learning", "TCN", "PyTorch"],
    github: "https://github.com/Pratyush038/MachInsight-AI"
  },
  {
    title: "BloodLink AI",
    description: "A cloud-centric federated learning platform designed to improve blood inventory management and demand forecasting across decentralized blood banks while preserving patient privacy",
    image: "/bloodlink-ai.png",
    technologies: ["Python", "Federated Learning", "Bi-LSTM", "XGBoost"],
    github: "https://github.com/Pratyush038/BloodLink-AI"
  },
  {
    title: "IoT-Based Smart Attendance System",
    description: "IoT-based smart attendance system combining React, Firebase, and optional hardware integration for real-time facial recognition and sensor-driven tracking",
    image: "/iot-attendance.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Pratyush038/iot-smart-attendance"
  },
  {
    title: "QuantumLock",
    description: "A quantum authentication system that uses quantum entanglement to provide a secure and tamper-proof authentication mechanism",
    image: "/quantumlock.png",
    technologies: ["Python", "Streamlit", "Qiskit", "Flask", "SQLite"],
    github: "https://github.com/Pratyush038/QuantumLock",
    link: "https://quantumlock.streamlit.app/"
  },
  {
    title: "HealthAlign",
    description: "AI-driven health assistant that generates personalized 7-day meal and workout plans based on chronic health conditions",
    image: "/healthalign.png",
    technologies: ["Python", "Streamlit", "Qiskit", "Flask", "SQLite"],
    github: "https://github.com/Pratyush038/ai_health_planner",
    link: "https://aihealthplanner.streamlit.app/"
  }
]

const INITIAL_COUNT = 6

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)
  const hiddenCount = projects.length - INITIAL_COUNT

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const linkVariants: Variants = {
    hover: {
      scale: 1.04,
      textShadow: "0 0 8px rgba(var(--primary), 0.7)",
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and an opportunity to learn something new.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card/90 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group relative border border-border/50 flex flex-col h-full backdrop-blur-sm"
                variants={cardVariants}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                transition={{
                  duration: 0.45,
                  delay: index >= INITIAL_COUNT ? (index - INITIAL_COUNT) * 0.07 : 0,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
              >
                <BorderBeam duration={7} size={110} delay={index * 1.2} />

                {/* Project Image */}
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  <h3 className="text-xl font-semibold mb-2.5 tracking-tight group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 dark:bg-primary/15 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links Footer */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto border-t border-border/40">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline relative group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        <span>View Code</span>
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center,
                              oklch(from var(--primary) calc(l + 0.08) c h) 0%,
                              oklch(from var(--primary) calc(l + 0.04) c h) 50%,
                              transparent 80%)`,
                            filter: "blur(6px)",
                            zIndex: -1,
                          }}
                          whileHover={{
                            opacity: 0.5,
                            scale: 1.3,
                          }}
                        />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline relative group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        <span>Live Demo</span>
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center,
                              oklch(from var(--primary) calc(l + 0.08) c h) 0%,
                              oklch(from var(--primary) calc(l + 0.04) c h) 50%,
                              transparent 80%)`,
                            filter: "blur(6px)",
                            zIndex: -1,
                          }}
                          whileHover={{
                            opacity: 0.5,
                            scale: 1.3,
                          }}
                        />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline relative group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        <span>Website</span>
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center,
                              oklch(from var(--primary) calc(l + 0.08) c h) 0%,
                              oklch(from var(--primary) calc(l + 0.04) c h) 50%,
                              transparent 80%)`,
                            filter: "blur(6px)",
                            zIndex: -1,
                          }}
                          whileHover={{
                            opacity: 0.5,
                            scale: 1.3,
                          }}
                        />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Card gradient glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center,
                      oklch(from var(--primary) calc(l + 0.05) c h / 0.12) 0%,
                      oklch(from var(--primary) calc(l + 0.02) c h / 0.05) 40%,
                      transparent 70%)`,
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                  whileHover={{
                    opacity: 0.35,
                    scale: 1.05,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / Show less button */}
        {hiddenCount > 0 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full border border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-medium transition-colors backdrop-blur-sm shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? "Show less" : `Show ${hiddenCount} more`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}