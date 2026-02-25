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
    <section id="skills" className="grid-container border-top">
      <div className="cell grid-quarter">
        <div className="sticky-label text-label">Навыки</div>
      </div>
      <div className="cell grid-threequarter">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-label" style={{ marginBottom: '1rem', color: 'var(--accent-amber)' }}>{category.title}</h4>
              <div className="pill-container">
                {category.skills.map((skill, i) => (
                  <span key={i} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
