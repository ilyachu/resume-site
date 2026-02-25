import { useState } from 'react';
import { resumeData } from '../data/resume';
import './Experience.css';

function Experience() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="experience" className="grid-container border-top">
      <div className="cell grid-quarter">
        <div className="sticky-label text-label">Опыт работы</div>
      </div>
      <div className="cell grid-third" style={{ padding: 0, gridColumn: 'span 9' }}>
        {resumeData.experience.map((item, index) => (
          <div key={item.id} className={`accordion-item ${openItem === index ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleItem(index)}>
              <div>
                <span className="text-label" style={{ marginRight: '1rem', color: index === 0 ? 'var(--accent-amber)' : 'var(--text-secondary)' }}>
                  {item.period}
                </span>
                <span className="accordion-title">{item.position} / {item.company}</span>
              </div>
              <span className="chevron">▼</span>
            </button>
            <div className="accordion-content">
              <p style={{ padding: '0 2rem', marginBottom: '1rem' }}>{item.description}</p>
              {item.location && (
                <p style={{ padding: '0 2rem', marginBottom: '1rem', fontSize: '0.8rem' }}>📍 {item.location}</p>
              )}
              {item.achievements && (
                <ul className="achievements-list" style={{ padding: '0 2rem 1.5rem', margin: 0 }}>
                  {item.achievements.map((achievement, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.5 }}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
