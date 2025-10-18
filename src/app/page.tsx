import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExtraCurricularsSection } from "@/components/sections/extra-curriculars-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about" className="scroll-mt-16">
          <AboutSection />
        </section>

        <section id="experience" className="scroll-mt-16">
          <ExperienceSection />
        </section>

        <section id="projects" className="scroll-mt-16">
          <ProjectsSection />
        </section>

        <section id="extra-curriculars" className="scroll-mt-16">
          <ExtraCurricularsSection />
        </section>

        <Footer />
      </div>
    </MainLayout>
  )
}
