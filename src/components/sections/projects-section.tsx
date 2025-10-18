import Image from "next/image"
import { motion } from "framer-motion"

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
    image: "/resqnet.png",
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
    title: "IoT-Based Smart Attendance System",
    description: "IoT-based smart attendance system combining React, Firebase, and optional hardware integration for real-time facial recognition and sensor-driven tracking",
    image: "/iot-attendance.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Pratyush038/iot-smart-attendance"
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
    title: "HealthAlign",
    description: "AI-driven health assistant that generates personalized 7-day meal and workout plans based on chronic health conditions",
    image: "/healthalign.png",
    technologies: ["Python", "Streamlit", "Qiskit", "Flask", "SQLite"],
    github: "https://github.com/Pratyush038/ai_health_planner",
    link: "https://aihealthplanner.streamlit.app/"
  },
  {
    title: "QuantumLock",
    description: "A quantum authentication system that uses quantum entanglement to provide a secure and tamper-proof authentication mechanism",
    image: "/quantumlock.png",
    technologies: ["Python", "Streamlit", "Qiskit", "Flask", "SQLite"],
    github: "https://github.com/Pratyush038/QuantumLock",
    link: "https://quantumlock.streamlit.app/"
  }
]


export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const linkVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgba(var(--primary), 0.8)",
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
          viewport={{ once: false }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and an opportunity to learn something new.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="text-sm text-primary hover:underline relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      View Code →
                      {/* Gradient glow for link */}
                      <motion.div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
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
                      className="text-sm text-primary hover:underline relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      Live Demo →
                      {/* Gradient glow for link */}
                      <motion.div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
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
                      className="text-sm text-primary hover:underline relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      Website →
                      {/* Gradient glow for link */}
                      <motion.div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
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
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.05) c h / 0.1) 0%,
                    oklch(from var(--primary) calc(l + 0.02) c h / 0.05) 40%,
                    transparent 70%)`,
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.3,
                  scale: 1.05,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}