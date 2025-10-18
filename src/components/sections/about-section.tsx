import { motion } from "framer-motion"
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Palette,
  Server,
  Zap,
  Brain,
  BarChart3,
  Layers,
  Cpu,
  FileText,
  Monitor
} from "lucide-react"

export function AboutSection() {
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

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          About <span className="text-primary">Me</span>
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/pfp.png"
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <div className="space-y-6">
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              Hi! I'm Pratyush, a third-year Computer Science and Engineering student at RV College of Engineering. I'm passionate about creating meaningful solutions that combine technology and creativity to address real-world problems.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              What I enjoy most is taking an idea and turning it into something useful and impactful, whether it's a data analytics platform, an IoT project, or a practical digital solution. I love exploring new technologies, understanding how they work and building products that are both functional and enjoyable to use.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              Alongside my technical interests, I'm also fascinated by how business and economics influence innovation, from the way products create value to how technology drives growth and meaningful change.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              Over time, my curiosity for technology has grown into a genuine drive to build projects that make a difference. Every project I work on is an opportunity to learn, improve, and contribute to something meaningful and that ongoing process of learning is what keeps me motivated.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <motion.div
              className="flex justify-between items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <img src="/rvlogo.png" alt="RV Logo" className="w-16 h-16" />
                <div>
                  <h3 className="text-xl font-semibold">R.V College of Engineering</h3>
                  <p className="text-primary font-medium">B.E in Computer Science and Engineering - CGPA: 9.23</p>
                </div>
              </div>
              <p className="text-muted-foreground">Aug 2023 - Present</p>
            </motion.div>

            <motion.div
              className="flex justify-between items-center gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <img src="/rvlogo.png" alt="RV Logo" className="w-16 h-16" />
                <div>
                  <h3 className="text-xl font-semibold">RV PU College</h3>
                  <p className="text-primary font-medium">II PUC - 97.16%</p>
                </div>
              </div>
              <p className="text-muted-foreground">2021 - 2023</p>
            </motion.div>

            <motion.div
              className="flex justify-between items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <img src="/kumaranslogo.png" alt="Kumarans Logo" className="w-16 h-16" />
                <div>
                  <h3 className="text-xl font-semibold">Sri Kumaran Children's Home, Mallasandra</h3>
                  <p className="text-primary font-medium">10th CBSE - 95%</p>
                </div>
              </div>
              <p className="text-muted-foreground">2011 - 2021</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>

          {/* Rolling Tech Stack */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex animate-scroll-left gap-8 items-center"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of technologies */}
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-2xl">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Python</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">React</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Layers className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="font-semibold">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Palette className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Tailwind</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Database className="w-8 h-8 text-primary" />
                  <span className="font-semibold">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Cpu className="w-8 h-8 text-primary" />
                  <span className="font-semibold">FastAPI</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-2xl">
                  <Code2 className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Python</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">React</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Layers className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="font-semibold">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Palette className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Tailwind</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Database className="w-8 h-8 text-primary" />
                  <span className="font-semibold">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Cpu className="w-8 h-8 text-primary" />
                  <span className="font-semibold">FastAPI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="relative overflow-hidden mt-6">
            <motion.div
              className="flex animate-scroll-right gap-8 items-center"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Second set of technologies */}
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Pandas</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Brain className="w-8 h-8 text-primary" />
                  <span className="font-semibold">TensorFlow</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Monitor className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Scikit-learn</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Streamlit</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <GitBranch className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Git</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="font-semibold">HTML</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Database className="w-8 h-8 text-primary" />
                  <span className="font-semibold">MongoDB</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Pandas</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Brain className="w-8 h-8 text-primary" />
                  <span className="font-semibold">TensorFlow</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Monitor className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Scikit-learn</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Streamlit</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <GitBranch className="w-8 h-8 text-primary" />
                  <span className="font-semibold">Git</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-semibold">JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="font-semibold">HTML</span>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                  <Database className="w-8 h-8 text-primary" />
                  <span className="font-semibold">MongoDB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
