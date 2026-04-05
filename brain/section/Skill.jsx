
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaCss3Alt,
  FaTools,
  FaGithub,
  FaFigma
} from 'react-icons/fa';

import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiPostman
} from 'react-icons/si';

import {
    VscVscode
}from "react-icons/vsc";

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },  
      { name: 'CSS', icon: <FaCss3Alt /> }, 
      { name: 'JavaScript', icon: <SiJavascript /> }, 
      { name: 'React', icon: <FaReact /> }, 
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Java', icon: <FaJava /> },  
      { name: 'MySQL', icon: <FaDatabase /> }, 
      { name: 'Python', icon: <SiPython /> }, 
      { name: 'Node.js', icon: <FaNodeJs /> }, 
      { name: 'Express.js', icon: <SiExpress /> }, 
      { name: 'MongoDB', icon: <SiMongodb /> }, 
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Github', icon: <FaGithub /> },
      { name: 'Figma',  icon: <FaFigma  /> },
      { name: 'Vscode',  icon: <VscVscode/> },
      { name: 'Postman',  icon: <SiPostman /> },
      
      
    ],
  },
];

const Skills = () => {
  return (

    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Tools & Technologies <br></br>
            <span className="font-serif italic font-normal text-white">
              {" "}
              that I used in my Studies.
            </span>
          </h2>

      <div className="skills-container">
        <div role="list" className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              role="listitem"
              className="skill-category-card"
            >
              <h3 className="skill-category-title">
                <span className="skill-category-icon">{category.icon}</span>
                {category.title}
              </h3>

              <div role="list" aria-label={`${category.title} skill`} className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    role="listitem"
                    className="skill-item group"
                  >
                    <span className="skill-item-icon">
                      {skill.icon}
                    </span>
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;