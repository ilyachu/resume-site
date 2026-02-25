import { useState } from 'react';
import { resumeData } from '../data/resume';
import './Experience.css';

function Experience() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="grid">
          <div className="experience-title-col">
            <h2 className="section-title">Опыт работы</h2>
          </div>
          <div className="experience-list-col">
            <div className="experience-list">
              {resumeData.experience.map((item, index) => (
                <div
                  key={item.id}
                  className={`experience-item ${openItem === index ? 'is-open' : ''}`}
                >
                  <button
                    className="experience-item-header"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItem === index}
                  >
                    <div className="experience-item-main">
                      <span className="experience-period">{item.period}</span>
                      <h3 className="experience-company">{item.company}</h3>
                      <p className="experience-position">{item.position}</p>
                    </div>
                    <span className="experience-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="experience-item-content">
                    <p className="experience-description">{item.description}</p>
                    {item.achievements && (
                      <ul className="experience-achievements">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
