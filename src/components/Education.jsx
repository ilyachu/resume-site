import { resumeData } from '../data/resume';
import './Education.css';

function Education() {
  return (
    <section className="section education">
      <div className="container">
        <div className="grid">
          <div className="education-title-col">
            <h2 className="section-title">Образование</h2>
          </div>
          <div className="education-content-col">
            <div className="education-item">
              <span className="education-year">{resumeData.education.year}</span>
              <h3 className="education-university">{resumeData.education.university}</h3>
              <p className="education-degree">{resumeData.education.degree}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
