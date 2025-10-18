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
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          My professional journey in software development, from internships to full-time roles,
          showcasing my growth and contributions to various projects and teams.
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border-l-4 border-primary">
              <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <img src={experience.logo} alt={`${experience.company} Logo`} className="w-16 h-16" />
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

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-4">
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
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
