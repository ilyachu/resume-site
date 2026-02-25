import { resumeData } from '../data/resume';
import './Education.css';

function Education() {
  return (
    <section id="education" className="grid-container border-top">
      <div className="cell grid-quarter">
        <div className="sticky-label text-label">Образование</div>
      </div>
      <div className="cell grid-half">
        <span className="text-label" style={{ color: 'var(--accent-amber)', marginBottom: '0.5rem', display: 'block' }}>
          {resumeData.education.year}
        </span>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{resumeData.education.university}</h3>
        <p className="text-body-sm">{resumeData.education.degree}</p>
      </div>
    </section>
  );
}

export default Education;
