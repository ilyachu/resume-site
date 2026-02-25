import { resumeData } from '../data/resume';

const Icons = {
  'layout-grid': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  'pen-tool': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  ),
  'cpu': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
    </svg>
  ),
  'bar-chart-2': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  )
};

function Competencies() {
  return (
    <section id="competencies" className="container grid-12 section-pad">
      <div className="section-header">
        <span className="big-num">02</span>
        <span className="header-title">КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ</span>
      </div>
      <div className="comp-grid">
        {resumeData.competencies.map((comp, index) => (
          <div key={index} className="comp-item">
            <div className="comp-icon">
              {Icons[comp.icon] || Icons['layout-grid']}
            </div>
            <h3 className="comp-title">{comp.title}</h3>
            <p className="comp-desc">{comp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competencies;
