import { resumeData } from '../data/resume';
import './Profile.css';

function Profile() {
  return (
    <section id="profile" className="grid-container border-top">
      <div className="cell grid-quarter">
        <div className="sticky-label text-label">Обо мне</div>
      </div>
      <div className="cell grid-quarter" style={{ borderRight: '1px solid var(--border-color)' }}>
        <p className="text-display-sm" style={{ fontFamily: 'var(--font-display)' }}>
          {resumeData.profile.statement}
        </p>
      </div>
      <div className="cell grid-half">
        <p className="text-body-sm" style={{ marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
          {resumeData.profile.summary}
        </p>
        <div className="text-label" style={{ marginBottom: '1rem' }}>Ключевые компетенции</div>
        <div className="pill-container">
          {resumeData.profile.competencies.map((comp, index) => (
            <span key={index} className="pill">{comp}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
