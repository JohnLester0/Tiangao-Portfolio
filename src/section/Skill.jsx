import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaCss3Alt,
  FaTools,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiExpress,
  SiHtml5,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { ScrollReveal } from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase block mb-3">
          My Toolkit
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight">
          Tools & Technologies{" "}
          <span className="font-serif italic font-normal text-white block sm:inline">
            I use in my work.
          </span>
        </h2>
      </ScrollReveal>

      <div className="skills-container">
        <div role="list" className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 120}>
              <div role="listitem" className="skill-category-card">
                <h3 className="skill-category-title">
                  <span className="skill-category-icon">{category.icon}</span>
                  {category.title}
                </h3>

                <div
                  role="list"
                  aria-label={`${category.title} skill`}
                  className="skills-list"
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      role="listitem"
                      className="skill-item group"
                    >
                      <span className="skill-item-icon">{skill.icon}</span>
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;