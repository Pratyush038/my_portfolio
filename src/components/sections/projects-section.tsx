import Image from "next/image"

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
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and an opportunity to learn something new.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
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
                    <a
                    href={project.github}
                    className="text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code →
                  </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}