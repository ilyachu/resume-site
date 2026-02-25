import { resumeData } from '../data/resume';
import './Projects.css';

// Анимированные SVG для проектов
const ProjectImages = {
  bitrix: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="60" width="120" height="80" rx="4" stroke="#333" strokeWidth="2" fill="none"/>
      <rect x="50" y="75" width="40" height="25" rx="2" stroke="#C17F38" strokeWidth="1.5" fill="none">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="100" y="75" width="50" height="8" rx="2" stroke="#333" strokeWidth="1.5" fill="none"/>
      <rect x="100" y="90" width="35" height="6" rx="2" stroke="#666" strokeWidth="1" fill="none"/>
      <rect x="100" y="102" width="45" height="6" rx="2" stroke="#666" strokeWidth="1" fill="none"/>
      <circle cx="155" cy="170" r="20" stroke="#C17F38" strokeWidth="2" fill="none">
        <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite"/>
      </circle>
      <path d="M145 170 L155 180 L170 160" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="1s" repeatCount="indefinite"/>
      </path>
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="50" stroke="#333" strokeWidth="2" fill="none"/>
      <circle cx="100" cy="100" r="35" stroke="#C17F38" strokeWidth="1.5" fill="none">
        <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="100" r="20" fill="#333"/>
      <circle cx="100" cy="100" r="8" fill="#C17F38">
        <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <path d="M100 45 L100 55" stroke="#333" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
      </path>
      <path d="M100 145 L100 155" stroke="#333" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.2s"/>
      </path>
      <path d="M45 100 L55 100" stroke="#333" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.4s"/>
      </path>
      <path d="M145 100 L155 100" stroke="#333" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" begin="0.6s"/>
      </path>
    </svg>
  ),
  knowledge: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="40" width="80" height="120" rx="4" stroke="#333" strokeWidth="2" fill="none"/>
      <rect x="70" y="55" width="60" height="8" rx="2" fill="#333"/>
      <rect x="70" y="70" width="50" height="4" rx="1" fill="#666"/>
      <rect x="70" y="80" width="55" height="4" rx="1" fill="#666"/>
      <rect x="70" y="90" width="40" height="4" rx="1" fill="#666"/>
      <rect x="70" y="105" width="60" height="8" rx="2" fill="#C17F38">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="70" y="120" width="45" height="4" rx="1" fill="#666"/>
      <rect x="70" y="130" width="50" height="4" rx="1" fill="#666"/>
      <circle cx="155" cy="45" r="25" stroke="#C17F38" strokeWidth="2" fill="var(--bg-paper)">
        <animate attributeName="stroke-dasharray" values="0,160;160,0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <path d="M145 45 L155 55 L170 35" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  fot: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="100" height="100" rx="4" stroke="#333" strokeWidth="2" fill="none"/>
      <path d="M50 150 L80 120 L110 135 L150 80" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="80" cy="120" r="6" fill="#C17F38">
        <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="135" r="6" fill="#C17F38">
        <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
      <circle cx="150" cy="80" r="6" fill="#C17F38">
        <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
      </circle>
      <path d="M160 40 L165 50 L175 45" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="d" values="M160 40 L165 50 L175 45;M160 40 L165 30 L175 40;M160 40 L165 50 L175 45" dur="2s" repeatCount="indefinite"/>
      </path>
      <text x="165" y="175" fontSize="12" fill="#666" fontFamily="sans-serif">₽</text>
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="70" stroke="#333" strokeWidth="2" fill="none"/>
      <path d="M100 30 A70 70 0 0 1 170 100" stroke="#C17F38" strokeWidth="8" strokeLinecap="round" fill="none">
        <animate attributeName="stroke-dasharray" values="0,440;220,0" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M170 100 A70 70 0 0 1 100 170" stroke="#666" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M100 170 A70 70 0 0 1 30 100" stroke="#333" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="100" cy="100" r="15" fill="var(--bg-paper)" stroke="#333" strokeWidth="2"/>
      <text x="100" y="105" fontSize="14" fill="#333" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">%</text>
    </svg>
  )
};

const getProjectSVG = (index, category) => {
  const svgs = [ProjectImages.bitrix, ProjectImages.ai, ProjectImages.knowledge, ProjectImages.fot, ProjectImages.cost];
  return svgs[index % svgs.length];
};

function Projects() {
  return (
    <section id="projects" className="border-top">
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h3 className="text-display-md">Реализованные проекты</h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', paddingBottom: '2rem', flexWrap: 'wrap' }}>
        <button className="pill" style={{ borderColor: 'var(--text-primary)', background: 'var(--text-primary)', color: 'white' }}>Все</button>
        {resumeData.projects.map((project) => (
          <button key={project.id} className="pill">{project.category}</button>
        ))}
      </div>

      <div className="grid-container" style={{ borderTop: 'var(--grid-line-width) solid var(--border-color)' }}>
        {resumeData.projects.map((project, index) => (
          <div
            key={project.id}
            className="cell grid-quarter no-pad project-card"
            style={{
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div className="card-image-wrapper" style={{
              background: 'var(--bg-paper)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                maxWidth: '150px',
                maxHeight: '150px'
              }}>
                {getProjectSVG(index, project.category)}
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">{project.category}</div>
              <h4 className="accordion-title">{project.title}</h4>
              <p className="text-body-sm" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {project.description}
              </p>
              <div className="pill-container" style={{ marginTop: 'auto' }}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="pill" style={{ fontSize: '0.65rem', padding: '0.3rem 0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
