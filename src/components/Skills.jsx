import { resumeData } from '../data/resume';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="container grid-12 section-pad">
      <div className="section-header">
        <span className="big-num">05</span>
        <span className="header-title">НАВЫКИ</span>
      </div>
      <div className="skills-container">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="skill-tag">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
