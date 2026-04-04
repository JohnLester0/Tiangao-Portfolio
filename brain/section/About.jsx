const highlights = [
  {
    title: "Hi, my name is John Lester Tiangao",
    bullets: [
      "Age: 20",
      "Bachelor of Science in Information & Technology",
      "2nd year",
      "I have a passion for UX design"
   
    ]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-15">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - About Me Text (TOP/LEFT) */}
          <div className="space-y-5 lg:order-1">
            <div className="animate-fade-in">
              <span className="text-primary-foreground text-lg font-large tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Currently Pursuing my Studies.
            </h2>
            
            <div className="space-y-4 text-primary-foreground animate-fade-in animation-delay-200">
              <h2 className="text-xl font-primary mb-3">
                2nd Year BSIT at Western Institute of Technology. 
                Lapaz, Iloilo City.
              </h2>
            </div>
          </div>

          {/* Right Column - Highlights (RIGHT/BOTTOM) */}
          <div className="grid grid-cols-1 gap-5 lg:order-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-2xl animate-fade-in shadow-xl border border-border/50 bg-surface/90 backdrop-blur-sm"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <h1 className="text-xl font-bold mb-4 text-primary-foreground">
                  {item.title}
                </h1>
                {item.bullets ? (
                  <ul className="space-y-3 text-primary-foreground">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li 
                        key={bulletIdx} 
                        className="text-lg leading-relaxed flex items-start group"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg leading-relaxed text-primary-foreground">{item.description}</p>
                )}  
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};