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
          style={{ color: 'red' }}
        >
          chess.com
        </a>{' '}
        and{' '}
        <a
          href="https://lichess.org/@/OfficiaLeo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'red' }}
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
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Extra <span className="text-primary">Curriculars</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Beyond coding, I'm passionate about various activities that help me grow as a person
          and contribute to my community.
        </p>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
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

              <p className="text-muted-foreground">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
