const highlights = [
  {
    title: "Hi, my name is John Lester Tiangao",
    bullets: [
      "Age: 20",
      "Bachelor of Science in Information & Technology",
      "2nd year",
      "Graduated from Senior High School at Passi National High School",
      "Strand: Humss",
      "I have a passion for UX design, I'm not perfect when it comes to design but I'm always eager to learn and improve my skills."
    ]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-15">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-5 lg:order-1">
            <span className="text-primary-foreground text-lg font-bold tracking-wider uppercase animate-fade-in">
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
              I am currently continuing my Education at
              <br />
              <span className="text-primary glow-text block text-2xl lg:text-3xl font-bold mt-2">
                Western Institute of Technology
                <br />
                Lapaz, Iloilo City.
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:order-2 lg:justify-items-end">
            <div className="glass p-6 md:p-8 rounded-3xl lg:rounded-[2rem] animate-fade-in shadow-xl border border-border/50 bg-surface/90 backdrop-blur-sm w-full lg:w-[95%]">
              <h1 className="text-2xl font-bold mb-6 text-primary-foreground">
                {highlights[0].title}
              </h1>
              <ul className="space-y-3 text-muted-foreground text-lg">
                {highlights[0].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
