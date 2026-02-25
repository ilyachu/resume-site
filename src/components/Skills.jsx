import { resumeData } from '../data/resume';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Методологии',
      skills: resumeData.skills.methodologies
    },
    {
      title: 'Инструменты',
      skills: resumeData.skills.tools
    },
    {
      title: 'Технические навыки',
      skills: resumeData.skills.technical
    },
    {
      title: 'Управление',
      skills: resumeData.skills.management
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="grid">
          <div className="skills-title-col">
            <h2 className="section-title">Навыки</h2>
          </div>
          <div className="skills-list-col">
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skills-category">
                  <h3 className="skills-category-title">{category.title}</h3>
                  <ul className="skills-list">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="skills-item">
                        <span className="skills-item-icon">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="3" fill="currentColor"/>
                          </svg>
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
