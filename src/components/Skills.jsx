import { resumeData } from '../data/resume';
import './Skills.css';

// SVG иконки для категорий навыков
const SkillIcons = {
  methodologies: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  technical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  management: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

function Skills() {
  const skillCategories = [
    {
      key: 'methodologies',
      title: 'Методологии',
      skills: resumeData.skills.methodologies
    },
    {
      key: 'tools',
      title: 'Инструменты',
      skills: resumeData.skills.tools
    },
    {
      key: 'technical',
      title: 'Технические навыки',
      skills: resumeData.skills.technical
    },
    {
      key: 'management',
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-white)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="skill-category"
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--accent-amber)',
                  color: 'white'
                }}>
                  <div style={{ width: '24px', height: '24px' }}>
                    {SkillIcons[category.key]}
                  </div>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em'
                }}>
                  {category.title}
                </h4>
              </div>
              <div className="pill-container">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="pill"
                    style={{
                      animation: `fadeInUp 0.5s ease forwards`,
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0
                    }}
                  >
                    {skill}
                  </span>
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
