import { Typewriter } from "@/components/typewriter"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
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
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Welcome to my portfolio! I'm passionate about creating beautiful, functional,
            and user-centered digital experiences. Explore my work and let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/14Id8hKx7uu2xMpE6vaQ4_vWLsiCxLXli/view?usp=sharing"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
