import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GitHubIcon } from "@/components/BrandIcons";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    title: "Awesome Todos App",
    description:
      "A full-stack task management application utilizing a separated client-server architecture, with a streamlined UI and robust data persistence.",
    image: "/projects/Awesometodos.png",
    link: "https://awesometodosapp-ab74.onrender.com/",
    github: "https://github.com/JohnLester0/awesometodosapp.git",
    tags: ["React", "Node.js", "Express", "TailwindCSS"],
  },
  {
    title: "Dagyang Presentation",
    description:
      "Dagyang - Creating planned itineraries for tourists to fully enjoy their stay across Iloilo Province.",
    image: "/projects/Dagyang.png",
    link: "https://www.figma.com/design/ZXNYtHP4xr19yfq4eaGczn/Dagyang-App---PitchDeck?node-id=0-1&t=VP64FIVv2PpOd7ox-0",
    tags: ["Figma", "UI/UX", "Pitch Deck"],
  },
  {
    title: "Simple Portfolio-2",
    description:
      "A completely designed web project using HTML, CSS, and JavaScript that showcases interactive features, responsive layouts, and real-world front-end development experience.",
    image: "/projects/Porfolio 2.png",
    link: "https://johnlester0.github.io/Simple-Portfolio-Html-Css-Javascript-/",
    github: "https://github.com/JohnLester0/Simple-Portfolio-Html-Css-Javascript-.git",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Product Design",
    description:
      "A Nanyang Shoes Product Showcase: An engaging platform created to showcase footwear collections, emphasizing their style, quality, and design for consumers and enthusiasts.",
    image: "/projects/Product Design.png",
    link: "https://www.figma.com/design/Sdj8TMFP1tx1bPu1ByVqoH/Untitled?t=Og8SovH69qM8yMBp-1",
    tags: ["Figma", "Product Showcase", "Design"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal className="text-center mx-auto max-w-3xl mb-12 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.title}
              delay={(idx + 1) * 100}
              className="md:row-span-1"
            >
              <div className="group glass rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <GitHubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <a
                        href={project.link || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-semibold hover:text-primary group-hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                      </a>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12" delay={400}>
          <a href="#projects">
            <AnimatedBorderButton className="inline-flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
