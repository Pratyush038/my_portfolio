import { motion } from "framer-motion"

const experiences = [
  {
    title: "Student Intern",
    company: "Bosch Rexroth India",
    period: "Aug 2024 - Sep 2024",
    location: "Bangalore, India",
    description: "Interned at Bosch Rexroth India, gaining hands-on experience in industrial automation, motor systems and controller software development.",
    technologies: ["Node.js", "Node-RED"],
    achievements: [
      "Worked with industrial drives, motors, and controllers, gaining hands-on experience in motor assembly and testing",
      "Developed a Node-RED-based control system for real-time controller management and monitoring",
      "Contributed to controller testing and software debugging in an industrial automation environment",
      "Gained exposure to welding, soldering, and electronic system diagnostics",
      "Presented technical work to peers and mentors during orientation, demonstrating communication skills"
    ],
    logo: "/rexrothlogo.png"
  }
]

export function ExperienceSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          My professional journey in software development, from internships to full-time roles,
          showcasing my growth and contributions to various projects and teams.
        </motion.p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border-l-4 border-primary relative group"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(var(--primary), 0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <motion.img
                    src={experience.logo}
                    alt={`${experience.company} Logo`}
                    className="w-16 h-16"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-semibold text-primary mb-1">{experience.title}</h3>
                    <p className="text-lg font-medium text-foreground">{experience.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{experience.period}</div>
                  <div className="text-sm text-muted-foreground">{experience.location}</div>
                </div>
              </div>

              <motion.p
                className="text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                {experience.description}
              </motion.p>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: false }}
                    >
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Card gradient glow */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.04) c h / 0.08) 0%,
                    oklch(from var(--primary) calc(l + 0.02) c h / 0.04) 50%,
                    transparent 80%)`,
                  filter: "blur(25px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.25,
                  scale: 1.03,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
