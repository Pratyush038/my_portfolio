import { motion } from "framer-motion"
import { BorderBeam } from "@/components/ui/border-beam"

const activities = [

  {
    title: "Cricketer",
    organization: "RVCE College Team",
    period: "2010-Present",
    description: "I've been playing cricket since the age of 4. I'm currently representing RVCE in the VTU State Level Tournaments. I've also represented Karnataka in the Inter-Zonal Tournament & I have captained my school SKCH-CBSE."
  },
  {
    title: "Flautist",
    organization: "Carnatic Flute Student",
    period: "2012-Present",
    description: "I've been learning Carnatic Flute since the age of 7. I have performed in several concerts and competitions. I have also cleared the Junior Level Examination with Distinction."
  },
  {
    title: "Treasurer",
    organization: "Accelerate Club RVCE",
    period: "2025-Present",
    description: "As the Treasurer, I manage and allocate finances efficiently for hackathons and events, ensuring proper budgeting, planning and resource utilisation."
  },
  {
    title: "Member of Chess Club",
    organization: "Chess Club RVCE",
    period: "2023-Present",
    description: (
      <>
      I play chess passionately. You can find me on{' '}
        <a
          href="https://www.chess.com/member/prats_3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          chess.com
        </a>{' '}
        and{' '}
        <a
          href="https://lichess.org/@/OfficiaLeo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          lichess.org
        </a>.
      </>
    )
  },
  {
    title: "Member of Photography Club",
    organization: "F/6.3 Photography RVCE",
    period: "2023-Present",
    description: "Part of the photography club, I have been learning photography and have been contributing to the club's activities."
  }
]

export function ExtraCurricularsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
          Extra <span className="text-primary">Curriculars</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Beyond coding, I'm passionate about various activities that help me grow as a person
          and contribute to my community.
        </motion.p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm relative group"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(var(--primary), 0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <BorderBeam />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary">{activity.title}</h3>
                <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                  {activity.period}
                </span>
              </div>

              <div className="mb-3">
                <span className="text-sm font-medium text-foreground">
                  {activity.organization}
                </span>
              </div>

              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                {activity.description}
              </motion.p>

              {/* Card gradient glow */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center,
                    oklch(from var(--primary) calc(l + 0.03) c h / 0.06) 0%,
                    oklch(from var(--primary) calc(l + 0.015) c h / 0.03) 60%,
                    transparent 85%)`,
                  filter: "blur(22px)",
                  zIndex: -1,
                }}
                whileHover={{
                  opacity: 0.2,
                  scale: 1.04,
                }}
              />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
