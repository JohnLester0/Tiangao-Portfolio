const skillsData = [
  {
    name: "Vercel",
    image: "/vercel.png",
    className: "skill-vercel",
    glowClassName: "skill-vercel-glow",
    textClassName: "skill-vercel-text"
  },
  {
    name: "PHP",
    image: "/php.png",
    className: "skill-php",
    glowClassName: "skill-php-glow",
    textClassName: "skill-php-text"
  },
  {
    name: "Java",
    image: "/java.png",
    className: "skill-java",
    glowClassName: "skill-java-glow",
    textClassName: "skill-java-text"
  },
  {
    name: "Python",
    image: "/python.png",
    className: "skill-python",
    glowClassName: "skill-python-glow",
    textClassName: "skill-python-text"
  },
  {
    name: "HTML",
    image: "/html.png",
    className: "skill-html",
    glowClassName: "skill-html-glow",
    textClassName: "skill-html-text"
  },
  {
    name: "Github",
    image: "/github.png",
    className: "skill-github",
    glowClassName: "skill-github-glow",
    textClassName: "skill-github-text"
  },
  {
    name: "Figma",
    image: "/figma.png",
    className: "skill-figma",
    glowClassName: "skill-figma-glow",
    textClassName: "skill-figma-text"
  },
     {
    name: "Css",
    image: "/css.png",
    className: "skill-figma",
    glowClassName: "skill-figma-glow",
    textClassName: "skill-figma-text"
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies I{" "}
            <span className="font-serif italic font-normal text-white">
              used in my Studies
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`
                group relative w-full h-48 p-8 rounded-3xl cursor-pointer
                ${skill.className}
                hover:scale-105 transition-all duration-500
              `}
            >
              {/* Image container - FIXED SIZE */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 shadow-2xl">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Name with gradient */}
              <h3 className={`text-xl font-bold text-center ${skill.textClassName} bg-clip-text text-transparent drop-shadow-lg`}>
                {skill.name}
              </h3>
              
              {/* Glow effect */}
              <div className={`
                absolute inset-0 rounded-3xl blur-xl opacity-75
                ${skill.glowClassName}
                scale-100 group-hover:scale-105 transition-all duration-500
                pointer-events-none
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
