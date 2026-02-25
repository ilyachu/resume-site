import { useState } from 'react';
import { resumeData } from '../data/resume';
import './Experience.css';

function Experience() {
  const [activeJob, setActiveJob] = useState(null);

  const toggleJob = (index) => {
    setActiveJob(activeJob === index ? null : index);
  };

  return (
    <section id="experience" className="container grid-12 section-pad">
      <div className="section-header">
        <span className="big-num">03</span>
        <span className="header-title">ОПЫТ РАБОТЫ</span>
      </div>

      <div className="timeline-container">
        {resumeData.experience.map((job, index) => (
          <div
            key={job.id}
            className={`job-row ${activeJob === index ? 'active' : ''}`}
            onClick={() => toggleJob(index)}
          >
            <div className="job-header">
              <span className="job-year">{job.period}</span>
              <span className="job-role">{job.position}</span>
              <span className="job-company">{job.company}</span>
              <div className="job-toggle">+</div>
            </div>
            <div className="job-details">
              <div className="job-details-inner">
                <div>
                  <strong>Обязанности:</strong>
                  <p>{job.description}</p>
                </div>
                <div>
                  <strong>Достижения:</strong>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1rem' }}>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
